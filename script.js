let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];


const out = document.querySelector('.calc-screen p')

function clearAll () {
     a = '';
     b = '';
     sign = '';
     finish = false;
     out.textContent = 0;
}

document.querySelector('.AC').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

     if(!event.target.classList.contains('btn')) return;

     if(event.target.classList.contains('AC')) return;

     out.textContent = '';

     const key = event.target.textContent;


     if (digit.includes(key)) {
          if (b === '' && sign === '') {
               a += key;
               console.log(a, b, sign);
               out.textContent = a;
          }
          else if (a!== '' && b!== '' && finish) {

          }
          else {
               b += key;
               out.textContent = b;
          }
          console.log(a, b, sign);
          return;
     }


     if (action.includes(key)) {
          sign=key;
          out.textContent = sign;
          console.log(sign);
          return;
     }


     if (key === '=') {
          if (b === '') b = a;
          switch (sign) {
               case '+':
                    a = (+a) + (+b);
                    break;
               case '-':
                    a = a - b;
                    break;
               case 'x':
                    a = a * b;
                    break;
               case '/':
                    if (b === '0') {
                         out.textContent = 'Error'
                         a = '';
                         b = '';
                         sign = '';
                         return;
                    }
                    a = a / b;
                    break;
          }
          finish = true;
          out.textContent = a;
          console.table(a, b, sign);
     }
};



