let form = document.querySelector('form')
let message = document.querySelector("#message")




function addMovie(event){
    event.preventDefault("submit")
    let inputField = document.querySelector("input")
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let movieList = document.querySelector('ul')
    movieTitle.textContent =  inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBn = document.createElement('button')
    deleteBn.textContent = "X"
    movie.appendChild(deleteBn)
    movieList.appendChild(movie)
    deleteBn.addEventListener("click", deleteMovie)
}
function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.textContent} deleted!`
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = event.target.textContent + " " + "watched"
    } else{
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}
function revealMessage(){
    if(message.classList.contains("hide") === true){
        message.classList.toggle("hide")
    }
    setTimeout((event)=>{
        message.classList.toggle("hide")
    }, 1000)
}
form.addEventListener("submit", addMovie)


