  const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
   message.reply(new MessageEmbed().setColor("#c219d8").setTitle("<:Kaze2:893850635580096562>  رابط الدعوة: ").setDescription(`[**رابط الدعوة**](https://discord.com/api/oauth2/authorize?client_id=893178922827673620&permissions=545460846583&scope=bot%20applications.commands)`)
    .setFooter("enjoy <3", "https://images-ext-2.discordapp.net/external/YBBIFS4oJOlI7nNJfMkj9Zf75QU1nmfRVenNOCMsMf8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/893178922827673620/b193575cfd73377498acd65b4f115570.png"));

  }
}
