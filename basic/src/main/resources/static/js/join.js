let joinEl = document.getElementById("join")

function joinChk() {
    let joinIdEl = joinEl.id.value;
    let joinPwdEl = joinEl.password.value;

    if (!joinIdEl) {
        alert('아이디를 입력해주세요.');
    }
    if (!joinPwdEl) {
        alert('비밀번호를 입력해주세요.');
    }
    document.getElementById('join').submit();
}