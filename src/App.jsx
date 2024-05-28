import { useEffect } from "react"
import Switcher from "./components/Swicher"
import Header from "./img/Header.png"
import untitled from "./img/untitled.png" 
import Aos from "aos"
import { Swiper, SwiperSlide } from "swiper/react";
 import robot1 from './img/robot1.png'
 import robot2 from './img/robot2.png'
 import robot3 from './img/robot3.png'
 import robot4 from './img/robot4.png'
 import person1 from './img/person1.png';
 import person2 from './img/person2.png';
 import personSwap2 from './img/personSwap2.png';
 import personSwap3 from './img/personSwap3.png';
 import personSwap4 from './img/personSwap4.png';
 import personSwap5 from './img/personSwap5.png';
 import Rectangle1 from './img/Rectangle1.png';
 import Rectangle2 from './img/Rectangle2.png';
 import Rectangle3 from './img/Rectangle3.png';
 import Rectangle4 from './img/Rectangle4.png';
 import Rectangle5 from './img/Rectangle5png.png';
 import Rectangle6 from './img/Rectangle6.png';
 import Rectangle7 from './img/Rectangle7.png';
 import Rectangle8 from './img/Rectangle8.png';
 import Rectangle9 from './img/Rectangle9.png';
 import Rectangle10 from './img/Rectangle10.png';
 import Rectangle11 from './img/Rectangle11.png';
 import phone1 from './img/Phone1.png';
 import round from './img/round.png';
 import img from './img/img.jpg'
import dark from './img/dark.png';



import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import "swiper/css";

import "./App.css";


const App = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
    } , [])
  return (
    <div  className=" dark:bg-black ">

     <header  className=" flex items-center py-5 px-[50px]">
      <img  src={Header} alt="header" className="w-[90%] h-[50px] "/>
      <Switcher />
     </header>
 


    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  className=" flex justify-between  xs:flex-wrap lg:flex-wrap items-center px-[50px]">
      <div className="">
        <p >WEB 3 NON-FUNGIBLE TOKENS</p>
        <h1 className="text-[50px]   pr-[100px] font-sans font-[700] dark:text-white xs:text-[20px] xs:text-red-300">Unlock Unique Digital Ownership with NFTs</h1>
        <p className=" dark:text-white font-[500] text-[20px]  pr-[100px] ">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
      </div>
      <img src={untitled} alt="untitled" className="w-[50%] lg:w-[98%] h-[500px]"/>
    </div>



     <section className="px-[50px]">
      <h1 className=" font-[700] text-[40px]">Trending Art 🔥</h1>

    <div className=" py-[50px]">

    <Swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide className="">
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot2} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot3} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot2} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        
      </Swiper>



    </div>


    <div className=" py-[50px]">
<h1 className=" text-[40px] text-center font-[600]">Featured Collections</h1>


