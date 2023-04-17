let tareas = [];
let tareasAuxiliar;
let click = false;
const contenedorDeTareas = document.querySelector("#contenedorTareas")
const valueTextArea = document.querySelector("#textArea")
const mostrar = document.querySelector("#mostrar")

let formatoTarea = ``;

const btnTarea = document.querySelector("#btnTarea")

const marcarTarea = (indice) => {
    console.log(indice)
    tareas[indice].completed = true;
    actualizarListaTareas();
    console.log(tareas);
    // const card = event.target.parentNode.parentNode;
    // card.classList.add("bg-success", "text-decoration-line-through")
}


const marcarFavorito = (index) => {
   tareas[index].favorito = true ;
   actualizarListaTareas();

   console.log(tareas)
}

const mostrarFavoritos = () => {
    click = !click;
    if(click){
        tareasAuxiliar = tareas;
        tareas = tareas.filter(item => item.favorito == true)
        actualizarListaTareas();
        mostrar.innerHTML = "Mostrar todos"
    }else{
        tareas = tareasAuxiliar;
        actualizarListaTareas();
        mostrar.innerHTML ="Mostrar Favoritos"
    }
    
}




// btnTarea.addEventListener("click", () => {

//     tareas.push({message: valueTextArea.value.trim(), complete:false, fav: false })



const actualizarListaTareas = () => {
    const listaTareasHtml = tareas.map((tarea, index) => {
        return `<div class=" ${tarea.completed == true ? "bg-success text-decoration-line-through": " "} mt-2 card w-100">
                <div class="card-body d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input ${tarea.completed == true ? "checked" : ""} onclick="marcarTarea(${index})"
                     id="inputRadio" type="radio" style="height:2rem; width:2rem;">
                </div>
                <div class="ps-4 pe-4"style="text-aling: justify;">
                    ${tarea.message}
                </div>
                <div>
                <input ${tarea.favorito == true ? "checked" : ""}
                type="checkbox" onclick="marcarFavorito(${index})">
                </div>
            </div>
        </div>`;
    }).join(" ");

    contenedorDeTareas.innerHTML = listaTareasHtml

}

btnTarea.addEventListener("click", () => {
    const nuevaTarea = {
        message: valueTextArea.value,
        completed: false,
        favorito: false
    };
    tareas.push(nuevaTarea);
    actualizarListaTareas();
});
