const mongoose = require('mongoose');

const GeneralModel = require('../models/user');
const GeneralModel = require('./getPrivKey');


const createUser = async (login, pwd, name) => {
    const item = new GeneralModel;
  item.auth.login = login;
  item.auth.pwd = pwd;
  item.name = name;

  try {
    const doc = await item.save();
    console.log("\x1b[35m",'success registration');
    return { status: 'success registration', payload: { userID: doc._id, login } };
  } catch (err) {
    console.log("\x1b[31m",'reg error:', err.message);
    if (err.message.includes('dup key: { auth.login')) {
      return { status: 'reg error: this login is already taken'};
    }
    return { status: `unknown reg error: ${err.message}`};
  }
}

const loginUser = async (login, pwd) => {
  const user = await GeneralModel.findOne({ 'auth.login': login });
    if (!user) {
    console.log("\x1b[31m",' login error: user is not registered');
    return { status: 'login error: user is not registered' };
  }

  const isVerified = await user.verify(pwd);
  if (!isVerified) {
    console.log("\x1b[31m",`login error: wrong password to ${user.auth.login}`);
    return { status: `login error: wrong password to ${user.auth.login}`};
  }
  const profile = {
    userID: user._id,
    name: user.name,
  }
  console.log("\x1b[35m",`success login to ${user.auth.login}`);
  return { status: 'success login', payload: { profile } };
}

const checkUser = async (userID) => {
  if (!userID) {
    console.log("\x1b[31m",' user is not identify');
    return { status: 'identify error: user is not identify' };
  }

  const user = await GeneralModel.findOne({ _id: userID });
  if (!user) { 
    console.log("\x1b[31m",'identify error'); 
    return { status: 'identify error: user is alien' }; }
    
  const profile = {
    name: user.name,
  }
  console.log('success identify to', user.auth.login);
  return { status: `success identify user ${profile.name}`, payload: { profile } };
}


module.exports = {
  createUser,
  loginUser,
  checkUser
};