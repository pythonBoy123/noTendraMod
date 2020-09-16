const discord=require("discord.js");
const client=new discord.Client();

let c={
  c:""

}
client.on("ready",()=>{
  console.log("jose no tendra mod")
  c.c =client.channels.cache.get("754113510379880458")
  c.c.send(`<@720304994523283497> no tendras mod `);
})

client.on("message", (message)=>{
  let m=message.content.split(" ")
  console.log(m)
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


  }
})

client.login("token")//no tendran el token del bot 
