function dateFormat(date){
    let dateConvert = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`
    return dateConvert
}
module.exports = dateFormat