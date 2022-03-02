module.exports.run = async(client, message) => {
if(client.db.has(`chatbot_${message.guild.id}`)) {
const completion = await openai.createCompletion("text-davinci-001", {
        prompt: message.content,
});
const responseContent = response.data.choices[0].text.split(":").at(-1).trim();
message.reply({ content: `${responseContent}`, allowedMentions: { repliedUser: false } })
}}