// 유튜브 재생시간 구하기

// 이전에는 아래로 하면 됬는데 지금은 안됨
// var query= '.pl-video .pl-video-time .timestamp span';
// 이것도 이상하게 안됨 그래서 코드 좀 줄여봤음
// var query = '#thumbnail-container > ytd-thumbnail > #thumbnail > #overlays > ytd-thumbnail-overlay-time-status-renderer > span';
var query = 'ytd-thumbnail-overlay-time-status-renderer > span';

var times = document.querySelectorAll(query);
var duration = 0;
// 확인 선언도 안했는데 돌아감
// 어디 미리 선언되어있는듯
// console.log(min + ' ' + sec + ' ' + hour);
console.log('동영상 갯수: ' + times.length);
for (var i = 0; i < times.length; i++) {
  var t = times[i];
  t = t.innerText;
  t = t.split(':')
  min = t[0];
  sec = t[1];
  duration = duration + parseInt(sec) + parseInt(min) * 60
  // check
  console.log(min.trim() + '분 ' + sec.trim() + '초');
}
// 결과값
console.log(duration);

// 사이트 참고
hour = parseInt(duration / 3600);
min = parseInt(duration / 60) - hour * 60;
sec = duration - hour * 3600 - min * 60;
console.log(hour + "시간 " + min + "분 " + sec + "초");

// 내가 생각한 편한 계산법
hour = parseInt(duration / 3600);
min = parseInt((duration / 60) % 60);
sec = duration % 60;
console.log(hour + "시간 " + min + "분 " + sec + "초");
