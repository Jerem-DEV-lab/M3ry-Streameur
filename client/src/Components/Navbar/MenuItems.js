import {FaHome, FaTwitch, FaYoutube} from "react-icons/fa";

const iTwitter = "i-twitter.png"
const iInstagram = "i-instagram.png"
const iTwitch = "i-twitch.png"
const iYoutube = "i-youtube.png"
export const MenuItems = [
    {
        label: "Accueil",
        url: "/",
        icons: <FaHome size={22}/>
    },
    {
        label: "Twitch",
        url: "/twitch-stream",
        icons: <FaTwitch size={22}/>
    },
    {
        label: "Youtube",
        url: "/videos/youtube",
        icons: <FaYoutube size={22}/>
    }
]

export const SocialNetworks = [
    {
        label: "Twitter-01",
        url: "", //TODO: mettre le lien
        icons: iTwitter
    },
    {
        label: "Instagram",
        url: "", //TODO: mettre le lien
        icons: iInstagram
    },
    {
        label: "Twitch-02",
        url: "", //TODO: mettre le lien
        icons: iTwitch
    },
    {
        label: "Youtube-03",
        url: "", //TODO: mettre le lien
        icons: iYoutube
    }
]