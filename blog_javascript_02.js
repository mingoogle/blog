
function outerFunc(){ // 상위함수(외부함수)
    var fruit = 'banana';

    function innerFunc(){ // 자기함수(내부함수)
        console.log("과일의 이름은 : %s",fruit);
    }

    return innerFunc;
}
var closureFunc = outerFunc(); // ==> innerFunc;
closureFunc();
// outerFunc함수 내부에 있는 innerFunc함수를 실행하며
// innerFunc의 상위함수인 outerFunc이 종료되지 않고 변수(fruit)가 살아있다.== (Closure)





function closureExam() {
    var message = "Hello";
    var count =1;

    return function () {
        var message = "bye";
        console.log(message);
        console.log(count);
        count++;
    };

}
var hello = closureExam();
hello();
hello();
hello();
hello();


