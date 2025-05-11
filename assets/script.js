const posts = [
 {
    title: "Le encanta el ingles, me gusta que le guste aprender un idioma nuevo",
    image: "imagenes/ingles.png"
  },
  {
    title: "Le gusta tejer/coser, un hobbie y hablidad que la hace una mujer especial",
    image: "imagenes/coser.jpg"
  },
  {
    title: "Es una gran madre, y siempre vela por el bienestar de cada uno de nosotros",
    image: "imagenes/granmadre.jpg"
  },
  {
    title: "Es una mujer con un caracter firme, es capaz de perdonarnos a pesar de nuestros errores (En especial katerin)",
    image: "imagenes/perdonar.jpg"
  }
];

const container = document.getElementById('recent-posts');
posts.forEach(post => {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <img src="${post.image}" alt="">
    <h4>${post.title}</h4>
  `;
  container.appendChild(item);
});

function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

const productos = [
  {
    nombre: "GAFAS-SOL",
    precio: "FAMILIA",
    cuotas: "nuestra familia",
    imagen: "nosotros.jpg"
  },
  {
    nombre: "HIJO FAVORITO",
    precio: "INGE SISTEMAS",
    cuotas: "un Genio IQ +144",
    imagen: "yo.jpg"
  },
  {
    nombre: "BELLEZA",
    precio: "Tú",
    cuotas: "una buena foto",
    imagen: "mom.jpg"
  },
  {
    nombre: "FIESTA",
    precio: "CELEBRACIÓN",
    cuotas: "un gran momento",
    imagen: "family.jpg"
  },
  {
    nombre: "RONY",
    precio: "RONY",
    cuotas: "Rony",
    imagen: "momrony.jpg"
  },
  {
    nombre: "ZEUS",
    precio: "ZEUS",
    cuotas: "el mismo chiste",
    imagen: "zeus.jpg"
  },
  {
    nombre: "BESO",
    precio: "AMOR",
    cuotas: "una bella relación",
    imagen: "beso.jpg"
  }
];

const galeria = document.querySelector(".galeria");

productos.forEach(prod => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="imagenes/${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p class="precio">${prod.precio}</p>
    <p class="cuotas">Es <b>${prod.cuotas}</b></p>
  `;
  galeria.appendChild(div);
});