import {FaHome, FaTwitch, FaYoutube} from "react-icons/fa";

const iTwitter = "i-twitter.png"
const iInstagram = "i-instagram.png"
const iTwitch = "i-twitch.png"
const iYoutube = "i-youtube.png"
export const MenuItems = [
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
        url: "https://twitter.com/The_M3RY",
        icons: iTwitter
    },
    {
        label: "Instagram",
        url: "https://www.instagram.com/the_m3ry/",
        icons: iInstagram
    },
    {
        label: "Twitch-02",
        url: "https://www.twitch.tv/the_m3ry",
        icons: iTwitch
    },
    {
        label: "Youtube-03",
        url: "https://www.youtube.com/channel/UCXLIubvjDYznTp7RctPRimA",
        icons: iYoutube
    }
]