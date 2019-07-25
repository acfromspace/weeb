module.exports = function weeb(string) {
  if (typeof string !== "string")
    throw new TypeError("これは文字列ではありません!");
  return string.replace("what", "NANI");
};
