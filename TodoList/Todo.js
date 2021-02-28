const bodyoutput = document.querySelector('#bodyoutput');
const bodyoutput2 = document.querySelector('#bodyoutput2');


btn2press = 0;
btn2.addEventListener('click', () => {
    createActivity();    
})
function createActivity(){
    let todoinput = document.getElementById('todoInput').value;
    btn2press += 1;
    bodyoutput2.insertAdjacentHTML("beforebegin",
    '<div class="list" id="list'+btn2press+'"><h1>'+todoinput+'</h1><button onclick="suicide('+btn2press+')">Remove</button><button onclick="bought('+btn2press+')">Done</button></div>'
    );
}
function suicide(which){
    let target = document.getElementById('list'+which)
    target.remove();
}
function bought(which){
    let target = document.getElementById('list'+which)
    target.classList.toggle('done');
    
    }

