
const url = "https://openapi.naver.com/v1/search/news.json?query='경기도 음주운전사고'";

fetch(url, {
    method: "GET", 
    headers: {
        "X-Naver-Client-Id": "A6XbDyxDQmuFSdGiXFMw", 
        "X-Naver-Client-Secret": "ezDxpdqD7d"
    }
})
.then(response => response.json()) 
.then(data => {
    const newsContainer = document.getElementById('news-container'); 
    data.items.forEach((item) => { 
        const articleLink = document.createElement('a');
        articleLink.href = item.link;
        articleLink.className = 'article-title';
        articleLink.textContent = item.title;
        newsContainer.appendChild(articleLink);

        const articleDate = document.createElement('p');
        articleDate.className = 'article-date';
        articleDate.textContent = item.pubDate;
        newsContainer.appendChild(articleDate);
    });
})
.catch(error => console.error('Error:', error));