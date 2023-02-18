const btn = document.getElementById("send");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso / (altura * altura)).toFixed(1);
    if(nome === "" || altura === "" || peso ===""){
        let imcUsuario = document.getElementById("imcUsuario");
        imcUsuario.innerHTML = "Preencha todos os campos";
    }else {
        let nomeUsuario = document.getElementById("nomeUsuario");
        nomeUsuario.innerHTML = "Olá, " + nome;

        let imcUsuario = document.getElementById("imcUsuario");
        imcUsuario.innerHTML = "Seu IMC é: " + imc;
        
        if(imc < 18.5) {
            let abaixoDoPeso = document.getElementById("abaixoDoPeso");
            abaixoDoPeso.innerHTML = "Vamos se alimentar direitinho, você está abaixo do peso.";
        }else if(imc >= 18.5 && imc <= 24.99) {
            let pesoIdeal =  document.getElementById("pesoIdeal");
            pesoIdeal.innerHTML = "Parabéns, você está com peso ideal!";
        }else if(imc > 24.99) {
            let acimaDoPeso = document.getElementById("acimaDoPeso");
            acimaDoPeso.innerHTML = "Você está acima do peso, vamos cuidar da saúde?";
        }
    }
})
    

