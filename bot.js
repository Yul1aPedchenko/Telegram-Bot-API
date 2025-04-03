const Telegram = require("node-telegram-bot-api");
const { TOKEN } = require("./config");
const { registerHandlers } = require("./handlers");

const bot = new Telegram(TOKEN, { polling: true });
let currentType = "base";
registerHandlers(bot, currentType);

console.log("Бот запущений!");
