var work = {
	"jobs": [
		{
			"employer": "University of Florida",
			"title": "Research Assistant",
			"location": "Gainesville, FL",
			"dates": "January 2016 - Present",
			"description": "Conducted research on network modeling."
		},
		{
			"employer": "University of Florida",
			"title": "Teaching Assistant",
			"location": "Gainesville, FL",
			"dates": "August 2013 - December 2015",
			"description": "Held office hours and proctored exams."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Statistical Modeling of Activities in Dynamic Social Networks",
			"dates": "September 2015 - Present",
			"description": "Developed counting process models to measure user influence in social networks with community structure such as Facebook or Twitter and to quantify the connections between users based on their online behavior, which can be used for influencer marketing and customer segmentation respectively.",
			"images": ["http://people.clas.ufl.edu/shaojunzhang/files/facebook_world_friend_map.png"]
		}
	]
}

var bio = {
	"name": "Shaojun Zhang",
	"role": "Research Assistant",
	"welcomeMessage": "Thanks for checking my resume!",
	"biopic": "http://people.clas.ufl.edu/shaojunzhang/files/photo.jpg",
	"contacts": {
		"mobile": "(352) 281-9536",
		"email": "jim901127@gmail.com",
		"github": "ishaojunzhang",
		"twitter": "ishaojunzhang",
		"location": "Gainesville, FL"
	},
	"skills": ["Machine Learning", "Statistical Modeling", "R", "Python", "SQL"]
}

var education = {
	"schools": [
		{
			"name": "University of Florida",
			"location": "Gainesville, FL",
			"degree": "PhD",
			"majors": ["Statistics"],
			"dates": 2018
		},
		{
			"name": "Fudan University",
			"location": "Shanghai",
			"degree": "BS",
			"majors": ["Mathematics"],
			"dates": 2013
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/course/ud804"
		}
	]
}


bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedImage);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();


work.displayWork = function() {
	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.displayWork();


projects.display = function() {
	for (i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[i].images.length > 0) {
			for (j in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	for (i in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}
education.display();


$("#main").append(internationalizeButton);
function inName(name) {
	nameWords = name.trim().split(" ");
	nameWords[0] = nameWords[0][0].toUpperCase() + nameWords[0].slice(1);
	nameWords[1] = nameWords[1].toUpperCase();
	return nameWords.join(" ");
}


$("#mapDiv").append(googleMap);


function getRelationship(x, y) {
	var zeros = 0;
	if (isNaN(x)) {
		zeros += 1;
	}
	if (isNaN(y)) {
		zeros += 1;
	}
	if (zeros === 2) {
		return "Can't compare relationships because " + x + " and " + y + " are not numbers";
	}
	if (zeros == 1) {
		if (isNaN(x)) {
			return "Can't compare relationships because " + x + " is not a number";
		} else {
			return "Can't compare relationships because " + y + " is not a number";
		}
	}
	if (x < y) {
		return "<";
	} else if (x > y) {
		return ">";
	} else {
		return "=";
	}
}


function alphabetizer(names) {
	var alphabetizedNames = [];
    for (i in names) {
    	var nameWords = names[i].trim().split(" ");
    	var word = nameWords[1] + ", ";
    	word += nameWords[0];
    	alphabetizedNames.push(word);
    }
    return alphabetizedNames.sort();
}



