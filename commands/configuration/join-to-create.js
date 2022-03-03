module.exports = {
    name: "join-to-create",
    description: "Enable or Disable Join-to-Create",
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
          description: "Choose if you want to set or disable Join-to-Create!",
          required: true,
          choices: [
              {
                  name: "Enable Join-to-Create",
                  value: "enable",
              },
              {
                  name: "Disable Join-to-Create",
                  value: "disable",
              },
            ],
        },
        {
            name: "limit",
            type: "INTEGER",
            description: "Number of Members which can join the Channel",
            required: true,
        },        
        {
          name: "channel",
          type: "CHANNEL",
          description: "Channel where Join to Create should be setup!",
          required: false,
          channelTypes: ["GUILD_VOICE"],
        },
      ],    
    run: async(client, interaction) => {
    const option = interaction.options.getString("option");
    const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Join-to-Create is already enabled!**`)    
    const noalready = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Join-to-Create is not Setupped!**`)    
    const disabled = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Join-to-Create Disabled!**`)    
    const max = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Member limit cannot exceed 99.**`)
    switch(option) {
        case "enable":        
    let check = client.db.get(`tempvc_${interaction.guild.id}`);
    if(check) { return interaction.reply({ embeds: [already] }) }
    let channel = interaction.options.getChannel('channel');
    let number = interaction.options.getInteger('limit');
    if(number > 99) { return interaction.reply({ embeds: [max] }) }
    if(!channel) { channel = await interaction.guild.channels.create(`Join to Create`, {
          type: 'GUILD_VOICE', 
          reason: `Join-To-Create Setup | by ${interaction.user.tag}`,
          userLimit: 2
        })}
    const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Join-To-Create enabled in <#${channel.id}>!**`)    
    await interaction.reply({ embeds: [success] })    
    const data = {
     channel: channel,
     limit: number
    }
    await client.db.set(`tempvc_${interaction.guild.id}`, data)
       break;
        case "disable":
        if(!client.db.has(`tempvc_${interaction.guild.id}`)) { return interaction.reply({ embeds: [noalready] }) }
        client.db.delete(`tempvc_${interaction.guild.id}`)        
        await interaction.reply({ embeds: [disabled] })
        break;
    }}}    