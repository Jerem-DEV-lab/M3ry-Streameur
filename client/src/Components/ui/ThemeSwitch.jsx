import React, {useContext} from 'react';
import {FaMoon, FaSun} from "react-icons/fa";
import {ThemeContext} from "../../context/ThemeContext";
import {isEmpty, setLocalStorageParsed} from "../../utils";


const ThemeSwitcher = () => {
    const themeContext = useContext(ThemeContext)
    const handleChecked = (e) => {
        const body = document.body
        if (e.target.checked) {
            setLocalStorageParsed("M3ry_Theme", {isDark: true, loading: false})
            body.classList.remove("theme-light")
            body.classList.add("theme-dark")
        } else {
            setLocalStorageParsed("M3ry_Theme", {isDark: false, loading: false})
            body.classList.remove("theme-dark")
            body.classList.add("theme-light")
        }
    }
    return <>
        <div id="theme-switcher">
            <div className="switch-group">
                <input type="checkbox" className="checkbox" id="theme" onClick={handleChecked}
                       defaultChecked={!isEmpty(themeContext.isDark) && themeContext.isDark}/>
                <label htmlFor="theme" className="label-theme-switcher">
                    <FaSun className="sun"/>
                    <FaMoon className="moon"/>
                    <div className="ball"/>
                </label>
            </div>
        </div>
    </>
};

export default ThemeSwitcher;
