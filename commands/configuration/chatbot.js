module.exports = {
    name: "chatbot",
    description: "Enable or Disable AI Chatbot",
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
          description: "Choose if you want to set or disable Chatbot!",
          required: true,
          choices: [
              {
                  name: "Enable the AI Chatbot",
                  value: "enable",
              },
              {
                  name: "Disable the AI Chatbot",
                  value: "disable",
              },
            ],
        },
        {
          name: "channel",
          type: "CHANNEL",
          description: "Channel where the chatbot should be setup!",
          required: false,
          channelTypes: ["GUILD_TEXT"],
        },
      ],    
    run: async(client, interaction) => {
    const option = interaction.options.getString("option");
    const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **AI Chatbot is already enabled!**`)    
    const noalready = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **AI Chatbot is not Setupped!**`)    
    const disabled = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **AI Chatbot Disabled!**`)    
    switch(option) {
        case "enable":        
    let check = client.db.get(`chatbot_${interaction.guild.id}`);
    if(check) { return interaction.reply({ embeds: [already] }) }
    let channel = interaction.options.getChannel('channel');
    if(!channel) { channel = await interaction.guild.channels.create(`chatbot`, {
          type: 'GUILD_TEXT', 
          reason: `AI Chatbot Setup | by ${interaction.user.tag}`
        })}
    const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **AI Chatbot enabled in <#${channel.id}>!**`)    
    await interaction.reply({ embeds: [success] })    
    await client.db.set(`chatbot_${interaction.guild.id}`, channel.id)
       break;
        case "disable":
        if(!client.db.has(`chatbot_${interaction.guild.id}`)) { return interaction.reply({ embeds: [noalready] }) }
        client.db.delete(`chatbot_${interaction.guild.id}`)        
        await interaction.reply({ embeds: [disabled] })
        break;
    }}}    