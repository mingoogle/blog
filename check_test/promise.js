// 비동기 프로그래밍

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공')
    }else{
        reject('실패')
    }
})

promise
    .then((result) => {
        console.log('okok')
        console.log(result)
        return new Promise((resolve,reject) => {
            resolve('진짜끝!')
        })
    })
    .then((result) => {
        console.log('오오~ =>',result)
    }).catch((err) => {
        console.log('에러! ')
        console.log(err)
    })

/* 프로미스 병렬적으로 처리하기 Promise.all([])*/

const promise1 = Promise.resolve('첫번째 실행')
const promise2 = Promise.resolve('두번째 실행')
const promise3 = Promise.resolve('세번째 실행')
const promise4 = Promise.resolve('네번째 실행')

Promise.all([promise1,promise2,promise3,promise4])
.then((result) => {
    console.log('과연 실행을 잘 될 것인가?')
    console.log(result)
}).catch((err) => {
    console.log('@@@@ Promise.all 에러발생!')
    console.log(err)
})