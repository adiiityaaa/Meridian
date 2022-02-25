module.exports = {
name: "configuration",
description: "Displays the Configuration for the Server!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
let djdata;
const roles = client.db.get(`djroles_${interaction.guild.id}`);
if(!roles || roles === "[]") { djdata = "> None" }
else { djdata = roles.map(i => `> <@&${i}>`).join("\n"); }
let invcdata;
const iroles = client.db.get(`invcroles_${interaction.guild.id}`);
if(!iroles || iroles === "[]") { invcdata = "> None" }
else { invcdata = iroles.map(i => `> <@&${i}>`).join("\n"); } 
let ischx;
const ischeck = await client.db.fetch(`isystemcheck_${interaction.guild.id}`);
if(ischeck === null) { ischx = "> None"; }
else if(ischeck === true) { let isdata = client.db.fetch(`isystemchx_${interaction.guild.id}`);
let ischannel = client.channels.cache.get(isdata);
if(!ischannel) { ischx = "> None"; }
else { ischx = `> ${ischannel}`; }} 
let vclchx;
let vcldata = client.db.fetch(`voicelogs_${interaction.guild.id}`);
let vclchannel = client.channels.cache.get(vcldata);
if(!vclchannel || !vcldata) { vclchx = "> None"; }
else { vclchx = `> ${vclchannel}`; } 
let cmdchx;
let cmddata = client.db.fetch(`cmdlogs_${interaction.guild.id}`);
let cmdchannel = client.channels.cache.get(cmddata);
if(!cmdchannel || !cmddata) { cmdchx = "> None"; }
else { cmdchx = `> ${cmdchannel}`; } 
const embed = client.modules.embed(client, client.colors.gold, `${client.emotes.config} | **${interaction.guild.name} Configuration**\n\n${client.emotes.dot} **Request Channel:**\n${ischx}\n\n${client.emotes.dot} **Voice Channel Logs:**\n${vclchx}\n\n${client.emotes.dot} **Command Logs:**\n${cmdchx}\n\n${client.emotes.dot} **DJ Roles:**\n${djdata}\n\n${client.emotes.dot} **In VC Roles:**\n${invcdata}`)    
await interaction.reply({ embeds: [embed] })
}}