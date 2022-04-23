const { Calculator } = require('weky');
module.exports = {
    name: "calculator",
    description: "Deploy a Calculator to solve basic Maths!",
    category: "Utilities",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: [""],   
run: async(client, interaction) => {   
await Calculator({
    message: interaction.message,
    embed: {
        title: 'Meridian Calculator',
        color: '#F9F295',
        footer: ``,
        timestamp: false
    },
    disabledQuery: 'This Calculator is now disabled.',
    invalidQuery: 'An invalid equation was provided.',
    othersMessage: 'Calculator restricted to <@{{author}}>.'
});
}}