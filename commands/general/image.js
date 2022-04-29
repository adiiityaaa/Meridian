const { get } = require('axios');

module.exports = {
name: "images",
description: "Displays Images from Reddit",
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
      description: "Type of Image",
      required: true,
      choices: [
          {
              name: "Bikes",
              value: "bike",
          },
          {
              name: "Cars",
              value: "car",
          },
          {
              name: "Earth",
              value: "earth",
          },
          {
              name: "K-pop",
              value: "kpop",
          },
          {
              name: "Memes",
              value: "meme",
          },
          {
              name: "Neko",
              value: "neko",
          },
          {
            name: "Trucks",
            value: "truck",
        },
      ],
    },
  ],    
run: async(client, interaction) => { 
    await interaction.deferReply().catch(() => {});     
const type = interaction.options.getString('type')
switch(type) {
case "bike":
    let bjson = get(`https://www.reddit.com/r/MotorcyclePorn/random/.json`).then((res) => res.json());  
    bjson = bjson.data;
    bjson = bjson[0].data.children[0].data;  
    const bembed = new client.discord.MessageEmbed()
    .setImage(bjson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [bembed] })
break;
case "car":
    let cjson = get(`https://www.reddit.com/r/carporn/random/.json`).then((res) => res.json());  
    cjson = cjson.data;
    cjson = cjson[0].data.children[0].data;  
    const cembed = new client.discord.MessageEmbed()
    .setImage(cjson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [cembed] })    
break;
case "earth":
    let ejson = get(`https://www.reddit.com/r/Earthporn/random/.json`).then((res) => res.json());  
    ejson = ejson.data;
    ejson = ejson[0].data.children[0].data;  
    const eembed = new client.discord.MessageEmbed()
    .setImage(ejson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [eembed] })     
break;
case "kpop":
    let ktag = ["kpopGirlsMob", "kpics"]
    ktag = ktag[Math.floor(Math.random() * ktag.length)]
    let kjson = get(`https://www.reddit.com/r/${ktag}/random/.json`).then((res) => res.json()); 
    kjson = kjson.data;
    kjson = kjson[0].data.children[0].data;  
    const kembed = new client.discord.MessageEmbed()
    .setImage(kjson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [kembed] })     
break;
case "meme":
    let mtag = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"]
    mtag = mtag[Math.floor(Math.random() * mtag.length)]
    let mjson = get(`https://www.reddit.com/r/${tag}/random/.json`).then((res) => res.json());  
    mjson = mjson.data;
    mjson = mjson[0].data.children[0].data;  
    const membed = new client.discord.MessageEmbed()
    .setImage(mjson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [membed] }) 
break;
case "neko":
    let njson = get(`https://neko-love.xyz/api/v1/neko`);  
    const nembed = new client.discord.MessageEmbed()
    .setImage(njson.data.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [nembed] }) 
break; 
case "truck":
    let tjson = get(`https://www.reddit.com/r/Trucks/random/.json`).then((res) => res.json());
    tjson = tjson[0].data.children[0].data;  
    const tembed = new client.discord.MessageEmbed()
    .setImage(tjson.url)
    .setColor(client.colors.images)
    interaction.editReply({ embeds: [tembed] })     
break;
}}}  