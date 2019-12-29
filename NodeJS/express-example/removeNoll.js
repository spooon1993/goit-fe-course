module.exports = (array) => {

    return array.filter((number) => {
        if(number === 0) {
            return true
        }
    })
}