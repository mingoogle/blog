// 타이머 내장함수

/*
* setImmediate와 setTimeout는 순서를 보장할 수 없다. ( 타이머의 6가지 페이즈가 있는데 현재 페이지에 따라서 달라져 )
* setTimeout는 'timer Phase' / setImmediate와 'Check Phase'
* Q.1) 순서를 보장하고싶다면?
* => Check Phase는 poll chase 다음에 실행된다. 따라서 I/O작업을 하는 부분안에다 선언하면 setImmediate가 무조건 먼저실행됨!
*
* */


// promise.nexttick(콜백) ( nextTick과 promise는 마이크로 태스트큐에속하지.. ==> 이벤트루프가 호출스택에 넣을때 마이크로태스크큐부터 넣어 )
// 현재 실행중인(함수)가 끝나고 다음 순서를 보장하는 함수야. 즉, 현재 실행 중인 것을 끝마치고 다음 순서를 때 nextTick()이 무조건 실행된다.
// 이벤트루프의 6가지 페이지 내에서 동작하는게 아니라 별도로 실행되

process.nextTick(() => {
    console.log('와우~')
})


const timeout = setTimeout(() => {
    console.log('setTimeout 1초 후에 실행')
},1000)


const interval = setInterval(() => {
    console.log('setInterval 매 1초마다 실행')
},1000)


const immediate = setImmediate( () => {
    console.log('즉시실행')
})
const timeout2 = setTimeout(() => {
    console.log('setTimeout이 먼저 실행될까 아니면 setImmediate가 먼저실행될까?')
},0)


clearTimeout(timeout)
clearInterval(interval)