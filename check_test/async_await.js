// 비동기 프로그래밍을 제어
// promise.all을 async await로 하는 방법

const promise1 = Promise.resolve(('첫번째 성공'));
const promise2 = Promise.resolve(('두번째 성공'));
/*

Promise.all([promise1, promise2])
.then((result ) => console.log('result => ', result))
.catch((err) => console.log('err => ',err))*/



// for of를 통하여 배열안의 프로미스를 반복한다. 이때 await를 선언함으로써
// 비동기함수를 제어하여 순차적으로 실행하게 만든다.
(async () => {
    for await (promise of [promise1,promise2]){
        console.log(' async => ', promise)
    }
})();
