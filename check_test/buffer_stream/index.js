/*
버퍼와 스트림은 '파일을 읽거나 쓸때 이용한다' (버퍼링(영상로딩중) 과 스트리밍(영상실시간)할때~)

    1. 버퍼
        - 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두고, 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록한다.
          저장된 데이터가 바로 '버퍼'이다.
    2. 스트림
* */

// 버퍼 다루기

const buffer = Buffer.from('안녕하세요 문자열이지만 버퍼로 바뀔예정^^');
console.log(buffer) // 버퍼로바뀜
console.log(buffer.toString()) // 다시 문자열로 리턴
// from() => 문자열을 버퍼로 , toString() => 버퍼를 문자열로 , concat() => 두개의 버퍼를 하나로 합치기 , alloc(바이트) : 빈버퍼 생성



// readFile()을 하면 파일용량이 1기가면... 1기가의 메모리를 사용하게되 왜? 버퍼의 특성을 가지고있으니까.
// ( 사용자가 조작하기위해서는 모든 내용을 버퍼로 만들고나서야 읽고,쓰고,압축이 가능해... 매번 용량이 큰애들을 메모리에 넣는데는 한계가있지.. )

// Q.1) 만약에 읽는 파일이 100기가라면.... 메모리 100기가를 소모해야되... 어떻게 해야할까??
//     ==> 버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내보자 ==> 스트림 ( createReadStream)


// 스트림 다루기
const fs = require('fs');

// 버퍼의 크기를(바이트단위)를 정할 수 있어. 기본값은 64KB인데 16B로 낮춰서 쪼개서 처리하도록..
// 스트림은 이벤트기반으로 동작해 data,end, error이벤트 
const readStream = fs.createReadStream('./text.txt', {highWaterMark:16})
const data = [];

// 나눠진 조각들을 청크라고하지..
readStream.on('data' , (chunk => {
    data.push(chunk);
    console.log('data => ', chunk, chunk.length)
}))

readStream.on('end' , () => {
    console.log('파일을 다읽었습니다. ', Buffer.concat(data).toString())
})