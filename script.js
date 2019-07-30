// let texto;
// function mostrarMouse(event){
//     console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);

//     let x = event.pageX;
//     let y = event.pageY;


//     if( x >=1 && y >=1){
    
//     }
//     else{
//         confirm("Voce tem certeza meu Consagrado??????");
//     }
// }
// window.onmousemove = mostrarMouse;

let h2 = document.querySelector("h2");
let a = document.querySelector("a");
let nome = document.querySelector("input");
let botao = document.querySelector("button");




let div = document.querySelector("div");
let section = document.querySelector("section");

if(localStorage.login){
    h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
    a.innerHTML = `NÃO É O ${localStorage.login} ?`;
    div.style.display = "none";
    section.style.display = "initial";

} else {
    function cadastrar(){
        localStorage.setItem("login", nome.value);
        div.style.display = "initial";

        if(localStorage.login){
            h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
            a.innerHTML = `NÃO É O ${localStorage.login} ?`;
            div.style.display = "none";
            section.style.display = "initial";

        }
    }
}

function reset(){
    localStorage.clear("login");
}


botao.onclick = cadastrar;
a.onclick = reset;
