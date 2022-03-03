module.exports.run = async(client, message) => {
if(message.author.bot) { return; }    
if(client.db.has(`chatbot_${message.guild.id}`)) {
if(message.channel.id === client.db.get(`chatbot_${message.guild.id}`)) {
const response = await client.openai.createCompletion("text-davinci-001", {
        prompt: message.content,
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
});
const responseContent = response.data.choices[0].text;
message.reply({ content: `${responseContent}`, allowedMentions: { repliedUser: false } })
}}}