let firstName=document.getElementById("firstName");
let email=document.getElementById("email");
let number=document.getElementById("number");

function validateInput(){
    if(firstName.value.trim()===""){
        onError(firstName,"Nama Jangan Kosong.");
    }else{
        onSuccess(firstName);
    }
    if(email.value.trim()===""){
        onError(email,"Email Jangan Kosong.");
    }else{
        onSuccess(email);
    }

    if(number.value.trim()===""){
        onError(number,"Nomor Jangan Kosong.");
    }else{
        onSuccess(number);
    }
}

document.getElementById("button1")
.addEventListener("click",(event)=>{
    // event.preventDefault();
    validateInput();
});


function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    messageEle.style.color="red"; 
    parent.classList.add("error");
    parent.classList.remove("success");

}




