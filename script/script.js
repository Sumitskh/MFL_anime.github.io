
// hamburger
function myburger(){
    let list = document.getElementById("list");
    let burger = document.getElementById("burger");
    let cross = document.getElementById("cross");
  
    // console.log(list);
    if(list.style.display === "flex"){
      list.style.display = "none";
      burger.style.display = "block";
      cross.style.display = "none";
    } else{
      list.style.display = "flex";
      burger.style.display = "none";
      cross.style.display = "block";
    }
  }