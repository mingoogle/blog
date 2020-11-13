mingoogle = '민구글입니다.';
console.log(mingoogle);


function varFunc(){
    var changeFlag = true;
    if(changeFlag){
        var fruit = 'banana';
        console.log("[1] 과일의 이름은? : "+fruit); // 정상출력
    }
    console.log("[3] 과일의 이름은? : "+fruit); // fruit is not defined 발생!
    // let은 함수단위가 아닌 블록단위이다.
    // 따라서 if문 안에서는 값이 유효하지만 if문 외부에서 선언 할 경우 에러가난다.
}

varFunc();

function startVarFunc(){

    // 3초뒤에 실행
    for(let i=0; i<3; i++){
        // 일정 시간이 지난 후 실행되는 함수
        setTimeout(function (){
            console.log(i); // 3만 실행된다.
        },3000);
    }
}

function startLetFunc(){

    // 1초뒤에 실행
    for(var i=0; i<3; i++){
        // 일정 시간이 지난 후 실행되는 함수
        setTimeout(function (){
            console.log(i); // 0,1,2 순차적으로 실행된다.
        },1000);
    }
}

function startVarFunc2(){ //
    var i = [0,1,2];

    i.forEach(function (i){
        setTimeout(function (){
            console.log('startVarFunc2 forEach : '+i);
        },1000);
    })

    for(var j=0; j<i.length;j++){
        setTimeout(function (){
            console.log('startVarFunc2 for문 : '+ j);
        },1000);
    }
}

startLetFunc();
startVarFunc();
startVarFunc2();

