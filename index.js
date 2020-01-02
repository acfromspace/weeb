module.exports = function weeb(string) {
  var translations = {
    no: "IIE",
    plan: 'keikaku (Translator\'s note: "keikaku" means "plan")',
    sorry: "GOMENASORRY",
    what: "NANI",
    yes: "HAI",
  };
  if (typeof string !== "string")
    throw new TypeError("これは文字列ではありません!");
  return string.replace(/no|plan|sorry|what|yes/gi, function(matched) {
    return translations[matched];
  });
};
