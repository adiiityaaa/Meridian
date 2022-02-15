const process = require('child_process');

module.exports = {
name: "exec",
run: async (client, message, args) => {
     const wait = client.modules.embed(client, client.colors.cyan, `${client.emotes.loading} | **Executing...**`)
      const running = await message.channel.send({ embeds: [wait] })
	  process.exec(args.join(" "), (error, stdout) => {
      let result = (stdout || error)
      running.delete();
      const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Script Executed, Please check the Console.**`)
      message.channel.send({ embeds: [success] })
	  console.log(result)})
	  }
	}