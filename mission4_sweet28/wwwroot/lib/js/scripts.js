/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

//This first function was written by me to calculate the final grade
$("#gradeSubmit").click(function () {
    //initializing variables to hold the scores for each category
    var assignments = .5 * (parseInt($("#assignments").val()) / 100);
    var groupProject = .1 * (parseInt($("#groupProject").val()) / 100);
    var quizzes = .1 * (parseInt($("#quizzes").val()) / 100);
    var midterm = .1 * (parseInt($("#midterm").val()) / 100);
    var final = .1 * (parseInt($("#final").val()) / 100);
    var intex = .1 * (parseInt($("#intex").val()) / 100);

    //calculating the final score
    var finalGrade = assignments + groupProject + quizzes + midterm + final + intex;

    //using if statements to determine the letter grade, and assigning that letter grade to the letterGrade variable
    var letterGrade = "";
    if (finalGrade >= .94) {
        letterGrade = "A";
    }
    else if (finalGrade >= .90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= .87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= .84) {
        letterGrade = "B";
    }
    else if (finalGrade >= .80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= .77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= .74) {
        letterGrade = "C";
    }
    else if (finalGrade >= .70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= .67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= .64) {
        letterGrade = "D";
    }
    else if (finalGrade >= .60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }


    //Writing the final grade to the webpage dynamically
    $("#finalGrade").html("Your final grade is:");
    $("#finalPct").html((finalGrade * 100) + "%");
    $("#LetterGrade").html(letterGrade);
});


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
