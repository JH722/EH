const moment = require('moment');
require("moment/locale/ko");  //한국 시간 지원 

let now = moment().format("YYYY-MM-DD"); // 포멧은 지금 날짜와 시간
console.log(`현재 날짜는 ${now} 입니다.`);

let endClass = moment("2023-01-14","YYYY-MM-DD").fromNow();
console.log(`종강 날짜 : ${endClass}`);


