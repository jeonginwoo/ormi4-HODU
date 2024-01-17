// 모달 제어 함수
function toggleModal() {
    const modal = document.querySelector("#subscribe-modal");
    const openModalBtn = document.querySelector("#open-subscribe-modal");
    const closeModalBtn = document.querySelector("#close-subscribe-modal");

    // 모달 열기 버튼 클릭 이벤트
    openModalBtn.addEventListener("click", function (event) {
        event.preventDefault(); // 화면 새로고침 동작 제거
        modal.style.display = "block";
    });

    // 모달 닫기 버튼 클릭 이벤트
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

toggleModal();