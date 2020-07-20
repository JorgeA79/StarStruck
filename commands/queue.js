const Discord = require("discord.js");

module.exports = {
  name: "queue",
  description: "get list of added songs",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
          const embed = new Discord.MessageEmbed()
          .setDescription("**You need to be in a voice channel** ❌")
          .setColor(0xFFFF00);
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
        const embed = new Discord.MessageEmbed()
          .setDescription("**There is nothing in the queue** ❌")
          .setColor(0xFFFF00);
        return message.channel.send(embed);
    }
      const embed = new Discord.MessageEmbed()
          .setTitle("Music Queue 🎶")
          .setDescription(`${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true })
          .setColor(0xFFFF00);
         return message.channel.send(embed);

  }
};
