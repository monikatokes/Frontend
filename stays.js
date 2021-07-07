//hide search container
const hide_details_arrow = document.getElementById("hide-details");
const show_details_arrow = document.getElementById("show-details");
const details_container = document.getElementById("details-container");
const left_container = document.getElementById("left-container");
const right_container = document.getElementById("right-container");


hide_details_arrow.addEventListener('click', event => {
	details_container.style = "opacity: 0;height: 0; overflow: hidden;"
	left_container.style = "width: 5%; transition: width 2s;"
	right_container.style= "width: 95%;"
	show_details_arrow.style = "display: block; " 
});


show_details_arrow.addEventListener('click', event => {
	details_container.style = "opacity: 1;height: auto; transition: opacity 5s;"
	left_container.style = "width: 20%; transition: width 2s;"
	right_container.style= "width: 80%;"
	show_details_arrow.style = "display: none;"
});



'use strict';

//minimum rating
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
	const starClassActive = "rating__star fas fa-star";
	const starClassInactive = "rating__star far fa-star";
	const starsLength = stars.length;
	let i;
	stars.map((star) => {
		star.onclick = () => {
			i = stars.indexOf(star);

			if (star.className===starClassInactive) {
				for (i; i >= 0; --i) stars[i].className = starClassActive;
			} else {
				for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
			}
	};
});
}
executeRating(ratingStars);

//price selection
const range = document.querySelector('input[type=range]');
const output = document.querySelector('output');
output.value = range.value;
range.oninput = function() {
	output.value = range.value;
};