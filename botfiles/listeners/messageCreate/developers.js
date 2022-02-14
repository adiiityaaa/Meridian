module.exports.run = async (client, message) => {
  const prefix = "m!";
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.members.fetch(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  if(message.author.id !== "731870450669584458") { return; }
  const cmd = args.shift().toLowerCase();
  if(cmd.length === 0) return;
  let command = client.developers.get(cmd);
  if(!command) return;
  if(command) command.run(client, message, args);
}