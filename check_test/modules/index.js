// 2015년 이후에는 import/export라는 모듈 개념이 도입되었다
// 브라우저 버전(크롬60)이상 부터는 require대신 import/export 사용가능해-
// module.exports => export default로 mjs로 확장자를 바꾸던 node --experimental-modules [파일명]처럼 옵션을 붙여줘야헤



const {odd, even} = require('./check_digits');
const checkNumber = require('./check_odd_even')

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return even
    }
}

console.log(checkNumber(10))
console.log(checkStringOddOrEven('str'))



/* ES6이상으로 작성 */

import {odd1, even1} from './check_digits'
import checkNumber1 from './check_odd_even'

function test1(str){
    if(str.length % 2 ){
        return odd1
    }else{
        return even1
    }
}
console.log(checkNumber1('3'))
console.log(test1('strr'))
