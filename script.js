function darkLight () {    
      document.body.classList.toggle('darkMode');
      document.body.classList.toggle('lightMode');

      var alterar = document.getElementById("alterar");
      
      
      
      if (alterar.classList.contains("bg-light")) {
        alterar.classList.remove("bg-light");
        alterar.classList.add("dark_div");
      } else {
        alterar.classList.remove("dark_div");
        alterar.classList.add("bg-light");
      }

        // Checkbox
        const checkbox = document.getElementById('darkModeToggle');
        const icon = document.getElementById('icon');

        checkbox.addEventListener('change', function() {
            if (this.checked && icon.classList.contains('bi-moon')) {
                icon.classList.remove('bi-moon');
                icon.classList.add('bi-sun');
            } else {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon');
            }
        });
    }
  // this is too simple and it works correctly, be careful at the css variables


  //Thats the nav being actualized
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
  alterar.innerHTML = '<h1>Estudos Aqui</h1><p>Conteúdo da página...</p>';
});

toDo.addEventListener('click', () => {
  alterar.innerHTML = '<h1>A Fazeres</h1><p>Conteúdo da página...</p>';
});

