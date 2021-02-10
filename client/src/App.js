import {useState, useEffect} from "react"
import Routes from "./Components/Routes/Routes";
import {ThemeContext} from "./context/ThemeContext";
import axios from "axios";
import {YoutubeContext} from "./context/YoutubeContext";
import {TwitchContext} from "./context/TwitchContext";
import {useDataYoutube} from "./Hooks/useDataYoutube";
function App() {
  /*
  * Gestion du theme
  * ============================
  * ============================
  * */
  const [themeState, setThemeState] = useState({isDark: false, loading: true})
  const matchMedia = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const getPreferenceTheme = localStorage.getItem("Mery_Theme")
  useEffect(() => {
    if (!getPreferenceTheme) {
      if (matchMedia) {
        setThemeState({isDark: true, loading: false})
      } else {
        setThemeState({isDark: false, loading: false})
      }
    }
    if (getPreferenceTheme) {
      const themePref = JSON.parse(getPreferenceTheme)
      setThemeState({isDark: themePref.isDark, loading: false})
    }
  }, [])

  /*
  * Gestion des contextes Youtube & Twitch
  * ============================
  * ============================
  * */

  /*Youtube*/
  const youtubeState = useDataYoutube()
  /*-- Fin youtube --*/

  /*Twitch */
  const [twitchState, setTwitchState] = useState({
    loading: true,
    isOnLive: false,
    titleStream: "",
    viewers: ""
  })
  useEffect(() => {
    const getInfoStream = async () => {
      await axios.get('http://localhost:8000/twitch')
          .then((res) => {
            setTwitchState({
              ...twitchState,
              loading: false,
              isOnLive: res.data.type === "live" && true,
              titleStream: res.data.title,
              viewers: res.data.viewer_count
            })
          })
          .catch(err => {
            console.log(err)
            setTwitchState({
              ...twitchState,
              loading: false
            })
          })
    }
    return getInfoStream()
  }, [])

  return <>
    <ThemeContext.Provider value={themeState}>
      <TwitchContext.Provider value={twitchState}>
        <YoutubeContext.Provider value={youtubeState}>
          <Routes/>
        </YoutubeContext.Provider>
      </TwitchContext.Provider>
    </ThemeContext.Provider>
  </>
}

export default App;
