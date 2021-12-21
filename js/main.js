let task = [];
let ids =0;
const getstr = () => {
  let usuario = document.getElementById("nombre").value;
  return usuario;
};

const limpiar = () => {
  document.getElementById("nombre").value = "";
};

const writeDom = (info) => {
  let container = document.getElementsByTagName("section")[0];
  let elemento = document.createElement("div");
  elemento.id = 'tareas';
  elemento.innerHTML = `<div id="content">${info}</div> <input type="button" onclick="edit()" value="EDITAR" id="editar"> <input type="button" onclick="del()" value="DELETE" id="delete">`;
  container.appendChild(elemento);
  limpiar();
};



  const enviar = document.getElementById("enviar");
  enviar.addEventListener("click", function (event) {
    if (enviar.value == 'ENVIAR') {
        event.preventDefault();
        writeDom(getstr());
        const tasks = {name:document.getElementById("nombre").te, id: ++ids};
        task.push(tasks);
    }
    if (enviar.value == 'EDITAR'){
        event.preventDefault();
        let elemento = document.getElementById("content");
        elemento.innerText = getstr();
        enviar.value = 'ENVIAR'
        limpiar();
    }
  });


const edit = () => {
  document.getElementById("nombre").value = 
  document.getElementsByTagName('div')[0].textContent;
  enviar.value = "EDITAR";  
};

const del = () => {
    let container = document.getElementsByTagName('div')[0];
    container.parentNode.removeChild(container);
    
}


// const editar = document.getElementById('editar');
//     editar.addEventListener('click', function(){

// })
