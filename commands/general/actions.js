const { get } = require('axios');

module.exports = {
name: "actions",
description: "Displays Action GIF or Images",
category: "General",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],    
options: [
      {
      name: "type",
      type: "STRING",
      description: "Type of Action",
      required: true,
      choices: [
          {
              name: "Cry",
              value: "cry",
          },
          {
              name: "Hug",
              value: "hug",
          },
          {
              name: "Kiss",
              value: "kiss",
          },
          {
              name: "Pat",
              value: "pat",
          },
          {
              name: "Punch",
              value: "punch",
          },
          {
              name: "Slap",
              value: "slap",
          },
          {
            name: "Smug",
            value: "smug",
        },
      ],
    },
  ],    
run: async(client, interaction) => { 
    await interaction.deferReply().catch(() => {});     
const type = interaction.options.getString('type')
switch(type) {
    case "cry":
        let cjson = get(`https://neko-love.xyz/api/v1/cry`);  
        const cembed = new client.discord.MessageEmbed()
        .setImage(cjson.data.url)
        .setColor(client.colors.actions)
        interaction.editReply({ embeds: [cembed] }) 
    break; 
    case "hug":
    let hjson = get(`https://neko-love.xyz/api/v1/hug`);  
    const hembed = new client.discord.MessageEmbed()
    .setImage(hjson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [hembed] }) 
break; 
case "kiss":
    let kjson = get(`https://neko-love.xyz/api/v1/kiss`);  
    const kembed = new client.discord.MessageEmbed()
    .setImage(kjson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [kembed] }) 
break; 
case "pat":
    let pajson = get(`https://neko-love.xyz/api/v1/pat`); 
    const paembed = new client.discord.MessageEmbed()
    .setImage(pajson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [paembed] }) 
break; 
case "punch":
    let pujson = get(`https://neko-love.xyz/api/v1/punch`);  
    const puembed = new client.discord.MessageEmbed()
    .setImage(pujson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [puembed] }) 
break; 
case "slap":
    let sljson = get(`https://neko-love.xyz/api/v1/slap`);  
    const slembed = new client.discord.MessageEmbed()
    .setImage(sljson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [slembed] }) 
break; 
case "neko":
    let njson = get(`https://neko-love.xyz/api/v1/smug`);  
    const nembed = new client.discord.MessageEmbed()
    .setImage(njson.data.url)
    .setColor(client.colors.actions)
    interaction.editReply({ embeds: [nembed] }) 
break; 
}}}  