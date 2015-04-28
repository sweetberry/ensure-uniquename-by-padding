module.exports = function ensureUniqueNameByPadding ( name, predefinedList ) {

  function isUnique ( name ) {
    return !predefinedList.length || predefinedList.indexOf( name ) < 0;
  }

  var destName = name;
  if (!isUnique( name )) {
    var inc = 2;
    do {
      var tempName = name + '_' + inc;
      inc++;
    } while (!isUnique( tempName ));
    destName = tempName;
  }
  return destName;
};