//   const button1 =document.getElementById('1');
//   button1.addEventListener('click', function(){
//     alert('fuck')
//   })

let is_x_turn = true;

const board = ['','','','','','','','',''];
// const buttons = document.querySelectorAll('.button2');

const button =document.querySelectorAll('button')
let ButtonArry =[]
button.forEach(button =>{
    button.addEventListener('click',function(e){
        if(is_x_turn){
           button.textContent="X";
    
        }else{ 
           button.textContent="O";  

        }

           is_x_turn = !is_x_turn;
            // ButtonArry.push(e.target.id);
            // console.log(ButtonArry);
       
    });
});





// const players =['x','o']
// let currentPlayer = players['0']
// const msg = document.createElement('h5')
// msg.textContent = 'x'
// board.after(msg)

// const winners = [[0, 1, 2],
//                 [3, 4, 5],
//                 [6, 7, 8],
//                 [0, 3, 6],
//                 [1, 4, 7],
//                 [2, 5, 8],
//                 [0, 4, 8],
//                 [2, 4, 6]
//                 ]

// for(let i= 0;i<buttons.length; i++){
//     buttons[i].addEventListener('click',()=>{
//         if(buttons[i].textContent !==''){
//             return
//         }
//     })
// }