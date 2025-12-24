const infinito = '∞'
const perTe = 'Iaia'

let polpo = {
    tentacoli: 8,
    cuore: infinito,
    amore: perTe,
    spiritoNatalizio: true
}

if (polpo.amore == perTe && polpo.spiritoNatalizio) {
    document.getElementById("polpo").innerHTML = `
    <h1>Buon natale Iaia</h1>
    <h2>Ti amo</h2>
    <p>E nel cuore, sempre te ❤️🩵</p>
    `
}