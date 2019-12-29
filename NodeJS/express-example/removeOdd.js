module.exports = (array) => {

//     return array.map((number) => {
//         if(number % 2 === 0){
//             return false
//         } else {
//             return number
//         }
//     })

    return array.filter((number) => {
        if(number % 2 === 0) {
            return false
        } else {
            return true
        }
    })
}