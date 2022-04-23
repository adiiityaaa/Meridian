const math = require('mathjs');
module.exports = {
    name: "calculate",
    description: "Calculate the answer for an equation",
    category: "Utilities",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: [""],   
    options: [
        {
        name: "equation",
        type: "STRING",
        description: "Equation to Calculate",
        required: true,
      },
    ],   
run: async(client, interaction) => {
const equation = interaction.options.getString("equation")
const result = math.evaluate(`${equation}`)
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Equation Solved**\n\n${client.emotes.garrow} Input: ${equation}\n${client.emotes.garrow} Result: ${result}`)
interaction.reply({ embeds: [embed] })
}}