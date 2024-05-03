//Detecting button press
var keysTotal = document.querySelectorAll("button").length;

for (let i = 0; i < keysTotal; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

//Detecting key press
document.addEventListener("keydown", (event)=>{
    makeSound(event.key)
    });

function makeSound(key){

    switch (key) {
        case "a":
          var key1 = new Audio("./sounds/key01.mp3");
          key1.play();
          break;
        case "w":
          var key2 = new Audio("./sounds/key02.mp3");
          key2.play();
          break;
        case "s":
          var key3 = new Audio("./sounds/key03.mp3");
          key3.play();
          break;
        case "e":
          var key1 = new Audio("./sounds/key04.mp3");
          key1.play();
          break;
        case "d":
          var key1 = new Audio("./sounds/key05.mp3");
          key1.play();
          break;
        case "r":
          var key1 = new Audio("./sounds/key06.mp3");
          key1.play();
          break;
        case "f":
          var key1 = new Audio("./sounds/key07.mp3");
          key1.play();
          break;
        case "z":
          var key1 = new Audio("./sounds/key08.mp3");
          key1.play();
          break;
        case "x":
          var key1 = new Audio("./sounds/key09.mp3");
          key1.play();
          break;
        case "c":
          var key1 = new Audio("./sounds/key10.mp3");
          key1.play();
          break;
        case "v":
          var key1 = new Audio("./sounds/key11.mp3");
          key1.play();
          break;
        case "b":
          var key1 = new Audio("./sounds/key12.mp3");
          key1.play();
          break;
    
        case "j":
          var key1 = new Audio("./sounds/key13.mp3");
          key1.play();
          break;
        case "i":
          var key1 = new Audio("./sounds/key14.mp3");
          key1.play();
          break;
        case "k":
          var key1 = new Audio("./sounds/key15.mp3");
          key1.play();
          break;
        case "o":
          var key1 = new Audio("./sounds/key16.mp3");
          key1.play();
          break;
        case "l":
          var key1 = new Audio("./sounds/key17.mp3");
          key1.play();
          break;
        case "p":
          var key1 = new Audio("./sounds/key18.mp3");
          key1.play();
          break;
        case ";":
          var key1 = new Audio("./sounds/key19.mp3");
          key1.play();
          break;
        case "n":
          var key1 = new Audio("./sounds/key20.mp3");
          key1.play();
          break;
        case "m":
          var key1 = new Audio("./sounds/key21.mp3");
          key1.play();
          break;
        case ",":
          var key1 = new Audio("./sounds/key22.mp3");
          key1.play();
          break;
        case ".":
          var key1 = new Audio("./sounds/key23.mp3");
          key1.play();
          break;
        case "/":
          var key1 = new Audio("./sounds/key24.mp3");
          key1.play();
          break;
        default:
          console.log(buttonInnerHTML);
          break;
      }
}

function handleClick() {
  var keyInnerHTML = this.innerHTML;
    makeSound(keyInnerHTML);
}
