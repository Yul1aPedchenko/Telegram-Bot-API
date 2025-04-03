const refs = {
  dublicateMsg: require("./js/dublicate_msg"),
};
function registerHandlers(bot, actionType) {
  if (actionType === "base") {
    bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(
        chatId,
        "Привіт! Я бот на якому моя володарка тренується з API. Напиши /help, щоб дізнатися більше."
      );
    });

    bot.onText(/\/help/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(
        chatId,
        "Список команд:\n/start - Почати\n/help - Допомога\n/first - Дублювання повідомлень"
      );
    });

    bot.onText(/\/first/, (msg) => {
      const chatId = msg.chat.id;
      actionType = "dublicate_msg";
      bot.sendMessage(
        chatId,
        "Ви перейшли в режим 1. Бот буде дублювати кожне ваш повідомлення, якщо ви хочете повернутись назад пропишіть /back"
      );
    });
  } else if (actionType === "dublicate_msg") {
    bot.on("message", (msg) => {
      refs.dublicateMsg(bot, msg);
    });
  }
}

module.exports = { registerHandlers };
