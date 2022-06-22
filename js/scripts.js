//===toggle left nav menu after click===
const togglemenu = () =>
{
    //===declaring variables===
    //left nav object witchout btn
    let leftNav = document.querySelector('#left-nav');
    
    //icon on toggle btn
    let toggleIcon = document.querySelector('#toggler-icon');
    
    //button, when clicked toggle hide/show left menu
    let toggleBtn = document.querySelector('.toggle-btn');
    
    //after click on btn toggle hide/show
    leftNav.classList.toggle('active');
    
    //after btn click rotate and change font color of icon
    toggleIcon.classList.toggle('active-icon');
    
    //if left nav has class active, toggle title on toggle button
    if(leftNav.classList == 'active')
        toggleBtn.title='Rozwiń menu';
    else
        toggleBtn.title='Zwiń menu';
}

//=== show/hide search input field
const toggleInput = () =>
{
    document.querySelector('.searchInput').classList.toggle('active-search-field');
}

//=== toggle hamburger menu and visibility of full screen menu
const toggleMobileNav = () =>
{
    //toggle hamburger menu to "X"
    document.querySelector('.hamburger').classList.toggle('hamburgerToggle');
    
    document.querySelector('.nav-menu-mobile').classList.toggle('mobile-is-visible');
}


//add event listeners
document.querySelector('.toggle-btn').addEventListener('click', togglemenu);
document.querySelector('.searchLoop').addEventListener('click', toggleInput);
document.querySelector('.hamburger').addEventListener('click', toggleMobileNav);

//add event listener for all classes, after any click into link "redirect" to clicked website and hide menu
const links = document.getElementsByClassName('nav-links-mobile');
for(i = 0; i< links.length;i++ )
    {
        links[i].addEventListener('click', toggleMobileNav);
    }