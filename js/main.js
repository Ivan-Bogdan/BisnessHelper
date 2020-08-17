const burgerWrap = document.querySelector(".menu-icon-wrapper");
const burger = document.querySelector(".menu-icon");
const menuContainer = document.querySelector(".mobile-container");
burgerWrap.addEventListener("click", () => {
    burger.classList.toggle("menu-icon-active");
    menuContainer.classList.toggle("display-none");
});


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    dropdown.classList.toggle('dropdown__options--visible')
  })
  
  dropdown.querySelectorAll('.dropdown__options .dropdown__option').forEach(opt => {
    opt.addEventListener('click', (e) => {      
      dropdown.querySelector('.dropdown__selected').innerHTML = opt.innerHTML;
    })
  })
})

var modal = document.getElementById("id01");

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };