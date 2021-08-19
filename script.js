const botao=document.getElementById("botaoEnviar")
const body=document.querySelector("body")
const divReset=document.querySelector(".reset")
const msg=document.createElement("p")
const reset=document.createElement("button")
reset.setAttribute("id","botaoDeReset")
reset.innerText="Recomeçar"

botao.addEventListener("click",function(){
let userValue=document.getElementById("user").value
let valor=userValue.toUpperCase()
let randomNum=Math.floor(Math.random()*3)

if(randomNum===0){
    randomNum="papel"
}
if(randomNum===1){
    randomNum="tesoura"
}
if(randomNum===2){
    randomNum="pedra"
}
if(valor==="PAPEL"&&randomNum==="tesoura"||valor==="PEDRA"&&randomNum==="papel"||valor==="TESOURA"&&randomNum==="pedra"){
    msg.innerText="Derrota."+"A máquina colocou "+randomNum
    body.appendChild(msg)
    body.setAttribute("id","derrota")
    divReset.appendChild(reset)
}
else if(valor==="PAPEL"&&randomNum==="pedra"||valor==="PEDRA"&&randomNum==="tesoura"||valor==="TESOURA"&&randomNum==="papel"){
  body.appendChild(msg)
  msg.innerText="VITÓRIA!!!A máquina colocou "+randomNum
  body.setAttribute("id","vitoria")    
  divReset.appendChild(reset)
  
  
}
else{
    body.append(msg)
    msg.innerText="Empate.A máquina também colocou "+randomNum
    body.setAttribute("id","emp")
    divReset.appendChild(reset)
}


})
reset.addEventListener("click",function(){
    let userValue=document.getElementById("user").value=""
    body.removeAttribute("id","derrota")
    body.removeAttribute("id","emp")
    body.removeAttribute("id","vitoria")

    msg.innerText=""
    
})