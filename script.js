window.addEventListener("load", ()=>{
    let nameChange = document.getElementById("mainHeading");
    nameChange.addEventListener("click", ()=>{
      if(nameChange.innerHTML == "Micah McAdoo"){
        nameChange.innerHTML = "Μιχαίας Μάκαντου";
      } else if (nameChange.innerHTML == "Μιχαίας Μάκαντου"){
        nameChange.innerHTML = "מיכה" || nameChange.innerHTML == "Who am I?";
      } else {
        nameChange.innerHTML = "Micah McAdoo";
      }
      nameChange.style.color = "rgb(34, 34, 111)";
    });
  });