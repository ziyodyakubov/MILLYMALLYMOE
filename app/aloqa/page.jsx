"use client";

import { useEffect } from "react";
import {YouTubeColor, InstaColor, TelegramColor, SpotifyColor, Music} from "@/svg";
import Image from "next/image";

const Contacts = () => {
    useEffect(() => {
        document.title = "Aloqa - Millymallymoe"
    }, [])
    return (
        <>
            <main>
                <div className="container">
                    <h1 className="text-center text-[#fff] font-[800] pt-[150px] pb-[150px] text-[40px] lg:text-[70px]">ALOQA</h1>

                    <div className="flex lg:flex-row flex-col px-[30px] lg:px-[70px] justify-between items-start">
                        <div className="flex text-[#fff] flex-col gap-[50px]">
                            <div className="flex flex-col">
                                <h1 className="lg:text-[40px] text-[25px] font-[800]">ALOQA</h1>
                                <p className="text-[#ffffffb9] lg:text-[16px] text-[14px]">Biz bilan bog’lanishning eng oson yo’llari</p>
                            </div>

                            <div className="flex flex-col gap-[50px] lg:gap-[60px]">
                                <div className="flex flex-col gap-[30px]">
                                    <h1 className="lg:text-[20px] text-[16px] font-[800]">MILLYMALLYMOE</h1>

                                    <h2>millymallymoe@icloud.com</h2>

                                    <a href="tel:+998994446667" className="block">+998 99 444 66 67</a>
                                </div>

                                <div className="flex lg:pl-[140px] pl-[0px] items-center gap-[25px] lg:gap-[35px]">
                                    <a target="_blank" href="https://www.instagram.com/millymallymoe"><Image src={InstaColor} alt="instagram" /></a>
                                    <a target="_blank" href="https://open.spotify.com/artist/3sxuSPGJrQXReGDnPAc9ST?si=4FdJWWNdTceeUNKG8tClQg&nd=1&dlsi=4fcfc5f6663548ba"><Image  src={SpotifyColor} alt="spotify" /></a>
                                    <a target="_blank" href="https://www.youtube.com/c/MILLYMALLYMOE"><Image  src={YouTubeColor} alt="youtube" /></a>
                                    <a target="_blank" href="https://t.me/therealmilly"><Image src={TelegramColor} alt="telegram" /></a>
                                    <a target="_blank" href="https://music.yandex.ru/artist/10747621?utm_medium=copy_link"><Image className="w-[25px]" src={Music} alt="yandex" /></a>
                                </div>
                            </div>
                        </div>

                        <form method="post" className="lg:pt-[0px] pt-[50px]" name="contact-form" action="https://script.google.com/macros/s/AKfycbzPoFWFLb8WC8N1GJuhOVurMxHAqldoZRezSqMgXReEmviga51qizTHEb8SVCaCqNRK/exec">
                            <div className="border-[1px] mb-[30px] border-[#fff] h-[250px] w-[320px] lg:w-[600px]">
                                <div className="flex lg:flex-row flex-col items-center">
                                    <input required name="name" className="bg-transparent text-[#fff] py-[10px] w-[320px] lg:w-[300px] outline-none px-[20px] border-b-[1px] lg:border-b-[1px] lg:border-r-[1px] border-[#fff]" type="text" placeholder="Ism" />
                                    <input required name="phone" className="bg-transparent text-[#fff] py-[10px] w-[320px] lg:w-[300px] outline-none px-[20px] border-b-[1px] border-[#fff]" type="number" placeholder="Telefon" />
                                </div>

                                <textarea name="message" required className="bg-transparent w-[600px] outline-none text-[#fff] h-[205px] p-[20px]" id="xabar" placeholder="Xabar"></textarea>
                            </div>

                            <button type="submit" id="submit" value="Submit" className="lg:py-[15px] py-[10px] px-[20px] lg:px-[30px] text-[14px] lg:text-[16px] text-[#fff] hover:bg-[#fff] font-[400] lg:font-[500] transition-all duration-300 hover:text-[#000] border-[1px] border-[#fff]">XABAR YUBORISH</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className="lg:pt-[40px] pt-[60px] pb-[20px] mt-[100px] lg:mt-[100px] border-t-[1px] border-t-[#ffffff3e] px-[20px] lg:px-[70px]">
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
                        <Image  src={SpotifyColor} alt="spotify" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">SPOTIFY</h1>
                    </a>

                    <a target="_blank" href="https://t.me/therealmilly" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <Image  src={TelegramColor} alt="telegram" />
                        <h1 className="lg:text-[30px] text-[25px] text-[#EDEBE8] font-[800]">TELEGRAM</h1>
                    </a>
                </div>

                <h1 className="flex font-[300] lg:text-[16px] text-[12px] text-[#EDEBE8] lg:pt-[140px] pt-[60px] justify-center items-center gap-[5px]">© 2025 MILLYMALLYMOE - <a target="_blank" className="hover:underline duration-250 transition-all" href="https://taplink.cc/ijodagency?fbclid=PAZXh0bgNhZW0CMTEAAaZXUMCsQV5N2asxU3A7NXH1-ni5O-9VkKgK_kGtxwteQRXc7UdpSruiR5s_aem_GEl-oOs9DjyhmRFLJadgag">IJOD AGENCY</a></h1>
            </footer>
        </>
    );
};

export default Contacts;
