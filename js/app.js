//Declaramos variables
var operandoa;
var operandob;
var operacion;
var contador=0;

function init(){
  //variables
  var resultado = document.getElementById('display');
  var punto = document.getElementById("punto");
  var signo = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var reset = document.getElementById('reset');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');

  //Eventos de click
  uno.onclick = function(e){
     
      if(resultado.textContent == 0)
      {
      	resultado.textContent = "1";
      }else{
      	 resultado.textContent = resultado.textContent + "1";
      }
  }

  uno.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  uno.style.width = "72px";
  uno.style.height = "66px";
  };

  uno.onmousedown = function(e) {
  startTime = new Date();
     uno.style.width = "82px";
     uno.style.height = "76px";
  }; 
  
  /*Cuando se haga clic*/
  
  dos.onclick = function(e){
      if(resultado.textContent == 0)
      {
      	resultado.textContent = "2";
      }else{
      	 resultado.textContent = resultado.textContent + "2";
      }
  }

  dos.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  dos.style.width = "72px";
  dos.style.height = "66px";
  };

  dos.onmousedown = function(e) {
  startTime = new Date();
     dos.style.width = "82px";
     dos.style.height = "76px";
  }; 


  tres.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "3";
      }else{
      	 resultado.textContent = resultado.textContent + "3";
      }
  }

  tres.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  tres.style.width = "72px";
  tres.style.height = "66px";
  };

  tres.onmousedown = function(e) {
  startTime = new Date();
     tres.style.width = "82px";
     tres.style.height = "76px";
  }; 

  cuatro.onclick = function(e){
      if(resultado.textContent == 0)
      {
      	resultado.textContent = "4";
      }else{
      	 resultado.textContent = resultado.textContent + "4";
      }
  }

  cuatro.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  cuatro.style.width = "72px";
  cuatro.style.height = "66px";
  };

  cuatro.onmousedown = function(e) {
  startTime = new Date();
     cuatro.style.width = "82px";
     cuatro.style.height = "76px";
  }; 

  cinco.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "5";
      }else{
      	 resultado.textContent = resultado.textContent + "5";
      }
  }

  cinco.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  cinco.style.width = "72px";
  cinco.style.height = "66px";
  };

  cinco.onmousedown = function(e) {
  startTime = new Date();
     cinco.style.width = "82px";
     cinco.style.height = "76px";
  }; 

  seis.onclick = function(e){
      if(resultado.textContent == 0)
      {
      	resultado.textContent = "6";
      }else{
      	 resultado.textContent = resultado.textContent + "6";
      }
  }

  seis.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  seis.style.width = "72px";
  seis.style.height = "66px";
  };

  seis.onmousedown = function(e) {
  startTime = new Date();
     seis.style.width = "82px";
     seis.style.height = "76px";
  }; 

  siete.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "7";
      }else{
      	 resultado.textContent = resultado.textContent + "7";
      }
  }

  siete.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  siete.style.width = "72px";
  siete.style.height = "66px";
  };

  siete.onmousedown = function(e) {
  startTime = new Date();
     siete.style.width = "82px";
     siete.style.height = "76px";
  };

  ocho.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "8";
      }else{
      	 resultado.textContent = resultado.textContent + "8";
      }
  }

  ocho.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  ocho.style.width = "72px";
  ocho.style.height = "66px";
  };

  ocho.onmousedown = function(e) {
  startTime = new Date();
     ocho.style.width = "82px";
     ocho.style.height = "76px";
  };

  nueve.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "9";
      }else{
      	 resultado.textContent = resultado.textContent + "9";
      }
  }

  nueve.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  nueve.style.width = "72px";
  nueve.style.height = "66px";
  };

  nueve.onmousedown = function(e) {
  startTime = new Date();
     nueve.style.width = "82px";
     nueve.style.height = "76px";
  };

  cero.onclick = function(e){
  	if(resultado.textContent == 0)
      {
      	resultado.textContent = "0";
      }else{
      	 resultado.textContent = resultado.textContent + "0";
      }
  }

  cero.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  cero.style.width = "72px";
  cero.style.height = "66px";
  };

  cero.onmousedown = function(e) {
  startTime = new Date();
     cero.style.width = "82px";
     cero.style.height = "76px";
  };

  reset.onclick = function(e){
      resetear(resultado);
  }

  reset.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  reset.style.width = "72px";
  reset.style.height = "66px";
  };

  reset.onmousedown = function(e) {
  startTime = new Date();
     reset.style.width = "82px";
     reset.style.height = "76px";
  };


  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar(resultado);
  }

  suma.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  suma.style.width = "80px";
  suma.style.height = "132px";
  };

  suma.onmousedown = function(e) {
  startTime = new Date();
     suma.style.width = "85px";
     suma.style.height = "135px";
  };

  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar(resultado);
  }

  resta.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  resta.style.width = "72px";
  resta.style.height = "66px";
  };

  resta.onmousedown = function(e) {
  startTime = new Date();
     resta.style.width = "82px";
     resta.style.height = "76px";
  };

  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar(resultado);
  }

  multiplicacion.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  multiplicacion.style.width = "72px";
  multiplicacion.style.height = "66px";
  };

  multiplicacion.onmousedown = function(e) {
  startTime = new Date();
     multiplicacion.style.width = "82px";
     multiplicacion.style.height = "76px";
  };

  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar(resultado);
  }

  division.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  division.style.width = "72px";
  division.style.height = "66px";
  };

  division.onmousedown = function(e) {
  startTime = new Date();
     division.style.width = "82px";
     division.style.height = "76px";
  };

  punto.onclick = function (e){

    if(resultado.textContent == 0)
      {
        resultado.textContent = "0";
      }else{

       if(contador == 0){
         resultado.textContent = resultado.textContent + ".";
         contador++; 
       }
         
      }
  }

  punto.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  punto.style.width = "72px";
  punto.style.height = "66px";
  };

  punto.onmousedown = function(e) {
  startTime = new Date();
     punto.style.width = "82px";
     punto.style.height = "76px";
  };

  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver(operacion, operandoa, operandob, resultado);
  }

  igual.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  igual.style.width = "72px";
  igual.style.height = "66px";
  };

  igual.onmousedown = function(e) {
  startTime = new Date();
     igual.style.width = "82px";
     igual.style.height = "76px";
  };

  signo.onclick = function(e){
     if(resultado.textContent == 0)
      {
        resultado.textContent = "-";
      }else{
        if(contador==0){
          resultado.textContent = "-"+resultado.textContent; 
          contador++;
        }else{
          resultado.textContent = "0";
        }
      }
  }

  signo.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  signo.style.width = "72px";
  signo.style.height = "66px";
  };

  signo.onmousedown = function(e) {
  startTime = new Date();
     signo.style.width = "82px";
     signo.style.height = "76px";
  };

  raiz.onclick = function(e){

  }

  raiz.onmouseup = function(e) {
  endTime = new Date();
  var timeDiff = endTime - startTime; 
  raiz.style.width = "72px";
  raiz.style.height = "66px";
  };

  raiz.onmousedown = function(e) {
  startTime = new Date();
     raiz.style.width = "82px";
     raiz.style.height = "76px";
  };


function limpiar(resultado){
  resultado.textContent = "";
  contador=0;
}

function resetear(resultado){
  resultado.textContent = "0";
  operandoa = 0;
  operandob = 0;
  contador = 0;
  operacion = "";
}

function resolver(operacion, operandoa, operandob, resultado){

  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      res =  res.toFixed(6);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      res =  res.toFixed(6);
      break;
  }
  resetear(resultado);

  resultado.textContent = res;

}

function cambiaTamanio(uno){
  uno.width = 200;
  uno.height = 200;
}
}
window.onload = init;

