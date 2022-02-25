module.exports = {
name: "reset",
description: "Reset the settings for the Server!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
memberPerms: ["ADMINISTRATOR"],    
options: [
    {
      name: "option",
      type: "STRING",
      description: "Choose what you want to Reset!",
      required: true,
      choices: [
       {
              name: "Command Logs",
              value: "cmdlogs",
       },
       {
              name: "DJ Roles",
              value: "djrole",
       },
       {
              name: "In VC Roles",
              value: "invcrole",
       },        
       {
              name: "Request Channel",
              value: "requestchannel",
       },  
       {
              name: "Voice Channel Logs",
              value: "voicelogs",
       },  
       {
              name: "Everything",
              value: "everything",
       },
     ],
   },
 ],    
run: async(client, interaction) => {
const option = interaction.options.getString("option");
const evsuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Everything has been Resetted.**`)
const djsuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **DJ Roles have been Resetted.**`)
const invcsuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **In VC Roles have been Resetted.**`)
const vclsuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Voice Channel Logs have been Resetted.**`)
const cmdsuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Command Logs have been Resetted.**`)
const issuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Request Channel has been Resetted.**`)
const isnot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Request Channel has not been Set.**`)
const djnot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **DJ Roles have not been Set.**`)
const invcnot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **In VC Roles have not been Set.**`)
const vclnot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Voice Channel Logs have not been Set.**`)
const cmdnot = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command Logs have not been Set.**`)
switch(option) {
    case "requestchannel":
    if(client.db.has(`isystemcheck_${interaction.guild.id}`)) {
    client.db.delete(`isystemcheck_${interaction.guild.id}`)    
    client.db.delete(`isystemchx_${interaction.guild.id}`)            
    client.db.delete(`isystemqembed_${interaction.guild.id}`)    
    client.db.delete(`isystempembed_${interaction.guild.id}`)
    interaction.reply({ embeds: [issuccess] }) } else { interaction.reply({ embeds: [isnot] }) }
    break;
    case "djrole":
    if(client.db.has(`djroles_${interaction.guild.id}`)) { client.db.delete(`djroles_${interaction.guild.id}`) 
    interaction.reply({ embeds: [djsuccess] })} else { interaction.reply({ embeds: [djnot] }) }
    break;            
    case "invcrole":
    if(client.db.has(`invcroles_${interaction.guild.id}`)) { client.db.delete(`invcroles_${interaction.guild.id}`) 
    interaction.reply({ embeds: [invcsuccess] })} else { interaction.reply({ embeds: [invcnot] }) }
    break;
    case "voicelogs":
    if(client.db.has(`voicelogs_${interaction.guild.id}`)) { client.db.delete(`voicelogs_${interaction.guild.id}`) 
    interaction.reply({ embeds: [vclsuccess] })} else { interaction.reply({ embeds: [vclnot] }) }        
    break;
    case "cmdlogs":
    if(client.db.has(`cmdlogs_${interaction.guild.id}`)) { client.db.delete(`cmdlogs_${interaction.guild.id}`) 
    interaction.reply({ embeds: [cmdsuccess] })} else { interaction.reply({ embeds: [cmdnot] }) }        
    break;    
    case "everything":
    if(client.db.has(`djroles_${interaction.guild.id}`)) { client.db.delete(`djroles_${interaction.guild.id}`) }
    if(client.db.has(`invcroles_${interaction.guild.id}`)) { client.db.delete(`invcroles_${interaction.guild.id}`) }        
    if(client.db.has(`voicelogs_${interaction.guild.id}`)) { client.db.delete(`voicelogs_${interaction.guild.id}`) } 
    if(client.db.has(`cmdlogs_${interaction.guild.id}`)) { client.db.delete(`cmdlogs_${interaction.guild.id}`) }     
    if(client.db.has(`isystemcheck_${interaction.guild.id}`)) {
    client.db.delete(`isystemcheck_${interaction.guild.id}`)    
    client.db.delete(`isystemchx_${interaction.guild.id}`)            
    client.db.delete(`isystemqembed_${interaction.guild.id}`)    
    client.db.delete(`isystempembed_${interaction.guild.id}`)}
    interaction.reply({ embeds: [evsuccess] }) 
    break;
}}}