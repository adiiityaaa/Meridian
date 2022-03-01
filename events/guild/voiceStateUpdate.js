module.exports.run = async(client, oS, nS) => {
["player-disconnect", "stage-unmute", "voice-logs", "in-vc-roles", "voice-ban"].forEach(file => {
          require(`../../botfiles/listeners/voiceStateUpdate/${file}.js`).run(client, oS, nS)
      }); 
}