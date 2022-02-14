module.exports.run = async(client, node, reason) => {
console.log(`❌ | Lavalink Disconnected with ${node.options.host}!\nReason: ${reason}`)
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **${node.options.identifier} has been Disconnected!**`)
await client.channels.cache.get(client.settings.playerlog).send({ embeds: [embed] })
}