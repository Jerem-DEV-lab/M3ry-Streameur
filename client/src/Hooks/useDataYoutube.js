import React, {useState, useEffect} from 'react';
import {dayDiff} from "../utils";
import axios from "axios";

export function useDataYoutube() {
    const [youtubeState, setYoutubeState] = useState({
        latestVideo: [],
        dateStorage: "",
        items: [],
        loading: true,
    })
    useEffect(() => {
        const localCache = localStorage.getItem("m3ry_site_state");
        const localCacheParsed = JSON.parse(localCache);
        if (localCache === null || undefined) {
            (async () => {
                await axios.get("http://localhost:8000/youtube")
                    .then(res => {
                        setYoutubeState({
                            ...youtubeState,
                            dateStorage: res.data[0].storageDate,
                            items: res.data[0].items,
                            latestVideo: [res.data[0].items[0], res.data[0].items[1]],
                            loading: false
                        })
                        localStorage.setItem("m3ry_site_state", JSON.stringify({
                            dateStorage: res.data[0].storageDate,
                            items: res.data[0].items,
                            latestVideo: [res.data[0].items[0], res.data[0].items[1]],
                            loading: false
                        }))
                        console.log("requete")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })()

        } else if (dayDiff(Date.parse(localCacheParsed.dateStorage), Date.now()) <= 1) {
            setYoutubeState({...localCacheParsed})
        }else{
            (async () => {
                await axios.get("http://localhost:8000/youtube")
                    .then(res => {
                        setYoutubeState({
                            ...youtubeState,
                            dateStorage: res.data[0].storageDate,
                            items: res.data[0].items,
                            latestVideo: [res.data[0].items[0], res.data[0].items[1]],
                            loading: false
                        })
                        localStorage.setItem("m3ry_site_state", JSON.stringify({
                            dateStorage: res.data[0].storageDate,
                            items: res.data[0].items,
                            latestVideo: [res.data[0].items[0], res.data[0].items[1]],
                            loading: false
                        }))
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })()
        }
    }, [])
    return youtubeState
}