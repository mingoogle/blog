// 모듈에 대하여.

const {odd, even} = require('./check_digits');

function checkkOddOrEven(num){
    if(num%2){ // 0이면 짝수 => false , 1이면 홀수  => true
        return odd
    }else{
        return even
    }
}

module.exports = checkkOddOrEven;