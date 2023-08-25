//==============================================================================================
// 통합검색
//==============================================================================================
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//==============================================================================================
// swiper : awards 스와이퍼
//==============================================================================================
// 요소.textContent : 요소가 가진 내용을 알아내거나 값을 지정하는 용도로 활용
// -----------------------------------------------------------------
// new Date().getFullYear()
// -----------------------------------------------------------------
// 의미 :
// js에서 날짜정보를 가진 Date 객체를 가지고 있음.
// Data 객체에서 현재 날짜를 뽑아낼때 Data 객체를 new 생성자 함수로 실행해서
// 그 안에 들어있는 getFullYear 메소드를 실행하면 그 메소드에서 현재 년도가 반환됨
// -----------------------------------------------------------------

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
