function darkLight () {    
      document.body.classList.toggle('darkMode');
      document.body.classList.toggle('lightMode');
    }
   
  // this is too simple and it works correctly, be careful at the css variables

const alterar = document.getElementById('alterar');
const home = document.getElementById('home');
const foco = document.getElementById('foco');
const estudos = document.getElementById('estudos');

home.addEventListener('click', () => {
    alterar.innerHTML = '<h1>Bem-vindo à Página de Navegação</h1><p>Conteúdo da página...</p>';
});

foco.addEventListener('click', () => {
    alterar.innerHTML = '<h1>Foco</h1><p>Conteúdo da página...</p>';
});

  estudos.addEventListener('click', () => {
 
  fetch('Estudos.html')
  .then(response => response.text())
  .then(html => alterar.innerHTML = html);
});