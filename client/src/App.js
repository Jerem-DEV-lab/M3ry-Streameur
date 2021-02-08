import {useState, useEffect} from "react"
import Routes from "./Components/Routes/Routes";
import {ThemeContext} from "./context/ThemeContext";

function App() {
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
  return <>
    <ThemeContext.Provider value={themeState}>
      <Routes/>
    </ThemeContext.Provider>
  </>
}

export default App;
