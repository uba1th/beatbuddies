let userErr = document.getElementById('userErr');
let mailErr = document.getElementById('mailErr');
let numErr = document.getElementById('numErr');
let textErr = document.getElementById('textErr');
let validateErr =  document.getElementById('validateErr');


const validateName=()=>{

    const uname = document.getElementById('username').value;

    // alert(uname);

    

    let namePattern = /^([a-zA-z]{1}[\.][\s]?)?([a-zA-z]{3,}(\s)?)(\s)([a-zA-Z]{3,})+(?:[\s]?[\.]?[a-zA-z]?)?$/
 


    if(!uname.match(namePattern)){
        userErr.innerText="Must enter your Full Name";
        userErr.style.color="red";
        return false;
    } 
        userErr.innerText="your name is verified";
        userErr.style.color="green";
        return true;


}



const validateMail=()=>{

    const umail = document.getElementById('usermail').value;

    // let mailPattern = /^(a-zA-Z)+([0-9._-]?)+@[a-zA-z]{4,6}\.[a-zA-Z]{2,3}$/
    let mailpattern = /^[a-zA-Z]+([0-9._-]?)+@[a-zA-Z]{4,6}\.[a-zA-Z]{2,3}$/

    if(!umail.match(mailpattern)){
        mailErr.innerText="enter mail ID properly";
        mailErr.style.color="red";
        return false;
    } 
        mailErr.innerText="your mail is verified";
        mailErr.style.color="green";
        return true;

    
}

const validateNumber=()=>{

    let unumber = document.getElementById('usernumber').value;

    let numberPattern = /^([0-9]{10})$/

    if(!unumber.match(numberPattern)){
        numErr.innerText="Must contain 10 digits";
        numErr.style.color="red";
        return false;
    } 
        numErr.innerText="your number is verified";
        numErr.style.color="green";
        return true;



}


const validateText=()=>{

    let textBox = document.getElementById('umsg').value;
    // alert(textBox)
    let textPattern = /^[(a-zA-Z0-9\s\.!?.,)]{20,100}$/

    if(!textBox.match(textPattern)){
        textErr.innerText="Must contain more than 20 charachters";
        textErr.style.color="red";
        return false;
    }
        textErr.innerText="Thank you for your feedback";
        textErr.style.color="green";
        return true;


}


const validateForm=()=>{

    if(!validateName()||!validateMail()||!validateNumber()||!validateText()){
        validateErr.innerText="please fill all the fields"
        validateErr.style.color="red";
        return false;
    }else{
        // validateErr.innerText="your form is verified"
        // validateErr.style.color="green";
        alert("your form is submitted successfully");
        return true;
    }

}

