//funcao que adiciona tarefa
function addTask(){
    //titulo da tarefa -- input aqui q to pegando
    const taskTitle = document.querySelector("#task-title").value; //value é o valor do input tem q botar
    if(taskTitle){
        //se existe taskttitle vou retornar
        //clonar template -- meu li 
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)
        //metodo clone node clonar html em nova variavel

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)
       
        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        });
        
        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
           completeTask(this) 
        })
        //limpar tesxto
        document.querySelector("#task-title").value =""

    }
    // funcao de remover tarefa
    function removeTask(task){
        task.parentNode.remove(true)
        //remover elemento pai a LI
    }

}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    // nao envia formulario fica esperando a acao de javascript nao recarrega a pagina ao toque do botao
    addTask();
    //funcao pra fazer a adicao do botao
});


function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done")
}
// estudar aula 49 de eventos