<Swiper
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide data-aos="zoom-out-left" className="flex-shrink-0 w-[calc(100%-50px)] ml-[25px] flex">
        <img src={robot1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center mt-2">
            <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
            <h1 className="text-[20px] font-medium ml-2 dark:text-white">Perperzon</h1>
          </div>
          <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
          <p className="text-gray-600 dark:text-gray-300">Description</p>
          <p className="text-gray-800 dark:text-gray-100">We would like to present you The Exboot 3D - Watching you~</p>
          <div className="flex mt-4">
            <div className="mr-6">
              <label className="block text-gray-600 dark:text-gray-300">Current Bid</label>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">3.421</h1>
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">End in</label>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">1h 12m 14s</h1>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Place Bid
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex-shrink-0 w-[calc(100%-50px)] ml-[25px] flex">
        <img src={robot1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center mt-2">
            <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
            <h1 className="text-[20px] font-medium ml-2 dark:text-white">Perperzon</h1>
          </div>
          <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
          <p className="text-gray-600 dark:text-gray-300">Description</p>
          <p className="text-gray-800 dark:text-gray-100">We would like to present you The Exboot 3D - Watching you~</p>
          <div className="flex mt-4">
            <div className="mr-6">
              <label className="block text-gray-600 dark:text-gray-300">Current Bid</label>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">3.421</h1>
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300">End in</label>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">1h 12m 14s</h1>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Place Bid
          </button>
        </div>
      </SwiperSlide>
    </Swiper>


    </div>

     </section>





<section className=" bg-[#191919]">


<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-auto w-[80%] py-[50px]"
      >
        <SwiperSlide className=" h-[200px] bg-transparent">
          <div>
            <img src={personSwap2} className=" m-auto size-[150px]" alt="" />
            <h1 className="text-[20px] font-semibold mt-2 dark:text-white">Perperzon</h1>
            <p className="text-gray-600 dark:text-gray-300">9.421 </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-[200px] bg-transparent">
          <div className=" bg-transparent">
            <img src={personSwap3} className=" m-auto size-[150px]" alt="" />
            <h1 className="text-[20px] font-semibold mt-2 dark:text-white">Perperzon</h1>
            <p className="text-gray-600 dark:text-gray-300">9.421 </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-[200px] bg-transparent">
          <div>
            <img src={personSwap4} className=" m-auto size-[150px]" alt="" />
            <h1 className="text-[20px] font-semibold mt-2 dark:text-white">Perperzon</h1>
            <p className="text-gray-600 dark:text-gray-300">9.421 </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-[200px] bg-transparent">
          <div>
            <img src={personSwap5} className=" m-auto size-[150px]" alt="" />
            <h1 className="text-[20px] font-semibold mt-2 dark:text-white">Perperzon</h1>
            <p className="text-gray-600 dark:text-gray-300">9.421 </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-[200px] bg-transparent">
          <div>
            <img src={personSwap2} className=" m-auto size-[150px]" alt="" />
            <h1 className="text-[20px] font-semibold mt-2 dark:text-white">Perperzon</h1>
            <p className="text-gray-600 dark:text-gray-300">9.421 </p>
          </div>
        </SwiperSlide>
     
    
      </Swiper>



</section>



<section className=" px-[200px]">
<div class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <h1 class="text-2xl font-bold dark:text-white">Explore</h1>
  <select name="" id="" class="block w-40 p-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <option value="">All</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
  </select>
</div>


<Swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide className="">
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={robot1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle2} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle3} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle11} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        
      </Swiper>
<Swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide className="">
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle4} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle5} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle6} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle7} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle1} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        
      </Swiper>
<Swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide className="">
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle8} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle9} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle10} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle11} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person2} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img src={Rectangle5} alt="Robot 1" className="w-full h-auto rounded-t-lg" />
  <h1 className="text-[20px] font-semibold mt-2 dark:text-white">ExBoot #1</h1>
  <div className="flex items-center mt-2">
    <img src={person1} alt="Person 1" className="w-8 h-8 rounded-full" />
    <h1 className="text-[20px] font-medium ml-2 dark:text-white">3.421</h1>
  </div>
</div>

        </SwiperSlide>
        
      </Swiper>
</section>


<section className="bg-[#151515] py-[100px] w-[80%] m-auto mt-[120px] rounded-xl flex items-center justify-between p-8 text-white">
  <img src={round} alt="Round" className="w-24 h-auto absolute left-[80px] mb-[120px]" />
  <div className="text-center">
    <h1 className="text-2xl font-bold mb-4">Try our App Mobile NFT</h1>
    <button className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Download Now</button>
  </div>
  <img src={phone1} alt="Phone" className="  absolute right-[200px] mb-[100px] h-[400px] " />
</section>


<footer className=" flex justify-between items-center px-[80px] py-[50px] ">
  <ul>
    <img src={img} alt="" />
    <li className="font-[400] text-[40px]">NFT Distro</li>
    <li>Experience</li>
    <img src={dark} alt="" />
    <li>Copyright NFT Distro 2023 </li>
  </ul>

  <ul className=" xs:hidden lg:hidden">
    <li className="font-[700]">Company</li>
    <li>Explore</li>
    <li>About</li>
  </ul>
  <ul className=" xs:hidden md:hidden">
    <li className=" font-[700] ">Cretor</li>
    <li>FAQ</li>
    <li>About</li>
  </ul>

  <ul className="xs:hidden">
    <li className=" text-[20px] font-[600]">Join our community</li>
    
    <input  className=" rounded-[100px] px-[20px] py-[15px]" type="text" placeholder=" Enter your email address"/>
  </ul>
</footer>

    </div>
  )
}

export default App
