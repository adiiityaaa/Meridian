module.exports.run = async(client, thread) => {
try {
   if(thread.joinable && !thread.joined) {
   await thread.join();
}} catch (e) { return; }}