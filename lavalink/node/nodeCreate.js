module.exports.run = async(client, node) => {
console.log(`✔ | Node created for ${node.options.host}!`)
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **${node.options.identifier} has been created!**`)
await client.channels.cache.get(client.settings.playerlog).send({ embeds: [embed] })
}