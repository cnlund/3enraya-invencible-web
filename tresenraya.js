const cero = document.getElementById("casilla0")
const uno = document.getElementById("casilla1")
const dos = document.getElementById("casilla2")
const tres = document.getElementById("casilla3")
const cuatro = document.getElementById("casilla4")
const cinco = document.getElementById("casilla5")
const seis = document.getElementById("casilla6")
const siete = document.getElementById("casilla7")
const ocho = document.getElementById("casilla8")
const ganador = document.getElementById("resultado")
const reiniciar = document.getElementById("reiniciar")
const Jugador = document.getElementById("PuntuacionJ")
const Maquina = document.getElementById("PuntuacionM")
const Empate = document.getElementById("PuntuacionE")

let Casillas = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let PJugador = 0
let PMaquina = 0
let PEmpate = 0

function turno(casilla, ficha, registro){
    if(casilla==0){
        cero.innerHTML = ficha
        cero.disabled = "true"
        Casillas[0] = registro
    }
    if(casilla==1){
        uno.innerHTML = ficha
        uno.disabled = "true"
        Casillas[1] = registro
    }
    if(casilla==2){
        dos.innerHTML = ficha
        dos.disabled = "true"
        Casillas[2] = registro
    }
    if(casilla==3){
        tres.innerHTML = ficha
        tres.disabled = "true"
        Casillas[3] = registro
    }
    if(casilla==4){
        cuatro.innerHTML = ficha
        cuatro.disabled = "true"
        Casillas[4] = registro
    }
    if(casilla==5){
        cinco.innerHTML = ficha
        cinco.disabled = "true"
        Casillas[5] = registro
    }
    if(casilla==6){
        seis.innerHTML = ficha
        seis.disabled = "true"
        Casillas[6] = registro
    }
    if(casilla==7){
        siete.innerHTML = ficha
        siete.disabled = "true"
        Casillas[7] = registro
    }
    if(casilla==8){
        ocho.innerHTML = ficha
        ocho.disabled = "true"
        Casillas[8] = registro
    }
}

function RevisarGanador(anunciar){
    if (Casillas[0] == 1 && Casillas[1] == 1 && Casillas[2] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[3] == 1 && Casillas[4] == 1 && Casillas[5] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[6] == 1 && Casillas[7] == 1 && Casillas[8] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[0] == 1 && Casillas[3] == 1 && Casillas[6] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[1] == 1 && Casillas[4] == 1 && Casillas[7] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[2] == 1 && Casillas[5] == 1 && Casillas[8] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }   
    }
    if (Casillas[0] == 1 && Casillas[4] == 1 && Casillas[8] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[2] == 1 && Casillas[4] == 1 && Casillas[6] == 1){
        if (anunciar == true){
             ganador.innerHTML = "Gana el jugador"
             PJugador++
             Jugador.innerHTML = PJugador
        }
        if (anunciar == false){
            return -1
        }
    }
    if (Casillas[0] == -1 && Casillas[1] == -1 && Casillas[2] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[3] == -1 && Casillas[4] == -1 && Casillas[5] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[6] == -1 && Casillas[7] == -1 && Casillas[8] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[0] == -1 && Casillas[3] == -1 && Casillas[6] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[1] == -1 && Casillas[4] == -1 && Casillas[7] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[2] == -1 && Casillas[5] == -1 && Casillas[8] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[0] == -1 && Casillas[4] == -1 && Casillas[8] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[2] == -1 && Casillas[4] == -1 && Casillas[6] == -1){
        if (anunciar == true){
             ganador.innerHTML = "Gana la máquina"
             PMaquina++
             Maquina.innerHTML = PMaquina
        }
        if (anunciar == false){
            return 1
        }
    }
    if (Casillas[0] !== 0 && Casillas[1] !== 0 && Casillas[2] !== 0 && Casillas[3] !== 0 && Casillas[4] !== 0 && Casillas[5] !== 0 && Casillas[6] !== 0 && Casillas[7] !== 0 && Casillas[8] !== 0){
        if (anunciar == true){
             ganador.innerHTML = "Empate"
             PEmpate++
             Empate.innerHTML = PEmpate
        }
        if (anunciar == false){
            return 0
        }
    }
    return null
}

function TMaquina(){
    let MejorPuntaje = -Infinity
    let Jugada
    for(let i = 0; i < Casillas.length; i++){
        if (Casillas[i] == 0){
            Casillas[i] = -1
            let Puntaje = MiniMax(0, false)
            Casillas[i] = 0
            if (Puntaje > MejorPuntaje){
                MejorPuntaje = Puntaje
                Jugada = i
            }

        }
    }
    turno(Jugada, "O", -1)
}

function MiniMax(Profundidad, EsMaximizador){
    let resultado = RevisarGanador(false)
    if (resultado !== null){
        return resultado
    }
    if (EsMaximizador == true){
        let MejorPuntaje = -Infinity
        for(let i = 0; i < Casillas.length; i++){
            if (Casillas[i] == 0){
                Casillas[i] = -1
                let Puntaje = MiniMax(Profundidad + 1, false)
                Casillas[i] = 0
                if (Puntaje > MejorPuntaje){
                    MejorPuntaje = Puntaje
                }
            }
        }
        return MejorPuntaje
    } else{
        let MejorPuntaje = Infinity
        for(let i = 0; i < Casillas.length; i++){
            if (Casillas[i] == 0){
                Casillas[i] = 1
                let Puntaje = MiniMax(Profundidad + 1, true)
                Casillas[i] = 0
                if (Puntaje < MejorPuntaje){
                    MejorPuntaje = Puntaje
                }
            }
        }
        return MejorPuntaje
    }
}

function LimpiarTablero(){
    for(let i = 0; i < Casillas.length; i++){
        Casillas[i] = 0
    }
    cero.innerHTML = ""
    uno.innerHTML = ""
    dos.innerHTML = ""
    tres.innerHTML = ""
    cuatro.innerHTML = ""
    cinco.innerHTML = ""
    seis.innerHTML = ""
    siete.innerHTML = ""
    ocho.innerHTML = ""
    cero.disabled = false
    uno.disabled = false
    dos.disabled = false
    tres.disabled = false
    cuatro.disabled = false
    cinco.disabled = false
    seis.disabled = false
    siete.disabled = false
    ocho.disabled = false
    ganador.innerHTML = ""
}

cero.addEventListener("click", function (e) {
    turno(0, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
uno.addEventListener("click", function (e) {
    turno(1, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
dos.addEventListener("click", function (e) {
    turno(2, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
tres.addEventListener("click", function (e) {
    turno(3, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
cuatro.addEventListener("click", function (e) {
    turno(4, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
cinco.addEventListener("click", function (e) {
    turno(5, "X", 1)
    TMaquina()
    RevisarGanador(true )
})
seis.addEventListener("click", function (e) {
    turno(6, "X", 1)
    TMaquina()
    RevisarGanador(true )
})
siete.addEventListener("click", function (e) {
    turno(7, "X", 1)
    TMaquina()
    RevisarGanador(true )
})
ocho.addEventListener("click", function (e) {
    turno(8, "X", 1)
    TMaquina()
    RevisarGanador(true)
})
reiniciar.addEventListener("click", function (e) {
    LimpiarTablero()
})