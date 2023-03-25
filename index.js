const testinomials = [
    {
      name:"Collette C",
      photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      text:"Apple should be nominated for service of the year. Not able to tell you how happy I am with apple. It's just amazing."


    },
    {
      name:"Griswold I",
      photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      text:"Apple was worth a fortune to my company. I am completely blown away. I would also like to say thank you to all your staff. Keep up the excellent work.",
      
    },
    {
      name:"Cinda I",
      photoUrl:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      text:"I just can't get enough of apple. I want to get a T-Shirt with apple on it so I can show it off to everyone. It's all good. You've saved our business! I use apple often.",
      
    }
]

const imgE1 = document.querySelector("img");
const textE1 =document.querySelector(".text");
const usernameE1 =document.querySelector(".username");


let idx =0;

updateTestinomial()
function updateTestinomial(){
     const {name, photoUrl, text}= testinomials[idx];
     imgE1.src =photoUrl;
     textE1.innerText =text;
     usernameE1.innerText=name;
   idx++
   if(idx===testinomials.length){
       idx=0;
   }
   setTimeout(()=>{
       updateTestinomial()
   },2000)
     
}
