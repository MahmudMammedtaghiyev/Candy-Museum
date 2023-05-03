const nav1 = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>
{
  if(window.scrollY>=56)
  {
    nav1.classList.add('navbar-scrolled');
  }
  else if(window.scrollY<56)
  {
    nav1.classList.remove('navbar-scrolled');
  }
});