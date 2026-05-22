const taskInput = document.getElementById('taskInput');

const addbtn = document.getElementById('add');
const delbtn = document.getElementById('del');
const resbtn = document.getElementById('res');

const taskList = document.getElementById('taskList');

addbtn.addEventListener('click',function(){
    const content=taskInput.value;
    if(content==='') return ;
    const li=document.createElement('li')
    li.innerText=content
    taskList.appendChild(li)
    taskInput.value='';
    

    
})
delbtn.addEventListener('click',function(){
    
    const lastTask  = taskList.lastElementChild;
    if(lastTask){
        taskList.removeChild(lastTask)
    }
})
resbtn.addEventListener('click',function(){
    taskList.innerHTML=' '
})



