import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me A Chai - Funds your projects with chai",
  description: "This website is a crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
        <div className="relative h-full min-h-screen w-full bg-black overflow-hidden">
          
         
          <div className="absolute inset-0 
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
            bg-[size:14px_24px] z-0 pointer-events-none">
          </div>

        
          <div className="absolute left-0 right-0 top-[-10%] 
            h-[1000px] w-[1000px] rounded-full 
            bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] 
            z-10 pointer-events-none">
          </div>

          <div className="relative z-20">
            <Navbar />
            <div className="min-h-screen relative text-white">
              {children}
            </div>
            <Footer />
          </div>

        </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
