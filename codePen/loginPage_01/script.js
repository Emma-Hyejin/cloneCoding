function test1(){
    const one = document.getElementsByClassName('login-form')[0];
    const two = document.getElementsByClassName('sign-form')[0];

    one.style.display = "none";
    two.style.display ="block";

}

function test2(){
    const one = document.getElementsByClassName('login-form')[0];
    const two = document.getElementsByClassName('sign-form')[0];

    one.style.display = "block";
    two.style.display = "none";
}