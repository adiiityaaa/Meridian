module.exports = {
name: "eval",
run: async (client, message, args) => {
    message.delete()
const embed = client.modules.embed(client, client.colors.cyan, `${client.emotes.loading} | **Evaluating the Code...**`)
const msg = await message.channel.send({ embeds: [embed] })
try {
 let evaled;
   try {
        evaled = await eval(args.join(" "));
        const embed2 = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Code has been Evaled.**\n${client.emotes.garrow} \`${evaled}\``)
        message.channel.send({ embedS: [embed2] })
            } catch (error) {
        console.error(error);
        const embed3 = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An Error Occured.**\n${client.emotes.rarrow} \`${error.message}\``)
                    .setColor(client.colors.red)
       message.channel.send({ embeds: [embed3] })
            }
        } catch (err) {
            console.error(err);
        }
}}
