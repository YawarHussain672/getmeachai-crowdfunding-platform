"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

// ✅ Initiate a payment order
export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  const user = await User.findOne({ username: to_username });
  if (!user) throw new Error("Recipient user not found");

  const instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysecret,
  });

  const options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  await Payment.create({
    old: order.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return order;
};

// ✅ Fetch a single user by username
export const fetchuser = async (username) => {
  await connectDb();
  const user = await User.findOne({ username });
  return user?.toObject({ flattenObjectIds: true }) || null;
};

// ✅ Fetch recent payments made to user
export const fetchpayments = async (username) => {
  await connectDb();
  const payments = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(5)
    .lean();
  return payments;
};

// ✅ Update profile and related payment records
export const updateProfile = async (oldusername, data) => {
  await connectDb();

  // If form was submitted with FormData, convert it to a plain object
  let ndata = data instanceof FormData ? Object.fromEntries(data.entries()) : data;

  // Ensure required fields exist
  if (!ndata?.username || !ndata?.email) {
    return { error: "Username and email are required" };
  }

  if (oldusername !== ndata.username) {
    const existing = await User.findOne({ username: ndata.username });
    if (existing) {
      return { error: "Username already exists" };
    }

    // Update user info and related payment records
    await User.updateOne({ username: oldusername }, ndata);
    await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
  } else {
    await User.updateOne({ username: oldusername }, ndata);
  }

  return { success: true };
};
