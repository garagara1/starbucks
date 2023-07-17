// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // player = new YT.Player('player', {
  // YT.Player(선택자, 옵션)    // <div id="player"></div>
  new YT.Player("player", {
    // id라고 해서 '#player'라고 작성하면 안됨
    // height: "360", // 미사용
    // width: "640", //미사용
    videoId: "An6LvWQuj_8", //영상 id 를 실제 사용할 영상 id로 교체
    playerVars: {
      //영상을 재생하기 위한 여러가지 변수들
      autoplay: true, // 자동재생 유무
      loop: true, // 반복재생 유무
      playlist: "An6LvWQuj_8", // 반복재생할 영상 리스트
    },
    events: {
      // events:
      //영상 id 를 실제 사용할 영상 id로 교체
      // onReady라는 메소드가 실행되면 익명함수의 매개변수로 event 라는 것을 사용
      // event는 동영상 플래이어가 재생될 준비가되면 함수가 실행됨
      // 함수를 실행할때 함수의 인수로 동영상이 플레이되는 상황 자체를 데이터로 넘겨 주게되고
      // 함수 내에서 event라는 매개변수의 이름로 받아서 함수내부에서 사용 가능
      onReady: function (event) {
        event.target.mute(); //event: 매개변수, target : 속성(영상 자체), mute : 음소거
      },
    },
  });
}
