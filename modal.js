const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', ()=>{

    modal.style.display = 'flex'
});

/*modal.addEventListener('click', (event)=>{
   const modalContent = event.target.closest('.modal__inner')

   if (!modalContent) {

modal.style.display = ''
   }
    

});*/
//sodaem element krest
const closeButton = document.createElement('span');
closeButton.className = 'modal__close';
closeButton.innerHTML = '&times;'; // Symbole "✕"

// dobavlayem krest v formular
const modalHeader = modal.querySelector('.modal__inner');
modalHeader.appendChild(closeButton);

// dobavlaem sobitie dla zakravania formulara
closeButton.addEventListener('click', () => {
    modal.style.display = ''; 
});
