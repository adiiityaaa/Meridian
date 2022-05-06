const fetch = require("node-fetch");

module.exports = {
name: "animals",
description: "Displays Animal Images",
category: "Entertainment",
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
            name: "Kangaroo",
            value: "kangaroo",
        },
        {
            name: "Panda",
            value: "panda",
        },
        {
            name: "Raccoon",
            value: "raccooon",
        },
        {
            name: "Red Panda",
            value: "redpanda",
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
    const url = "https://some-random-api.ml/animal/bird";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "cat":
try {
    const url = "https://some-random-api.ml/animal/cat";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "dog":
try {
    const url = "https://some-random-api.ml/animal/dog";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "fox":
try {
    const url = "https://some-random-api.ml/animal/fox";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "kangaroo":
try {
    const url = "https://some-random-api.ml/animal/kangaroo";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "koala":
try {
    const url = "https://some-random-api.ml/animal/koala";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "panda":
try {
    const url = "https://some-random-api.ml/animal/panda";
    const res = await fetch(url).then(async (res) => await res.json())
    console.log(res)
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "raccoon":
try {
    const url = "https://some-random-api.ml/animal/raccoon";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
case "redpanda":
try {
    const url = "https://some-random-api.ml/animal/redpanda";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.animals)
    .setImage(`${res.image}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;    
}}}