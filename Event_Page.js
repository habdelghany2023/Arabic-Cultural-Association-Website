function myFnc(e){
  e.classList.toggle("show");
  let elem = document.getElementById("navID"),Style = window.getComputedStyle(elem),right=Style.getPropertyValue("right");
  if(right == "0px"){
    elem.style.right = "-260px";
  }
  else{
    elem.style.right = "0px";
  }
  /*if(right == "0px"){
    elem.style.right = "-260px";
  }
  else{
    elem.style.right = "0px";
  }*/
}
