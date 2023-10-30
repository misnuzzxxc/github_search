class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // UI에 프로필 표시
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">프로필 보기</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">공개 저장소: ${user.public_repos}</span>
                        <span class="badge badge-secondary">공개 Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">팔로워: ${user.followers}</span>
                        <span class="badge badge-info">팔로잉: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">회사: ${user.company}</li>
                            <li class="list-group-item">웹사이트/블로그: ${user.blog}</li>
                            <li class="list-group-item">위치: ${user.location}</li>
                            <li class="list-group-item">가입일: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">최신 저장소</h3>
            <div id="repos"></div>
        `;
    }
    // 사용자 리포지토리 표시
    showRepos(repos) {
        let output = '';
        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">스타: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">팔로워: ${repo.watchers_count}</span>
                            <span class="badge badge-success">포크: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // 리포지토리 표시
        document.getElementById('repos').innerHTML = output;
    }
    // 경고 메시지 표시
    showAlert(message, className) {
        // 남아 있는 모든 경고 지우기
        this.clearAlert();
        // DIV 생성
        const div = document.createElement('div');
        // 클래스 추가
        div.className = className;
        // 텍스트 추가
        div.appendChild(document.createTextNode(message));
        // 부모 요소 가져오기
        const container = document.querySelector('.searchContainer');
        // 검색 상자 가져오기
        const search = document.querySelector('.search');
        // 경고 삽입
        container.insertBefore(div, search);
        // 3초 후에 제거
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    // 경고 메시지 지우기
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    // 프로필 지우기
    clearProfile() {
        this.profile.innerHTML = '';
    }
}
