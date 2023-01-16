//동기
// let noodle = () => {
//   for (let i = 1; i < 100; i++) {
//     console.log(`라면 ${i}개 꿇임`);
//   }
// }
// console.log("가게오픈");
// noodle();
// console.log("가게닫음");

//비동기
// const noodle = (message,time) => {
//   setTimeout(() => {
//     console.log(message)
//   }, time);
// }
// noodle("라면1",1000);
// noodle("라면2",500);
// noodle("라면3",200);

//call-back
// function noodle(message) {
//   console.log(`${message} 라면 끓이는중`)
//   return `${message}`;
// }
// function serve(name) {
//   console.log(`${name} 라면을 테이블에 서빙`);
// }
// let result = noodle("살안찌는");
// serve(result);

// function noodle(message,callback) {
//   console.log(`${message} 라면 끓이는중`)
//   callback(`${message} 라면`);
// }
// noodle("살 안 찌는", (name) => {
//   console.log(name + "을 테이블에 서빙");
// })

/**
 * 처음 유저홈 경로를 로딩에 보냄
 * 
 * @param {*} path 경로
 * @param {*} done 콜백함수
 */
// let loading = (path, done) => {
//   console.log("경로 : " + path);
//   done(path + "text.png");
// }
// loading("/Users/home/",(path) => {
//   console.log("완료 : " + path);
// })

//promise
// let fileSavePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     console.log("저장 경로 : " + path);
//     resolve(path + "test.png");
//   });
// }
// fileSavePromise("/Users/home/")
//   .then((path) => {
//     console.log("완료 파일 경로는 : " + path);
//   })
//   .catch((err) => {
//     console.log("실패 에러 로그는 : " + path);
//   })

// async / await
// let loading = async(path,done) => {
//   console.log("경로 : " + path);
//   return path + "text.png";
// }
// let path = await loading("/Users/home/");
// console.log("완료 : " + path);


async function sendNoti(message, userId){

}
async function saveFile(image){

}
async function storeDataBase(message){

}
async function createFeed(message, image){

  await saveFile(image);

  await storeDataBase(message);

  await sendNoti(message,userId);
}
