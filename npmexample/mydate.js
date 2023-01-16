const moment = require('moment');
require("moment/locale/ko");  //한국 시간 지원 

const date = ('2023-01-12 16:10:00');



//비교 함수
function dateFromNow(date){
  let currentTime = moment();
  let feedDate = moment(date);
  let a = feedDate.isSame(currentTime,'day');
  console.log("----------------------------------");
  if(a == true) {
    let c = moment(feedDate,"YYYY-MM-DD").fromNow();
    console.log(`${c} 오늘 피드`);
  }
  else console.log(feedDate.format('YYYY-MM-DD')+" 에 작성된 피드")
}

//새글함수
function isNewFeed(date){
  let currentTime = moment().add(-10,'minute');
  let feedDate = moment(date);
  let b = feedDate.isAfter(currentTime);
  console.log("----------------------------------");
  if(b == true) console.log("새로운 피드");
  else console.log("10분이 지난 오래된 피드 ");
}
dateFromNow(date);
isNewFeed(date);