let formmenu = document.getElementById("FormMenu")


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //search
  const product = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product1 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product2 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product3 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product4 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product5 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product6 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product7 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product8 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }
  const product9 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 11',
  
  }

  let listProduct = [product, product1, product2, product3, product4, product5, product6, product7, product8, product9,];

  let productDOM = `<div class="card">
  <div class="face face1">
      <div class="content">
          <i class="fab fa-windows"></i>
          <h3>${item.nameproduct}</h3>
          <img src="https://wallpaperaccess.com/full/1925947.jpg" id="imgid${index}>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> Tỉ phú, ông trùm ngành công nghiệp hay nhà phát minh thiên tài Tony Stark (Robert Downey,
              Jr. thủ vai) từng rơi vào tay khủng bố với mục đích giúp chúng xây dựng vũ khí hủy diệt, khi
              đang tiến hành thử nghiệm vũ khí tại nhiều quốc gia. Trong thời gian bị giam cầm, Stark tự
              chế tạo bộ giáp giúp bản thân trốn thoát khỏi những kẻ bắt cóc.</p>
          <a href="#" type="button">Read More</a>
      </div>
  </div>
</div>`

let showProduct = document.getElementsByClassName('list-product');
listProduct.map(function (item, index) {
  showProduct[0].innerHTML += `<div class="card">
  <div class="face face1">
      <div class="content">
          <i class="fab fa-windows"></i>
          <h3>${item.nameproduct}</h3>
          <img src="https://wallpaperaccess.com/full/1925947.jpg" id="imgid${index}>
      </div>
  </div>
  <div class="face face2">
      <div class="content">
          <p> Tỉ phú, ông trùm ngành công nghiệp hay nhà phát minh thiên tài Tony Stark (Robert Downey,
              Jr. thủ vai) từng rơi vào tay khủng bố với mục đích giúp chúng xây dựng vũ khí hủy diệt, khi
              đang tiến hành thử nghiệm vũ khí tại nhiều quốc gia. Trong thời gian bị giam cầm, Stark tự
              chế tạo bộ giáp giúp bản thân trốn thoát khỏi những kẻ bắt cóc.</p>
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
        showProduct[0].innerHTML += `<div class="div1">
                            <img src="${item.image}" class="character-img" draggable="true" ondragstart="drag(event)" id="img-id${index}">
                            <div class="parent-hover">
                                <a href=""style="color:white; text-align: center; ">${item.nameproduct}</a>
                                
                            </div>
                            </div>`
      })
    }
  } else {
    showProduct[0].innerHTML = '';
    listProduct.map(function (item, index) {
      showProduct[0].innerHTML += `<div class="div1">
                    <img src="${item.image}" class="character-img" draggable="true" ondragstart="drag(event)" id="img-id${index}">
                    <div class="parent-hover">
                        <a href=""style="color:white; text-align: center; ">${item.nameproduct}</a>
                        
                    </div>
                    </div>`
    })

  }
}