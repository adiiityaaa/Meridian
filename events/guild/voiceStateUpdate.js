module.exports.run = async(client, oS, nS) => {
["player-disconnect", "stage-unmute", "voice-logs", "in-vc-roles", "voice-ban"], "join-to-create".forEach(file => {
          require(`../../botfiles/listeners/voiceStateUpdate/${file}.js`).run(client, oS, nS)
      }); 
}