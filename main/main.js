module.exports = function main(email, suffixes) {
  // Write your code here
  var splits = email.split("@");
  for(var i = 0; i < suffixes.length; i++) {
      if(splits[1] == suffixes[i]) {
        return true;
      }
  }
  return false;
};
