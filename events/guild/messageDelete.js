module.exports.run = async(client, message) => {
if(!message.guild) { return; }
["queueEmbed", "playEmbed"].forEach(file => {
          require(`../../botfiles/listeners/messageDelete/${file}.js`).run(client, message)
      }); 
}