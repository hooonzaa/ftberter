// Definice množin A, B a C
const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7, 8]);
const C = new Set([3, 4, 5]);

function majkl() {
  // Operace průniku množin
  const prunik = new Set([...A].filter(x => C.has(x)));
  const prunikText = '<p>Průnik množiny A a množiny C: ' + [...prunik] + '</p>';

  // Operace sjednocení množin
  const sjednoceni = new Set([...A, ...B]);
  const sjednoceniText = '<p>Sjednocení množiny A a množiny B: ' + [...sjednoceni] + '</p>';

  // Operace doplňku množiny
  const doplnek = new Set([...B].filter(x => !A.has(x)));
  const doplnekText = '<p>Doplňek množiny A vzhledem k množině B: ' + [...doplnek] + '</p>';

  // Přidání výsledků do elementu s id "id"
  document.getElementById("id").innerHTML = prunikText + sjednoceniText + doplnekText;
}