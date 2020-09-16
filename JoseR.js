const discord=require("discord.js");
const client=new discord.Client();
const respuesta=require("./respuesta.json")

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
  console.log("jose no tendra mod")
  c.c=client.channels.cache.get("754113510379880458")
  c.c.send(`<@720304994523283497> no tendras mod `);
})

client.on("message", (message)=>{
  let m=message.content.split(" ")

  if(message.author.id==720304994523283497){
    let mFiltred=m.map((mes)=>{

      if(mes=="mod"){
        console.log("jose no tendra mod")
        console.log(`mensaje ${m}`)
        c.c.send(`<@720304994523283497> no tendras mod `);
        console.log(message.author)

      }

      else if(mes=="admin"){
        console.log(message.author)
        console.log("jose no tendra admin")
        console.log(`mensaje ${m}`)
        c.c.send(`<@720304994523283497> no tendras admin`);

      }
    });
    c.calla++;
    if(c.calla>generateRandom(5,30)){
      message.channel.send(`<@720304994523283497> calla${respuesta.palabras[generateRandom(0,respuesta.palabras.lenght)]}`)
    }

  }
  
})


client.login("token")
