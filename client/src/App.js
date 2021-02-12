import {useState, useEffect} from "react"
import Routes from "./Components/Routes/Routes";
import {ThemeContext} from "./context/ThemeContext";
import {YoutubeContext} from "./context/YoutubeContext";
import {TwitchContext} from "./context/TwitchContext";
import {useDataYoutube} from "./Hooks/Youtube/useDataYoutube";
import useDataTwitch from "./Hooks/TwitchHook/useDataTwitch";
import {getLocalStorageParsed, setLocalStorageParsed} from "./utils";

function App() {
  /**
   * Gestion du theme
   * ============================
   * */
  const [themeState, setThemeState] = useState({isDark: false, loading: true})
  const matchMedia = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const getPreferenceTheme = getLocalStorageParsed("M3ry_Theme")

  useEffect(() => {
    const body = document.body;
    if (getPreferenceTheme) {
      if (getPreferenceTheme.isDark) {
        body.classList.remove("theme-light")
        body.classList.add("theme-dark")
        setThemeState({isDark: true, loading: false})
      } else {
        setThemeState({isDark: false, loading: false})
        body.classList.remove("theme-dark")
        body.classList.add("theme-light")
      }
    }
    else {
      if (!getLocalStorageParsed("M3ry_Theme")) {
        if (matchMedia) {
          setThemeState({isDark: true, loading: false})
          body.classList.remove("theme-light")
          body.classList.add("theme-dark")
          setLocalStorageParsed("M3ry_Theme", {isDark: true, loading: false})
        } else {
          setThemeState({isDark: false, loading: false})
          body.classList.remove("theme-dark")
          body.classList.add("theme-light")
          setLocalStorageParsed("M3ry_Theme", {isDark: false, loading: false})
        }
      }
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
