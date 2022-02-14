module.exports.run = async(client, oS, nS) => {
["player-disconnect", "stage-unmute", "voice-logs"].forEach(file => {
          require(`../../botfiles/listeners/voiceStateUpdate/${file}.js`).run(client, oS, nS)
      }); 
}