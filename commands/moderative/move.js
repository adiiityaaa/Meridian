module.exports = { 
    name: "move",
    description: "Move a user from Voice Channel.",
    category: "Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MOVE_MEMBERS"],
    authorPerms: ["MOVE_MEMBERS"],
    options: [
        {
            name: "option",
            type: "STRING",
            description: "Specify whom you want to Move.",
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
        name: "where_to_move",
        type: "CHANNEL",
        description: "Channel where you want to Move Member.",
        channelTypes: ["GUILD_VOICE"],
        required: true,
       },              
       {
        name: "member",
        type: "USER",
        description: "Member whom you want to Move.",
        required: false,
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel from which you want to Move everyone.",
        required: false,
        channelTypes: ["GUILD_VOICE"],        
       },
    ], 
    run: async(client, interaction) => {
     const option = interaction.options.getString('option')
     const tochannel = interaction.options.getChannel('where_to_move')
     const nomember = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Member to Move.**`)
     const nochannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a Channel to Move from.**`)
     switch(option) {
     case "member":
     const member = interaction.options.getMember('member');
     if(!member) { return interaction.reply({ embeds: [nomember] }) }
     const membersuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<@${member.id}> moved to <#${tochannel}>.**`)
     const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is not in a Voice Channel.**`)
     const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<@${member.id}> is already in <#${tochannel}>.**`)
     if(!member.voice.channel) { return interaction.reply({ embeds: [novc] }) }
     if(member.voice.channel.id === tochannel.id) { return interaction.reply({ embeds: [already] }) } 
     member.voice.setMute(true, `Command used by ${interaction.user.tag}`)
     interaction.reply({ embeds: [membersuccess] })
     break;
     case "everyone":
     const channel = interaction.options.getChannel('channel');
     if(!channel) { return interaction.reply({ embeds: [nochannel] }) }
     const noone = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Noone has joined <#${channel.id}>.**`)
     const everyonesuccess = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Moved everyone in <#${channel.id}> to <#${tochannel.id}>.**`)
     const samechannel = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **<#${channel.id}> is same as <#${tochannel.id}>`)
     if(channel.members.size === 0) { return interaction.reply({ embeds: [noone] }) }
     if(channel.id === tochannel.id) { return interaction.reply({ embeds: [samechannel] }) }     
     for (let memberi of channel.members) {
     memberi[1].voice.setChannel(tochannel.id, `Command used by ${interaction.user.tag}`); }
     interaction.reply({ embeds: [everyonesuccess] })
     break;
    }}}