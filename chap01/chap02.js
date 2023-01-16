//  var intNumber = 10;
//  var floatNumber = 20.3;

//  var string1 = "문자'열'";
//  var string2 = '문"자"열';


//  console.log(intNumber);
//  console.log(floatNumber);
//  console.log(string1);
//  console.log(string2);

//  console.log(typeof(100));
//  console.log(typeof(true));
//  console.log(typeof(undefined)); //undefined 는 타입이 정해져있지 않는것을 의미

// var a;
// console.log(typeof(a));

// //형변환 자유로운편
// var b = 20;
// console.log(b);
// b = "이쉽";
// console.log(b);

// // 묵시적 타입 변환, +는 문자열이 이기는 편인듯? NaN 숫자가 아님 
// var c = 10 + "뭘봐";
// var d = "3" * "2";
// var e = 10 + "12";
// var f = 10 - "2";
// var g = 10 - "문자아";
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// //명시적 타입 변환 Number(), String(), Boolean(), Object(), parseLin() = 정수 , parseFloat() = 실수
// console.log(Number("2.1"));

//디폴트 매개변수
/**
 * 두 수의 곱 출력 함수, 파라미터 1개만 보낼경우
 * 그냥 자기 출력
 * @param {number} a 변수1
 * @param {number} b 변수2
 * @returns 두수의 곱
 */
// function mul(a,b = 1){ //기본값 설정 
//   return a * b;
// }
// console.log(mul(3,4));
// console.log(mul(3));

// //익명함수는 보통 변수에 집어넣는다 익명함수는 이름이 없는 함수1

//es6
// var string1 = `"한국공대"`;
// var string2 = `지금 우리가 다니는 학교는
// ${string1} 이다.`

// console.log(string2);

// // var은 오류를 띄우지 않지만
// var c = 'bape';
// console.log(c);
// var c = 'stuu';
// console.log(c);
// // let은 오류를 띄운다
// let d = 'bape';
// console.log(c);
// let d = 'stuu';
// console.log(c);

//익명함수 화살표 표기법
// var mysquare2 = (x) => {
//   return x * x;
// }
// var mysquare = (x) => x * x;
// console.log(mysquare2(3));
// console.log(mysquare(5));

// //구구단
// for(var a = 1; a <= 9; a++){
//   console.log("------------");
// for(var b = 1; b <= 9; b++){
// console.log(a+" * "+b+" = "+a*b);
// }
// }

var com,user;

// com = Math.floor(Math.random() * 3);

function rand(){
  return Math.floor(Math.random() * 3);
 }
 com = rand();
 user = rand();

console.log("COM = " + com);
console.log("USER = " + user);

winnerIs(com, user);

0 = 가위
1 = 바위
2 = 보 


function winnerIs(com,user){
  if(com == user)
  console.log("DRAW");
  else if(((com-user + 1) % 3) == 0 )
  console.log("USER WIN");
  else
  console.log("COM WIN");

}

let mail1 = "abc@tukorea.ac.kr"

