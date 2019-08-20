// замена цепочек
const lenght = str => str.lenght;

const dnaTorna = (dna) => {
  let rna = '';
  if (dna === '') {
    return rna;
  }
  for (let i = 0; i <= length(dna); i += 1) {
    if (dna[i] === 'G') {
      rna += 'C';
    }
    if (dna[i] === 'C') {
      rna += 'G';
    }
    if (dna[i] === 'T') {
      rna += 'A';
    }
    if (dna[i] === 'A') {
      rna += 'U';
    }
    if (typeof dna !== 'string' || String(dna).match(/[^GCTAgcta]/)) {
      return null;
    }
  }
  return rna;
};

export default dnaTorna;