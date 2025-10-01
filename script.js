const newsContainer = document.querySelector(".js-articles-container")
const searchForm = document.querySelector(".js-search-form")
const loadMoreBtn = document.querySelector('[data-action="load-more"]')
const spinner = loadMoreBtn.querySelector(".spinner")

const API_KEY = "4330ebfabc654a6992c2aa792f3173a3";
const BASE_URL = "https://newsapi.org/v2";

let query = "cat";
let page = 1;


function fetchArticlesData() {
    const url = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}&pageSize=12&page=${page}`
    return fetch(url).then(resp => resp.json())
}

fetchArticlesData()





// 2 


function renderMarkup(data) {
    const markup = data.map((article) => {
        return `<li>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${article.urlToImage}" alt="" width="480" />
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}</p>
                <p>${article.decribtion}</p>
            </article>
            </a>
        </li>`
    }).join(" ")

    newsContainer.insertAdjacentHTML("beforeend" , markup)
}



// 3

searchForm.addEventListener("submit" , (event) => {
    event.preventDefault()

    const form = event.currentTarget
    query = form.elements.query.value

    fetchArticlesData().then(data => {
        console.log(data.articles)
        renderMarkup(data.articles)
    }
    )
    
    
})


