"use client";

import "../../style.css";
import YouTube from "../../assets/images/svg/youtube.svg";
import Telegram from "../../assets/images/svg/telegram-icon.svg";
import Instagram from "../../assets/images/svg/insta.svg";
import Spotify from "../../assets/images/svg/spotify-icon.svg";


const Footer = () => {
    return (
        <>
            <footer className="pt-[40px] pb-[20px] mt-[130px] border-t-[1px] border-t-[#ffffff3e] px-[70px]">
                <div className="flex container text-[#fff] items-center justify-between">
                    <a target="_blank" href="https://www.youtube.com/c/MILLYMALLYMOE" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <img src={YouTube} alt="youtube" />
                        <h1 className="text-[30px] text-[#EDEBE8] font-[800]">YOUTUBE</h1>
                    </a>

                    <a target="_blank" href="https://www.instagram.com/millymallymoe" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <img src={Instagram} alt="instagram" />
                        <h1 className="text-[30px] text-[#EDEBE8] font-[800]">INSTAGRAM</h1>
                    </a>

                    <a target="_blank" href="https://open.spotify.com/artist/3sxuSPGJrQXReGDnPAc9ST?si=4FdJWWNdTceeUNKG8tClQg&nd=1&dlsi=4fcfc5f6663548ba" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <img src={Spotify} alt="spotify" />
                        <h1 className="text-[30px] text-[#EDEBE8] font-[800]">SPOTIFY</h1>
                    </a>

                    <a target="_blank" href="https://t.me/therealmilly" className="flex haa duration-400 items-center gap-[10px] hover:brightness-0 hover:invert">
                        <img src={Telegram} alt="telegram" />
                        <h1 className="text-[30px] text-[#EDEBE8] font-[800]">TELEGRAM</h1>
                    </a>
                </div>

                <h1 className="flex font-[300] text-[16px] text-[#EDEBE8] pt-[140px] justify-center items-center gap-[5px]">© 2025 MILLYMALLYMOE - <a className="hover:underline duration-250 transition-all" target="_blank" href="https://taplink.cc/ijodagency?fbclid=PAZXh0bgNhZW0CMTEAAaZXUMCsQV5N2asxU3A7NXH1-ni5O-9VkKgK_kGtxwteQRXc7UdpSruiR5s_aem_GEl-oOs9DjyhmRFLJadgag">IJOD AGENCY</a></h1>
            </footer>
        </>
    );
};

export default Footer;
