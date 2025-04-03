function dublicateMsg(bot, msg) {
  const chatId = msg.chat.id;

  if (!msg.text.startsWith("/")) {
    bot.sendMessage(chatId, `Ти написав: ${msg.text}`);
  }
}
module.exports = { dublicateMsg };
