module.exports.run = async(client, message) => {
if(!message.guild) { return; }
["afk", "request-channel", "mention", "developers", "chatbot"].forEach(file => {
          require(`../../botfiles/listeners/messageCreate/${file}.js`).run(client, message)
      }); 
}