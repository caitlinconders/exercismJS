var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(dna) {
    var length = dna.length;
    var rna = '';
    var transcriber = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    for (var i = 0; i < length; i++) {
        var currDna = dna[i];
        rna += transcriber.currDna;
    }
    return rna;
};

module.exports = dnaTranscriber;
