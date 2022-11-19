//Accedemos a las APIS
let url = "https://randomfox.ca/floof/";
let url_fondo = "https://php-noise.com/noise.php?hex=${hex}&json";
//Accedemos a los elementos
let contenedorFotos = document.getElementById('contenedorFotos');
let addPhoto = document.getElementById('addPhoto');
let headerPage = document.getElementById('headerPage');

//Obtenemos lo datos de la API
async function getData(urlApi) {
    let data = await fetch(urlApi);
    let response = await data.json();
    return response;
}
async function getFondo(urlApi) {
    let fondo = await fetch(urlApi);
    let response = await fondo.json();
    return response;
}

//Agregamos las fotos a nuestro sitio
addPhoto.addEventListener('click', function () {
    getData(url)
        .then((response) => {
            //Creamos el nodo
            let imageNode = document.createElement('div');
            imageNode.style = `background-image: url('${response.image}')`;
            imageNode.className = "imagenZorro card-1";
            contenedorFotos.append(imageNode);
        })
});

//Cargamos el fondo de nuestro header
getFondo(url_fondo)
    .then((response) => {
        headerPage.className = "headerPage";
        headerPage.id = "headerPage";
        headerPage.style = `background-image: url('${response.uri}')`;
        console.log('color', color)
    })