let modo=localStorage.getItem("modo");
console.log(modo);

let boton=document.getElementById("mode");
let principal=document.getElementById("principal");

if(modo!=null){
    document.body.className=modo;
    principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
    //texto boton
}


boton.onclick=()=>{
    if(modo=="light"){
        document.body.className="dark";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center dark";
        boton.innerText="Light Mode";
        modo="dark";
    }else{
        document.body.className="light";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center light";
        boton.innerText="Dark Mode";
        modo="light";
    }
    localStorage.setItem("modo",modo);
}