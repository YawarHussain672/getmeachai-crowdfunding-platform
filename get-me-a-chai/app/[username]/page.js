import React from 'react';
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation';
import connectDb from '@/db/connectDb';
import User from '@/models/User';

// Main page component
const Username = async ({ params }) => {
  await connectDb();

  const user = await User.findOne({ username: params.username });

  if (!user) {
    return notFound(); //  Show 404 if user not found
  }

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

// ✅ Dynamic metadata for SEO
// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Chai`,
//     description: `Help ${params.username} by sending your support through Get Me A Chai.`,
//   };
// }
