import React from 'react';
import Footer from "../../Components/Footer/Footer";

const HelpCharms = () => {
    return <>
        <main className="mb-3">
            <div className="container mt-10">
                <div className="container-header">
                    <div className="charms-img">
                        <img src="/assets/helps-page/fanArt-perdu.png" alt="fan art de @The_M3ry qui paraît étonner"/>
                    </div>
                </div>
                <div className="container-body-text">

                    <h1 className="h1 text-center">Comment obtenir ton Charms M3ry ? </h1>
                    <p className="mt-5 text-center"><span
                        className="h2">Rien de plus simple ! Ça se déroule en 3 grandes étapes.</span>
                        <span className="d-block h2 subtitle">1er étapes :</span>
                        <ul>
                            <li>S'abonner à la chaine twitch de @The_M3ry ou donner son petit <span
                                className="text-alert-twitch">Twitch Gaming</span> 🙄
                            </li>
                        </ul>
                        En suivant ce lien, tu peux t'abonner directement à @The_M3ry

                        <span className="d-block h2">2eme étapes :</span>
                        <ul>
                            <li>Tu dois avoir lier ton compte <strong className="text-alert-ubisoft">Ubisoft</strong> à
                                ton
                                compte <strong className="text-alert-twitch">Twitch</strong> !
                            </li>
                        </ul>
                        <span className="d-block h2">3eme étapes :</span>
                        Tu as plus qu'à prendre un café et te poser 2h 3h sur le <span className="text-alert-twitch">stream de The_M3ry</span>&nbsp;
                        ou te poser devant les <span className="text-alert-youtube">vidéos de The_M3ry</span>. 🍿
                    </p>
                </div>
                <div className="container-footer">
                    <div className="follow-link">
                        <button className="btn-twitch mr-5"> Abonne toi sur Twitch !</button>
                        <button className="button_youtube"> Abonne toi sur Youtube !</button>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
};

export default HelpCharms;
