 const imgContainer = document.querySelector('.card-img'),
 	heading = document.querySelector('.heading'),
 		para = document.querySelector('.para');



        setTimeout(() => {

            const img = document.createElement('img');

        img.setAttribute('src','img/img4.jpg')
        imgContainer.appendChild(img)

        heading.textContent = 'Haris';
        para.textContent = 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Sunt, vel praesentium fugiat minus dolorum incidunt odio. Quaerat assumenda odio aut! At numquam,';

        imgContainer.classList.remove('loding');
        heading.classList.remove('loading');
        para.classList.remove('loading');

        },2000);