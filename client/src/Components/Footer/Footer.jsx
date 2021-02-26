import React from 'react';
import {SocialNetworks} from "../Navbar/MenuItems";
import ThemeSwitcher from "../ui/ThemeSwitch";

const Footer = () => {
    return <>
        <footer className="footer">

            <ThemeSwitcher/>
            <div className="container">
                <div className="grid-footer">
                    <div className="footer-logo">
                        <img src="/assets/footer/logo_meryland_footer.png"
                             alt="dessin du streameur The_M3ry"/>
                    </div>
                    <div className="footer-socialNetwork">
                        <h3>Retrouvez moi sur les réseaux sociaux :</h3>
                        <ul>
                            {SocialNetworks.map((s, index) => <li key={index}>
                                <a href={s.url} target="_blank" rel="noreferrer nooppener nofollow ">
                                    <img src={`/assets/icons/${s.icons}`} alt={`Icon pour le lien de ${s.label}`}/>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                    <div className="footer-support-link mobile-hidden">
                        <div className="grid-footer2">
                            <div className="support-link-img">
                                <a href="https://m3ry.live/tip" target="_blank" rel="noopener noreferer">
                                    <img src="/assets/footer/support-don.jpg" alt="faire un don de the_m3ry"/>
                                </a>
                            </div>
                            <div className="support-link-img">
                                <a href="https://www.instagram.com/the_m3ry/" target="_blank" rel="noopener noreferer">
                                    <img src="/assets/footer/support-insta.jpg" alt="instagram de the_m3ry"/>
                                </a>
                            </div>
                            <div className="support-link-img">
                                <a href="https://twitter.com/The_M3RY" target="_blank" rel="noopener noreferer">
                                    <img src="/assets/footer/support-twitter.jpg" alt="twitter de the_m3ry"/>
                                </a>
                            </div>
                            <div className="support-link-img">
                                <a href="https://discord.com/invite/zHNsEYFxKz" target="_blank"
                                   rel="noopener noreferer">
                                    <img src="/assets/footer/support-discord.jpg" alt="discord communautaire de m3ry"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
};

export default Footer;
