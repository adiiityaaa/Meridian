module.exports = {
name: "invcrole",
description: "Add or remove the In-vc-Role!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: ["MANAGE_GUILD"],    
options: [
    {
      name: "method",
      type: "STRING",
      description: "Specify whether to add or remove In Vc Role!",
      required: true,
      choices: [
          {
              name: "Add",
              value: "add",
          },
          {
              name: "Remove",
              value: "remove",
          },
       ],  
    },
    {
      name: "role",
      type: "ROLE",
      description: "Role to add or remove!",
      required: true,
    },
  ],    
run: async(client, interaction) => {
const method = interaction.options.getString("method");
const role = interaction.options.getRole("role");  
const added = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@&${role.id}> has been added to In-VC Roles.**`)
const removed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@&${role.id}> has been removed from In-VC Roles.**`)
const cannot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@&${role.id}> is Discord Integration.**`)
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@&${role.id}> is already set as In-VC Role.**`)
const max = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Maximum In-VC Role Limit has reached.**`)
const none = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **There are no In-VC Roles.**`)
const everyone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **${role.name} cannot be set as In-VC Role.**`)
let data = client.db.get(`invcroles_${interaction.guild.id}`) || [];
let length = data.length;
switch(method) {
    case "add":
    if(length === 5) { return interaction.reply({ embeds: [max] }) }
    if(role.id === interaction.guild.id) { return interaction.reply({ embeds: [everyone] }) }
    if(role.managed) { return interaction.reply({ embeds: [cannot] }) }
    let addroles = client.db.get(`invcroles_${interaction.guild.id}`) || [];
    addroles.push(role.id);
    client.db.set(`invcroles_${interaction.guild.id}`, addroles);
    await interaction.reply({ embeds: [added] })
    break;
    case "remove":
    if(length === 0) { return interaction.reply({ embeds: [none] }) }
    if(length > 1) {
    let removeroles = client.db.get(`invcroles_${interaction.guild.id}`) || [];
    removeroles = removeroles.filter(x => x !== role.id);
    client.db.set(`invcroles_${interaction.guild.id}`, removeroles); 
    } else { client.db.delete(`invcroles_${interaction.guild.id}`) }
    await interaction.reply({ embeds: [removed] })
    break;
}}}