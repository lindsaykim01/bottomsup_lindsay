window.onload = function(){

    const rg = document.querySelectorAll(".wrap").forEach(element => {
        show(element,hidden(element));
    });


}


function show (element, callback){
    element.classList.remove("hidden");
    console.log("1");
    callback();
}

function hidden (element){
    element.classList.add("hidden");
    console.log("2");
}