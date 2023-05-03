const barsSearch = document.getElementById("ctn-bars-search");
const coverCtnSearch = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const boxSearch = document.getElementById("box-search");

function showMenu() {
  document
    .getElementById("move-content")
    .classList.toggle("move-container-all");
  document.getElementById("show-menu").classList.toggle("show-menu-lateral");
}
document.getElementById("icon-menu").addEventListener("click", showMenu);

//Buscador de contenido

//Ejecutar funcion

//Funcion para mostrar el buscador

function toggleSearch(shouldShow) {
  if (shouldShow) {
    barsSearch.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
  } else {
    barsSearch.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
  }
}

const iconSearch = document.getElementById("icon-search");

if (iconSearch) {
  iconSearch.addEventListener("click", () => {
    toggleSearch(true);
  });
}

if (coverCtnSearch) {
  coverCtnSearch.addEventListener("click", () => {
    toggleSearch(false);
  });
}

//Declarando variables

function internSearch() {
  filter = inputSearch.value.toUpperCase();
  li = boxSearch.getElementsByTagName("li");

  //Recorriendo elementos

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      boxSearch.style.display = "block";

      if (inputSearch.value === "") {
        boxSearch.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}

//Creando filtrado de busqueda

if (inputSearch) {
  inputSearch.addEventListener("keyup", internSearch);
}

//funcion captura texto

const buttonFormContact = document.querySelector("#form__submit");

function capture() {
  var contact = document.getElementById("name").value;
  console.log(contact);
  var user = document.getElementById("user").value;
  console.log(user);
  var email = document.getElementById("email").value;
  console.log(email);

  const form = document.getElementById("form-contact");
  console.log(form);
}

buttonFormContact.addEventListener("click", capture);
