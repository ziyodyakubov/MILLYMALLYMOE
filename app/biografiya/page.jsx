"use client";

import {Stul} from "@/jpg";
import {YouTubeColor, InstaColor, SpotifyColor, TelegramColor} from "@/svg";
import Image from "next/image";
import { useEffect } from "react";

const Biographic = () => {
    useEffect(() => {
        document.title = "Biografiya - Millymallymoe"
    }, [])
    return (
        <>
            <main className="bg-[#70372A]">
                <div className="container just">
                    <div className="flex lg:flex-row flex-col items-start gap-[34px] lg:pb-[15px] lg:pt-[120px] px-[30px] pt-[60px]">
                        <div className="text-[#fff] max-width lg:w-[950px]">
                            <h2 className="lg:text-[25px] text-[15px] text-[#ffffff75]">BIOGRAFIYA</h2>
                            <h1 className="lg:text-[42px] text-[25px] font-[800] ">MILLYMALLYMOE</h1>
                            <br></br>

                            <p className="lg:text-[19px] text-[16px] text-[#ffffffbb] font-[300]">Millymallymoe (Shokir Shukurbayev) 1994-yil,  20-may kuni Toshkent shahrida tug‘ilgan. U yoshligidan musiqaga qiziqib, 12-13 yoshlarida rep yo‘nalishiga kirib kelgan. Dastlab, rus tilida qo‘shiqlar yozib, o‘z uslubini shakllantirishga harakat qilgan.
                                <br></br>
                                <br></br>

                                O‘zbek rep sahnasida o‘ziga xos ijrosi bilan tanilgan ijodkorlardan biridir. Uning ilk ijodlari orasida Konsta va Massa bilan kuylagan qo‘shiqlari bor. U “Yomon” va “Chumoli” kabi qo`shiqlari bilan mashhurlikka erishdi.
                                <br></br>
                                <br></br>
                                O‘ziga xos uslubi va ovozi bilan ajralib turadi. Uning musiqalarida chuqur ma’nolar, hayotiy voqelik va zamonaviy yoshlarning hissiyotlari aks etadi. U o‘z ijodiy yangiliklarini Telegramdagi rasmiy kanali va boshqa platformalar orqali muxlislariga yetkazib boradi.
                                <br></br>
                                <br></br>
                                O‘zbek rep sahnasida o‘z o‘rnini topgan ijodkorlardan biri. U o‘zining qiziqarli va chuqur ma’no yuklangan qo‘shiqlari bilan ko‘plab tinglovchilarning qalbidan joy egallagan. Uning ijodi doimiy ravishda rivojlanib, yangi yo‘nalishlar bilan boyib bormoqda.</p>
                        </div>

                        <Image className="lg:w-[500px] rounded-[5px] max-w-x" src={Stul} alt="biografiya" />
                    </div>
                </div>
            </main>

            <footer className="lg:pt-[40px] pt-[60px] pb-[20px] mt-[100px] lg:mt-[230px] border-t-[1px] border-t-[#ffffff3e] px-[20px] lg:px-[70px]">
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

export default Biographic;