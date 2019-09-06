// Landing section
const landingButton = $('#landing-button'),
	landingSection = $('section.landing'),
	mainSection = $('section.main');

landingButton.click(() => {
	landingSection.fadeOut(1000, () => {
		mainSection.fadeIn(1000);
	});
});

// Skills section
const skillContent = $('#skill-content'),
	skills = $('#skill-container p'),
	skillContainer = $('#skill-container'),
	listSkills = $('.dropdown-menu a'),
	dropdownMenuButton = $('#dropdownMenuButton'),
	firstZIndedx = 8,
	firstLeftPozition = '36%',
	firstTopPozition = '40%';

let clickedZIndex,
	clickedLeftPosition,
	clickedTopPosition,
	skillPicker = false,
	leftSkillPosition = 36,
	topSkillPosition = 40;

const skillsDescription = {
	skill1: {
		desc:
			'<p>Po raz pierwszy miałem styczność z Node.Js podczas kursu internetowego, którego produktem końcowym była aplikacja YelpCamp.</p>' +
			'<p>Realizując projekt nauczyłem się obsługi aplikacji z poziomu serwera, instalacji pakietów, korzystania z frameworku Express, szablonowania EJS, obsługi bazy danych MongoDB przy pomocy Mongoose, uwierzytelniania dzięki Passport, czy tworzenia ścieżek RESTful.</p>'
	},
	skill2: {
		desc:
			'<p>Każdy z realizowanych do tej pory projektów zawiera interfejs użytkownika, co pozwoliło mi zapoznać się z podstawami składni HTML oraz CSS.</p>' +
			'<p>Strona Kancelarii została stworzona w czystej składni CSS. W kolejnych projektach starałem się wykorzystywać Sass (SCSS).</p>'
	},
	skill3: {
		desc:
			'<p>Dzięki zrealizowanym projektom poznałem podstawy języka JavaScript. Nauczyłem się zarówno składni Vanilla.Js, jak i jQuery dotyczącej podstawowej manipulacji DOM.</p>' +
			'<p>Poznałem również m.in. zasady stosowania funkcji z wykorzystaniem strzałek, funkcji asynchronicznych czy sposoby deklaracji zmiennych z ograniczonym zakresem.</p>'
	},
	skill4: {
		desc:
			'<p>Podczas realizacji różnych projektów miałem styczność z relacyjnymi oraz nierelacyjnymi bazami danych.</p>' +
			'<p>W pracy zawodowej systemem zarządzania relacyjną bazą danych tworzonych aplikacji był Microsoft SQL Server z językiem T-SQL. Częściowo miałem do czynienia także z językiem PL/SQL oraz bazą danych Oracle, jednak pozyskiwanie danych miało miejsce głównie przez graficzny interfejs aplikacji Oracle Business Intelligence.</p>' +
			'<p>Wśród nierelacyjnych baz danych spotkałem się z Firestore (opisana w osobnej pozycji) oraz MongoDB, która została wykorzystana przy realizacji projektu YelpCamp z wykorzystaniem biblioteki Mongoose.</p>'
	},
	skill5: {
		desc:
			'<p>Wykorzystałem tę nierelacyjną bazę danych do stworzenia aplikacji mobilnej na urządzenia z systemem Android w ramach pracy inżynierskiej.</p>' +
			'<p>Charakteryzuje się ona tym, że znajduje się w chmurze oraz pozwala na synchronizację danych w czasie rzeczywistym za pomocą realtime listeners u wszystkich Klientów.</p>' +
			'<p>Baza Firebase zostanie również przeze mnie wykorzystana przy realizacji części webowej Niezbędnika Turystycznego.</p>'
	},
	skill6: {
		desc:
			'Swoich sił w programowaniu aplikacji na platformę Android rozpocząłem na początku 2017 r. Niestety w programie studiów nie było ono przewidziane, dlatego uczyłem się na własną rękę.</p>' +
			'<p>Jako jedna z kilku tysięcy osób z całego świata zostałem zakwalifikowany do uczestnictwa w kursie internetowym organizowanym przez Google i dzięki temu poznałem podstawy tworzenia aplikacji.</p>' +
			'<p>Mając już pewne doświadczenie zdecydowałem się na stworzenie własnej aplikacji na smartfony w ramach pracy inżynierskiej. </p>' +
			'<p>Realizując projekt zdobyłem doświadczenie w programowaniu obiektowym, tworzeniu interfejsu użytkownika oraz obsłudze bazy danych Firestore.'
	}
};

// Defined skills for spread skills
let styles = [
	{
		top: (topSkillPosition + 30).toString() + '%',
		left: leftSkillPosition + 10 + '%',
		zIndex: 6
	},
	{
		top: (topSkillPosition + 10).toString() + '%',
		left: (leftSkillPosition - 5).toString() + '%',
		zIndex: 5
	},
	{
		top: (topSkillPosition - 20).toString() + '%',
		left: (leftSkillPosition - 5).toString() + '%',
		zIndex: 4
	},
	{
		top: (topSkillPosition - 35).toString() + '%',
		left: (leftSkillPosition + 10).toString() + '%',
		zIndex: 3
	},
	{
		top: (topSkillPosition - 20).toString() + '%',
		left: (leftSkillPosition + 25).toString() + '%',
		zIndex: 2
	},
	{
		top: (topSkillPosition + 10).toString() + '%',
		left: (leftSkillPosition + 25).toString() + '%',
		zIndex: 1
	}
];

