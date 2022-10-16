const stringTrim = function(){
    const string = "  functionup  "
    return string.trim()
}

const stringlowercase = function(){
    const string2 = "VIKAS GAUTAM"
    return string2.toLowerCase()
}

const stringuppercase = function(){
    const string3 = "vikas gautam"
    return string3.toUpperCase()
}

module.exports.trim = stringTrim
module.exports.lowercase = stringlowercase
module.exports.uppercase = stringuppercase