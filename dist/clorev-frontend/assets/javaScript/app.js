window.addEventListener('DOMContentLoaded', () => {

	// Index Page User menu
	$('.sign').click(() => {
		$('.opt-menu').slideToggle();
	});

	//open and close tab menu
	$('.nav-tabs-dropdown')
		.on("click", "li:not('.active') a", function (event) {
			$(this).closest('ul').removeClass("open");
		})
		.on("click", "li.active a", function (event) {
			$(this).closest('ul').toggleClass("open");
		});

	// Plus Minus buttons 
	var incrementPlus;
	var incrementMinus;

	var buttonPlus = $(".cart-qty-plus");
	var buttonMinus = $(".cart-qty-minus");

	if ($('.qty').val() == 0) {
		buttonMinus.css('color', 'gray');
	}

	var incrementPlus = buttonPlus.click(function () {
		var $n = $(this)
			.parent(".button-container")
			.parent(".item-count")
			.find(".qty");
		var $m = $(this).siblings('.cart-qty-minus');
		$n.val(Number($n.val()) + 1);
		$m.css('color', 'rgb(33,37,41)');
	});

	var incrementMinus = buttonMinus.click(function () {
		var $n = $(this)
			.parent(".button-container")
			.parent(".item-count")
			.find(".qty");
		var $m = $(this);
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount - 1);
		}
		if (amount < 2) {
			$m.css('color', 'gray');
		}
	});


	//----------------- Cart Page --------------------------
	let arrowBtnArray = Array.from(document.querySelectorAll('.pay-opt-header'));
	arrowBtnArray.forEach(element => {
		element.addEventListener('click', () => {
			element.querySelector('.arrow-btn').classList.toggle('rotate-arrow-btn');
		});
	});


	// SERVICE PROVIDER PAGE-----------------------------------------------------------
	
	// Google Map
	function initMap() {
		// The location of Uluru
		var uluru = {
			lat: -25.344,
			lng: 131.036
		};
		// The map, centered at Uluru
		var map = new google.maps.Map(
			document.getElementById('map'), {
				zoom: 4,
				center: uluru
			});
		// The marker, positioned at Uluru
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	}

	

	//----------------------------------------------------------------------------Price Filter 
	let filterSwitch = document.querySelector('.switch .slider');
	let filterCheck = document.querySelector('.switch input');

	// By Default Price is Low to High --- For Regular Delivery
	let serviceProvidersArray = Array.from(document.querySelectorAll('.service-providers-wrapper .service-provider'));
	serviceProvidersArray.sort((a, b) => {
		let firstValue = a.querySelector('.service-price').innerHTML;
		let secondValue = b.querySelector('.service-price').innerHTML;
		return firstValue - secondValue;
	});

	serviceProvidersArray.forEach((element) => {
		document.querySelector('.service-providers-wrapper').appendChild(element);
	});


	// By Default Price is Low to High --- For Express Delivery
	let serviceProvidersArraySecond = Array.from(document.querySelectorAll('.service-providers-wrapper-two .service-provider'));
	serviceProvidersArraySecond.sort((a, b) => {
		let firstValue = a.querySelector('.service-price').innerHTML;
		let secondValue = b.querySelector('.service-price').innerHTML;
		return firstValue - secondValue;
	});

	serviceProvidersArraySecond.forEach((element) => {
		document.querySelector('.service-providers-wrapper-two').appendChild(element);
	});


	filterSwitch.addEventListener('click', () => {
		let isChecked = filterCheck.checked;
		if (isChecked == true) {
			let serviceProvidersArray = Array.from(document.querySelectorAll('.service-providers-wrapper .service-provider'));
			serviceProvidersArray.sort((a, b) => {
				let firstValue = a.querySelector('.service-price').innerHTML;
				let secondValue = b.querySelector('.service-price').innerHTML;
				return secondValue - firstValue;
			});

			serviceProvidersArray.forEach((element) => {
				document.querySelector('.service-providers-wrapper').appendChild(element);
			});


			let serviceProvidersArraySecond = Array.from(document.querySelectorAll('.service-providers-wrapper-two .service-provider'));
			serviceProvidersArraySecond.sort((a, b) => {
				let firstValue = a.querySelector('.service-price').innerHTML;
				let secondValue = b.querySelector('.service-price').innerHTML;
				return secondValue - firstValue;
			});

			serviceProvidersArraySecond.forEach((element) => {
				document.querySelector('.service-providers-wrapper-two').appendChild(element);
			});
		} else if (isChecked == false) {
			let serviceProvidersArray = Array.from(document.querySelectorAll('.service-providers-wrapper .service-provider'));
			serviceProvidersArray.sort((a, b) => {
				let firstValue = a.querySelector('.service-price').innerHTML;
				let secondValue = b.querySelector('.service-price').innerHTML;
				return firstValue - secondValue;
			});

			serviceProvidersArray.forEach((element) => {
				document.querySelector('.service-providers-wrapper').appendChild(element);
			});


			let serviceProvidersArraySecond = Array.from(document.querySelectorAll('.service-providers-wrapper-two .service-provider'));
			serviceProvidersArraySecond.sort((a, b) => {
				let firstValue = a.querySelector('.service-price').innerHTML;
				let secondValue = b.querySelector('.service-price').innerHTML;
				return firstValue - secondValue;
			});

			serviceProvidersArraySecond.forEach((element) => {
				document.querySelector('.service-providers-wrapper-two').appendChild(element);
			});
		}

	});

}); //DOMContentLoaded //End of code

