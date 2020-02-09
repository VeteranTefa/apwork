var button=document.getElementById('btn');
button.addEventListener("click",function(e){
    e.target.setAttribute("style","color:white");
});
var im=document.getElementsByClassName('imgs')[0];
im.addEventListener("mouseover",function(e){
    e.target.setAttribute("style","border-radius:25px");
});
im.addEventListener("mouseout",function(e){
    e.target.setAttribute("style","border-radius:50%");
});
var im=document.getElementsByClassName('imgs')[1];
im.addEventListener("mouseover",function(e){
    e.target.setAttribute("style","border-radius:25px");
});
im.addEventListener("mouseout",function(e){
    e.target.setAttribute("style","border-radius:50%");
});