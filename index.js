let svgFirst = document.getElementsByClassName("svg-2")
let flex = document.getElementsByClassName("flexproject")
let projects =  document.getElementsByClassName("project")
function revealProject(){
   flex.style.maxWidth = "50px";
   
}
projects.onclick = revealProject