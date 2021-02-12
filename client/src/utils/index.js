export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0) ||
        (typeof value === "array" && value != "undefined" && value.length != null && value.length > 0)
    );
}

/**
 *
 * @param d1
 * @param d2
 * @returns {string}
 */
export function dayDiff(d1, d2) {
    d1 = d1 / 86400000;
    d2 = d2 / 86400000;
    return Number(d2 - d1).toFixed(2);
}

export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function getLocalStorageParsed(key) {
    if (getLocalStorage(key) === null || undefined)
        return null
    else
        return JSON.parse(getLocalStorage(key))
}


export function checkLocalStorage(key, numberOfDay, callback, data) {
    const cacheLocal = getLocalStorageParsed(key)
    if (cacheLocal === null) {
        console.log("retour de la callback pas de cache")
        return callback(() => {
            setLocalStorageParsed(key, data)
        })
    }else {
        if (cacheLocal && dayDiff(cacheLocal.dateStorage, Date.now()) <= numberOfDay)
            return cacheLocal
    }

}

export  function setLocalStorageParsed(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
}