let pieza1 = document.getElementsByClassName("pieza 1")[0];
let pieza2 = document.getElementsByClassName("pieza 2")[0];
let pieza3 = document.getElementsByClassName("pieza 3")[0];
let pieza4 = document.getElementsByClassName("pieza 4")[0];
let pieza5 = document.getElementsByClassName("pieza 5")[0];
let pieza6 = document.getElementsByClassName("pieza 6")[0];
let pieza7 = document.getElementsByClassName("pieza 7")[0];
let pieza8 = document.getElementsByClassName("pieza 8")[0];
let vacioH, vacioV;
function generarPuzle() {
    [vacioH, vacioV] = [2, 2];
    let positions = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3]];
    let piezas = [pieza1, pieza2, pieza3, pieza4, pieza5, pieza6, pieza7, pieza8];
    for (let i = 7; i >= 0; i--) {
        let r = Math.round(Math.random() * i);
        let posicionesIniciales = positions.splice(r, 1);
        piezas[i].style.gridRow = posicionesIniciales[0][0];
        piezas[i].style.gridColumn = posicionesIniciales[0][1];
    }
}
function moverPieza() {
    horizontal = this.style.gridRow.charAt(0);
    vertical = this.style.gridColumn.charAt(0);
    if (vacioH == horizontal) {
        if (parseInt(vertical) + 1 == vacioV || parseInt(vertical) - 1 == vacioV) {
            let temporalVertical = vertical;
            this.style.gridColumn = vacioV.toString();
            vacioV = temporalVertical;
        }
    } else if (vacioV == vertical) {
        if (parseInt(horizontal) + 1 == vacioH || parseInt(horizontal) - 1 == vacioH) {
            let temporalHorizontal = horizontal;
            this.style.gridRow = vacioH.toString();
            vacioH = temporalHorizontal;
        }
    }
}
pieza1.onclick = moverPieza;
pieza2.onclick = moverPieza;
pieza3.onclick = moverPieza;
pieza4.onclick = moverPieza;
pieza5.onclick = moverPieza;
pieza6.onclick = moverPieza;
pieza7.onclick = moverPieza;
pieza8.addEventListener("click", moverPieza);
document.getElementById("juegonuevo").onclick = generarPuzle;
generarPuzle();