const showMenu = (toggleId, navbarId, expandId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    expandpadding = document.getElementById(expandId),
    navMenu = document.getElementById("nav-menu")
    
    
    

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('show')
            expandpadding.classList.toggle('expander')
            home.classList.homeId('home')

        })
    }
}
showMenu('nav-toggle','navbar','body')

const navLink = document.querySelectorAll('.nav_link')
function linkAction() {

    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')  
    
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction)
)
