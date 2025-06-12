// nav bar js start

let menuBar = document.getElementById('menuBar');
let navLinks = document.getElementById('navLinks');
let searchBar = document.getElementById('searchBar');
let navSearch =  document.getElementById('navSearch')
let navInput = document.querySelector('#searchInput');

menuBar.onclick=()=>{
    // alert('working');
    // dropMenu.style.top="100%";
    // dropMenu.style.transition="2s";

    navLinks.classList.toggle('active');


}

navSearch.onclick=()=>{
    // alert("working");
    searchBar.classList.toggle('active'); 
}


// nav bar js end



