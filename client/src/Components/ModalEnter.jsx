import React, {useState} from 'react';

const ModalEnter = ({openModal, status}) => {
    return <>
        <div className={`modal-enter ${status ? "modal-close" : "modal-open"}`}
             style={{backgroundImage: `url('/assets/modal_opening_of_the_website/background.jpg')`}}>
            <div className="header-modal">
                <h1>Entrer dans l'univers déjanté de M3ryland !</h1>
                <p>Et découvre les aventures de The_M3ry</p>
                <button className="btn-enter" onClick={() => openModal(true)}>Entrer</button>
            </div>
            <div className="container-img">
                <img src="/assets/modal_opening_of_the_website/sceneBoom.png" alt="fan art de m3ry avec une explosion en arrière plan"/>
            </div>
        </div>
    </>
};

export default ModalEnter;
