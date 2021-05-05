
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
    console.log(name1)
    console.log(name2)
    console.log(name3)
    console.log(name4)
    bottomsup();
})




function bottomsup (){

    var show = 0;
    var nextshow = 1;

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


    setInterval(() => {
        if(i== timeout){
            clearInterval;
            const showgamer = document.getElementById("gamer");
            showgamer.classList.remove("hidden")
            showgamer.innerText = gamer;
        

        }else{
            if(i%4 == 1){
                game[0].classList.remove("hidden")
                game[3].classList.add("hidden")
                i++
            }else if(i%4 == 2){
                game[1].classList.remove("hidden")
                game[0].classList.add("hidden")
                i++
            }else if(i%4 == 3){
                game[2].classList.remove("hidden")
                game[1].classList.add("hidden")
                i++
            }else{
                game[3].classList.remove("hidden")
                game[2].classList.add("hidden")
                i++
            }
        }

    }, 100);



}