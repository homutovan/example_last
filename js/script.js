// Переключение радиокнопок

$('.radio-item').on('click', function() {
    $(this).addClass('check').siblings().removeClass('check');
  })
  
  //Переключение чекбоксов
  
  $('input:checkbox').click(function(){
      if ($(this).is(':checked')) {
          $(this).parent().addClass('check');
      } else {
          $(this).parent().removeClass('check');
      }
  });


// Рабочий вариант

// window.onload = function () {
//     const steps = Array.from(document.querySelectorAll('.step'));
//     const btsNext = Array.from(document.querySelectorAll('.next'));
//     const btsChange = Array.from(document.querySelectorAll('.btn-change'));
//     console.log(steps);
//     console.log(btsNext);

//     /*function closeSteps () {
//         steps.forEach(item, () => {
//             item.classList.remove('open');
//         })
//     }*/

//     for (let i = 0; i < btsNext.length; i++) {
//         btsNext[i].addEventListener('click', function () {
//             steps[i].classList.remove('open');
//             steps[i].classList.add('change');
//             steps[i + 1].classList.add('open');
//         })

//         btsChange[i].addEventListener('click', function () {
//             console.log(this);
//             this.closest('.step').classList.remove('change');
//             this.closest('.step').classList.add('open');
//             closeSteps();
//         })
//     }
// }





// window.onload = function () {
//     const steps = Array.from(document.querySelectorAll('.step'));
//     const btsNext = Array.from(document.querySelectorAll('.next'));
//     const btsChange = Array.from(document.querySelectorAll('.btn-change'));
//     console.log(steps);
//     console.log(btsNext);

//     /*function closeSteps () {
//         steps.forEach(item, () => {
//             item.classList.remove('open');
//         })
//     }*/

//     for (let i = 0; i < btsNext.length; i++) {
//         btsNext[i].addEventListener('click', function () {
//             steps[i].classList.remove('open');
//             steps[i].classList.add('change');
//             steps[i + 1].classList.add('open');  
//         })

//         // btsNext[btsNext.length - 1].addEventListener('click', function () {
//         //     steps[steps.length - 1].classList.add('open');
         
//         // })

//         btsChange[i].addEventListener('click', function () {
//             console.log(this);
//             this.closest('.step').classList.remove('change');
//             this.closest('.step').classList.add('open');
//             closeSteps();
//         })
//     }
// }

const steps = [...document.querySelectorAll('.step')];
const btsNext = [...document.querySelectorAll('.next')];
const btsChange = [...document.querySelectorAll('.btn-change')];
const btnSubmit = document.querySelector('.submit');
const checkBox = [...document.querySelectorAll('input[type=checkbox]')];

btnSubmit.setAttribute('disabled', true);
steps[steps.length - 1].classList.add('hidden');

checkBox.forEach((element) => {
  element.addEventListener('change', () => {
    if (checkBox.every((element) => element.checked)) {
      btnSubmit.removeAttribute('disabled');
    }
  })
})

btsNext.forEach(
  (element, i) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      steps[i].classList.remove('open');
      steps[i].classList.add('change');
      steps[i + 1].classList.add('open');
      steps[i + 1].classList.remove('hidden');
      if (i === steps.length - 2) {
        steps[i + 1].classList.add('done');
        [...steps].splice(0, i + 1).forEach(
          (element) => element.classList.add('hidden'),
        );
      }
    })
  }
);

btsChange.forEach(
  (element, i) => {
    element.addEventListener('click', (event) => {
      [...steps].splice(i).forEach((element) => {
        element.classList.remove('change');
        element.classList.remove('open');
        element.classList.remove('done');
      })
      steps[i].classList.add('open');
    })
  }
);



// const radioItems = Array.from(document.querySelectorAll('.radio-item'));
// for (let btn of radioItems) {
//     btn.addEventListener('click', function () {
//         this.classList.add('check');
//      .classList.remove('check');
//     })
// }

// const radioBox = document.querySelector('#radio-box');
// radioBox.onclick = function(e){
//   for(let i = 0;i < radioBox.children.length; i++){
//     radioBox.children[i].classList.remove('check');
//   }
//   e.target.classList.add('check');
  
// }



//   //Чекбоксы и кнопка "Продолжить"
//   // Работает только для одного чекбокса, а нужно для двух
  
//   $('input:checkbox').click(function(){
//       if ($(this).is(':checked')){
//           $('#agree').removeAttr('disabled');
//       } else {
//           $('#agree').attr('disabled', 'disabled'); 
//       }
//   });
  