//==============================================================================================
//  버튼(to-top) 클릭시 최상단으로 이동 -  gsap의 scrollPulgin CDN
//==============================================================================================
const toTopEl = document.querySelector("#to-top");

// 클릭 이벤트가 발생했을때 화면의 위치를 0px 지점으로 0.7초 동안 옮김
toTopEl.addEventListener("click", function () {
  // window 객체: 페이지가 출력되고 있는 화면 자체, 하나의 창
  // gsap이라는 애니메이션을 처리하는 js 라이브러리가 window 객체를 통해서 화면자체를 애니메이션 처리를
  // 하면서 특정한 위치로 옮길수 있음
  // scrollTo 옵션을 사용하기 위해서 ScrollToPlugin 이라는 gsap에서 사용할 수 있는 plug-in을 가져와서 연결
  gsap.to(window, 0.7, {
    scrollTo: 0, // gsap의 ScrollToPlugin CDN 연결 필요 부분,
  });
});

//==============================================================================================
// 배지 스크롤시 사라지고 나타나기
//==============================================================================================
const badgeEl = document.querySelector("header .badges ");
// ---------------------------------------------------------------------------------------------
// 방법 : lodash cdn 구글링 -> index.html 내 <script scr="/js/main.js"~~~> "위"에 붙여넣기
// 사용법 : main.js에서 _.throttle 메소드 이용
// 입력법 : _.throttle(함수, 시간(ms))
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// window 부분에 스크롤이벤트를 통해 화면을 스크롤 하면 함수가 수십개가 한번에 실행됨  (아래 예시참고)
// ---------------------------------------------------------------------------------------------
// window.addEventListener("scroll", function () {
//   console.log("scorll!");
// });
// ---------------------------------------------------------------------------------------------
// 그것을 0.3s(300ms) 단위로 부하를 줘서 함수가 한번에 실행되는 것을 방지하는 목적
// 1000ms = 1s, 300ms = 0.3s
// ---------------------------------------------------------------------------------------------
// --------------------------------------------------------------

// --------------------------------------------------------------
// case1. 클래스 추가하여 css 에서 opacity를 통해 사라지고 나타나게 만들기
// --------------------------------------------------------------
// window.addEventListener(
//   "scroll",
//   _.throttle(function () {
//     console.log(window.scrollY);
//     if (window.scrollY > 500) {
//       //배지 숨기기
//       badgeEl.classList.add("scrolled");
//     } else {
//       //배지 보이기
//       badgeEl.classList.remove("scrolled");
//     }
//   }, 300)
// );
// --------------------------------------------------------------
// case2. js 에서 배지 사라지고 나타나게 만들기 (애니메이션 없는 버전)
// --------------------------------------------------------------
// window.addEventListener(
//   "scroll",
//   _.throttle(function () {
//     console.log(window.scrollY);
//     if (window.scrollY > 500) {
//       //배지 숨기기
//       badgeEl.style.display = "none";
//     } else {
//       //배지 보이기
//       badgeEl.style.display = "block";
//     }
//   }, 300)
// );
// --------------------------------------------------------------
// case3. js 에서 배지 사라지고 나타나게 만들기 (애니메이션 버전)
// --------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// 방법 : gsap cdn 구글링 -> index.html 내 <script scr="/js/main.js"~~~> "위"에 붙여넣기
// 사용법 : main.js에서 _.throttle 메소드 이용
// 입력법 : gsap.to(요소, 지속시간(초), 옵션(객체 데이터))
// ---------------------------------------------------------------------------------------------
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼(to-top) 보이기
      // gsap.to("#to-top", 0.2, {   //효율적으로 활용하기 위해 id 요소 찾지 않음
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼(to-top) 숨기기
      // gsap.to("#to-top", 0.2, {   //효율적으로 활용하기 위해 id 요소 찾지 않음
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

//==============================================================================================
// 일정시간 후에 이미지가 보이기(애니메이션)
//==============================================================================================
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초), 옵션(객체 데이터))
  gsap.to(fadeEl, 1, {
    //fadeEl요소에 1s 동안 에니메이션 적용
    opacity: 1,
    delay: (index + 1) * 0.7, // 0.7s 뒤 (title 클래스), 1.4s 뒤 (cup1 클래스), 2.1s 뒤 (cup2 클래스) 표시, 2.8s 뒤 (spoon 클래스) 표시
  });
});

//==============================================================================================
// swiper 추가
//==============================================================================================
// 1. https://swiperjs.com 접속 > get started 클릭
// 2. Installation > Use Swiper from CDN 클릭
// 3. CSS파일과 js 파일을 CDN을 통해 내 html로 연결(<lin>, <scrip> 태그 이용)
// 4. Add Swiper HTML layout을 참고하여 html내 스와이프할 부분에 삽입
// 5. js 내 swiper 함수 실행 (new 이용 )
// 6. css파일을 원하는 스타일로 편집

