const jwt = require('jsonwebtoken');

const SUPER_SECRET_KEY = 'DONT_READ_ME_321'
const blokcedList = [] // <-- not stateless

const createSession = (userId) => {
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 1);

  const newSession = {
    // no sessionId needed as session data is stored in token
    expiresAt: expiry.valueOf(),
    userId: userId
  }

  return jwt.sign(newSession, SUPER_SECRET_KEY);
}

const getSession = (token) => {
  if (blokcedList.includes(token)) return undefined;

  const sessionData = jwt.verify(token, SUPER_SECRET_KEY);

  if (sessionData.expiry < Date.now()) {
    console.log('Token has expired.');
    return undefined;
  }

  return sessionData;
}

const destroySession = (token) => {
  blokcedList.push(token);
  return true;
}

module.exports = {createSession, getSession, destroySession};