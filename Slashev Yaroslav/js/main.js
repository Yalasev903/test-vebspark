const time = 7000;//ms
const step = 1;

function outNum(num, elem) {
     let l = document.querySelector('#' + elem)
     n = 0;
     // if (step == 0) {
     //      step = 1;
     // }else{
     //      step = step;
     // }
     let t = Math.round(time / (num / step));
     let interval = setInterval(() => {
          n = n + step
if (n == num) {
     clearInterval(interval);
}
l.innerHTML = n;
     },
 t);
}

 outNum(11787, 'out-num1');
// outNum(112, 'out-num3');
 outNum(870, 'out-num2');
