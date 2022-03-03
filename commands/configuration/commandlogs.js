module.exports = {
    name: "command-logs",
    description: "Setup the Command Logs!",
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
          description: "Choose if you want to set or disable Command Logs!",
          required: true,
          choices: [
              {
                  name: "Enable the Command Logs",
                  value: "enable",
              },
              {
                  name: "Disable the Command Logs",
                  value: "disable",
              },
            ],
        },
        {
          name: "channel",
          type: "CHANNEL",
          description: "Channel where the command logs should be setup!",
          required: false,
          channelTypes: ["GUILD_TEXT"],
        },
      ],    
    run: async(client, interaction) => {
    const option = interaction.options.getString("option");
    const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command Logs already enabled!**`)    
    const noalready = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command Logs not Setupped!**`)    
    const disabled = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Command Logs Disabled!**`)    
    switch(option) {
        case "enable":        
    let check = client.db.get(`cmdlogs_${interaction.guild.id}`);
    if(check) { return interaction.reply({ embeds: [already] }) }
    let channel = interaction.options.getChannel('channel');
    if(!channel) { channel = await interaction.guild.channels.create(`command-logs`, {
          type: 'GUILD_TEXT', 
          reason: `Command Logs | by ${interaction.user.tag}`
        })}
    const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Command Logs enabled in <#${channel.id}>!**`)    
    await interaction.reply({ embeds: [success] })    
    await client.db.set(`cmdlogs_${interaction.guild.id}`, channel.id)
       break;
        case "disable":
        if(!client.db.has(`cmdlogs_${interaction.guild.id}`)) { return interaction.reply({ embeds: [noalready] }) }
        client.db.delete(`cmdlogs_${interaction.guild.id}`)        
        await interaction.reply({ embeds: [disabled] })
        break;
    }}}    