```js
async function getUppercaseTitlesByUser(userId = 1) {
  try {
    const descargaDatos = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await descargaDatos.json();
    const postsFiltrados = posts.filter(post => post.userId === userId);
    const titulosMayusculas = postsFiltrados.map(post => post.title.toUpperCase());
    return titulosMayusculas;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    return [];
  }
}
getUppercaseTitlesByUser(1).then(titulos => console.log(titulos));

async function totalElectronics() {
  try {
    const descargaProductos = await fetch('https://fakestoreapi.com/products');
    const productos = await response.json();
    const productosFiltrados = productos.filter(producto => producto.category === 'electronics');
    const total = productosFiltrados.reduce((acc, producto) => acc + producto.price, 0);
    return total;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return 0;
  }
}
totalElectronics().then(total => console.log(`Total electronics: $${total}`));


async function usersWithPostCount() {
    const [usuariosRes, postsRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(resultadoUs => resultadoUs.json),
        fetch('https://jsonplaceholder.typicode.com/posts').then(resultadoRes => resultadoRes.json)
    ])

}