// Payment Page ---------------------------------------------------------------------------------------->
$('.info-btn').click(() => {
	$('.save-card-check-info').slideToggle("fast");
});

// Delivery Partner ------------------------------------------------------------------------------------>
let checkBtns = Array.from(document.querySelectorAll('.check-btn'));
checkBtns.forEach((element) => {
	element.addEventListener('click', function () {
		this.classList.toggle('c-fill-btn');
	});
});

$('.no-btn').click(function () {
	$(this).addClass('c-fill-btn');
	$('.yes-btn').removeClass('c-fill-btn');
});

$('.yes-btn').click(function () {
	$(this).addClass('c-fill-btn');
	$('.no-btn').removeClass('c-fill-btn');
});

// Schedule pickup and delivery page ---------------------------------------->
let todayPickup = new Date().getDate();
let todayDelivery = new Date().getDate();
let startDayPickup = new Date().getDay() + 2;
let startDayDelivery = new Date().getDay() + 2;
let daySpansPickup = Array.from(document.querySelectorAll('.pickup-sec .day')).slice(2,7); 
let daySpansDelivery = Array.from(document.querySelectorAll('.delivery-sec .day')).slice(2,7);

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dateSpansPickup = document.querySelectorAll('.pickup-sec .date');
Array.from(dateSpansPickup).forEach(function (span) {
	span.innerHTML = todayPickup;
	todayPickup++;
	if(todayPickup > 31){
		todayPickup = 1;
	}
});
daySpansPickup.forEach(function(span) {
	span.innerHTML = days[startDayPickup];
	startDayPickup++;
	if(startDayPickup > 6){
		startDayPickup = 0;
	}
});


let dateSpansDelivery = document.querySelectorAll('.delivery-sec .date');
Array.from(dateSpansDelivery).forEach(function (span) {
	span.innerHTML = todayDelivery;
	todayDelivery++;
	if(todayDelivery > 31){
		todayDelivery = 1;
	}
});
daySpansDelivery.forEach(function(span) {
	span.innerHTML = days[startDayDelivery];
	startDayDelivery++;
	if(startDayDelivery > 6){
		startDayDelivery = 0;
	}
});

// Rating Stars
let stars = document.querySelectorAll('.rating-star');
starsArray = Array.from(stars);
starsArray.forEach(function(element, index){
	element.addEventListener('click', function(star) {
		let ratedStars = starsArray.slice(0, index+1);
		starsArray.forEach(function(element){
			element.style.color = 'gray';
		});
		ratedStars.forEach(function(element){
			element.style.color = 'var(--clorev-primary)';
		});
	})
});
