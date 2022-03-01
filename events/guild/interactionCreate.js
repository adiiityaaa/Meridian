 module.exports.run = async(client, interaction) => {
const server = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This command can be run in Guild.**`)     
if(!interaction.guild) { return interaction.reply({ embeds: [server] }) }
 const djcheck = client.modules.hasdj(client, interaction.guild.id);
 if(interaction.isCommand()) {     
 const slashcmd = client.commands.get(interaction.commandName)
 if(!slashcmd) { return; }    
 const cmdused = new client.discord.MessageEmbed()
 .setColor(client.colors.yellow) 
 .setDescription(`${client.emotes.info} | **Meridian Command Logs**\n${client.emotes.parrow} ${interaction.user.tag} has used ${interaction.commandName} Command.`)
 .setTimestamp()
 if(slashcmd.developerOnly) {
  const devsonly = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command restricted to Developers.**`)
  if(client.developers.include(interaction.user.id)) { return interaction.reply({ embeds: [devsonly] }) }
 }
 if(slashcmd.authorPerms) {
const Permissions = slashcmd.authorPerms.filter(x => !interaction.member.permissions.has(x)).map(x => "`" + x + "`")
         if (Permissions.length) { 
         const perms2 = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **User Missing Permissions!**\n${client.emotes.rarrow} This Command Requires: ${Permissions.join(", ")}!`)
        return interaction.reply({ embeds: [perms2] })}     
 }
 if(slashcmd.clientPerms) {
const Permissions = slashcmd.clientPerms.filter(x => !interaction.guild.me.permissions.has(x)).map(x => "`" + x + "`")
        if (Permissions.length) {
         const perms1 = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Client Missing Permissions!**\n${client.emotes.rarrow} This Command Requires: ${Permissions.join(", ")}!`)
        return interaction.reply({ embeds: [perms1] })}
 }
 if(slashcmd.voiceChannel) {
    const novc = client.embeds.novoice(client);
    if(!interaction.member.voice.channel) { interaction.reply({ embeds: [novc] })}    
 }
 if(slashcmd.mutualChannel) {
const nomutual = client.embeds.nomutual(client);
const novc = client.embeds.novoice(client);
    if(!interaction.member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
    if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channel.id !== interaction.member.voice.channel.id) { return interaction.reply({ embeds: [nomutual] }) }
 }    
if(slashcmd.djOnly && djcheck) {
  const mdjcheck = client.modules.isadj(client, interaction.member)
  const nodj = client.embeds.nodj(client);
  if(!mdjcheck) { return interaction.reply({ embeds: [nodj] }) } 
} 
 try {  
        await client.commands.get(interaction.commandName).run(client, interaction); 
        if(client.db.has(`cmdlogs_${interaction.guild.id}`)) { client.channels.cache.get(client.db.get(`cmdlogs_${interaction.guild.id}`)).send({ embeds: [cmdused] }) }
	} catch (error) {
		console.log(error);
        const errorembed = client.embeds.error(client);
		await interaction.reply({ embeds: [errorembed], ephemeral: true });
}} else if (interaction.isMessageContextMenu()) {
 const slashcmd = client.commands.get(interaction.commandName)
 if(!slashcmd) { return; }       
 if(slashcmd.developersOnly) {
  const devsonly = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command restricted to Developers.**`)
  if(client.developers.include(interaction.user.id)) { return interaction.reply({ embeds: [devsonly] }) }
 }
 if(slashcmd.voiceChannel) {
    const novc = client.embeds.novoice(client);
    if(!interaction.member.voice.channel) { interaction.reply({ embeds: [novc] })}    
 }
 if(slashcmd.mutualChannel) {
const nomutual = client.embeds.nomutual(client);
const novc = client.embeds.novoice(client);
    if(!interaction.member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
    if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channel.id !== interaction.member.voice.channel.id) { return interaction.reply({ embeds: [nomutual] }) }     
 }    
 try {
     await client.commands.get(interaction.commandName).run(client, interaction); 
	} catch (error) {
		console.log(error);
        const errorembed = client.embeds.error(client);
		await interaction.reply({ embeds: [errorembed], ephemeral: true });
}} else if(interaction.isButton()) {
const customId = interaction.customId;
 const slashcmd = client.buttons.get(customId);
 if(!slashcmd) { return; }
 const btnused = new client.discord.MessageEmbed()
 .setColor(client.colors.yellow) 
 .setDescription(`${client.emotes.info} | **Meridian Button Logs**\n${client.emotes.parrow} ${interaction.user.tag} has used ${customId} Button.`)
 .setTimestamp() 
 if(slashcmd.voiceChannel) {
    const novc = client.embeds.novoice(client);
    if(!interaction.member.voice.channel) { interaction.reply({ embeds: [novc] })}
 }
 if(slashcmd.mutualChannel) {
 const nomutual = client.embeds.nomutual(client);
 const novc = client.embeds.novoice(client);
 if(!interaction.member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
 if(interaction.guild.me.voice.channel && interaction.guild.me.voice.channel.id !== interaction.member.voice.channel.id) { return interaction.reply({ embeds: [nomutual] }) 
}}
if(slashcmd.djOnly && djcheck) {
  const mdjcheck = client.modules.isadj(client, interaction.member)
  const nodj = client.embeds.nodj(client);
  if(!mdjcheck) { return interaction.reply({ embeds: [nodj] }) } 
}  
  try {
    await client.buttons.get(customId).run(client, interaction);      
    if(client.db.has(`cmdlogs_${interaction.guild.id}`)) { client.channels.cache.get(client.db.get(`cmdlogs_${interaction.guild.id}`)).send({ embeds: [btnused] }) }
  } catch(error) {
  console.log(error);
  const errorembed = client.embeds.error(client);
  await interaction.reply({ embeds: [errorembed], ephemeral: true });    
}}}