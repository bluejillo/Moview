const urlify = (s) => {
    let stringArray = s.split('');
    for(let i = 0; i < stringArray.length; ++i){
        if(stringArray[i] === ' '){
            stringArray[i] = '%20';
        }else if(s[i] === ','){
            stringArray[i] = '%2C'
        }else {

        }
    }
    return stringArray.join('');
}

module.exports = urlify;