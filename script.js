function darkMode(){
    var element = document.getElementById("container");
    element.classList.toggle("container-dark-mode");

    var button = document.getElementById("button");
    if(button.innerHTML === "Mode : Day"){
        button.innerHTML = "Mode : Night";
    }else {
        button.innerHTML = "Mode : Day";
    }
    button.classList.toggle("button-dark");
}

function unReady(){
    return window.alert('Website masih dalam proses development')
}