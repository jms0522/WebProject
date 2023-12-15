function moveInfo() {
    var offset = $(".footer").offset(); //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
    $("html, body").animate({ scrollTop: offset.top }, 500); //offset이라는 변수에 담긴 위치로 이동
}
