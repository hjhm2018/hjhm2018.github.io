//Index JS
var username = document.getElementById('username');

function login(){
    sessionStorage.setItem("username", username.value);
    window.location.href = "games.html"
}

// Game 2 JS

var game2 = document.getElementById("game2");

var result = document.getElementById("result");

game2.innerHTML = "Hello " + sessionStorage.getItem("username") + "! This is game 2. Are you ready?!";

var primeNumber = document.getElementById("primeNumber");

primeNumber.onkeyup = ()=>{

    if(primeNumber.value < 0){
        result.innerHTML = "Number must not be negative";
    }else if(!primeNumber.value){
        result.innerHTML= "";
    }else if((prime_number(primeNumber.value) == false)){
        result.innerHTML= "Not a prime number";
    }else if(prime_number(primeNumber.value) == true){
        result.innerHTML= "Prime number";
    }
}

function prime_number(n){

        if (n < 2)
        {
            return false;
        }
        else if(n === 2)
        {
            return true;
        }else if(isNaN(n))
        {
            return false;
        }
        else
        {
            for(var x = 2; x < n; x++)
            {
            if(n % x === 0)
            {
                return false;
            }
            }
            return true;  
        }
        }

prime_number(primeNumber.value);
