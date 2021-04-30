let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
  function calculate(){
      var a=document.getElementById("dis").Value;
      var b=eval(a);
      if(b==undefined){
          b=null;
      }
      document.getElementById("dis").Value=b;
  }

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                display.innerText=calculate();
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
}); 
