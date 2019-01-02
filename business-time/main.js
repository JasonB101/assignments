const navButton = document.getElementById('nav-button')
const navMenu = document.getElementById('nav-menu')
const content = document.getElementById('content')
const navItems = document.getElementsByClassName('nav-bar')
navButton.addEventListener("click", (e) => {
    if (navMenu.style.width === "") {
        navMenu.style.width = "300px"
    }
    else {
        navMenu.style.width = ""
    }
})

const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e215ccf353c643959c6fe44639bb5fc3";

function requestAPI(url){
    axios.get(url).then(response => renderObj(response.data.articles))
}
requestAPI(baseUrl)

function renderObj(articles){
    const stories = articles.slice(0, 30)

    stories.forEach(s => {
        let newsWrapper = document.createElement('div')
        let newsTitle = document.createElement('h5')
        let storyWrapper = document.createElement('div')
        let storyImage = document.createElement('img')
        let storyContent = document.createElement('p')
        let publishWrapper = document.createElement('div')
        let date = document.createElement('p')
        let publisher= document.createElement('p')
        if (s.title && s.content && s.urlToImage) {
        newsWrapper.classList = "news-wrapper"
        newsWrapper.addEventListener("click", e => {
            var win = window.open(s.url, '_blank');
            win.focus();
        })
        newsTitle.textContent = s.title.length > 75 ? s.title.substr(0, 75) + "..." : s.title
        storyWrapper.classList = "story-wrapper"
        storyImage.src = s.urlToImage
        storyImage.classList = "story-image"
        storyContent.textContent = s.content.length > 200 ? s.content.substr(0, 200) + "..." : s.content
        storyContent.classList = "story-content"
        publishWrapper.classList = "publish-wrapper"
        publisher.classList = "publisher"
        publisher.textContent = s.author || "Author Unknown"

        newsWrapper.appendChild(newsTitle)
        newsWrapper.appendChild(storyWrapper)
        newsWrapper.appendChild(publishWrapper)
        storyWrapper.appendChild(storyImage)
        storyWrapper.appendChild(storyContent)
        publishWrapper.appendChild(publisher)

        content.appendChild(newsWrapper)
        }
    })


}

