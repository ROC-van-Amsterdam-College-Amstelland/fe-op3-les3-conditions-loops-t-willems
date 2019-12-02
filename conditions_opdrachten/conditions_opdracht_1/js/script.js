//javascript code

function myFunction()
{
    var myInput=document.getElementById("myInput").value;
    if (myInput < 25){
        document.getElementById("myOutput").innerHTML="Sorry, je hebt te weinig saldo!";
    }
    if (myInput >= 25){
        document.getElementById("myOutput").innerHTML="Je hebt voldoende saldo om € 25 op te nemen"; 
    }
}