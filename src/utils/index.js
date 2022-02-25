
function upperCaseFirstLetter(str){
    if(!str)
      return
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function formatId(id){
    let str = id.toString()
    while(str.length < 3){
        str = "0" + str
    }
    return str
}

export { upperCaseFirstLetter, formatId }