// 라이트 박스
$(".lightgallery").lightGallery({
  thumbnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true
});

// 윈도우 팝업
$(".window").click(function(e) {
  e.preventDefault();
  // window.open("파일명", "팝업 이름", "옵션 설정")
  // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open("sample_popup.html", "popup02", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

// 레이어 팝업
$(".layer").click(function(e) {
  e.preventDefault();
  // $("#layer").css("display", "block");
  // $("#layer").show();
  // $("#layer").fadeIn();
  // $("#layer").slideDown();
  $("#layer").slideToggle();
});

$("#layer .close").click(function(e) {
  e.preventDefault();
  // $("#layer").css("display", "none");
  // $("#layer").hide();
  // $("#layer").fadeOut();
  $("#layer").slideUp();
});

// 탭 메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show(); // active 붙은 거의 ul은 보여줄 꺼

function tabMenu(e) {
  e.preventDefault();
  var $this = $(this); // 버튼 클릭한 자신을 변수에 저장
  // 여기서 this는 a 태그인 거 같음
  $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find("> ul").hide();

  // 아래 a 태그의 active도 처리해봄
  $this.next("ul").prev("a").addClass("active").parent("li").siblings("li").find("> a").removeClass("active");
}
$tab_list.find("ul > li > a").click(tabMenu).focus(tabMenu);

// 배너
// html 마크업 세팅 -> css 연동 -> jQuery 연동 --> jQuery 호출 (slick 사용법)
$(".ban").slick({
  // setting - name: setting - value
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3, // 3칸씩 옮기는거
  // slidesToScroll: 1,
  // arrows: false;
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

// 갤러리
$(".gallery_img").slick({
  fade: true,
  pauseOnHover: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1
});
$(".play").click(function() {
  $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function() {
  $(".gallery_img").slick("slickPause");
});
$(".prev").click(function() {
  $(".gallery_img").slick("slickPrev");
});
$(".next").click(function() {
  $(".gallery_img").slick("slickNext");
});

// 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e) {
  e.preventDefault(); // 전체메뉴 열릴 때 나는 퍼블리셔다 위로 안올라가게 해주는 거
  // $("#cont_nav").css("display", "block");
  // $("#cont_nav").show(); // 위에꺼랑 같은거 display none -> block 바꿔줌
  // $("#cont_nav").fadeIn(); // 서서히 나타남
  // $("#cont_nav").slideDown(); // 슬라이드로 나옴

  // $("#cont_nav").toggle(); // 나타났다 없어졌다 둘다 가능
  // $("#cont_nav").fadeToggle();
  $("#cont_nav").slideToggle(200); // 매개변수 속도
  // $(".tit .btn").addClass("on");
  // $(".tit .btn").toggleClass("on");
  $(this).toggleClass("on"); // this 쓰는게 좋음
});
