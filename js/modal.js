// 구독 카드 모달창
function toggleSubscribeModal() {
    const modal = document.querySelector("#subscribe-modal"); // 모달 화면
    const openModalBtn = document.querySelector("#open-subscribe-modal"); // 모달창 여는 버튼
    const closeModalBtn = document.querySelector("#close-subscribe-modal"); // 모달창 닫는 버튼

    // 모달 열기 버튼 클릭 이벤트
    openModalBtn.addEventListener("click", function (event) {
        event.preventDefault(); // 화면 새로고침 동작 제거
        modal.classList.remove("display-none");
    });

    // 모달 닫기 버튼 클릭 이벤트
    closeModalBtn.addEventListener("click", function () {
        modal.classList.add("display-none");
    });
}

// 원본 이미지 모달창
function toggleImgModal() {
    const modal = document.querySelector("#img-modal"); // 모달 화면
    const originalImg = modal.querySelector(".modal-content"); // 모달 이미지가 들어가는 요소
    const imgList = document.querySelector(".image-list"); // 모달 이미지의 부모 요소

    window.addEventListener("click", function (event) {
        // 클릭한 요소가 이미지 리스트의 이미지이면 원본 이미지 모달창 생성
        if (event.target.className === imgList.querySelector("img").className) {
            modal.classList.remove("display-none");
            originalImg.innerHTML = `<img src="${event.target.src}">`;
        }

        // 모달 외부 클릭 시 닫기
        if (event.target === modal) {
            modal.classList.add("display-none");
        }
    });
}
