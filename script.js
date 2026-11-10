const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open?'true':'false');menuButton.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
document.querySelectorAll('.choose').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const tier=link.dataset.tier;const message=`Hello Iplani, I am interested in ${tier}. Please tell me how to join.`;window.open(`https://wa.me/27840001857?text=${encodeURIComponent(message)}`,'_blank','noopener');}));
document.getElementById('year').textContent=new Date().getFullYear();
