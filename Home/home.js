let formmenu = document.getElementById("FormMenu")


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//search
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
  info:'Nhà khoa học Bruce Banner với mong muốn tìm ra cách chế tạo vũ khí từ tia gamma đã không cẩn thận để các tế bào trong cơ thể bị ô nhiễm và biến thành hình dạng của Hulk. Banner đã quyết định chia tay với Betty Ross cũng là cách để lẩn trốn kẻ thù, Gen. Đại tướng Thunderbolt Ross và Banner nhanh chóng phải đối mặt với hiểm họa mới: Abomination...',

}
const product4 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/dwp1x/wp3775632.jpg',
  nameproduct: 'Captain America: The First Avenger',
  info:'Quay ngược về quá khứ,ta thấy anh chàng Steve Rogers lại một lần nữa bị từ chối nhập ngũ vì thể trạng gầy gò cùng hàng loạt tiền sử bệnh lý.Về sau, anh trở thành thí nghiệm của tổ chức trong quân đội và trở thành một thanh niên cường tráng với sức mạnh phi thường.Captain chính là một trong những siêu anh hùng đầu tiên của biệt đội Avengers...',

}
const product5 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/645142.jpg',
  nameproduct: 'Thor',
  info:'Tại Asgard,Thor,được trao cho cây búa Mjolnir, người được cho sẽ kế vị ngai vàng từ cha.Chàng trai trẻ lại cố tình gây hấn với xứ Jotunheim và nguy kịch khiến Odin phải đích thân ra tay giải cứu.Odin tức giật tước bỏ sức mạnh và giàng Thor cùng cây búa thần xuống Trái Đất. Để chứng tỏ mình xứng đáng, anh phải nâng được cây búa và tìm cách trở về giải cứu Asgard.'

}
const product6 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://c4.wallpaperflare.com/wallpaper/706/658/500/the-avengers-wallpaper-preview.jpg',
  nameproduct: 'The Avengers',
  info:'Loki, em trai của Thor với mong muốn chiếm được khối Tesseract đã gặp gỡ một thủ lĩnh của chủng tộc ngoài Trái Đất để lấy cây trượng điều khiển tâm trí. Từ đó,  hắn sử dụng quân đội của Chitauri để khơi mào cuộc tấn công xâm chiếm Trái Đất. Nick Fury  Giám đốc của S.H.I.E.L.D quyết định phục hồi lại Avengers. Các siêu anh hùng được tập hợp và chống lại mọi kẻ thù.'

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
const product10 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}
const product11 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}
const product12 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}
const product13 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}
const product14 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}
const product15 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/1925947.jpg',
  nameproduct: 'Iron Man 11',

}


let listProduct = [product, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15];

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
                <p> Tỉ phú, ông trùm ngành công nghiệp hay nhà phát minh thiên tài Tony Stark (Robert Downey,
                    Jr. thủ vai) từng rơi vào tay khủng bố với mục đích giúp chúng xây dựng vũ khí hủy diệt, khi
                    đang tiến hành thử nghiệm vũ khí tại nhiều quốc gia. Trong thời gian bị giam cầm, Stark tự
                    chế tạo bộ giáp giúp bản thân trốn thoát khỏi những kẻ bắt cóc.</p>
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
              <p> Tỉ phú, ông trùm ngành công nghiệp hay nhà phát minh thiên tài Tony Stark (Robert Downey,
                  Jr. thủ vai) từng rơi vào tay khủng bố với mục đích giúp chúng xây dựng vũ khí hủy diệt, khi
                  đang tiến hành thử nghiệm vũ khí tại nhiều quốc gia. Trong thời gian bị giam cầm, Stark tự
                  chế tạo bộ giáp giúp bản thân trốn thoát khỏi những kẻ bắt cóc.</p>
              <a href="#" type="button">Read More</a>
          </div>
      </div>
    </div>`
    })

  }
}