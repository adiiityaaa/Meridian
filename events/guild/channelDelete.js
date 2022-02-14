module.exports.run = async (client, channel) => {
if(!channel.guild) { return; }
["player-text", "request-channel", "voice-logs"].forEach(file => {
          require(`../../botfiles/listeners/channelDelete/${file}.js`).run(client, channel)
      }); 
}