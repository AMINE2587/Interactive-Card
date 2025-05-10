let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let holderName = document.getElementById('holder-name');
let cardNumber = document.getElementById('card-number');
let year = document.getElementById('y');
let month = document.getElementById('m');
let cvc = document.getElementById('cvc');
let inptsDisplay = document.getElementById('inputs-display');
let completeDisplay = document.getElementById('complete-display');


let cardinfo;

if(localStorage.cardinformations != null){
   cardinfo = localStorage.setItem(JSON.stringify(cardinfo));
}else{
    cardinfo = [];
};


function Confirm(){
    if(holderName.value.trim() !== "" &&
       cardNumber.value.trim() !== "" &&
       cvc.value.trim() !== "" && 
       year.value.trim() !== "" &&
       month.value.trim() !== "" ){
        inptsDisplay.style.display = 'none';
        completeDisplay.style.display = 'flex';

        let cardInfo = {
            holdername: holderName.value,
            cardnumber: cardNumber.value,
            cvc: cvc.value,
            month: month.value,
            year: year.value,
        };
        cardinfo.push(cardInfo);
        localStorage.setItem('cardinformations',JSON.stringify(cardinfo));
       }
}

    function drawCanvas() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

     
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(230, 230, 100, 0, Math.PI * 2); 
      ctx.fill();  

      
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'white';
      ctx.arc(470, 230, 50, 0, Math.PI * 2);  
      ctx.stroke(); 

      
      ctx.font = "100px 'Poppins'";
      ctx.fillStyle = 'white';
      ctx.fillText(cardNumber.value, 230, 700);


      ctx.font = "60px 'Poppins'";
      ctx.fillText(holderName.value, 230, 900);

      


      ctx.font = "70px 'Poppins'";
      ctx.fillText(year.value, 1650, 900);

      ctx.font = "70px 'Poppins'";
      ctx.fillText(month.value,  1500, 900);
    
      ctx.font = "70px 'Poppins'";
      ctx.fillText('/', 1600, 900);

      ctx.font = "80px 'Poppins'";
      ctx.fillText(cvc.value, 1600, 230);
    }

    
    drawCanvas();

    cardNumber.addEventListener('input', drawCanvas);
    holderName.addEventListener('input', drawCanvas);
    year.addEventListener('input', drawCanvas);
    month.addEventListener('input', drawCanvas);
    cvc.addEventListener('input', drawCanvas);
   


