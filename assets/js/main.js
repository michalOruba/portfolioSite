// Skills section
const skillContent = $('#skill-content');
const skills = $('#skill-container p');
const skillContainer = $('#skill-container');
const firstZIndedx = 8;
const firstLeftPozition = '36%';
const firstTopPozition = '40%';

let clickedZIndex;
let clickedLeftPosition;
let clickedTopPosition;

let skillPicker = false;
let leftSkillPosition = 36;
let topSkillPosition = 40;

// Defined skills for spread skills
let styles = [
	{
		top: (topSkillPosition + 30).toString() + '%',
		left: leftSkillPosition + 10 + '%',
		zIndex: 8
	},
	{
		top: (topSkillPosition + 10).toString() + '%',
		left: (leftSkillPosition - 5).toString() + '%',
		zIndex: 7
	},
	{
		top: (topSkillPosition - 20).toString() + '%',
		left: (leftSkillPosition - 5).toString() + '%',
		zIndex: 5
	},
	{
		top: (topSkillPosition - 35).toString() + '%',
		left: (leftSkillPosition + 10).toString() + '%',
		zIndex: 4
	},
	{
		top: (topSkillPosition - 20).toString() + '%',
		left: (leftSkillPosition + 25).toString() + '%',
		zIndex: 3
	},
	{
		top: (topSkillPosition + 10).toString() + '%',
		left: (leftSkillPosition + 25).toString() + '%',
		zIndex: 1
	}
];

// Handling user click event
console.log(skills[0]);
$(skills).click(function() {
	if (!skillPicker) {
		fadeOutSkills();
	} else {
		fadeInSkills($(this));
	}
});

// Function that hides skill content and resizes skills container
function fadeOutSkills() {
	skillContent.fadeOut(500);
	skillContainer.fadeOut(500, () => {
		skillContainer.removeClass('col-md-5');
		skillContainer.addClass('col-md-12');
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
		skillContainer.removeClass('col-md-12');
		skillContainer.addClass('col-md-5');
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
		skillContainer.fadeIn(500);
		skillContent.fadeIn(500);
	});
	skillPicker = false;
}

// Contact Section
const mainIcon = $('#main-contact-icon'),
	secondIcon = $('#second-contact-icon'),
	lastIcon = $('#last-contact-icon'),
	contactContent = $('#contact-content');

let linkText, iconClass, contentText;

mainIcon.click(() => {
	linkText = 'https://www.linkedin.com/in/michaloruba/';
	iconClass = 'fa-linkedin';
	contentText = 'linkedin';
	contactDataDisplay(contentText, iconClass, linkText);
});

secondIcon.click(() => {
	linkText = 'mailto:michaloruba92@gmail.com';
	iconClass = 'fa-envelope';
	contentText = 'gmail';
	contactDataDisplay(contentText, iconClass, linkText);
});
lastIcon.click(() => {
	linkText = 'https://github.com/michalOruba';
	iconClass = 'fa-github';
	contentText = 'GitHub';
	contactDataDisplay(contentText, iconClass, linkText);
});

function contactDataDisplay(text, icon, linkText) {
	contactContent.fadeOut(500, () => {
		contactContent.html(
			'<a href="' + linkText + '"><i id="content-icon" class="fa ' + icon + ' fa-2x pr-3"></i></a> ' + text
		);
		contactContent.fadeIn(500);
	});
}
