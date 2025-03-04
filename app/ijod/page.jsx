"use client";

import { YouTubeColor, InstaColor, TelegramColor, SpotifyColor } from "@/svg";
import Image from "next/image";
import { useEffect } from "react";

const News = () => {
    useEffect(() => {
        document.title = "Ijod - Millymallymoe"
    }, [])
    return (
        <>
            <main className="flex nimadir flex-col justify-center items-center pt-[30px]">
                <iframe
                    className="rounded-[12px] mb-[30px] border-none overflow-hidden w-[370px] lg:w-[1280px] h-[750px]"
                    src="https://open.spotify.com/embed/artist/3sxuSPGJrQXReGDnPAc9ST?utm_source=generator&theme=0"
                    allow="encrypted-media"
                    loading="lazy">
                </iframe>

                <iframe
                    className="lg:w-[1280px] w-[370px] h-[230px] rounded-[12px] lg:h-[800px]"
                    src="https://www.youtube.com/embed/HNiRbPgsTBQ?si=Lm1ht8LULngTgJH9"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </main>


            <footer className="lg:pt-[40px] pt-[60px] pb-[20px] mt-[30px] lg:mt-[30px] border-t-[1px] border-t-[#ffffff3e] px-[20px] lg:px-[70px]">
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

export default News;
