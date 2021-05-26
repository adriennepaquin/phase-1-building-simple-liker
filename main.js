// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modal.className = "hidden"

let bodyTag = document.querySelector('body')
bodyTag.addEventListener("click", handleClick)

function handleClick(event){
  //console.log(event.target.className === "like-glyph")
  if (event.target.innerHTML === EMPTY_HEART){
    let thisId = event.target.parentNode.parentNode.parentNode.parentNode.id
    //console.log(thisId)
    mimicServerCall()
    //change heart to full heart, add .activated-heart class (make heart red))
    .then(makeRed(thisId))
    .catch()
    }
  }
  function makeRed(id){
    let heart = document.getElementById(`${id}`)
    let actualHeart = heart.querySelector('footer span')
    console.log(actualHeart)
    actualHeart.textContent = FULL_HEART
    actualHeart.className = "activated-heart"
  }
  function makeEmpty(id){
    let heart = document.getElementById(`${id}`)
    let actualHeart = heart.querySelector('footer span')
    console.log(actualHeart)
    actualHeart.textContent = EMPTY_HEART
    actualHeart.className.remove()
  }
  function error(){
    document.getElementById('modal').hidden = false
  }
    
  // change the text content of the id glyph to FULL_HEART
  
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
