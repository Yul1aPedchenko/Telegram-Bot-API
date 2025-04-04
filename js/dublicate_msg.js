function fn(bot, msg) {
  const chatId = msg.chat.id;

  if (msg.text && !msg.text.startsWith("/") && msg.text.trim() !== "") {
    bot.sendMessage(chatId, `Ти написав: ${msg.text}`);
  }
}
module.exports = { fn };