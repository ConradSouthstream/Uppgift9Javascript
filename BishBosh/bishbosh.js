const bodyoutput = document.querySelector('#bodyoutput');
const bodyoutput2 = document.querySelector('#bodyoutput2');

for (let i = 0; i <= 100; i++) {    
 
    let output;
    if(i % 3 === 0 && i % 4 === 0){
     output = 'Bish-Bosh'
    }
    else if(i % 3 === 0){
     output = 'Bish'
    }
    else if(i % 4 === 0){
     output = 'Bosh';
    }
    else {
     output = i;
    }
     console.log(output);
     let node = document.createElement("P");
     let textnode = document.createTextNode(output);
     node.appendChild(textnode);
   }
   
   function doit() {
   
   
       let bishinput = document.getElementById('bishinput').value;
       let boshinput = document.getElementById('boshinput').value;
       let cyclesinput = document.getElementById('cyclesinput').value;
       bodyoutput.innerText = "";
       if(
           bishinput < 0 ||
           boshinput < 0 ||
           cyclesinput < 0
       ){
           bodyoutput.innerHTML = "<h1>NO NEGATIVE VALUES!!</h1>"
       }
       else{    
           for (let i = 1; i <= cyclesinput; i++) {    
               
               let output;
               if(i % bishinput === 0 && i % boshinput === 0){
               output = 'Bish-Bosh'
               }
               else if(i % bishinput === 0){
               output = 'Bish';
               }
               else if(i % boshinput === 0){
               output = 'Bosh';
               }
               else {
               output = i;
               }            
               let node = document.createElement("P");
               let textnode = document.createTextNode(output);
               node.appendChild(textnode);
               bodyoutput.append(node);
           }
       }
   }
btn.addEventListener('click', () => {
    doit();
})
btn2press = 0;
btn2.addEventListener('click', () => {
    btn2press += 1;
    bodyoutput2.insertAdjacentHTML("beforebegin",
    '<div class="list" id="list'+btn2press+'"><h1>PHUK!'+btn2press+'</h1><button onclick="suicide('+btn2press+')">Remove</button><button onclick="bought('+btn2press+')">Done</button></div>'
    );
})
function suicide(which){
    let target = document.getElementById('list'+which)
    target.remove();
}
function bought(which){
    let target = document.getElementById('list'+which)
    target.classList.toggle('done');
    
    }

