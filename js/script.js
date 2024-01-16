/*
/!* 이미지 불러오기 *!/

const imageList = document.querySelector(".image-list");
let pageToFetch = 1;

async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=10`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    datas.forEach((item) => {
        imageList.innerHTML += `<li><img src='${item.download_url}' alt=''></li>`;
    })
}

fetchImages(pageToFetch++);
/!* 무한 스크롤 *!/
/!*window.addEventListener('scroll', () => {
    // 스크롤이 상단으로부터 얼마나 이동했는지 알아야 합니다.
        // 현재 페이지 높이 + 아래로 이동한 스크롤 길이
        // 뷰포트의 높이 + 스크롤된 길이
    // 화면에 로딩된 페이지 전체 높이
        // 뷰포트의 높이 + 스크롤된 길이 + 10 === 화면에 로딩된 페이지의 전체 높이 (+10은 여분 높이)
    if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
        fetchImages(pageToFetch++);
    }
})*!/
// 브라우저의 스크롤 감지 무디게 만들기
// -> 스로틀링 관련 코드 찾아보기.*/

// 모달 제어 함수
function toggleModal() {
    const modal = document.getElementById("subscribe-modal");
    const openModalBtn = document.getElementById("open-subscribe-modal");
    const closeModalBtn = document.getElementById("close-subscribe-modal");

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

