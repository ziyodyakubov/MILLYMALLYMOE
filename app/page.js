"use client";

import "./globals.css";
import {YandexMusic, AppleMusic, Insta, YouTube, Telegram, Spotify} from "@/svg";
import {MillymallymoeDesktop} from "@/jpg";
import {Millymallymoe} from "@/png";
import Image from "next/image";
import { useEffect } from "react";


const Layout = () => {
  useEffect(() => {
          document.title = "Bosh sahifa - Millymallymoe"
      }, [])
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="bg-main">
          <Image className ="lg:block hidden" src={Millymallymoe} alt="millymallymoe" />

          <Image className="lg:hidden block" src={MillymallymoeDesktop} alt="millymallymoe desktop" />
        </div>

        <div className="h-[370px] lg:flex hidden flex-col items-center justify-center bg-[#70372A]">
          <div className="grid grid-cols-[auto_1px_auto_1px_auto_1px_auto_1px_auto_1px_auto] pb-[150px] items-center gap-[50px]">
            <a href="https://music.yandex.ru/artist/10747621?utm_medium=copy_link" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[95px] rounded-[10px] relative left-[40px]" src={YandexMusic} alt="Yandex Music" />
            </a>
            <div className="w-[1px] h-[130px] ml-[40px] bg-[#8A8A8A]"></div>

            <a href="https://music.apple.com/uz/artist/shokir/1549932788" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[125px] relative left-[25px]" src={AppleMusic} alt="Apple Music" />
            </a>
            <div className="w-[1px] ml-[15px] h-[130px] bg-[#8A8A8A]"></div>

            <a href="https://open.spotify.com/artist/3sxuSPGJrQXReGDnPAc9ST?si=4FdJWWNdTceeUNKG8tClQg&nd=1&dlsi=4fcfc5f6663548ba" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[140px]" src={Spotify} alt="Spotify" />
            </a>
            <div className="w-[1px] h-[130px] ml-[-20px] bg-[#8A8A8A]"></div>

            <a href="https://www.instagram.com/millymallymoe" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[100px] relative right-[15px]" src={Insta} alt="Instagram" />
            </a>
            <div className="w-[1px] h-[130px] ml-[-15px] bg-[#8A8A8A]"></div>

            <a href="https://t.me/therealmilly" className="grayscale-[60%] hover:brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[100px] relative right-[15px]" src={Telegram} alt="Telegram" />
            </a>
            <div className="w-[1px] h-[130px] ml-[-15px] bg-[#8A8A8A]"></div>

            <a href="https://www.youtube.com/c/MILLYMALLYMOE" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
              <Image className="w-[105px] relative right-[10px]" src={YouTube} alt="YouTube" />
            </a>
          </div>

          <div className="flex font-[300] text-[16px] text-[#EDEBE8] items-center gap-[5px]">
            <h1>© 2025 MILLYMALLYMOE - <a className="hover:underline duration-250 transition-all" target="_blank" href="https://taplink.cc/ijodagency?fbclid=PAZXh0bgNhZW0CMTEAAaZXUMCsQV5N2asxU3A7NXH1-ni5O-9VkKgK_kGtxwteQRXc7UdpSruiR5s_aem_GEl-oOs9DjyhmRFLJadgag">IJOD AGENCY</a></h1>
          </div>
        </div>

        <div className="h-[570px] lg:hidden flex flex-col items-center px-[20px] justify-center bg-[#70372A]">
          <div className="lg:pb-[150px] pb-[100px] px-[10px] justify-center flex-col flex items-center gap-[25px]">
            <div className="flex gap-[70px] pl-[0px] items-center">
              <a href="https://music.yandex.ru/artist/10747621?utm_medium=copy_link" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[95px] w-[80px] rounded-[10px] relative" src={YandexMusic} alt="Yandex Music" />
              </a>

              <a href="https://music.apple.com/uz/artist/shokir/1549932788" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[125px] w-[105px] relative" src={AppleMusic} alt="Apple Music" />
              </a>
            </div>

            <div className="flex gap-[60px] items-center pr-[25px]">
              <a href="https://open.spotify.com/artist/3sxuSPGJrQXReGDnPAc9ST?si=4FdJWWNdTceeUNKG8tClQg&nd=1&dlsi=4fcfc5f6663548ba" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[140px] w-[120px]" src={Spotify} alt="Spotify" />
              </a>

              <a href="https://www.instagram.com/millymallymoe" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[100px] w-[80px] relative lg:right-[15px]" src={Insta} alt="Instagram" />
              </a>
            </div>

            <div className="flex gap-[75px] items-center">
              <a href="https://t.me/therealmilly" className="grayscale-[60%] hover:brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[100px] w-[85px] relative lg:right-[15px]" src={Telegram} alt="Telegram" />
              </a>

              <a href="https://www.youtube.com/c/MILLYMALLYMOE" className="grayscale-[60%] brightness-100 hover:grayscale-[0%]" target="_blank">
                <Image className="lg:w-[105px] w-[90px] relative lg:right-[10px]" src={YouTube} alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="flex font-[300] lg:text-[16px] text-[12px] text-[#EDEBE8] items-center gap-[5px]">
            <h1>© {new Date().getFullYear()} MILLYMALLYMOE - <a className="hover:underline duration-250 transition-all" target="_blank" href="https://taplink.cc/ijodagency?fbclid=PAZXh0bgNhZW0CMTEAAaZXUMCsQV5N2asxU3A7NXH1-ni5O-9VkKgK_kGtxwteQRXc7UdpSruiR5s_aem_GEl-oOs9DjyhmRFLJadgag">IJOD AGENCY</a></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