// Handling click event on skill circle
$(skills).click(function() {
	if (!skillPicker) {
		fadeOutSkills($(this));
	} else {
		fadeInSkills($(this));
	}
});

// Function that hides skill content and resizes skills container
function fadeOutSkills() {
	skillContent.fadeOut(500);
	skillContainer.fadeOut(500, () => {
		skillContainer.removeClass('col-lg-5');
		skillContainer.addClass('col-lg-12');
		for (let i = 0; i < skills.length; i++) {
			$(skills[i]).css(styles[i]);
		}
		skillContainer.fadeIn(500);
	});
	skillPicker = true;
}

//Reverse function to fadeOutSkills, that also replace selected item with first item from collapsed skills
function fadeInSkills(clickedItem) {
	skillContainer.fadeOut(500, () => {
		skillContainer.removeClass('col-lg-12');
		skillContainer.addClass('col-lg-5');
		for (let i = 0; i < skills.length; i++) {
			$(skills[i]).attr('style', '');
		}
		clickedZIndex = clickedItem.css('z-index');
		clickedLeftPosition = clickedItem.css('left');
		clickedTopPosition = clickedItem.css('top');
		clickedItem.css({
			top: firstTopPozition,
			left: firstLeftPozition,
			zIndex: firstZIndedx
		});
		$('#skill1').css({
			top: clickedTopPosition,
			left: clickedLeftPosition,
			zIndex: clickedZIndex
		});
		var itemID = clickedItem.attr('id');
		skillContent.html(skillsDescription[itemID].desc);
		skillContainer.fadeIn(500);
		skillContent.fadeIn(500);
	});
	skillPicker = false;
}

$(document).on('click', '.dropdown-menu a', function() {
	var itemID = $(this).attr('id').replace('list-', '');
	skillContent.fadeOut(500, () => {
		$('.dropdown-menu a.active').removeClass('active');
		dropdownMenuButton.text($(this).text());
		$(this).addClass('active');
		skillContent.html(skillsDescription[itemID].desc);
		skillContent.fadeIn(500);
	});
});

// Contact Section
const mainIcon = $('#main-contact-icon'),
	secondIcon = $('#second-contact-icon'),
	lastIcon = $('#last-contact-icon'),
	copyButton = $('#copy-button'),
	contactContent = $('#contact-content');

let linkText, iconClass, contentText, newTab;

mainIcon.click(() => {
	linkText = 'https://www.linkedin.com/in/michaloruba/';
	iconClass = 'fa-linkedin';
	newTab = 'target="_blank"';
	contentText = 'LinkedIn: linkedin.com/in/michaloruba';
	contactDataDisplay(contentText, iconClass, linkText);
});

secondIcon.click(() => {
	linkText = 'mailto:michaloruba92@gmail.com';
	iconClass = 'fa-envelope';
	contentText = 'Gmail: michaloruba92@gmail.com';
	newTab = '';
	contactDataDisplay(contentText, iconClass, linkText);
});
lastIcon.click(() => {
	linkText = 'https://github.com/michalOruba';
	iconClass = 'fa-github';
	contentText = 'GitHub: github.com/michalOruba';
	newTab = 'target="_blank"';
	contactDataDisplay(contentText, iconClass, linkText);
});

copyButton.click(() => {
	let copyText = linkText.replace('mailto:', '');
	var dummy = $('<input id="dummy_id"> style="opacity:0').val(copyText).appendTo('body').select();
	document.execCommand('copy');
	setTimeout(function() {
		$('#dummy_id').remove();
	});
});
function contactDataDisplay(text, icon, linkText) {
	copyButton.fadeOut(500);
	contactContent.fadeOut(500, () => {
		contactContent.html(
			'<a href="' +
				linkText +
				'" ' +
				newTab +
				'><i id="content-icon" class="fa ' +
				icon +
				' fa-2x pr-3"></i> ' +
				text +
				'</a>'
		);
		copyButton.removeClass('d-none');
		copyButton.fadeIn(500);
		contactContent.fadeIn(500);
	});
}

$('#copy-button').popover({ trigger: 'manual' }).click(function() {
	var pop = $(this);
	pop.popover('show');
	pop.on('shown.bs.popover', function() {
		setTimeout(function() {
			pop.popover('hide');
		}, 1500);
	});
});

//Animation section

$(window).scroll(function() {
	showImages($('.animation'));
});
function showImages($elem) {
	var windowHeight = jQuery(window).height();
	$($elem).each(function() {
		var thisPos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (topOfWindow + windowHeight > thisPos) {
			$(this).addClass('animate');
		}
	});
}

$("a[href^='#_']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	console.log('Wykonuję scroll');
	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate(
		{
			scrollTop: $(hash).offset().top - 55
		},
		800,
		function() {
			// when done, add hash to url
			// (default click behaviour)
			//window.location.hash = hash;
		}
	);
});
