module.exports = { 
    name: "unmute",
    description: "Unmute a user from Voice Channel.",
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
            description: "Specify whom you want to Unmute.",
            required: true,
            choices: [
              {
                  name: "Specific Member",
                  value: "member",
              },
              {
                  name: "Everyone in Voice",
                  value: "everyone",
              },
           ],  
       },    
       {
        name: "member",
        type: "USER",
        description: "Member whom you want to Unmute.",
        required: false,
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel from which you want to Unmute everyone.",
        required: false,
       },
    ], 
    run: async(client, interaction) => {
     const option = interaction.options.getString('option')
     const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Member to Unmute.**`)
     const nochannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Channel to Unmute from.**`)
     switch(option) {
     case "member":
     const member = interaction.options.getMember('member');
     if(!member) { return interaction.reply({ embeds: [nomember] }) }
     const membersuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Unmuted <@${member.id}> in Voice Channel.**`)
     const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not in a Voice Channel.**`)
     const nounmute = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not Muted.**`)
     if(!member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
     if(!member.voice.serverMute) { return interaction.reply({ embeds: [nounmute] }) }
     member.voice.setMute(false, `Command used by ${interaction.user.tag}`)
     interaction.reply({ embeds: [membersuccess] })
     break;
     case "everyone":
     const channel = interaction.options.getChannel('channel');
     if(!channel) { return interaction.reply({ embeds: [nochannel] }) }
     const noone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone has joined <#${channel.id}>.**`)
     const everyonesuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Unmuted everyone in <#${channel.id}>.**`)
     const notmute = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone is Muted in <#${channel.id}>`)
     if(channel.members.size === 0) { return interaction.reply({ embeds: [noone] }) }
     const data = channel.members.filter(member => member.voice.serverMute).size;
     if(data === 0) { return interaction.reply({ embeds: [notmute] }) }
     for (let memberi of channel.members) {
     memberi[1].voice.setMute(false, `Command used by ${interaction.user.tag}`); }
     interaction.reply({ embeds: [everyonesuccess] })
     break;
    }}}