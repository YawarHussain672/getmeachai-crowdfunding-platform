import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center flex-col gap-3 items-center h-[40vh] md:h-[48vh] px-5 md:px-0 mt-10 text-xs md:text-base">
        <div className="font-bold flex md:text-4xl text-2xl justify-center items-center ">
          Buy Me a Chai
          <span>
            <img className="invertImg" src="/tea.gif" width={70} alt="" />
          </span>
        </div>
         
        <p className="text-center md:text-left ">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-left md:text-sm">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>


        <div>
        <Link href={"/login"}>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer"
          >
            Start Here
          </button>
          </Link>
          
          <Link href={"/about"}>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>

      <div className="bg-yellow-300/10 h-1"></div>

      <div className="text-white container mx-auto py-5 pt-6 px-4 md:px-0">
        <h1 className="text-[21px] font-bold text-center my-5">
          Your Fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img
              className=" bg-gray-400/30 rounded-full p-2 text-black"
              width={80}
              src="/man.gif"
              alt=""
            />
             <p className="font-bold text-center">Fans want to help</p>
            <p className=" text-[11px] font-semibold text-gray-400 text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img
              className=" bg-gray-400/30 rounded-full p-2 text-black"
              width={80}
              src="/coin.gif"
              alt=""
            />
             <p className="font-bold text-center">Fans want to contribute</p>
            <p className=" text-[11px] font-semibold text-gray-400 text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-2 flex flex-col justify-center items-center">
            <img
              className=" bg-gray-400/30 rounded-full p-2 text-black"
              width={80}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className=" text-[11px] font-semibold text-gray-400 text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>




<div className="bg-yellow-300/10 h-[1px]"></div>




<section className="bg-black py-16 px-4 sm:px-8 rounded-4xl max-w-6xl mx-auto mt-10">
  <h2 className="text-[21px] font-bold text-center mb-12 text-white">Learn More About Us</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Card 1 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-900/30 p-4 rounded-full">
          <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM3 14s1-2 5-2 5 2 5 2v1H3v-1zM17 10h-1v1a1 1 0 01-2 0v-1h-1a1 1 0 110-2h1V7a1 1 0 112 0v1h1a1 1 0 110 2z" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Support Your Favorite Creators</h3>
      <p className="text-gray-400 text-sm">
        GetMeAChai allows fans to directly fund the creators they love — whether it’s artists, writers, musicians, or coders.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-900/30 p-4 rounded-full">
          <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm1 12H9v-2h2zm0-4H9V6h2z" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Simple & Transparent</h3>
      <p className="text-gray-400 text-sm">
        Creators set up a profile, share it with their audience, and receive contributions with full transparency — no hidden fees.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-900/30 p-4 rounded-full">
          <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17 9V7H9v2h8zM9 13h5v-2H9v2zm-6 4a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v1h8a1 1 0 011 1v10a1 1 0 01-1 1H3z" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Built for the Creator Economy</h3>
      <p className="text-gray-400 text-sm">
        Whether you're starting out or have a loyal fanbase, GetMeAChai helps you monetize your creativity and grow your community.
      </p>
    </div>

  </div>
</section>


    </>
  );
}
