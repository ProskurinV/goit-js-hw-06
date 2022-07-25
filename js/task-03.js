const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgContainer = document.querySelector('.gallery');

const makeImg = images.map(({ url, alt }) => {
  imgContainer.insertAdjacentHTML(
    'afterbegin',
    `<li><img class="gallery-list" src="${url}" alt="${alt}"width = 200 /></li>`
  );
});
const li = document.querySelector('li');
// li.classList.add('gallery-item');

imgContainer.style.display = 'flex';
imgContainer.style.listStyle = 'none';
imgContainer.style.gap = '20px';
imgContainer.style.justifyContent = 'center';
// li.style.width = '200px';
