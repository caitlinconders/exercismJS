var hamming = function() {};

hamming.prototype.compute = function(str1, str2) {
    var hamDiff = 0;
    var length = str1.length;
    if (length !== str2.length){
    throw new Error('DNA strands must be of equal length.');
  }

    for (var i = 0; i < length; i++) {

        if (str1[i] !== str2[i]) {
            hamDiff++;
        }
    }
    return hamDiff;
};

module.exports = hamming;
