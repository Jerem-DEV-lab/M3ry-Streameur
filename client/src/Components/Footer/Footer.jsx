import React from 'react';
import {SocialNetworks} from "../Navbar/MenuItems";

const Footer = () => {
    return <>
        <footer>
            <div className="container">
                <div className="grid-footer">
                    <div className="footer-logo">
                        <img src="/assets/footer/logo_meryland_footer.png"
                             alt="dessin du streameur The_M3ry"/>
                    </div>
                    <div className="footer-socialNetwork">
                        <h3>Retrouvez moi sur les réseaux sociaux :</h3>
                        <ul>
                            {SocialNetworks.map(s => <li>
                                <a href={"/youtube"} target="_blank" rel="noreferrer nooppener nofollow ">
                                    <img src={`/assets/icons/${s.icons}`} alt={`Icon pour le lien de ${s.label}`}/>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                    <div className="footer-support-link mobile-hidden">
                        <div className="grid-footer2">
                            <div className="support-link-img">
                                <img src="/assets/footer/support-don.jpg" alt=""/>
                            </div>
                            <div className="support-link-img">
                                <img src="/assets/footer/support-insta.jpg" alt=""/>
                            </div>
                            <div className="support-link-img">
                                <img src="/assets/footer/support-twitter.jpg" alt=""/>
                            </div>
                            <div className="support-link-img">
                                <img src="/assets/footer/support-discord.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
};

export default Footer;
