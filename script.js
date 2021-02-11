

var parseQueryString = function () {

  var str = window.location.search;
  var objURL = {}

  str.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
      objURL[$1] = $3
    }
  );
  return objURL
};

var params = parseQueryString()
var names = ""
try{
names = decodeURIComponent(window.atob(params["ms"]))
}catch{}

document.getElementById("ms").innerHTML = "Chúc "+ names +" một năm mới lung linh, rủng rỉnh, long lanh, lấp lánh!"

document.addEventListener("click", event => {
  bursty(event.pageX, event.pageY);
});


setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34E1FF" },
      duration: 2000 } }).

  tune({
    x: x,
    y: y });


  burst.replay();
}

function randomizedConfetti() {
  let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
  let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34E1FF" },
      duration: 2000 } }).

  tune({
    x: randomX,
    y: randomY });


  burst.replay();
}

Splitting();
