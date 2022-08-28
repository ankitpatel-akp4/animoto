let data= JSON.parse(localStorage.getItem("vedeo"));
document.querySelector("#h1").innerText=data.title;
document.querySelector("#p1").innerText=data.details;
document.querySelector("video").src=data.vedeo;
document.queryCommandIndeterm("")
