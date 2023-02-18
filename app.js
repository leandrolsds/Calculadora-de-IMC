const btn = document.getElementById("send");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso / (altura * altura)).toFixed(1);
    if(nome !== ""){
        if(altura > 0) {
            if(peso > 0) {
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
                }else {
                    acimaDoPeso.innerHTML = "Você está acima do peso, vamos cuidar da saúde?";
                }
            }else {
                imcUsuario.innerHTML = "Informe seu peso!";
            }
        }else {
            imcUsuario.innerHTML = "Informe sua altura!";
        }
    }else {
        imcUsuario.innerHTML = "Preencha seu nome!";
    }
})

    

