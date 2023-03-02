let formmenu = document.getElementById("FormMenu")


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//CMT
const submitBtn = document.querySelector('.submit__btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart__icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container-3')

// likeIcon.addEventListener('click', likeVideo)
// submitBtn.addEventListener('click', submitFeedback)


// feedbackArr = []
// let positiveFeedback = false
// let likesCount = 0

// function submitFeedback(e){
//     // get user name
//     const userForm = userName.value 
//     // get feedback
//     const commentForm = comment.value 
//     // if inputs are not empty
//     if(userForm && commentForm !== ''){
//         // create new feedback
//         newFeedback = {
//             "id": Math.floor((Math.random() * 1000)+ 1),
//             "userName": userForm,
//             "userComment": commentForm,
//             "typeOfFeedback": positiveFeedback
//         }
//         // add new feedback to array
//         feedbackArr.push(newFeedback)
//         // if liked add to count
//         if(positiveFeedback === true){
//             addLikes()
//         }
//         // clear inputs 
//         resetForm()
//         // add feedback to list
//         addFeedback(newFeedback)
//     }


//     e.preventDefault()
// }

// function likeVideo(){
//     likeIcon.classList.toggle('liked')

//     if(likeIcon.classList.contains('liked')){
//         likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
//         // set feedback to liked
//         positiveFeedback = true
//     } else {
//         likeIcon.innerHTML = `<i class="far fa-heart"></i>`
//         // set feedback to not liked
//         positiveFeedback = false
//     }
// }

// function addLikes(){
//     likesCount++
//     count.innerHTML = likesCount
// }

// function resetForm(){
//     userName.value = ''
//     comment.value = ''
//     likeIcon.innerHTML = `<i class="far fa-heart"></i>`
//     positiveFeedback = false
// }

// function addFeedback(item){
//     // select first letter of the user name
//     const letter = (item.userName).charAt(0)
//     // create new div
//     const div = document.createElement('div')
//     // add class
//     div.classList = 'comment__card'
//     // add id
//     div.id = item.id 
//     // add html
//     div.innerHTML = `
//     <div class="pic center__display">
//                     ${letter}
//                 </div>
//                 <div class="comment__info">
//                     <small class="nickname">
//                         ${item.userName}
//                     </small>
//                     <p class="comment">
//                         ${item.userComment}
//                     </p>
//                     <div class="comment__bottom">
//                         <div class="heart__icon--comment">
//                             ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
//                         </div>
//                         <button>
//                             Reply
//                         </button>
//                     </div>
//                 </div>
//     `
//     // insert feedback into the list
//     commentsCont.insertAdjacentElement('beforeend', div)
// }



























// // rating
// window.addEventListener("DOMContentLoaded",() => {
// 	const fr = new FaceRating("#face-rating");
// });

// class FaceRating {
// 	constructor(qs) {
// 		this.input = document.querySelector(qs);
// 		this.input?.addEventListener("input",this.update.bind(this));
// 		this.face = this.input?.previousElementSibling;
// 		this.update();
// 	}
// 	update(e) {
// 		let value = this.input.defaultValue;

// 		// when manually set
// 		if (e) value = e.target?.value;
// 		// when initiated
// 		else this.input.value = value;

// 		const min = this.input.min || 0;
// 		const max = this.input.max || 100;
// 		const percentRaw = (value - min) / (max - min) * 100;
// 		const percent = +percentRaw.toFixed(2);

// 		this.input?.style.setProperty("--percent",`${percent}%`);

// 		// face and range fill colors
// 		const maxHue = 120;
// 		const hueExtend = 30;
// 		const hue = Math.round(maxHue * percent / 100);

// 		let hue2 = hue - hueExtend;
// 		if (hue2 < 0) hue2 += 360;

// 		const hues = [hue,hue2];
// 		hues.forEach((h,i) => {
// 			this.face?.style.setProperty(`--face-hue${i + 1}`,h);
// 		});

// 		this.input?.style.setProperty("--input-hue",hue);

// 		// emotions
// 		const duration = 1;
// 		const delay = -(duration * 0.99) * percent / 100;
// 		const parts = ["right","left","mouth-lower","mouth-upper"];

// 		parts.forEach(p => {
// 			const el = this.face?.querySelector(`[data-${p}]`);
// 			el?.style.setProperty(`--delay-${p}`,`${delay}s`);
// 		});

// 		// aria label
// 		const faces = [
// 			"Sad face",
// 			"Slightly sad face",
// 			"Straight face",
// 			"Slightly happy face",
// 			"Happy face"
// 		];
// 		let faceIndex = Math.floor(faces.length * percent / 100);
// 		if (faceIndex === faces.length) --faceIndex;

// 		this.face?.setAttribute("aria-label",faces[faceIndex]);
// 	}
// }


