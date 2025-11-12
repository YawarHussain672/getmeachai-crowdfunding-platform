# ☕ Get Me A Chai – Crowdfunding Platform

**Get Me A Chai** is a modern crowdfunding and donation web app that allows supporters to “buy a chai” for their favorite creators.  
It’s built with **Next.js**, **MongoDB**, **Razorpay**, and **NextAuth**, offering a fast, secure, and user-friendly experience.

---

## 🌟 Overview

This platform enables creators to receive support from their audience through quick payments and personal messages.  
Each creator can share their unique donation page, and supporters can contribute securely via Razorpay.

---

## 🚀 Features

- 🔐 **Authentication with NextAuth.js** – Email or OAuth login (Google supported)  
- 💳 **Razorpay Integration** – Secure payment flow for chai donations  
- 👤 **Creator Profiles** – Each creator gets a unique donation page  
- 💬 **Personalized Messages** – Donors can leave a custom note with their donation  
- 📱 **Responsive UI** – Optimized for mobile and desktop devices  
- ⚡ **Built with Next.js (App Router)** – Modern, performant web framework  
- 🗄️ **Database with MongoDB** – Fast and scalable data storage

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js 15 (JavaScript), React |
| **Styling** | Tailwind CSS |
| **Backend** | Next.js API Routes (Node.js) |
| **Authentication** | NextAuth.js |
| **Payments** | Razorpay |
| **Database** | MongoDB with Mongoose |
| **Deployment** | Vercel |

---

## 📂 Folder Structure

get-me-a-chai/
├── public/ # Static assets (images, logos, etc.)
├── src/
│ ├── app/ # Next.js routes (app directory)
│ ├── components/ # Reusable UI components
│ ├── lib/ # Razorpay, NextAuth, and DB utils
│ ├── models/ # Mongoose models (User, Donation, etc.)
│ ├── api/ # API routes for auth, payments, etc.
│ └── styles/ # Tailwind and global styles
├── .env.local.example
├── package.json
└── README.md

---

## ⚙️ Installation and Setup

Follow these steps to set up the project locally 👇

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YawarHussain672/getmeachai-crowdfunding-platform.git
cd getmeachai-crowdfunding-platform/get-me-a-chai

npm install

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Google Auth (Optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Razorpay Keys
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

#Example MongoDB URI
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/getmechai

npm run dev

