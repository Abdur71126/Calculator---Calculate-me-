// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {                  //Array.from() = "Take this collection and make it a proper Array.". Ex: "123" -- ["1","2","3"] ,ex2 : buttons -- [button1,button2,button3]

//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);                               //eval()- takes a string and treats it as JavaScript code.  "2+3"--5
//       document.querySelector("input").value = string;
//     } 
//     else if (e.target.innerHTML == "AC") {
//       string = "";                          
//       document.querySelector("input").value = string;
//     } 
//     else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   });
// });





let string = "";
let memory = 0;
let btn = document.querySelectorAll('.button');

let arr = Array.from(btn);
console.log(arr);

arr.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
           string = eval(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("input").value = string;
            memory =0;
        }
        else if(e.target.innerHTML == "M+"){
            memory = memory + Number(eval(string));
            document.querySelector('input').value = memory
        }
        else if(e.target.innerHTML == "M-"){
            memory = memory - Number(eval(string));
            document.querySelector('input').value = memory
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
        
    })
})









