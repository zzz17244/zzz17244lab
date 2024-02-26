function _filter (array,callback ) {
    let output = []
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            output.push(array[index])
        }
    }
    return output
}

let data  =["55555","666666","7777777","88888888","99999999","4444","333","22","1"]

result2 = _filter( data , y => y.length > 5 )
console.log(result2)









let words =["55555","666666","7777777","88888888","99999999","4444","333","22","1"]