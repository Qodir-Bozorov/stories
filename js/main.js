var siteMain = document.querySelector(".site-main")
var newsList = document.querySelector(".news-list")
var allList = document.querySelector(".all-list")
var newsList = document.querySelector(".news-list")
var body = document.querySelector("body")

function cardRenderer(element, elHtml) {
  var cardEl = document.createElement("li")
  cardEl.classList.add("card")

  cardEl.innerHTML = `<img src="${element.thumb}" alt="300X500" width="200" class="card-image">
  <div class="texts">
    <span class="title">${element.title}</span>
    <span class="author">${element.author}</span>
    <div class="wrapper">
      <span class="pages">${element.pages}</span>
      <span class="audio">${element.audioNum}</span>
    </div>
    </div>`

  var readBtn = document.createElement("a")
  readBtn.setAttribute("href", "#opened")
  readBtn.classList.add("read-btn")
  readBtn.textContent = "Read"

  readBtn.addEventListener("click", function () {
    var full = document.createElement("div")
    full.classList.add("full")

    full.innerHTML = `
    <iframe
      src="${element.pdf}"
      width="100%" height="100%">
    </iframe>
    <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" class="audio-control" controls></audio>`

    var exitBtn = document.createElement("button")
    exitBtn.textContent = "Exit"
    exitBtn.classList.add("exit-btn")

    exitBtn.addEventListener("click", function () {
      var fuller = document.querySelector(".full")
      fuller.remove()
    })

    full.appendChild(exitBtn)


    body.appendChild(full)
  })

  cardEl.appendChild(readBtn)

  elHtml.appendChild(cardEl)

}

// newsList.innerHTML = ""

for (let i = 0; i < stories.length; i++) {
  const element = stories[i];
  cardRenderer(element, newsList)
}
