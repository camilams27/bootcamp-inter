function adicionarTarefa() {
    var task = document.getElementById("task").value;
    var list = document.getElementById("list");
 
    //colocando na tela
    var line = document.createElement("ul");

    var input = document.createElement("input");
    input.type = "checkbox";

    var taskLabel = document.createElement("label");
    taskLabel.innerHTML = task;

    list.appendChild(line);
    line.appendChild(input);
    line.appendChild(taskLabel);
   
    input.onclick = function() {
        
        if(input.checked){
            line.style.textDecoration = "line-through";
            line.style.color = "grey";
        }else{
            line.style.textDecoration = "none";
            line.style.color = "black";
        }
    }

    return ;
}


