const refs = {
  dublicateMsg: require("./js/dublicate_msg"),
  findWeather: require('./js/find_weather')
};
function registerHandlers(bot, currentType) {
  bot.removeAllListeners("message");
  bot.removeAllListeners("text");
  bot.on("message", (msg) => {
    let text = msg.text;
    const chatId = msg.chat.id;
    if (text.includes("/")) {
      if (text == "/start") {
        bot.sendMessage(
          chatId,
          "Привіт! Я бот на якому моя володарка тренується з API. Напиши /help, щоб дізнатися більше."
        );
      } else if (text == "/help") {
        bot.sendMessage(
          chatId,
          "Список команд:\n/start - Почати\n/help - Допомога\n/first - Дублювання повідомлень"
        );
      } else if (text == "/first") {
        bot.sendMessage(
          chatId,
          "Ви перейшли в режим 1. Бот буде дублювати кожне ваш повідомлення, якщо ви хочете повернутись назад пропишіть /back"
        );
        registerHandlers(bot, "dublicate_msg");
      } else if (text == "/back") {
        bot.sendMessage(chatId, "Ви повернулися до базового режиму.");
        registerHandlers(bot, "base");
      } else if (text.includes('/weather')) {
        const city = text.trim().slice(8, text.lenght).trim();
        if (!city) {
          bot.sendMessage(
            chatId,
            "Будь ласка, вкажи назву міста після /weather, наприклад: /weather Київ"
          );
        } else {
          refs.findWeather.fn(bot, chatId, city);
        }
      }
        else {
        bot.sendMessage(
          chatId,
          "Перевірте чи правильно написана команда"
        );
      }
    }
  });

  if (currentType === "dublicate_msg") {
    bot.on("message", (msg) => {
      refs.dublicateMsg.fn(bot, msg);
    });
  }
}

module.exports = { registerHandlers };
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     "Привіт! Я бот на якому моя володарка тренується з API. Напиши /help, щоб дізнатися більше."
//   );
// });

// bot.onText(/\/help/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     "Список команд:\n/start - Почати\n/help - Допомога\n/first - Дублювання повідомлень"
//   );
// });

// bot.onText(/\/first/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     "Ви перейшли в режим 1. Бот буде дублювати кожне ваш повідомлення, якщо ви хочете повернутись назад пропишіть /back"
//   );
//   registerHandlers(bot, "dublicate_msg");
// });
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     "Ви в базовому режимі. Перевірте чи правильно написана команда"
//   );
// });
