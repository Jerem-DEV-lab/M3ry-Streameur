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
export function dayDiff(d1, d2)
{
    d1 = d1 / 86400000;
    d2 = d2 / 86400000;
    return Number(d2 - d1).toFixed(2);
}

export function getLocalStorageParsed (key){
    const storedData = localStorage.getItem(key)
    return JSON.parse(storedData)
}

export async function setLocalStorageParsed (key, data){
    return localStorage.setItem(key, await JSON.stringify(data))
}