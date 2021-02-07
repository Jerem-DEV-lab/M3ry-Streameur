import React, {useState} from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Routes from "../../Components/Routes/Routes";
import ModalEnter from "../../Components/ModalEnter";

const Home = () => {
    const [openSite, setOpenSite] = useState(false)
    return <>
        <Navbar/>
        <ModalEnter openSites={() => setOpenSite(!openSite)} status={openSite}/>
        <main>
        </main>
        <Footer/>
    </>
};

export default Home;
