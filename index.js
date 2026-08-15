

document.addEventListener("click", function(e){
    if(e.target.dataset.home){
        window.location.href = "index.html"
    }else if(e.target.dataset.about){
        window.location.href = "about.html"
    }
})