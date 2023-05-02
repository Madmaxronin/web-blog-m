document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-menu-lateral');
}



                            //Buscador de contenido


//Ejecutar funcion

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables

bars_search =          document.getElementById("ctn-bars-search");
cover_ctn_search =     document.getElementById("cover-ctn-search");
inputSearch =          document.getElementById("inputSearch");
box_search =           document.getElementById("box-search");


//Funcion para mostrar el buscador

function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

}


//Funcion ocultar buscador

function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos

    for (i = 0; i < li.length; i++){

            a = li[i].getElementsByTagName("a")[0];
            textValue = a.textContent || a.innerText;

            if(textValue.toUpperCase().indexOf(filter) > -1){

                li[i].style.display = "";
                box_search.style.display = "block";

                if(inputSearch.value === ""){
                    box_search.style.display = "none";
                }

            }else{
                li[i].style.display = "none";
            }
    }

}

//funcion captura texto

function capture(){
    var contact=document.getElementById("name").value;
    console.log(contact);
    var user=document.getElementById("user").value;
    console.log(user);
    var email=document.getElementById("email").value;
    console.log(email);
}