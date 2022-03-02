module.exports = { 
    name: "channel",
    description: "Lock or Unlock a Voice Channel.",
    category: "Moderative",
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
            description: "Lock or Unlock the Channel",
            required: true,
            choices: [
              {
                  name: "Lock the Channel",
                  value: "lock",
              },
              {
                  name: "Unlock the Channel",
                  value: "unlock",
              },
           ],  
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel to Lock or Unlock",
        required: true,
        channelTypes: ["GUILD_VOICE"],
       },
    ],
    run: async(client, interaction) => {
    const alreadyl = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Channel is already Locked.**`)
    const alreadyu = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Channel is already Unlocked.**`)
    const channel = interaction.options.getChannel('channel');
    const locked = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<#${channel.id}> locked for Everyone.**`)
    const unlocked = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<#${channel.id}> unlocked for Everyone.**`)
    const option = interaction.options.getString('option');
    switch(option) {
        case "lock": 
        if(!channel.permissionsFor(interaction.guild.id).has("CONNECT")) { return interaction.reply({ embeds: [alreadyl] }) }
        channel.permissionOverwrites.edit(interaction.guild.id, {
            CONNECT: false
        })
        interaction.reply({ embeds: [locked] })
        break;
        case "unlock":
        if(channel.permissionsFor(interaction.guild.id).has("CONNECT")) { return interaction.reply({ embeds: [alreadyu] }) }    
        channel.permissionOverwrites.edit(interaction.guild.id, {
            CONNECT: true
        })            
        interaction.reply({ embeds: [unlocked] })
        break;
}}}