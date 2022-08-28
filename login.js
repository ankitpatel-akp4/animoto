
document.querySelector("#log_in").addEventListener("click",checkUserdata);

function checkUserdata(event){
    event.preventDefault();
    
    console.log(67674)
    let check = JSON.parse(localStorage.getItem("UserdataArr"));
    let checkemail = document.querySelector("#email").value;
    let checkpass = document.querySelector("#password").value;
    window.location = './index.html'
    alert("Loged in Successfully" );
    
    
}


