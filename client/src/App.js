import {useState, useEffect} from "react"
import Routes from "./Components/Routes/Routes";
import {ThemeContext} from "./context/ThemeContext";
import {YoutubeContext} from "./context/YoutubeContext";
import {TwitchContext} from "./context/TwitchContext";
import {useDataYoutube} from "./Hooks/Youtube/useDataYoutube";
import useDataTwitch from "./Hooks/TwitchHook/useDataTwitch";

function App() {
  /**
  * Gestion du theme
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

  /**
  * Gestion des contextes Youtube & Twitch
  * ======================================
  * */
  /*Youtube*/
  const youtubeState = useDataYoutube()
  /*-- Fin youtube --*/

  /*Twitch */
  const twitchState = useDataTwitch()
  /*-- Fin twitch --*/

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
