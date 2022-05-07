module.exports = { 
    name: "mute",
    description: "Mute a user from Voice Channel.",
    category: "Voice-Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MUTE_MEMBERS"],
    authorPerms: ["MUTE_MEMBERS"],
    options: [
        {
            name: "option",
            type: "STRING",
            description: "Specify whom you want to Mute.",
            required: true,
            choices: [
              {
                  name: "Mute a Specific Member",
                  value: "member",
              },
              {
                  name: "Mute Everyone in Voice",
                  value: "everyone",
              },
           ],  
       },    
       {
        name: "member",
        type: "USER",
        description: "Member whom you want to Mute.",
        required: false,
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel from which you want to Mute everyone.",
        channelTypes: ["GUILD_VOICE"],        
        required: false,
       },
    ], 
    run: async(client, interaction) => {
     const option = interaction.options.getString('option')
     const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Member to Mute.**`)
     const nochannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Channel to Mute from.**`)
     switch(option) {
     case "member":
     const member = interaction.options.getMember('member');
     if(!member) { return interaction.reply({ embeds: [nomember] }) }
     const membersuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Muted <@${member.id}> in Voice Channel.**`)
     const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not in a Voice Channel.**`)
     const nomute = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is already Muted.**`)
     if(!member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
     if(!member.voice.serverMute) { return interaction.reply({ embeds: [nomute] }) } 
     member.voice.setMute(true, `Command used by ${interaction.user.tag}`)
     interaction.reply({ embeds: [membersuccess] })
     break;
     case "everyone":
     const channel = interaction.options.getChannel('channel');
     if(!channel) { return interaction.reply({ embeds: [nochannel] }) }
     const noone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone has joined <#${channel.id}>.**`)
     const everyonesuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Muted everyone in <#${channel.id}>.**`)
     const notunmute = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone is Unmuted in <#${channel.id}>`)
     if(channel.members.size === 0) { return interaction.reply({ embeds: [noone] }) }
     const data = channel.members.filter(member => !member.voice.serverMute).size;
     if(data === 0) { return interaction.reply({ embeds: [notunmute] }) }     
     for (let memberi of channel.members) {
     memberi[1].voice.setMute(true, `Command used by ${interaction.user.tag}`); }
     interaction.reply({ embeds: [everyonesuccess] })
     break;
    }}}