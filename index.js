
//navbar
function myFunction(){
    var navbar = document.getElementById('nav');
    navbar.classList.toggle('active');
}

//searchbar
function searchFunction(){
    var search = document.getElementById('search');
    search.classList.toggle('active');

   document.querySelector('#close').onclick = () =>{
    document.querySelector('#search').classList.toggle('active');
 }

}
//form
function myForm(){
    var form = document.getElementById('form');
    form.classList.toggle('active');


      document.querySelector('#closee').onclick = () =>{
    document.querySelector('#form').classList.toggle('active');
}
}

//dark-theme
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    /*if(document.body.classList.containsk-theme"))
    }
    else{
        document.classList.toggle("fa-moon")
    }*/

}

/*location*/

let passwords = document.getElementById('passwords');
let eyeicon = document.getElementById('eyeicon');
 
eyeicon.onclick= function(){
    if(passwords.type == 'passwords'){
        passwords.type = 'text';
    }
    else{
        passwords.type = 'passwords';
    }
}