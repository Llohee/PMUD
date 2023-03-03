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
    image: 'https://wallpaperaccess.com/full/1925947.jpg',
    nameproduct: 'Iron Man 1',
    info: 'Tỉ phú, ông trùm ngành công nghiệp hay nhà phát minh thiên tài Tony Stark (Robert Downey, JR. thủ vai)từng rơi vào tay khủng bố với mục đích giúp chúng xây dựng vũ khí hủy diệt, khi đang tiến hành thử nghiệm vũ khí tại nhiều quốc gia. Trong thời gian bị giam cầm, Stark tự chế tạo bộ giáp giúp bản thân trốn thoát khỏi những kẻ bắt cóc.',
  }
  const product1 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpapercave.com/wp/wp3198167.jpg',
    nameproduct: 'Iron Man 2',
    info: 'Sau khi tiết lộ danh tính “Iron Man” trước giới truyền thông, nhà phát minh tỉ phú Tony Stark hiện phải đối mặt với sức ép từ nhiều phía trong việc chia sẻ công nghệ, đặc biệt là từ phía quân đội chính phủ. Nhưng, Stark vẫn từ chối tiết lộ bí mật của bộ giáp vì không muốn công nghệ bị lợi dụng vào những mục đích không chính thống.',
  }
  const product2 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpapercave.com/wp/wp9219239.jpg',
    nameproduct: 'Iron Man 3',
    info: 'Trong Người Sắt 3, Tony Stark đối mặt với căng thẳng và vết thương tâm lý do những sự kiện trong Biệt đội siêu anh hùng gây ra, trong khi đang điều tra một loạt các vụ tấn công khủng bố do nhân vật Mandarin bí ẩn lãnh đạo, đồng thời tạo nên xung đột với kẻ thù cũ là Aldrich Killian...',
  
  }
  const product3 = {
    id: Math.round((Math.random() + 1) * 9000000),
    image: 'https://wallpapercave.com/wp/wp6705852.jpg',
    nameproduct: 'The Incredible Hulk',
    info: 'Nhà khoa học Bruce Banner với mong muốn tìm ra cách chế tạo vũ khí từ tia gamma đã không cẩn thận để các tế bào trong cơ thể bị ô nhiễm và biến thành hình dạng của Hulk. Banner đã quyết định chia tay với Betty Ross cũng là cách để lẩn trốn kẻ thù, Gen. Đại tướng Thunderbolt Ross và Banner nhanh chóng phải đối mặt với hiểm họa mới: Abomination...',
  
  }





let listProduct = [product, product1, product2, product3 ];


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