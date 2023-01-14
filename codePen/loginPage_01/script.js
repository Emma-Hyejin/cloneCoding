(function(){
    "use strict"

    const change = document.getElementsByClassName("sign-form");
    const original = document.getElementsByClassName("login-form");

    document.getElementById("login").onclick = function(){
        if(change.style.display == 'none'){
            change.style.display = 'visible';
            original.style.display = 'none';
        }
    };

    document.getElementById("create").onclick = function(){
        if(original.style.display == 'none' ){
            original.style.display = 'visible';
            change.style.display = 'none';
        }
    }

});


// $(changeclick).click(function(){
//     $('.form .sign-form:visible').animate({height:"toggle", opacity:"toggle"}, "slow");
// }); 