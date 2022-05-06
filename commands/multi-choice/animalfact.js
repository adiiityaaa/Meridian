const fetch = require("node-fetch");
const turl = "https://media.discordapp.net/attachments/933699893279727696/972171433352511518/unknown.png?width=612&height=584";

module.exports = {
name: "animalfact",
description: "Tells you a fact about Animal",
category: "Multi-Choice",
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
      description: "Name of the Animal",
      required: true,
      choices: [
        {
            name: "Bird",
            value: "bird",
        },
        {
            name: "Cat",
            value: "cat",
        },
        {
            name: "Dog",
            value: "dog",
        },
        {
            name: "Fox",
            value: "fox",
        },
        {
            name: "Koala",
            value: "koala",
        },
        {
            name: "Panda",
            value: "panda",
        },
      ],
    },
  ],    
run: async(client, interaction) => { 
    const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
    await interaction.deferReply().catch(() => {});     
const type = interaction.options.getString('type')
switch(type) {
case "bird":
try {
    const url = "https://some-random-api.ml/facts/bird";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "cat":
try {
    const url = "https://some-random-api.ml/facts/cat";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "dog":
try {
    const url = "https://some-random-api.ml/facts/dog";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "fox":
try {
    const url = "https://some-random-api.ml/facts/fox";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;     
case "koala":
try {
    const url = "https://some-random-api.ml/facts/koala";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "panda":
try {
    const url = "https://some-random-api.ml/facts/panda";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.facts)
    .setDescription(`${res.fact}`)
    .setThumbnail(`${turl}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
}}}