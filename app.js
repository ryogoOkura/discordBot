const Discord=require('discord.js');
const client=new Discord.Client();
client.on('ready',()=>{
  console.log('ready...');
});
client.on('message',message=>{
  if(message.author.bot){
    return;
  }else{
    let msg=message.content;
    let channel=message.channel;
    const regexp=/^dice!(\d+)d(\d+)$/;
    // const regexp=new RegExp('^dice!(\d+)d(\d+)$');
    matchResult=msg.match(regexp);
    if(matchResult){
      const DiceNum=matchResult[1];
      const DiceMax=matchResult[2];
      if(matchResult[1]==0 || matchResult[2]==0){
        return;
      }
      console.log(`${DiceNum}d${DiceMax}`);
      let txt=msg;
      for(let i=0;i<DiceNum;i++){
        txt+='\nnum: '+(Math.floor(Math.random()*DiceMax)+1)
      }
      message.reply(txt)
        .then(message=>console.log(`message: ${msg}`))
        .catch(console.error);
    }
    return;
  }
});

client.login(process.env.TOKEN);
