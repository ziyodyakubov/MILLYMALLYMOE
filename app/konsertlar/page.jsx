"use client";

import {YouTubeColor, InstaColor, TelegramColor, SpotifyColor} from "@/svg";
import Image from "next/image";
import { useEffect } from "react";

const Concerts = () => {
    useEffect(() => {
        document.title = "Konsertlar - Millymallymoe"
    }, [])
    return (
        <>
            <div className="pt-[15%] max-h-4">
                <h1 className="text-[#ffffffca] text-[16px] lg:text-[20px] text-center">HOZIRCHA KONSERTLAR YO`Q</h1>
            </div>

            <footer className="lg:pt-[40px] pt-[60px] pb-[20px] mt-[230px] border-t-[1px] border-t-[#ffffff3e] px-[20px] lg:px-[70px]">
                <div className="flex container lg:flex-row flex-col lg:gap-[0px] gap-[20px] text-[#fff] items-center justify-between">
                    <a target="_blank" href="https://www.youtube.com/c/MILLYMALLYMOE" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <Image src={YouTubeColor} alt="youtube" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">YOUTUBE</h1>
                    </a>

                    <a target="_blank" href="https://www.instagram.com/millymallymoe" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <Image src={InstaColor} alt="instagram" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">INSTAGRAM</h1>
                    </a>

                    <a target="_blank" href="https://open.spotify.com/artist/3sxuSPGJrQXReGDnPAc9ST?si=4FdJWWNdTceeUNKG8tClQg&nd=1&dlsi=4fcfc5f6663548ba" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <Image src={SpotifyColor} alt="spotify" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">SPOTIFY</h1>
                    </a>

                    <a target="_blank" href="https://t.me/therealmilly" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <Image src={TelegramColor} alt="telegram" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">TELEGRAM</h1>
                    </a>
                </div>

                <h1 className="flex font-[300] lg:text-[16px] text-[12px] text-[#EDEBE8] lg:pt-[140px] pt-[60px] justify-center items-center gap-[5px]">© 2025 MILLYMALLYMOE - <a target="_blank" className="hover:underline duration-250 transition-all" href="https://taplink.cc/ijodagency?fbclid=PAZXh0bgNhZW0CMTEAAaZXUMCsQV5N2asxU3A7NXH1-ni5O-9VkKgK_kGtxwteQRXc7UdpSruiR5s_aem_GEl-oOs9DjyhmRFLJadgag">IJOD AGENCY</a></h1>
            </footer>
        </>
    );
};

export default Concerts;
