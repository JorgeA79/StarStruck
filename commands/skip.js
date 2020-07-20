const Discord = require("discord.js");

module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
          const embed = new Discord.MessageEmbed()
    .setDescription("You need to be in a voice channel ❌")
    .setColor(0xFFFF00);
      //IF AUTHOR IS NOT IN VOICE CHANNEL
     return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      const embed = new Discord.MessageEmbed()
      .setDescription("There is nothing playing that i could skip ❌")
      .setColor(0xFFFF00);
      return message.channel.send(embed);
    }

    serverQueue.connection.dispatcher.end();
    const embed = new Discord.MessageEmbed()
    .setDescription("✔ | Skipping The Song")
    .setColor(0xFFFF00);
    serverQueue.textChannel.send(embed);
  }
};
