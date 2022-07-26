
// hamburger
function myburger(){
    let list = document.getElementById("list");
    let burger = document.getElementById("burger");
    let cross = document.getElementById("cross");
  
    // console.log(list);
    if(list.style.height === "250px"){
      list.style.height = "0";
      burger.style.display = "block";
      cross.style.display = "none";
    } else{
      list.style.height = "250px";
      burger.style.display = "none";
      cross.style.display = "block";
    }
  };
  // ----------------------------------------------------------------
