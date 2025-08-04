let projectData = []

$.ajax({
    url: './assets/data/practices.json',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        projectData = data;
        renderProjects();
    },
    error: function(error) {
        console.error(error);
    }
});

function renderProjects(){
    let projectList = document.querySelector('.main')
    projectData.forEach(p => {
        let img = p.images || "./assets/images/test-web.png.png";
        let endDate = p["end-date"] || "進行中";
        let projectHtml = `
            <div class="main-content">
                    <div class="main-content__img"><img src="${img}" alt="${p.title}"></div>
                    <div class="main-content__text">
                        <h1>${p.title}</h1>
                        <p class="tag-container" data-id="${p.id}"></p>
                        <p>${p.description}</p>
    
                        <div class="main-content__text-date">
                            <span>開始日期：${p["start-date"]}</span>
                            <span>結束日期：${endDate}</span>
                        </div>
                        <div class="main-content__text-link">
                            <span>狀態：${p.status}</span>
                            <a href="${p.URL}" target="_blank">前往網頁</a>
                        </div>
                    </div>
        `;


        projectList.innerHTML += projectHtml;
        let tagList = document.querySelector(`.tag-container[data-id="${p.id}"]`);
        tagList.innerHTML += p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    })
}