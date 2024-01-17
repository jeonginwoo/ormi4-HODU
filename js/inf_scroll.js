/* 이미지 불러오기 */

const imageList = document.querySelector(".image-list");
let pageToFetch = 1;

async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=3`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    imageList.innerHTML += `<ul class="list-style-none left-right-space-between">
                                <li><img class="img-style" src='${datas[0].download_url}' alt='이미지${3 * pageToFetch - 2}'></li>
                                <li><img class="img-style" src='${datas[1].download_url}' alt='이미지${3 * pageToFetch - 1}'></li>
                                <li><img class="img-style" src='${datas[2].download_url}' alt='이미지${3 * pageToFetch}'></li>
                            </ul>
                            `;
    // datas.forEach((item) => {
    //     imageList.innerHTML += ``;
    // })
}


/* 무한 스크롤 */


const footerHtml = document.querySelectorAll(".on-off")
const infScrollBtn = document.querySelector("#inf-scroll-btn");
const createLineNum = 3;    /* 생성할 이미지 라인 수 */
let isScrollBtnOn = false;
infScrollBtn.addEventListener('click', function () {
    if (isScrollBtnOn === false) {
        isScrollBtnOn = true;
        infScrollBtn.innerHTML = "Stop scrolling"; /* 버튼 내용 변경 */
        infScrollBtn.classList.add("stop-scroll-btn");  /* 버튼 스타일 변경 */
        infScrollBtn.classList.remove("button-style"); /* 기존 스타일 삭제 */
        footerHtml.forEach((item)=>{
            item.classList.add("display-none"); /* footer 숨기기 */
        })
        for (let i = 0; i < createLineNum; i++) {
            fetchImages(pageToFetch++);
        }
    } else {
        isScrollBtnOn = false;
        infScrollBtn.innerHTML = "Show more"; /* 버튼 내용 변경 */
        infScrollBtn.classList.remove("stop-scroll-btn");
        infScrollBtn.classList.add("button-style"); /* 기존 스타일로 변경 */
        footerHtml.forEach((item)=>{
            item.classList.remove("display-none"); /* footer 숨기기 */
        })
    }
})

let throttleTimer;
const throttleDelay = 500; // 딜레이 설정 (ms)
window.addEventListener('scroll', () => {
    if (throttleTimer) {
        return;
    }

    throttleTimer = setTimeout(() => {
        throttleTimer = null;

        // 스크롤이 상단으로부터 얼마나 이동했는지 알아야 합니다.
        // 현재 페이지 높이 + 아래로 이동한 스크롤 길이
        // 뷰포트의 높이 + 스크롤된 길이
        // 화면에 로딩된 페이지 전체 높이
        // 뷰포트의 높이 + 스크롤된 길이 + 10 === 화면에 로딩된 페이지의 전체 높이 (+10은 여분 높이)
        if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight && isScrollBtnOn) {
            for (let i = 0; i < createLineNum; i++) {
                fetchImages(pageToFetch++);
            }
        }
    }, throttleDelay);
});

/* 버튼 누르면 이미지 생성 */
// infScrollBtn.addEventListener('click', function () {
//     for (let i = 0; i < createLineNum; i++) {
//         fetchImages(pageToFetch++);
//     }
// })
