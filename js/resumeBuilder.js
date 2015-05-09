var bio = {
	"name" : "Aleksandra Kiri",
	"role" : "Front-End Developer",
	"contacts" : {
		"email" : "aleksakir1@gmail.com",
		"github" : "Aleksandra11",
		"location" : "Richmond, VA",
		"mobile" : "804-0000000"
	},
	"bioPic" : "images/me_1.jpg",
	"message" : "Welcome to my interactive Resume",
	"skills" : ["HTML","CSS","JavaScript","Responsive Web Design", "Version Control"]
};
var name = bio.name;
var role = bio.role;
var formettedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#fixedname").prepend(formattedRole);
$("#fixedname").prepend(formettedName);

var bioPic = bio.bioPic;
var formattedPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedPic);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGitHub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGitHub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var message = bio.message;
var formattedMessage = HTMLWelcomeMsg.replace("%data%", message);
$("#header").append(formattedMessage);

var skills = bio.skills;
if(skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[3]);
	$("#skills").append(formattedSkill);
}

var education = {
	"schools" : [
		{
			"name" : "Perm Institute of Human and Technological Sciences",
			"location" : "Perm, Russia",
			"degree" : "BA",
			"major" : "Science in Psychology",
			"dates" : 2011,
			"url" : "http://www.pgtiperm.ru"
		},
		{
			"name" : "Perm State University",
			"location" : "Perm, Russia",
			"degree" : " ",
			"major" : "Mathematics",
			"dates" : 2010,
			"url" : "http://en.psu.ru/"
		}
		],
	"onlineClasses" : [
		{
			"title" : "Front-End Developer ND",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		},
		{
			"title" : ["JavaScript Syntax","HTML and CSS"],
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedName);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
};
	$("#education").append(HTMLonlineClasses);
	for(onlineClass in education.onlineClasses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".online-entry:last").append(formattedTitleSchool);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].date);
		$(".online-entry:last").append(formattedDate);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
		$(".online-entry:last").append(formattedURL);
	}
}
education.display();

var work = {
	"jobs" : [
		{
			"employer" : "Planet Express",
			"title" : "Front-End Web Developer",
			"location" : "Richmond, VA",
			"years" : "2015",
			"description" : "Responsible for interpreting and executing designs correctly."
		},
		{
			"employer" : "School for children with special needs",
			"title" : "Vice-principal",
			"location" : "Perm, Russia",
			"years" : "2004 - 2007",
			"description" : "Description goes here"
		},
		{
			"employer" : "Center for psychology services",
			"title" : "Psychologist",
			"location" : "Perm, Russia",
			"years" : "2000 - 2004",
			"description" : "Description goes here"
		}
	]
};
function displayWork() {
for (job in work.jobs) {$("#workExperience").append(HTMLworkStart);
var employer = work.jobs[job].employer;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", employer);
var title = work.jobs[job].title;
var formattedworkTitle = HTMLworkTitle.replace("%data%", title);
var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
$(".work-entry:last").append(formattedDates);
var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}	
}
displayWork();

var projects = {
	"projects" : [
	{
		"title" : "Arcade Game",
		"dates" : 2015,
		"description" : "For this project I must recreate a classic arcade game using visual assets and a game loop engine."
	},
	{
		"title" : "Portfolio",
		"dates" : 2015,
		"description" : "Project 'Portfolio Mockup to HTML and CSS' is responsive website with descriptions and links to each of the projects",
		"images" : [
		"images/Featured_work_220.png",
		"images/map.png"
		]
	}
	]
};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
};

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}

}
projects.display();

$("#mapDiv").append(googleMap);

//.append() internationalizeButton to the main div to change my name to an international version

function inName() {
	var names = bio.name.split(" ");
	var inLastName = names[1].toUpperCase();
	var inFirstName = names[0];
	newName = inFirstName + ' ' + inLastName;
	return newName;
}
console.log(inName);
$("#main").append(internationalizeButton);
