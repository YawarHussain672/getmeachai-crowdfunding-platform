"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { notfound } from 'next/navigation'

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setCurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('Thanks for your donation!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      })

      setTimeout(() => {
        router.push(`/${username}`)
      }, 3000)
    }
  }, [])

  const getData = async () => {
    const u = await fetchuser(username)
    if (!u) return notfound()
    setCurrentUser(u)

    const dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const pay = async (amount) => {
    setLoading(true)
    try {
      const order = await initiate(amount, username, paymentform)
      const orderId = order.id

      const options = {
        key: currentUser.razorpayid,
        amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Support Creator",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "",
          email: "",
          contact: ""
        },
        notes: {
          address: "Support Donation"
        },
        theme: {
          color: "#facc15"
        }
      }

      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay(options)
        rzp.open()
      } else {
        toast.error("Razorpay SDK not loaded.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Payment failed. Please try again.")
    }
    setLoading(false)
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <ToastContainer position="top-right" autoClose={5000} theme="dark" transition={Bounce} />

      {/* Cover */}
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-48 md:h-[320px]' src={currentUser.coverpic || '/default-cover.gif'} alt="cover" />
        <div className='absolute -bottom-16 right-[38%] md:right-[46%] xl:right-[48.5%] border border-gray-600 rounded-2xl overflow-hidden size-25'>
          <img className='rounded-2xl object-cover size-25' src={currentUser.profilepic || '/default-avatar.gif'} alt="profile" />
        </div>
      </div>

      {/* Info Section */}
      <div className='info flex justify-center items-center text-white my-16 flex-col'>
        <div className='font-bold text-lg'>@{username}</div>
        <div className='text-sm text-gray-200 mt-2 font-semibold'>
          Let’s help {username} get a chai!
        </div>
        <div className='text-sm text-gray-400'>
          {payments.length} Payments · ₹{new Intl.NumberFormat('en-IN').format(payments.reduce((a, b) => a + b.amount, 0))} raised
        </div>

        {/* Payment Section */}
        <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
          {/* Supporters */}
          <div className="supporters w-full md:w-1/2 bg-yellow-500/10 rounded-xl p-10">
            <h2 className='text-lg font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-[15px] text-gray-300'>
              {payments.length === 0 && <p className='text-center text-gray-400'>No payments yet</p>}
              {payments.map((p, i) => (
                <li key={i} className='my-2 flex gap-1 items-center'>
                  <img width={33} src="/avatar.gif" alt="donor" />
                  <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Make a Payment */}
          <div className="makepayment w-full md:w-1/2 bg-yellow-500/10 rounded-xl p-10">
            <h2 className='text-lg font-bold my-5'>Make a Payment</h2>
            <p className='text-sm text-gray-400'>Support this creator by making a payment</p>

            <div className='flex flex-col gap-3 mt-5'>
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Your Name' className='bg-transparent border border-gray-500 rounded-lg px-3 py-2 w-full' />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Message' className='bg-transparent border border-gray-500 rounded-lg px-3 py-2 w-full' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder='Amount' className='bg-transparent border border-gray-500 rounded-lg px-3 py-2 w-full' />

              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                className='bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg cursor-pointer font-semibold disabled:bg-slate-600'
                disabled={loading || paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
              >
                {loading ? "Processing..." : "Pay"}
              </button>
            </div>

            {/* Suggested Buttons */}
            <div className='flex flex-col md:flex-row gap-3 mt-4'>
              <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer' onClick={() => pay(1000)}>Pay ₹10</button>
              <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer' onClick={() => pay(2000)}>Pay ₹20</button>
              <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer' onClick={() => pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
