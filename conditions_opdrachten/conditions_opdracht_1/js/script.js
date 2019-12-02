//javascript code

function myFunction()
{
    var myInput=document.getElementById("myInput").value;
    if (myInput < 500){
        document.getElementById("myOutput").innerHTML="Sorry, er is niks op uw bankrekening gestort!";
    }
    if (myInput == 500){
        document.getElementById("myOutput").innerHTML="Er is 500eu gestort op uw bankrekening!"; 
    }
    if (myInput > 500){
        document.getElementById("myOutput").innerHTML="Er is 500eu plus een bonus gestort op uw bankrekening!";
    }  
}