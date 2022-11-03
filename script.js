const ubahtitle = document.getElementById('judul')
judul.innerHTML ='SELAMAT DATANG DI WEBSITE';

const Elementbaru = document.createElement('h1');
const textnewlagi =document.createTextNode('Akhir dari Id A');
Elementbaru.appendChild(textnewlagi);
const ambil_id_a = document.getElementById('a');
ambil_id_a.appendChild(Elementbaru);
