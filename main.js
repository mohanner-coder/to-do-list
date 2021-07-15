const BUTTON = document.getElementById('button');
const TODOS = document.querySelector('.todos');
const CLOSE_BUTTONS = document.getElementsByClassName('close');

BUTTON.onclick = function () {
    const TODO = document.getElementById('todoInput');
    const NEW_TODO = document.createElement('div');
    NEW_TODO.classList.add('todo')
    NEW_TODO.innerHTML =`<button class="close">x</button>
    <div class ="todoHeading"> <p>${TODO.value}</p></div>
    `;
    TODOS.appendChild(NEW_TODO);
     TODO.value ='';
     for(var i = 0; i< CLOSE_BUTTONS.length; i++) {
        var close = CLOSE_BUTTONS[i];
        close.onclick = function() {
            var div = this.parentElement;
            div.style.display="none"
        }
     
     }

     
}