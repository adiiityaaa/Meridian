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
const type = interaction.options.getString('type')
switch(type) {
    case "cry":
        let cjson = get(`https://neko-love.xyz/api/v1/cry`);  
        cjson = cjson.data;
        const cembed = new client.discord.MessageEmbed()
        .setImage(cjson.url)
        .setColor(client.colors.actions)
        interaction.reply({ embeds: [cembed] }) 
    break; 
    case "hug":
    let hjson = get(`https://neko-love.xyz/api/v1/hug`);  
    hjson = hjson.data;
    const hembed = new client.discord.MessageEmbed()
    .setImage(hjson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [hembed] }) 
break; 
case "kiss":
    let kjson = get(`https://neko-love.xyz/api/v1/kiss`);  
    kjson = kjson.data;
    const kembed = new client.discord.MessageEmbed()
    .setImage(kjson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [kembed] }) 
break; 
case "pat":
    let pajson = get(`https://neko-love.xyz/api/v1/pat`);  
    pajson = pajson.data;
    const paembed = new client.discord.MessageEmbed()
    .setImage(pajson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [paembed] }) 
break; 
case "punch":
    let pujson = get(`https://neko-love.xyz/api/v1/punch`);  
    pujson = pujson.data;
    const puembed = new client.discord.MessageEmbed()
    .setImage(pujson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [puembed] }) 
break; 
case "slap":
    let sljson = get(`https://neko-love.xyz/api/v1/slap`);  
    sljson = sljson.data;
    const slembed = new client.discord.MessageEmbed()
    .setImage(sljson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [slembed] }) 
break; 
case "neko":
    let njson = get(`https://neko-love.xyz/api/v1/smug`);  
    njson = njson.data;
    const nembed = new client.discord.MessageEmbed()
    .setImage(njson.url)
    .setColor(client.colors.actions)
    interaction.reply({ embeds: [nembed] }) 
break; 
}}}  