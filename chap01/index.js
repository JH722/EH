// 간단한 출력
// 1. 주석 다는 습관 2. 변수명 알아보기 쉽게 의미있게 3. 머슬 메모리
//console.log("hello world");

//http 모듈 불러와 상수 http에 할당
const http = require('http');
http.createServer((req,res)=>{ //서버 생성
  res.statusCode = 200;           //상태 확인 코드? , 성공 = 200
  res.setHeader("Content-Type","text/plain");  // 일반 텍스트를 출력한다고 알려줌
  res.end("Heeeellllllooooooooooooowwwwwwwww          World !!!!!!!!!!!!!!!!!!!!1");  //표시할 내용
}).listen(3000); //3000번 포트 할당
// 실행하고 크롬에서 127.0.0.1:3000 or ip주소:3000 or localhost:3000 