const process = require('child_process');

module.exports = {
name: "exec",
run: async (client, message, args) => {
     const wait = new client.discord.MessageEmbed()
     .setDescription(`${client.emotes.loading} | **Executing...**`)
     .setColor(client.colors.cyan)
      const running = await message.channel.send({ embeds: [wait] })
	  process.exec(args.join(" "), (error, stdout) => {
      let result = (stdout || error)
      running.delete();
      const success = new client.discord.MessageEmbed()
      .setDescription(`${client.emotes.check} | **Shell Script Executed!**\n${client.emotes.garrow} Command Executed, Please check Console.`)
      .setColor(client.colors.green)
	  console.log(result)})
	  }
	}