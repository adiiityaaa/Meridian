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
let amdata;
const amcheck = client.db.get(`antimessage_${interaction.guild.id}`);
if(amcheck === null) { amdata = "> True" }
else { amdata = "> False" }     
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
if(!vclchannel) { vclchx = "> None"; }
else { vclchx = `> ${vclchannel}`; }
let two47;
let twenty47 = client.db.get(`247_${interaction.guild.id}`)    
if(twenty47 === null || twenty47 === false) { two47 = "> Disabled" }
else { two47 = "> Enabled" }    
const embed = client.modules.embed(client, client.colors.gold, `${client.emotes.config} | **${interaction.guild.name} Configuration**\n\n${client.emotes.dot} **Request Channel:**\n${ischx}\n\n${client.emotes.dot} **Voice Channel Logs:**\n${vclchx}\n\n${client.emotes.dot} **24/7 Mode:**\n${two47}\n\n${client.emotes.dot} **Announcement Messages:**\n${amdata}\n\n${client.emotes.dot} **DJ Roles:**\n${djdata}\n\n${client.emotes.dot} **In VC Roles:**\n${invcdata}`)    
await interaction.reply({ embeds: [embed] })
}}