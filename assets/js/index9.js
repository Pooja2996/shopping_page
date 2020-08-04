
const perfTitle = "Wotta Girl Perfume";
const perfColors = ["Divine_Purple","Red_Magic","Pink_Angel","Mystic_Blue"];
const perfRatings = {Package:95,Scent:75,"Value_For_Money":75,"LongLasting":82}
const girlyEl = document.querySelector("#girly");
const girlyDivEl = document.querySelector('#girlyDiv');
const titleEl = document.querySelector("#title");
const clrBtnEl = document.querySelector('#color_ops');
const perfImgEl = document.querySelector("#perfume_img");
const ratingEl = document.querySelector("#rating");
const overallEl = document.querySelector(".Overall");
const selectedColorEl = document.querySelector("#selected_color");
const loaderEl = document.querySelector("#loader");

const image = document.getElementById("perfume_display")

titleEl.innerHTML = `${perfTitle}'s <strong>raiting</strong>`

perfColors.map((d,index)=>{
	clrBtnEl.innerHTML += `<div class='round-btn-wrap'><button class='rounded ${d} card-2' onclick="perfClr('${d}')">${index + 1}</button><div>`;
})


const perfClr = (clr) =>{
	console.log(clr)
	image.setAttribute("src",`./assets/images/${clr}.jpg`)
	selectedColorEl.innerHTML = `selected color <strong>${clr}</strong>`;
}

const loadImage = ()=>{
	setTimeout(()=>{
		loaderEl.style.display = 'none'
		let img = document.querySelector("#perfume_display");
		img.style.display = 'block'
	},500)
}

let perToDigg = int => (int/100)*180;

let digg = perToDigg(Ratings.Overall);

// small time-out for animation
setTimeout(()=>{
	girlyEl.style.transform = `rotate(${digg}deg)`;	
	for(raing in perfRatings){
		if('Overall' !== raing){
				let el = document.querySelector("."+raing);
				el.style.width = `${perfRatings[raing]}%`;
		}
	}
},500)

perfClr("Divine_Purple");
