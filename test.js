
var name=[1+2+3+4+5+6+7+8+9+10];
console.log(name/10);


function openNav() {
    document.getElementById("mySidenav").style.width = "170px";
    document.getElementById("main").style.marginLeft = "170px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function openNavv() {
    document.getElementById("mySidenavv").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
  }
  
  function closeNavv() {
    document.getElementById("mySidenavv").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  function formValidate(){
var namee = document.getElementById("username").value ;
var email = document.getElementById("email").value ;
var phone = document.getElementById("phone").value ;

var error = document.getElementById("error");
var text ="";


if(namee.length <3){
  text = "please enter valid username ";
error.innerHTML=text;
return false;
}

  else if(email.indexOf("@")== -1){
    text = "please enter valid email ";
    error.innerHTML=text;
    return false;

  }
  
  else if(isNaN(phone)) {
    text = "please enter valid number ";
    error.innerHTML=text;
    return false;

  }
else {
  alert("done");
  return true;
}

}

