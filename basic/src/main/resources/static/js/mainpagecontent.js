(function () {
    // 'use strict'; // 이 줄을 추가하는 것이 좋습니다.

    // 'getElementsByClassName' 메서드는 컬렉션을 반환하므로 [0]을 사용하기보다는 querySelector를 사용하는 것이 더 일반적입니다.
    var body = document.body,
        menuTrigger = body.querySelector(".menu-trigger");

    // 'menu-trigger' 요소가 존재하면 이벤트 리스너를 추가합니다.
    if (menuTrigger) {
        menuTrigger.addEventListener("click", function () {
            // classList.toggle 메서드를 사용하여 클래스를 추가 또는 제거합니다.
            body.classList.toggle("menu-active");
        });
    }
})();

// 'const' 대신 'let'을 사용하는 것이 더 적절합니다.
let body = document.querySelector("body");
let twitter = document.querySelector(".twitter");

// 마우스 오버와 아웃 이벤트에 대한 함수를 따로 정의하여 코드를 간소화합니다.
function handleMouseOver() {
    body.classList.add("linked");
}

function handleMouseOut() {
    body.classList.remove("linked");
}

// 이벤트 리스너를 등록합니다.
twitter.addEventListener("mouseover", handleMouseOver, false);
twitter.addEventListener("mouseout", handleMouseOut, false);
