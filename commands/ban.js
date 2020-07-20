
module.exports = {
  name: "ban",
  description: "Pinging the bot",
  execute(client, message) {
  
     if (message.member.hasPermission('BAN_MEMBERS')) {   
  
   let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
      
     member.ban()
     message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
      

   }else{
   return message.reply('You dont have enough permissions for that')
   }
  }
}
