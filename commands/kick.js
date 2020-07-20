module.exports = {
  name: "kick",
  description: "Pinging the bot",
  execute(client, message) {
  
     if (message.member.hasPermission('KICK_MEMBERS')) {   
  
   let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
      
     member.kick()
     message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
      

   }else{
   return message.reply('You dont have enough permissions for that')
   }
  }
}
