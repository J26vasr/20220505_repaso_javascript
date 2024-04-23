const users = [
    {
        name: 'Katsuki Bakugo',
        avatar: './img/katsuki.jpg',
        yearsOld: '19 años',
        Dedica: 'Estudiante de a UA',
    },
    {
        name: 'Isagi',
        avatar: './img/isagi.jpg',
        yearsOld: '17 años',
        Dedica: 'Personaje',
    },
    {
        name: 'Denki kaminari',
        avatar: './img/denki.jpg',
        yearsOld: '19 años',
        Dedica: 'Estudiante de la UA',
    },
    {
        name: 'Nezuko kamado',
        avatar: './img/nezuko.jpg',
        yearsOld: '15 años',
        Dedica: 'Personaje',
    },
    {
        name: 'yuichiro Hyakuya',
        avatar: './img/yuy.jpg',
        yearsOld: '18 años',
        Dedica: 'Personaje',
    },
    {
        name: 'Inuyasha ',
        avatar: './img/inuyasha.jpeg',
    },
    {
        name: 'Eren jeager ',
        avatar: './img/eren.jpg',
        yearsOld: '22 años',
        Dedica: 'Personaje',
    },
    {
        name: 'Kakeru ',
        avatar: './img/kakeru.jpg',
        yearsOld: '17 años',
        Dedica: 'Personaje',
    },
    {
        name: 'Mikaela hyakuya ',
        avatar: './img/mikaela.jpg',
        yearsOld: '18 años',
        Dedica: 'Personaje',
    },
    {
        name: 'Eiijiro kirishima ',
        avatar: './img/kirishima.jpg',
        yearsOld: '19 años',
        Dedica: 'Personaje',
       
    },
];

// Obtener el contenedor donde se mostrarán los cards
const containerCategories = document.getElementById('containerCategories');

// Iterar sobre el array de usuarios
users.forEach(user => {
    // Crear un elemento div para el card de Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-3', 'mb-4');

    // Configurar el contenido del card
    card.innerHTML = `
    <ul class="list-group">
        <li class="list-group-item titulo" aria-current="true"><h5 class="card-title titulo1 mt-3">${user.name}</h5></li>
        <li class="list-group-item  text-dark ">Edad : ${user.yearsOld} </li>
        <li class="list-group-item  text-dark ">Donde/cuando nacio : ${user.nacimiento} </li>
        <li class="list-group-item  text-dark ">A que se dedica : ${user.Dedica} </li>
        <li class="list-group-item "><img src="${user.avatar}" class="imagen text-dark" alt="${user.name}" width="100"></li>
    </ul>
    `;

    // Agregar el card al contenedor
    containerCategories.appendChild(card);
});