function PlayPause(){
   let imagem = document.querySelector("#conrole-musica")
   let musica = document.querySelector("#musica")

   if (musica.paused){
       musica.play()
       imagem.src="imagens/pause.png"
       document.querySelector("#rotulo").innerText = "Clique aqui para pausar."
   }else{
       musica.pause()
       imagem.src="imagens/play.png"
       document.querySelector("#rotulo").innerText = "Clique aqui para ouvir."
   }
}