
const start1 = document.getElementById("start")

const mainname = document.getElementById("main_name")

const nameinsert = document.getElementById("name_insert")

start1.addEventListener("click", event=> {
    start1.classList.add("hidden")
    mainname.classList.add("hidden")
    nameinsert.classList.remove("hidden")

})


const start2 = document.getElementById("name_inserted")

var name1 = ""
var name2 = ""
var name3 = ""
var name4 = ""

start2.addEventListener("click", event=> {
    name1 = document.getElementById("name1").value
    name2 = document.getElementById("name2").value
    name3 = document.getElementById("name3").value
    name4 = document.getElementById("name4").value

    nameinsert.classList.add("hidden")

    bottomsup();
})

const replay = document.getElementById('replay');
const showgamer = document.getElementById("gamer");

function bottomsup (){

    const game = document.getElementsByClassName("wrap")

    var i = 0;
    game[3].classList.add("hidden")

    var timeout = Math.floor(Math.random() * 100)

    var result = Math.floor(Math.random() * 4) +1;

    var gamer = "";
    if(result == 1){
        gamer = name1;
    }else if(result == 2){
        gamer = name2;
    }else if(result == 3){
        gamer = name3;
    }else{
        gamer = name4;
    }

    

    var div = document.createElement("div")
    div.innerText = gamer;


    setInterval(() => {
        if(i== timeout){
            
            console.log(gamer);
            showgamer.classList.remove("hidden")
            showgamer.append(div);

            replay.classList.remove("hidden")

            clearInterval;

        }else{
            if(i%10 == 1){
                game[0].classList.remove("hidden")
                game[9].classList.add("hidden")
                i++
            }else if(i%10 == 2){
                game[1].classList.remove("hidden")
                game[0].classList.add("hidden")
                i++
            }else if(i%10 == 3){
                game[2].classList.remove("hidden")
                game[1].classList.add("hidden")
                i++
            }else if(i%10 == 4){
                game[3].classList.remove("hidden")
                game[2].classList.add("hidden")
                i++
            }else if(i%10 == 5){
                game[4].classList.remove("hidden")
                game[3].classList.add("hidden")
                i++
            }else if(i%10 == 6){
                game[5].classList.remove("hidden")
                game[4].classList.add("hidden")
                i++
            }else if(i%10 == 7){
                game[6].classList.remove("hidden")
                game[5].classList.add("hidden")
                i++
            }else if(i%10 == 8){
                game[7].classList.remove("hidden")
                game[6].classList.add("hidden")
                i++
            }else if(i%10 == 9){
                game[8].classList.remove("hidden")
                game[7].classList.add("hidden")
                i++
            }else{
                game[9].classList.remove("hidden")
                game[8].classList.add("hidden")
                i++
            }
        }

    }, 100);


}

replay.addEventListener("click" , event=> {
    var gamers = showgamer.children;
    for( var i =0; i<gamers.length; i++){
        gamers[i].classList.add("hidden")
    }

    showgamer.classList.add("hidden");
    replay.classList.add("hidden");
    bottomsup();
})