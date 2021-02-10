/**
 *
 * @param d1
 * @param d2
 * @returns {string}
 */
function dayDiff(d1, d2)
{
    d1 = d1 / 86400000;
    d2 = d2 / 86400000;
    return Number(d2 - d1).toFixed(2);
}

module.export = isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0) ||
        (typeof value === "array" && value != "undefined" && value.length != null && value.length > 0)
    );
};
module.exports = {
    dayDiff,
    isEmpty
}