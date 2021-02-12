import React, {useState, useEffect} from 'react';
import axios from "axios";
import {getLocalStorage, getLocalStorageParsed, setLocalStorageParsed} from "../../utils";

export function useDataYoutube() {
    const [state, setState] = useState({
        loading: true,
        comments: [],
        videos: [],
        dateStorage: ""
    })
    const fetchDataYoutube = async () => {
        await axios.get("http://localhost:8000/youtube")
            .then(res => {
                setState({
                    ...state,
                    comments: res.data.comments,
                    videos: res.data.items,
                    dateStorage: res.data.dateStorage,
                    loading: false
                })
                setLocalStorageParsed("m3ry_site_state", {
                    comments: res.data.comments,
                    videos: res.data.items,
                    dateStorage: res.data.dateStorage,
                    loading: false
                })
                return state
            })
            .catch((err) => {
                console.log(err)
                setState({
                    ...state,
                    loading: false
                })
            })
    }
    useEffect(() => {
        if (!getLocalStorage("m3ry_site_state")) {
            return fetchDataYoutube()
        } else{
            const dataLocal = getLocalStorageParsed("m3ry_site_state")
            setState({...dataLocal})
        }
    }, [])
    return state
}
