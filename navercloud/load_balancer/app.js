const express =require('express');
const app = express();
let port = 3000;

app.get('/', function (req,res){

    /* n의 소수찾기*/
    const n = 100000;
    let nums = [...Array(n).keys()];

    for(let i =2; i*i < n; i++){
        if(nums[i] !== 0){
            for(let j = i*i; j<n; j+=i){
                nums[j] = 0;
            }
        }
    }

    let getPrimes = [];

    for(let i=0; i<nums.length; i++){
        if(nums[i] > 1){
            getPrimes.push(nums[i]);
        }
    }

    console.log("### getPrimes => " ,getPrimes.toString())

    res.send('100,000의 소수 개수는 : '+getPrimes.length)
});

app.listen(port, function (){
    console.log('서버가 시작되었습니다. 포트:%s',port);
});