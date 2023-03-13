let formmenu = document.getElementById("FormMenu")


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


const product = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://cdn.marvel.com/content/1x/voicesrisingwf_lob_crd_01.jpg',
  nameproduct: 'Voices Rising: The Music of Wakanda Forever',
  info: 'Sự hợp tác của các nhạc sĩ và nghệ sĩ từ khắp nơi trên thế giới, tạo ra âm nhạc cho một trong những phần tiếp theo được mong đợi nhất trong lịch sử điện ảnh hiện đại',
}
const product1 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://m.media-amazon.com/images/M/MV5BOGJjMzlmNzctMWI4Yi00MjcyLWFmYzAtN2JmZjU0YTM4YmRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
  nameproduct: 'The Guardians of the Galaxy Holiday Special',
  info: 'Star-Lord, Drax, Rocket, Mantis và Groot tham gia vào một số trò tai quái đầy tinh thần trong một bộ phim đặc biệt nguyên bản hoàn toàn mới được tạo ra cho Disney+.',
}
const product2 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://preview.redd.it/another-poster-for-werewolf-by-night-v0-tw7lbjoa65n91.png?auto=webp&s=19165e50c030153bbf957d16f8755c5238b30f5c',
  nameproduct: 'Werewolf by Night.',
  info: 'Theo chân một siêu anh hùng lycanthrope chiến đấu với cái ác bằng cách sử dụng những khả năng được trao cho anh ta bởi một lời nguyền do dòng máu của anh ta mang lại.',

}
const product3 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://image.tmdb.org/t/p/original/wgjzCsT6PhNHACHT7Iscs1QM5vw.jpg',
  nameproduct: 'She-Hulk: Attorney-at-Law',
  info: 'Jennifer Walters lèo lái cuộc sống phức tạp của một luật sư độc thân, khoảng 30 tuổi, đồng thời cũng là một Hulk siêu mạnh cao 6 foot 7 inch màu xanh lục.',

}
const product4 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://cdn.marvel.com/content/1x/lp_site.jpg',
  nameproduct: 'I Am Groot',
  info: 'Một loạt phim ngắn giới thiệu cây giống Groot cùng với một số nhân vật mới và khác thường.',

}
const product5 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://assets1.ignimgs.com/2021/05/12/loki-poster-2-1620828778337_160w.jpg?width=1280',
  nameproduct: 'Loki Season 1',
  info: 'Sau khi đánh cắp khối Tesseract trong các sự kiện của Avengers: Endgame (2019), một phiên bản thay thế của Loki được đưa đến Cơ quan quản lý phương sai thời gian bí ẩn (TVA). Họ cho Loki một sự lựa chọn: khuôn mặt bị xóa khỏi sự tồn tại do là một "biến thể thời gian", hoặc giúp sửa chữa dòng thời gian và ngăn chặn một mối đe dọa lớn hơn.',

}
const product6 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://images.thedirect.com/media/article_full/loki-season-2-renslayer-mcu-marvel-disney-plus.jpg',
  nameproduct: 'Loki Season 2',
  info: '',

}
const product7 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://ecdn.game4v.com/g4v-content/uploads/2021/04/What-IF-MCU-1-game4v.jpg',
  nameproduct: 'What if',
  info: 'Khám phá những khoảnh khắc quan trọng từ Vũ trụ Điện ảnh Marvel và biến chúng thành hiện thực, dẫn dắt khán giả vào lãnh thổ chưa được khám phá.',

}






let listProduct = [product, product1, product2, product3, product4, product5, product6, product7];



let productDOM = `<div class="card">
  <div class="face face1">
      <div class="content">
          <h3>${product.nameproduct}</h3>
          <img src="${product.image}" >
      </div>  
  </div>
  <div class="face face2">
      <div class="content">
          <p>${product.info}</p>
          <a href="#" type="button">Read More</a>
      </div>
  </div>
</div>`

let showProduct = document.getElementsByClassName('container-1');
listProduct.map(function (item, index) {
  showProduct[0].innerHTML += `<div class="card"> 
  <div class="face face1">
      <div class="content">
          <h3>${item.nameproduct}</h3>
          <img src="${item.image}" id="img-id${index}">
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p>${item.info}</p>
          <a href="#" type="button">Read More</a>
      </div>
  </div>
</div>`
})
let inputSearch = document.querySelector('input');
let resultSearch = [];
inputSearch.onkeyup = function (e) {

  const value = e.target.value;
  if (value.trim() !== '') {
    console.log(value);
    resultSearch = listProduct.filter(function (item) {
      return item.nameproduct.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
    if (resultSearch.leght !== 0) {
      showProduct[0].innerHTML = '';
      resultSearch.map(function (item, index) {
        showProduct[0].innerHTML += `<div class="card">
        <div class="face face1">
            <div class="content">
                <h3>${item.nameproduct}</h3>
                <img src="${item.image}" id="img-id${index}">
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p> ${item.info}</p>
                <a href="#" type="button">Read More</a>
            </div>
        </div>
      </div>`
      })
    }
  } else {
    showProduct[0].innerHTML = '';
    listProduct.map(function (item, index) {
      showProduct[0].innerHTML += `<div class="card">
      <div class="face face1">
          <div class="content">
              <h3>${item.nameproduct}</h3>
              <img src="${item.image}" id="img-id${index}">
          </div>
      </div>
      <div class="face face2">
          <div class="content">
              <p>${item.info}</p>
              <a href="#" type="button">Read More</a>
          </div>
      </div>
    </div>`
    })

  }
}

//Logout
let logout = document.getElementById("logout-btn");
logout.onclick = function () {
  window.location.href = "login.html";
}