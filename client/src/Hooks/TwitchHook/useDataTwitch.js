import {useState, useEffect} from "react";
import axios from "axios";
import {isEmpty} from "../../utils";

export default function useDataTwitch(){
    const [infoStream, setInfoStream] = useState({
        loading: true,
        isOnLive: false,
        titleStream: "",
        viewers: ""
    })

    useEffect(() => {
        const requestServer = async () =>{
            await axios.get("http://localhost:8000/twitch")
                .then((res) => {
                    if(isEmpty(res.data)){
                        setInfoStream({...infoStream, loading: false})
                    }else{
                        setInfoStream({...infoStream, loading: false, isOnLive: true, titleStream: res.data.title, viewers: res.data.viewer_count})
                    }
                })
                .catch((err) => {
                    setInfoStream({...infoStream, loading: false})
                })
        }
        requestServer()
    }, [])
    return infoStream
}