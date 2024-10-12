import React from "react";
import Instagram from "../icons/instagram_icon.svg";
import Pinterest from "../icons/pinterest_icon.svg";
import Twitter from "../icons/twitter_icon.svg";
import Vk from "../icons/vk_icon.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-nav">
                    <div className="logo">
                        <p>Global</p>
                        <p>Minecraft</p>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Моды</a></li>
                            <li><a href="">Наборы текстур</a></li>
                            <li><a href="">Шейдеры</a></li>
                            <li><a href="">Сервера</a></li>
                        </ul>
                    </nav>
                    <div className='socials'>
                        <p>Наши социальные сети</p>
                        <ul className="social-icons">
                            <li>
                                <a href="#">
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={Pinterest} alt="Pinterest" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={Twitter} alt="Twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={Vk} alt="Vk" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}