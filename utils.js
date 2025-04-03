function getUserInfo(msg) {
  return `ID користувача: ${msg.from.id}, Ім'я: ${msg.from.first_name}`;
}

module.exports = { getUserInfo };
