/*
    1.단방향 암호화
        - 복호화 할 수 없는 암호화. ==> 즉 암호화를 했는지 해독은 할 수없어
          ex) 비밀번호 찾기를 누르면 비밀번호를 알려주지 않고 비밀번호 재설정하잖아.. ==> 누구라도 실제 암호를 알 수 없게 만들기 위해서 사용해

    2.양방향 암호화
        - 복호화 할 수 있는 암호화
        => 복호화를 하기위해서는 암호화 시 key와 복호화 시 key가 있어야하겠지?
* */

// 단방향 암호화
const crypto = require('crypto');
// '비밀번호'라는 문자열을 sha512이라는 알고리즘을 사용하여 반환해라 인코딩 시 'base64'로 반환 받겠다.
console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'))



// 양방향 암호화
// 암호화하기
const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('비밀번호', 'utf8', 'base64');
result += cipher.final('base64')
console.log('암호화가 되었습니다. => ',result)

// 암호화된 값을 동일한 key를 넣어서 복호화하기
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠'); // 암호화 시 key와 동일해야해
let result2 = decipher.update(result, 'base64', 'utf8'); // base64로 인코딩하고 최종적으로 utf8로
result2 += decipher.final('utf8');
console.log('복호화 => ', result2);

