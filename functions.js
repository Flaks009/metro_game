import stations from "station.js"

function timer(seconds){
    
    var countdown = setInterval(function() {
      var timer = document.getElementById("timer");
      if (seconds <= 0) {
        clearInterval(countdown);
        alert("Tempo Esgotado!");
        input.disabled = true;
      } else {
        var minutes = Math.floor(seconds / 60 % 60);
        var seconds_t= Math.floor(seconds % 60);
        timer.innerHTML = "Tempo restante: " + minutes + " minutos e " + seconds_t + " segundos.";
        seconds--;
      }
    }, 1000); // Atualiza a cada segundo
}

function active_mode(){

  const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
  
  let mode = params.mode
  
  var cptm_group = document.querySelector("*[id='CPTM']");
  var linha_8 = document.querySelector("*[id='Linha8']");     
  var linha_12 = document.querySelector("*[id='Linha12']");
  var linha_13 = document.querySelector("*[id='Linha13']");
  var linha_10 = document.querySelector("*[id='Linha10']");
  var linha_7 = document.querySelector("*[id='Linha7']");
  var linha_11 = document.querySelector("*[id='Linha11']");
  var linha_9 = document.querySelector("*[id='Linha9']");

  if (mode == "CPTM") {
      console.log("CPTM Mode");
      cptm_group.style.display="Block";
      linha_8.style.display="Block";
      linha_12.style.display="Block";
      linha_13.style.display="Block";
      linha_10.style.display="Block";
      linha_7.style.display="Block";
      linha_11.style.display="Block";
      linha_9.style.display="Block";
  } else {
      console.log("Metro Only mode");
      cptm_group.style.display="None";
      linha_8.style.display="None";
      linha_12.style.display="None";
      linha_13.style.display="None";
      linha_10.style.display="None";
      linha_7.style.display="None";
      linha_11.style.display="None";
      linha_9.style.display="None";
  }
}

function searchValues(e) {
  let guess_string = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  guess_string = guess_string.replace(regex, "").replace(/\s{2,}/g," ");;
  guess_string = guess_string.trim();

  for (const [key, value] of Object.entries(stations)) {
      if (value.includes(guess_string)) {
          let station = document.getElementById(key);
          station.style.display="Block";
          input.value = "";
      }
  }
}