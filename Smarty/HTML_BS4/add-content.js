function fresidential()
{
var puertasPorpiso = 0;
var ascensores = 0;
var columnas = 1;
totalAscensores = 0;
 document.getElementById("op4").style.display = "none"; 
    document.getElementById("op3").style.display = "none";    
 document.getElementById("op2").style.display = "none"; 
document.getElementById("n2").style.display = "none";
document.getElementById("n3").style.display = "none";
document.getElementById("n4").style.display="none";  
 
var numeroDeApartments =  document.getElementById("napartementsR").value;    
 var  numeroDeFloors= document.getElementById("nfloorsR").value;   
  var numeroDeBasements = document.getElementById("nbasementsR").value; 
  
  
  puertasPorpiso = Math.ceil (numeroDeApartments / (numeroDeFloors-numeroDeBasements));
 
  ascensores = Math.ceil (puertasPorpiso/6);

  if (numeroDeFloors>20) {
         columnas = Math.ceil (numeroDeFloors/20);
  }


totalAscensores = ascensores * columnas;
 
 
  document.getElementById("result").innerHTML = totalAscensores;   

}

function fcomercial(){
        totalAscensores = 0;
        document.getElementById("op4").style.display = "none"; 
        document.getElementById("op3").style.display = "none";    
     document.getElementById("op1").style.display = "none"; 
    document.getElementById("n1").style.display = "none";
    document.getElementById("n3").style.display = "none";
    document.getElementById("n4").style.display = "none";  
     
    var numeroDeBusiness =  document.getElementById("nbusinessC").value;    
    var  numeroDeFloors= document.getElementById("nfloorsC").value;   
    var numeroDeBasements = document.getElementById("nbasementsC").value; 
      var numeroDeParkings = document.getElementById("nparkingsC").value;
      var  numeroElevatorsDeploye = document.getElementById("nelevatorsC").value
      
      
      totalAscensores = numeroElevatorsDeploye;
      document.getElementById("result").innerHTML = totalAscensores;
}

   function fcorporate (){
        
        
        document.getElementById("op4").style.display = "none"; 
        document.getElementById("op2").style.display = "none";    
     document.getElementById("op1").style.display = "none"; 
    
     document.getElementById("n1").style.display = "none";
    document.getElementById("n2").style.display = "none";
    document.getElementById("n4").style.display = "none";  
     
    var numeroDeSeparateCompanies = parseInt(document.getElementById("ncompaniesCorp").value +"<br>");    
    var  numeroDeFloors= parseInt(document.getElementById("nfloorsCorp").value +"<br>");   
    var numeroDeBasements = parseInt (document.getElementById("nbasementsCorp").value +"<br>"); 
      var numeroDeParkings = parseInt(document.getElementById("nparkingsCorp").value +"<br>");
      var  numeroOccupantpf = parseInt(document.getElementById("noccupantsCorp").value +"<br>");

      
       totalDoccupants = Math.ceil(numeroDeFloors * numeroOccupantpf);
       ascensores = Math.ceil(totalDoccupants/1000);
        totalColumnas = Math.ceil(numeroDeFloors/20);
        ascensoresPorcolumnas = Math.ceil(ascensores/totalColumnas);
        totalAscensores = Math.ceil(ascensoresPorcolumnas * totalColumnas);
        
        document.getElementById("result").innerHTML = totalAscensores;
 }

        function fhybride(){
               
                document.getElementById("op3").style.display = "none"; 
                document.getElementById("op2").style.display = "none";    
             document.getElementById("op1").style.display = "none"; 
            
             document.getElementById("n1").style.display = "none";
            document.getElementById("n2").style.display = "none";
            document.getElementById("n3").style.display = "none";  
         
          
            var numeroDeSeparateCompanies =   parseInt(document.getElementById("ncompaniesCorp").value +"<br>");    
            var  numeroDeFloors= parseInt(document.getElementById("nfloorsCorp").value +"<br>");   
            var numeroDeBasements = parseInt (document.getElementById("nbasementsCorp").value +"<br>"); 
            var numeroDeParkings = parseInt(document.getElementById("nparkingsCorp").value +"<br>");
            var  numeroOccupantpf = parseInt(document.getElementById("noccupantsCorp").value +"<br>");
           
            var numeroDeSeparateCompanies =   parseInt(document.getElementById("ndistbusinessB").value +"<br>");    
            var  numeroDeFloors= parseInt(document.getElementById("nfloorsB").value +"<br>");   
            var numeroDeBasements = parseInt (document.getElementById("nbasementsB").value +"<br>"); 
            var numeroDeParkings = parseInt(document.getElementById("nparkingsB").value +"<br>");
            var  numeroMaxoccupantpf = parseInt(document.getElementById("noccupantsB").value +"<br>");
            var numeroHservice = parseInt(document.getElementById("nhoursB").value +"<br>");
            
            
            
            totalDoccupants = Math.ceil(numeroDeFloors * numeroMaxoccupantpf );
            ascensores = Math.ceil(totalDoccupants/1000);
             totalColumnas = Math.ceil(numeroDeFloors/20);
             ascensoresPorcolumnas = Math.ceil(ascensores / totalColumnas);
             totalAscensores = Math.ceil(ascensoresPorcolumnas * totalColumnas);
     
     
           
           document.getElementById("result").innerHTML = totalAscensores;


        
       
        }

function standard(){
  var precio = 7565;
  var porcentage = 10;
  var totalPrice = 0;
  var subtotalPrice = 0;
  var subtotalPrice2 = 0;
  document.getElementById("result2").innerHTML =  precio +" "+ "$" + " " +"AND"+" " + porcentage + "% INSTALLATION FEES";
  subtotalPrice = totalAscensores * precio;
  subtotalPrice2 = subtotalPrice * 0.1;
  totalPrice = subtotalPrice + subtotalPrice2;
  document.getElementById("result3").innerHTML = totalPrice+" "+"$";

}
function premium(){
  var precio = 12345;
  var porcentage = 13;
  var totalPrice = 0;
  var subtotalPrice = 0;
  var subtotalPrice2 = 0;
  document.getElementById("result2").innerHTML =  precio +" "+ "$" + " " +"AND"+" " + porcentage + "% INSTALLATION FEES";
  subtotalPrice = totalAscensores * precio;
  subtotalPrice2 = subtotalPrice * 0.13;
  totalPrice = subtotalPrice + subtotalPrice2;
  document.getElementById("result3").innerHTML = totalPrice+" "+"$";

}
function exellium(){
  var precio = 15400;
  var porcentage = 16;
  var totalPrice = 0;
  var subtotalPrice = 0;
  var subtotalPrice2 = 0;
  document.getElementById("result2").innerHTML =  precio +" "+ "$" + " " +"AND"+" " + porcentage + "% INSTALLATION FEES";
  subtotalPrice = totalAscensores * precio;
  subtotalPrice2 = subtotalPrice * 0.16;
  totalPrice = subtotalPrice + subtotalPrice2;
  document.getElementById("result3").innerHTML = totalPrice+" "+"$";

  
}
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
