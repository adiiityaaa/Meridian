module.exports = {
name: "request-channel",
description: "Setup the interactive Request Channel!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MANAGE_CHANNELS"],
authorPerms: ["MANAGE_GUILD"],    
options: [
        {
      name: "option",
      type: "STRING",
      description: "Choose if you want to set or disable Request Channel!",
      required: true,
      choices: [
          {
              name: "Enable",
              value: "enable",
          },
          {
              name: "Disable",
              value: "disable",
          },
        ],
    },
    {
      name: "channel",
      type: "CHANNEL",
      description: "Channel where the request channel should be setup!",
      required: false,
      channelTypes: ["GUILD_TEXT"],
    },
  ],    
run: async(client, interaction) => {
const option = interaction.options.getString("option");
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Request Channel is already enabled!**`)    
const noalready = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Request Channel is not Setupped!**`)    
const disabled = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Request Channel has been Disabled!**`)    
switch(option) {
    case "enable":  
const embed2 = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.music} | **No Song in the Queue!**\n\n${client.emotes.parrow} Join a Voice Channel.\n${client.emotes.parrow} Send Song name or URL here.\n${client.emotes.parrow} Song will be played in your Channel.\n${client.emotes.parrow} Supported Sources: YouTube, Spotify, Apple Music and much more!`)
.setColor(client.colors.gold)
.setThumbnail(interaction.guild.iconURL())
.setImage(`https://media.discordapp.net/attachments/761484386708357150/941756581287166052/Request_Channel_Sample.gif?width=349&height=477`)
const embed1 = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.music} | **No Song Playing Currently!**\n\n${client.emotes.parrow} [Invite](https://discord.com/api/oauth2/authorize?client_id=933686221727731794&permissions=274881342737&scope=bot%20applications.commands) | [Documentation](https://meridian.gitbook.io/meridian-documentation/) | [Support](https://discord.gg/j9ngY7tPzU)`)
.setColor(client.colors.gold)
.setFooter({ text: `Setup done` })
.setTimestamp()
.setImage(`https://cdn.discordapp.com/attachments/761484386708357150/941772797036859473/Meridian_Image.jpg?width=1144&height=643`)
let check = client.db.get(`isystemcheck_${interaction.guild.id}`);
if(check === true) { return interaction.reply({ embeds: [already] }) }
let channel = interaction.options.getChannel('channel');
if(!channel) { channel = await interaction.guild.channels.create(`request-channel`, {
      type: 'GUILD_TEXT', 
      rateLimitPerUser: 6,
      reason: `Request Channel Setup | by ${interaction.user.tag}`
    })}
const btn = client.btns.request(client);
await channel.send({ embeds: [embed2] }).then(x => { client.db.set(`isystemqembed_${interaction.guild.id}`, x.id) })
await channel.send({ embeds: [embed1], components: btn }).then(x => { client.db.set(`isystempembed_${interaction.guild.id}`, x.id) })
const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Request Channel enabled in <#${channel.id}>!**`)    
await interaction.reply({ embeds: [success] })    
await client.db.set(`isystemcheck_${interaction.guild.id}`, true)
await client.db.set(`isystemchx_${interaction.guild.id}`, channel.id)
   break;
    case "disable":
    if(!client.db.has(`isystemcheck_${interaction.guild.id}`)) { return interaction.reply({ embeds: [noalready] }) }
    client.db.delete(`isystemcheck_${interaction.guild.id}`)    
    client.db.delete(`isystemchx_${interaction.guild.id}`)            
    client.db.delete(`isystemqembed_${interaction.guild.id}`)    
    client.db.delete(`isystempembed_${interaction.guild.id}`)        
    await interaction.reply({ embeds: [disabled] })
    break;
}}}    