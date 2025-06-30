function saklar() {
  let toggle1 = document.getElementById('toggle1')
  let toggle2 = document.getElementById('toggle2')
  let toggle3 = document.getElementById('toggle3')


  let bohlam1 = document.getElementById('bohlam1');
  let bohlam2 = document.getElementById('bohlam2');
  let bohlam = document.getElementById('bohlam3');

  if (toggle1.checked) {
    console.log('cihuyy')
    bohlam1.src = "asesth/images/on.png"
  } else {
    bohlam1.src = "asesth/images/off.png";
  }
  if (toggle2.checked) {
    console.log('cihuyy')
    bohlam2.src = "asesth/images/on.png"
  } else {
    bohlam2.src = "asesth/images/off.png";
  }
  if (toggle3.checked) {
    console.log('cihuyy')
    bohlam3.src = "asesth/images/on.png"
  } else {
    bohlam3.src = "asesth/images/off.png";
  }
  /* if (action == 'on') {
    if (lamp == 1) {
      bohlam1.src = "asesth/images/on.png"
    }
    if (lamp == 2) {
      bohlam2.src = "asesth/images/on.png"
    }
    if (lamp == 3) {
      bohlam3.src = "asesth/images/on.png"
    }
  }
  if (action == 'of') {
    if (lamp == 1) {
      bohlam1.src = "asesth/images/off.png";
    }
    if (lamp == 2) {
      bohlam2.src = "asesth/images/off.png";
    }
    if (lamp == 3) {
      bohlam3.src = "asesth/images/off.png";
    }
  }

  /*panggil audio dan menambahkannya*/
  let audio = document.getElementById('my')
  audio.play();
  /*end*/
}