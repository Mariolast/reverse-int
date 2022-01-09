module.exports = function reverse (n) {
    const numberstr = (Math.abs (n)).toString()
    return numberstr.split("").reverse().join("")  
}
