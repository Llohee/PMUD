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
  dob: '1 aug 2011'
}
const product1 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/wp/wp3198167.jpg',
  nameproduct: 'Iron Man 2',
  info: 'Sau khi tiết lộ danh tính “Iron Man” trước giới truyền thông, nhà phát minh tỉ phú Tony Stark hiện phải đối mặt với sức ép từ nhiều phía trong việc chia sẻ công nghệ, đặc biệt là từ phía quân đội chính phủ. Nhưng, Stark vẫn từ chối tiết lộ bí mật của bộ giáp vì không muốn công nghệ bị lợi dụng vào những mục đích không chính thống.',
  dob: '2 aug 2012'
}
const product2 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/wp/wp9219239.jpg',
  nameproduct: 'Iron Man 3',
  info: 'Trong Người Sắt 3, Tony Stark đối mặt với căng thẳng và vết thương tâm lý do những sự kiện trong Biệt đội siêu anh hùng gây ra, trong khi đang điều tra một loạt các vụ tấn công khủng bố do nhân vật Mandarin bí ẩn lãnh đạo, đồng thời tạo nên xung đột với kẻ thù cũ là Aldrich Killian...',
  dob: '2 aug 2012'

}
const product3 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/wp/wp6705852.jpg',
  nameproduct: 'The Incredible Hulk',
  info: 'Nhà khoa học Bruce Banner với mong muốn tìm ra cách chế tạo vũ khí từ tia gamma đã không cẩn thận để các tế bào trong cơ thể bị ô nhiễm và biến thành hình dạng của Hulk. Banner đã quyết định chia tay với Betty Ross cũng là cách để lẩn trốn kẻ thù, Gen. Đại tướng Thunderbolt Ross và Banner nhanh chóng phải đối mặt với hiểm họa mới: Abomination...',
  dob: '2 aug 2012'

}
const product4 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/dwp1x/wp3775632.jpg',
  nameproduct: 'Captain America: The First Avenger',
  info: 'Quay ngược về quá khứ,ta thấy anh chàng Steve Rogers lại một lần nữa bị từ chối nhập ngũ vì thể trạng gầy gò cùng hàng loạt tiền sử bệnh lý.Về sau, anh trở thành thí nghiệm của tổ chức trong quân đội và trở thành một thanh niên cường tráng với sức mạnh phi thường.Captain chính là một trong những siêu anh hùng đầu tiên của biệt đội Avengers...',
  dob: '2 aug 2012'

}
const product5 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/645142.jpg',
  nameproduct: 'Thor',
  info: 'Tại Asgard,Thor,được trao cho cây búa Mjolnir, người được cho sẽ kế vị ngai vàng từ cha.Chàng trai trẻ lại cố tình gây hấn với xứ Jotunheim và nguy kịch khiến Odin phải đích thân ra tay giải cứu.Odin tức giật tước bỏ sức mạnh và giàng Thor cùng cây búa thần xuống Trái Đất. Để chứng tỏ mình xứng đáng, anh phải nâng được cây búa và tìm cách trở về giải cứu Asgard.',
  dob: '2 aug 2012'

}
const product6 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://c4.wallpaperflare.com/wallpaper/706/658/500/the-avengers-wallpaper-preview.jpg',
  nameproduct: 'The Avengers',
  info: 'Loki, em trai của Thor với mong muốn chiếm được khối Tesseract đã gặp gỡ một thủ lĩnh của chủng tộc ngoài Trái Đất để lấy cây trượng điều khiển tâm trí. Từ đó,  hắn sử dụng quân đội của Chitauri để khơi mào cuộc tấn công xâm chiếm Trái Đất. Nick Fury  Giám đốc của S.H.I.E.L.D quyết định phục hồi lại Avengers. Các siêu anh hùng được tập hợp và chống lại mọi kẻ thù.',
  dob: '2 aug 2012'

}
const product7 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/wp/wp3079593.jpg',
  nameproduct: 'Thor: The Dark World',
  info: 'Sau thất bại từ phần phim trước, Loki bị nhốt tại một phòng giam ở Asgard. Ở một diễn biến khác, Malekith lãnh đạo những người Dark Elf gây ra những đe dọa đối với Chín Cõi Giới. Hắnđã tìm lại một hòn đá Vô cực khác mang tên Aether và mưu đồ sử dụng chính hòn đá này để pháhủy Chín Cõi Giới.Trước tình thế này, Thor đã phải bắt tay với những người bạn Trái Đất vàLoki để chặn đứng hành động của hắn.',
  dob: '2 aug 2012'

}
const product8 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpapercave.com/dwp1x/wp5271847.jpg',
  nameproduct: 'Captain America: The Winter Soldier',
  info: 'Sau sự cố Nick Fury bị tấn công, Steve Rogers đã nhận ra rằng, SHIELD bị thâm nhập bởi các đặc vụ của HYDRA nhiều năm. Và Chiến binh Mùa đông – vốn dĩ là Bucky Barnes,sát thủ đáng gờm nhất của HYDRA. Trong Thế chiến 2, Bucky không chết. Anh ta bị HYDRA bắt giữ và tiến hành lập trình lại não.Khi nhận ra sự thật này, Captain đã kết hợp với Black Widow và Falcon và tìm lại người bạn cũ Bucky.',
  dob: '2 aug 2012'

}
const product9 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/03/IMG_1741-scaled.jpeg',
  nameproduct: 'Avengers 2: The Age of Ultron',
  info: 'Cây Trượng của Loki bị đội Avengers thu giữ. Cây Trượng sau đó được Tony Stark trưng dụng cho chương trình Ultron – một chương trình gìn giữ hòa bình do anh xây dựng.Chương trình này lại tạo ra một trí tuệ nhân tạo mang trong mình âm mưu thanh trừng thế giới. Ultron đã kết hợp với Quicksilver và Scarlet Witch – 2 kẻ siêu năng lực nhằm thực hiện âm mưu của mình.',
  dob: '2 aug 2012'

}
const product10 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://w0.peakpx.com/wallpaper/198/324/HD-wallpaper-ant-man-2015.jpg',
  nameproduct: 'Ant-Man',
  info: 'Scott Lang – một kẻ mang tiền án trộm cắp tình cờ gặp Hank Pym – một nhà khoa học. Bộ giáp Ant-Man sở hữu khả năng thu nhỏ đã được nhà khoa học trao cho anh ta. Sau đó, anh ta cùng với Hope van Dyne – con gái của nhà khoa học Hank Pym phối hợp tìm cách đối phó với Yellowjacket – học trò cũ của nhà khoa học này để cướp một món vũ khí nguy hiểm.',
  dob: '2 aug 2012'

}
const product11 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://ramestar.vn/media/uploaded/Marvel-Civil-War-alternate-poster.jpg',
  nameproduct: 'Captain America: Civil War',
  info: 'Sau này mọi hiểu lầm được giải tỏa, nhóm của Cap lui về ở ẩn vì không chấp nhận chịu sự quản lý của chính phủ, nhưng vẫn giữ liên lạc với SHIELD và Tony Stark. Cũng trong Captain America phần 3 này là sự xuất hiện hoàn toàn mới của Spider-Man Peter Parker do nam diễn viên trẻ Tom Holland thủ vai, đánh dấu sự trở lại của Nhện dưới mái nhà Marvel và MCU.',
  dob: '2 aug 2012'

}
const product12 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/doctor-strange-2-poster-social-featured.jpg',
  nameproduct: 'Doctor Strange',
  info: 'Doctor Strange giải thích nguồn gốc xuất hiện và truyền từ đời này qua đời khác của vị trí phù thủy tối thượng, xoay quanh nhân vật Ancient One và bác sĩ Stephen Strange. Do bị tai nạn xe hơi nghiêm trọng mà bác sĩ phẫu thuật Strange bị liệt 2 bàn tay đã đến Tây Tạng để tìm kiếm phương thuốc chữa bệnh để rồi trở thành Doctor Strange đầy quyền năng.',
  dob: '2 aug 2012'

}
const product13 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://p4.wallpaperbetter.com/wallpaper/622/490/397/movie-thor-ragnarok-chris-hemsworth-thor-wallpaper-preview.jpg',
  nameproduct: 'Thor: Ragnarok',
  info: 'Thor bị bắt giam ở hành tinh Muspelheim và được Surtur kể lại rằng Loki đang giam cầm Odin ở  một hành tinh khác, người ngồi trên ngai vàng Asgard thực ra là Loki. Thor đánh bại Surtur  và trở về Asgard và bắt Loki đưa đi tìm Odin. Cả 2 đến Na Uy và tại đây Odin đã trăn trối rồi qua đời...',
  dob: '2 aug 2012'

}
const product14 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wallpaperaccess.com/full/243562.jpg',
  nameproduct: 'Spider Man: Homecoming',
  info: 'Sau nội chiến giữa các siêu anh hùng, Stark nói với Peter Parker rằng, Peter Parker chưa có đủ sẵn sàng để có thể trở thành một “mảnh ghép” của Avengers. Vì vậy, Peter Parker tiếp tục việc học tập của mình. Tuy nhiên, với bộ áo giáp mà Tony Stark tặng, Peter Parker vẫn có thể tiếp tục công cuộc của một người hùng – đó chính là bảo vệ New York dưới sự giám sát của Happy Hogan.',
  dob: '2 aug 2012'

}
const product15 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/04/image001.jpg?format=jpg&width=960',
  nameproduct: 'Avengers: Infinity War',
  info: 'Trong trận chiến của đội Avengers để “úp sọt” Thanos nhưng bất thành và đại bại, trước khi đồng ý giao viên Time Stone cho Thanos, Doctor Strange hé lộ rằng chỉ có duy nhất 1 khả năng  để đảo ngược tình thế đó là giữ mạng sống cho Iron Man.',
  dob: '2 aug 2012'

}
const product16 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://imageio.forbes.com/blogs-images/scottmendelson/files/2017/10/DMQuyI5V4AAUHP0.jpg?format=jpg&width=960',
  nameproduct: 'Black Panther',
  info: 'Sau khi xuất hiện trong CA: Civil War, bộ phim Black Panther đưa người xem đến vương quốc bí ẩn Wakanda nằm ở Châu Phi. Nhờ khai thác được nguồn kim loại quý vibranium mà người Wakanda đã đạt được nền khoa học kĩ thuật vô cùng tiến bộ, phát triển hơn phương Tây hàng ngàn năm về mọi mặt.'

}
const product17 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://lumiere-a.akamaihd.net/v1/images/cb_character_online_ooh_1-sht_antman_v3_lg-750x1111_132b319e.jpeg',
  nameproduct: 'Ant-man and the Wasp',
  info: 'Bộ phim lấy bối cảnh sau phần 1, nằm ở cùng thời điểm cuộc chiến Infinity War đang diễn ra. Phim giải thích kĩ hơn về lý thuyết lượng tử của tiến sĩ Hank Pym, cùng với việc Scott Lang tìm thấy bà vợ Janet van Dyne của tiến sĩ Pym đang mắc kẹt ở thế giới lượng tử.'

}
const product18 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/12/Captain-Marvel-Poster-B-1200x675.jpg?format=jpg&width=1200',
  nameproduct: 'Captain Marvel',
  info: 'Năm 1995, Carol Danvers (Vers) thức dậy trên vùng đất Hala, quê hương của đế chế Kree. Trong đầu cô luôn có một mảnh ký ức về vụ rơi máy bay, về hình ảnh một người phụ nữ bị sát hại ngay trước mặt mình và tất cả đều dừng lại trước thời điểm cô nhận được sức mạnh này.'

}
const product19 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg?crop=1.00xw:0.678xh;0,0.0616xh&resize=1200:*',
  nameproduct: 'Avengers: End Game',
  info: 'Phim lấy bối cảnh dài 5 năm từ 2018 – 2023, Captain America và Black Widow đã hoàn toàn mất hy vọng đánh bại Thanos để đảo ngược thời gian, Tony Stark thì lui về ở ẩn với vợ và con gái. Ngay lúc đó thì một con chuột chạy đang đã vô tình kích hoạt đường hầm lượng tử và đưa Scott Lang trở về năm 2023...'

}
const product20 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1558547026541-P8GJJHU43RVTC7DSCFSL/image-asset.jpeg',
  nameproduct: 'Spider-man: Far From Home',
  info: 'Khi thế giới dần ổn định cuộc sống sau khi Thanos biến mất. Lần này team của Peter Parker được đi du lịch châu Âu, nhưng khi đang ở nước ngoài thì một ác nhân là Mysterio xuất hiện, hắn đánh lừa sự cả tin của Peter để chiếm quyền kiểm soát AI của Tony Stark để lại là Friday.'

}
const product21 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://imageio.forbes.com/specials-images/imageserve/5e67b406aa54280007597c5b/0x0.jpg?format=jpg&crop=592,333,x0,y69,safe&width=1200',
  nameproduct: ' Black Widow',
  info: 'Bộ phim này có thể coi là hành trình đối mặt với quá khứ của Natasha Romanoff, khi cô tạm thời rời khỏi Avengers để trở về điều tra 1 âm mưu khủng khiếp đang diễn ra tại học viện điệp viên The Red Room – cũng là nơi đã trang bị cho cô những kỹ năng bá đạo như hiện nay.'

}
const product22 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://i.zoomtventertainment.com/story/Shang-Chi.jpg?tr=w-1200,h-900',
  nameproduct: 'Shang Chi and the legend of the Ten Rings',
  info: 'Shang-Chi, đồng thời cũng là lần đầu tiên vũ trụ điện ảnh này đưa những pha hành động. Ngoài ra, Shang-Chi and the Legend of the Ten Rings sẽ hé lộ thân phận thực sự của ông trùm Mandarin, đồng thời cũng là người cha cực kỳ nghiêm khắc luôn muốn đào tạo Shang-Chi thành 1 sát thủ chuyên nghiệp.'

}
const product23 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://cdn.europosters.eu/image/1300/posters/marvel-the-eternals-i116111.jpg',
  nameproduct: 'The Eternals',
  info: 'Đây là dự án sẽ lần đầu tiên chính thức đưa chủng tộc Eternals của truyện tranh Marvel lên màn ảnh lớn với nhiệm vụ bảo vệ Trái Đất trước sự xâm lược của người Deviants.'

}
const product24 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdZwgA0RdFsGhl6wMhvyytt0bOmKHdlIfBw&usqp=CAU',
  nameproduct: 'Spider-Man: No Way Home',
  info: 'Spider-Man: No Way Home xoay quanh cuộc sống đã bị đảo lộn của Peter Parker bởi kẻ phản diện Mysterio đã công bố danh tính thật của cậu chàng là Spider-Man cho cả thế giới biết.Peter yêu cầu sự giúp đỡ của phù thủy toàn năng Doctor Strange nhằm khiến mọi người quên đi danh tính của mình.'

}
const product25 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://www.slashfilm.com/img/gallery/superhero-bits-the-final-doctor-strange-2-poster-moon-knights-big-episode-is-imminent-more/l-intro-1651012771.jpg',
  nameproduct: 'Doctor Strange in the Multiverse of Madness',
  info: 'Sau sự kiện của Avengers: Hồi kết (2019) và WandaVision (2021), việc nghiên cứu Hòn đá thời gian của Doctor Strange tiếp tục bị gián đoạn bởi một người bạn bỗng chốc biến thành kẻ thù. Chính vì thế, Strange giải phóng sự độc ác “không thể thốt nên lời” của mình.'

}
const product26 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://wecheckin.vn/wp-content/uploads/2022/07/thor-love-and-thunder-poster.jpg',
  nameproduct: 'Thor: Love and Thunder ',
  info: 'Thor đồng hành đội Guardians of the Galaxy trong nhiệm vụ bảo vệ các hành tinh khỏi những kẻ xâm lăng xấu xa. Tuy nhiên, anh không nhiều động lực sau những mất mát trước đó. Vị thần xứ Asgard lấy lại vóc dáng "sáu múi" nhưng nội tâm trống rỗng.'

}
const product27 = {
  id: Math.round((Math.random() + 1) * 9000000),
  image: 'https://guardian.ng/wp-content/uploads/2022/10/Poster-Wakanda-forever-2-1424x802-1.jpeg',
  nameproduct: 'Black Panther: Wakanda Forever',
  info: 'Tác phẩm mở đầu với phân đoạn vua T Challa hấp hối vì mắc một căn bệnh bí ẩn. Shuri cố gắng nghiên cứu để khôi phục loại thần dược Tâm Hình Thảo với niềm tin nó có thể cứu sống anh trai. Tuy nhiên, kế hoạch của cô đổ vỡ khi T Challa trút hơi thở cuối cùng trên giường bệnh trước khi dự án thành công.'

}


let listProduct = [product, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27];


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

