//step 1: adding even handler on button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2: get email from email field
    const email = document.getElementById('email');
    const userEmail = email.value;
    console.log(userEmail);

    //step 3: get password from password field

    const password = document.getElementById('password');
    const userPass = password.value;
    console.log(userPass);

    //step 4: Never verify email pass on client side
    if(userEmail === 'harun@gmail.com' && userPass === 'marun'){
        window.location.href = 'bank.html' ;        
    }
    else{
        alert('invalid user');
    }
})