// new Swiper(선택자, 옵션);  //new : javascript 생성자(javascript의 class로 html의 class가 아님), javascript 문법으로 swiper라는 함수 실행한다는 의미, javascript 라이브러리 실행

// ---------------------------------------------------
// notice-line swiper
// ---------------------------------------------------
new Swiper(".notice-line .swiper", {
  direction: "vertical", //swiper가 수직(아래위)방향으로 움직임
  autoplay: true, //자동으로 슬라이드 동작 제가
  loop: true, //반복 재생 (마지막 슬라이드 다음으로 첫번째 슬라이드로 돌아감)
});

// ---------------------------------------------------
// promotion swiper
// ---------------------------------------------------
// new Swiper(선택자, 옵션);  //new : javascript 생성자(javascript의 class로 html의 class가 아님), javascript 문법으로 swiper라는 함수 실행한다는 의미
new Swiper(".notice .promotion .swiper", {
  // direction: "horizontal",  // default : "horizontal"
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수 default : 1
  spaceBetween: 30, // 슬라이드 사이여백 default : 1
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, //반복재생(마지막 슬라이드 다음으로 첫번째 슬라이드로 돌아감)
  // autoplay : {
  //   delay: 5000 // 1000ms = 1s :0.5s마다 슬라이드 움직임, default : 3s
  // }
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 (페이지 번호 요소를 클릭해서 해당 요소로 이동)
    //   type: "progressbar",
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

//==============================================================================================
// 토글 슬라이더 : promotion toggle 버튼을 클릭시 promotion 영역을 열어주거나 닫음
//==============================================================================================

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // !isHidePromotion 는 isHidePromotion 의 반대값으로 전환
  if (isHidePromotion) {
    // 숨김처리
    // // 방법1. js 로 제어
    // promotionEl.style.display = "none";

    // // 방법2. css로 제어
    promotionEl.classList.add("hide");
  } else {
    // 보임처리
    // // 방법1. js 로 제어
    // promotionEl.style.display = "block";
    // // 방법2. css로 제어
    promotionEl.classList.remove("hide");
  }
});

//==============================================================================================
// youtube floating object
//==============================================================================================
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션)

  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size, //y축 이동 위치 (px)
      repeat: -1, // -1 : 멈추지 않고 무한반복
      yoyo: true, // 이동했다가 다시 제자리로 돌아오는지 여부
      ease: Power1.easeInOut, //gsap easing 구글링 -> https://greensock.com/docs/v2/Easing -> 원하는 easing 함수로 옵션 넣기
      delay: random(0, delay), // 애니메이션 지연시간(s)
    }
  );
}

function random(min, max) {
  // 범위 랜덤 함수 (소수점 2자리)
  // Math : 수학객체 (js 객체)
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// floatingObject(".youtube .floating");
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

//==============================================================================================
// scroll magic : 요소의 화면 표시여부 감시
//==============================================================================================
// new: 생성자 함수 - javascript 라이브러리 실행
// ScrollMagic:javascript 라이브러리
// Scene() : ScrollMagic이라는 javascript 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드
// setClassToggle(토글할 요소, 토글할 클래스 이름) : html 클래스 속성을 지정해주는데 어떤 클래스를 넣었다 뺏다 제어해주는 역할
// addTo() : ScrollMagic이라는 javascript 라이브러리가 필요한 controller 라는 개념의 내용을 추가
// ------------------------------------------------------
// 메소드 체이닝
// new ScrollMagic.scene().setClassToggle().addTo()
// ------------------------------------------------------

// scroll-spy 클래스가 붙어 있는 section 태그가 있다면 모두 찾아서 spyEls 에 할당
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 보여짐 여부를 뷰포트 어느지점에서 판단할 것인지를 지정 (뷰포트의 0.8 위치에 감시할 요소가 걸리면 화면에 보인다고 판단)
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller()); //ScrollMagic에서 기본적으로 추가한 옵션들을 내부 컨트롤러에 내용을 할당해서 실제로 동작할 수 있는 구조로 만들어 주는 역할
});

//==============================================================================================
// swiper : awards 스와이퍼
//==============================================================================================
// new Swiper(선택자, 옵션);  //new : javascript 생성자(javascript의 class로 html의 class가 아님), javascript 문법으로 swiper라는 함수 실행한다는 의미
new Swiper(".awards .swiper", {
  slidesPerView: 5,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});