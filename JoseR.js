const discord=require("discord.js")
const client=new discord.Client();
const respuesta=require("./respuesta.json")
const token="NzU1NDM4ODU2NjEzOTIwNzc4.X2DTQg.Q60vEp1Qz2gFYvXc8UW9YUnpInI";//ingresa el token de tu bot

let c={
  c:"",
  calla:0
}
function valorAleatorio(min, max) {//obtendra un valor aleatorio
	min = Math.ceil(min)
	max = Math.floor(max)
  return Math.floor(Math.random() * (1 + max - min) + min)
}

client.on("ready",()=>{
  console.log("jose no tendra mod")
  try{
  c.c=client.channels.cache.get("754113510379880458")}
  catch(e){
    console.log("no se encontro el canal")
  };
})
  client.on("message", (message)=>{
    let m=message.content.toLowerCase().split(" ")
    let tamaño=Object.keys(respuesta.palabras).length-1;
    let personas=respuesta.personas.map((i)=>{//este es para responderle a los que esten dentro del array personas
      if(i==message.author.id){
        c.calla++;
        let mFiltred=m.map((mes)=>{
          //respuestas que puede darle en caso que su mensaje contenga alguno de estos valores
          if(mes=="mod"||mes=="moderador"){
            c.c.send(`<@${i}> no tendras mod `);

          }
          if(mes=="admin"||mes=="administrador"){
            c.c.send(`<@${i}> no tendras admin`)
          }
          if(c.calla>valorAleatorio(5,tamaño)){//le responde de manera aleatoria a sus mensajes
            c.calla=0;
            message.channel.send(`<@${i}> calla ${respuesta.palabras[valorAleatorio(0,tamaño)]}`);
          }
      });
    }
  })
  let mmap=m.map((i)=>{
    if(i==":v"||i==":u"||i==";v"||i==";v"){//este es para responderle a los papulinces
      c.c.send(`<@${message.author.id}> calla ${respuesta.palabras[valorAleatorio(0,tamaño)]} `);//mi rey ya fue solucionado
        //valor aleatorio lo uso para obtener alguna respuesta aleatoria del json
    }
  })
})
client.login(token)
