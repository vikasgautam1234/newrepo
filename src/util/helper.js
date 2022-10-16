
const anything = new Date();   //builtin function
const printdate = function(){
    return anything.getDate();
}
const printmonth = function(){
    return anything.getMonth()+1;
}
const getbatchinfo = function(){
    return  "Lithium, week3 day5, the topic being taught today is Node.js";
}

module.exports.date = printdate;
module.exports.month = printmonth;
module.exports.batchinfo = getbatchinfo;