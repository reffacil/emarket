class Xhr{
    constructor(path){
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", path, false);
        this.xhr.send();
    }
    // Return the main content HTML response
    get response(){return this.xhr.response;}
}

class DotEnv{
    constructor(path){
        const env = new Xhr(path).response;
        let element = env.split(/\r?\n/);
        let arrayVar = new Array();
        element.forEach(row => {
            let str = row.split(/=/);
            if(str[0]){
                arrayVar[str[0].trim()] = str[1].trim();
            }
        });
        return arrayVar;
    }
}

document.addEventListener('DOMContentLoaded',function(){
    // console.log("me cargue despues del el dom");
    
    let date = new Date();
    let dia = date.getDay();
    let mes = date.getMonth();
    let año = date.getFullYear();

    let hoy = Date.now();
    const fecha = new Date(hoy);
    const opciones = { weekday:'long', year:'numeric', month:'long', day:'numeric' };

    let fecha_seleccionada = document.getElementById("fecha_seleccionada");
    fecha_seleccionada.textContent = fecha.toLocaleDateString(window.navigator.language, opciones);
    fecha_seleccionada.addEventListener('click', function(){
        let picker = document.getElementById('fecha');
        picker.showPicker();
    });

    console.log(new Date(año, mes, 0).getDate());
});