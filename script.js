function ativar_primeiro_slide($appml){
  if($appml.message == 'done'){
    const primeiroSlide = document.querySelector('.slider .carousel-inner .carousel-item');
    primeiroSlide.classList.add('active');
  }
}

function ativar_primeiro_parceiro($appml){
  if($appml.message == 'done'){
    const primeiroSlide = document.querySelector('#parceiros .carousel-inner .carousel-item');
    primeiroSlide.classList.add('active');
  }
}

function criar_submenu(){
  $appml = new AppML();
  $appml.dataSource = 'http://127.0.0.1:5500/datas/_header.json';
  $appml.getData();

  const container = document.querySelector('#menu'); 
  const fragmentos_menu = document.createDocumentFragment();
  const fragmentos_submenu = document.createDocumentFragment();
  const menu = $appml.data.menu;
  
  menu.forEach(item => {
    const lista = document.createElement('li');
    lista.classList.add('nav-item', 'dropdown');
    lista.innerHTML =  `<a href="${item.link}" id="" class="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">${item.item}</a>`;

    const sublista = document.createElement('ul');
    sublista.classList.add('dropdown-menu');
    
    item.submenu.forEach(subitem => {
      const lista = document.createElement('li');
      lista.innerHTML = `<a href="${subitem.link}" class="dropdown-item">${subitem.item}</a>`;
      fragmentos_submenu.appendChild(lista);
    });
    
    sublista.appendChild(fragmentos_submenu);
    lista.appendChild(sublista);
    fragmentos_menu.appendChild(lista);
  });

  container.appendChild(fragmentos_menu);
}

function exibir_submenu(el){
  el.nextElementSibling.classList.add('show');
}
function ocultar_submenu(el){
  el.nextElementSibling.classList.remove('show');
}


addEventListener('load', event => {
  criar_submenu();
});