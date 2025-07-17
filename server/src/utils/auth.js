function generateToken(user) {
  return user._id.toString();
}

module.exports = { generateToken }; 