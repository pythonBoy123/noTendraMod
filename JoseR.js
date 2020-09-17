const discord=require("discord.js");
const client=new discord.Client();
const respuesta=require("./respuesta.json")

//http://patorjk.com/software/taag/#p=testall&f=Graffiti&t=rey%0A
let c={
  c:"",
  calla:0
}


function generateRandom(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
return Math.floor(Math.random() * (1 + max - min) + min)
}
client.on("ready",()=>{
  console.log("no tendra mod")
  try{
  c.c=client.channels.cache.get("754113510379880458")
  }
  catch(e){
    console.log("no se encontro el canal")
  }
  })
try{
client.on("message", (message)=>{
  let m=message.content.split(" ")
  let nadre=Object.keys(respuesta.palabras).length
  let naped=respuesta.personas.map((i)=>{
      if(i==message.author.id){
      
      c.calla++;
      console.log(message.author.username)
      let mFiltred=m.map((mes)=>{
        console.log(mes)
        if(mes=="mod"){
          console.log("jose no tendra mod")
          console.log(`mensaje ${m}`)
          c.c.send(`<@${i}> no tendras mod `);
          console.log(message.author)

        }

        else if(mes=="admin"){
          console.log(message.author)
          console.log("jose no tendra admin")
          console.log(`mensaje ${m}`)
          c.c.send(`<@${i}> no tendras admin`);

        }


      console.log(c.calla)
      if(c.calla>generateRandom(5,nadre)){
        c.calla=0
        message.channel.send(`<@${i}> calla ${respuesta.palabras[generateRandom(0,nadre)]}`)


        //720304994523283497
      }

      });
      }
  })
    let mmap=m.map((i)=>{
      if(i.toLowerCase()==":v"){
        c.c.send(`<@${message.author.id}> calla ${respuesta.palabras[generateRandom(0,nadre)]} `);//mi rey ya fue solucionado
        //generate random es para escoger alguna palabra o frase aleatoria
      }
    })

})
}

catch(e){
}
client.login("token")
