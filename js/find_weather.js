const { WEATHER_TOKEN } = require("../config");
const url = "https://api.openweathermap.org/data/3.0/weather?";
const searchParams = new URLSearchParams({
  q: null,
  appid: WEATHER_TOKEN,
  units: "metric",
  lang: "ua",
});
async function fn(bot, chatId, city) {
  try {
    searchParams.q = city;
    const r = await fetch(`${url}${searchParams}`);
    const data = await r.json();
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const msgToUser = `Погода в ${city}:
Температура: ${temp}°C
Відчувається як: ${feelsLike}°C
Опис: ${description}
Вологість: ${humidity}%`;
    bot.sendMessage(chatId, msgToUser);
  } catch (error) {
    console.log(error);
    bot.sendMessage(chatId, "Сталась помилка, спробуйте ще раз");
  }
}

module.exports = { fn };
