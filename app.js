// GITHUB 초기화
const github = new Github;
// UI 초기화
const ui = new UI;

// 검색 입력 필드
const searchUser = document.getElementById('searchUser');

// 검색 입력 필드 이벤트 리스너
searchUser.addEventListener('keyup', (e) => {
    // 입력된 텍스트 가져오기
    const userText = e.target.value;

    if (userText !== '') {
        // HTTP 요청 만들기
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // 경고 표시
                    ui.showAlert('사용자를 찾을 수 없습니다', 'alert alert-danger');
                } else {
                    // 프로필 표시
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // 프로필 지우기
        ui.clearProfile();
    }
});
