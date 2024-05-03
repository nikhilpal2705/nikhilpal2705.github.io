$(document).ready(() => {
    $.ajax({
        url: 'assets/data.json',
        dataType: 'json',
        success: function (data) {
            displayProjects(data.projects)
            displaySkills(data.skills)
            bindLinks(data.links)
        },
        error: function (xhr, status, error) {
            console.error('There was a problem with the AJAX request:', error);
        }
    });

    function displayProjects(projects) {
        let projectHTML = '';
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const isEven = i % 2 === 0;

            if (isEven) {
                projectHTML += '<div class="row">';
            }

            projectHTML += `<div class="cell">
                    <h2><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.heading}</a></h2>
                    <p>${project.description ? project.description?.map(desc => `• ${desc}<br><br>`).join('') : ''}</p>
                    <div id="techused">${project.techUsed ? project.techUsed.map(tech => `<div><i class="fas fa-circle"></i>&nbsp;${tech}</div>`).join('') : ''}</div>
                    ${project.sampleLinks ? project.sampleLinks.map((link, idx) => `<a href="${link}" target="_blank" rel="noopener noreferrer"><button class="btn_one">Link ${idx + 1}</button></a>`).join('') : ''}
                </div>`;

            if (!isEven || i + 1 === projects.length) {
                projectHTML += '</div>';
            }
        }
        $('#projects_section').html(projectHTML);
    }

    function displaySkills(skills) {
        let skillHTML = '';
        for (let i = 0; i < skills.length; i++) {
            const skill = skills[i];

            if (i % 3 === 0) {
                skillHTML += '<div class="row">';
            }

            skillHTML += `<div class="scell">
            <h2>${skill.category}</h2>
            <div id="skillset">
                ${skill.skillSets.map(skillset => `<div><i class="${skillset.icon}"></i>&nbsp;&nbsp;${skillset.name}</div>`).join('')}
            </div>
        </div>`

            if (i % 3 === 2 || i + 1 === skills.length) {
                skillHTML += '</div>';
            }
        }
        $('#skills_section').html(skillHTML);
    }

    function bindLinks(links) {
        $('.email').attr('href', "mailto:" + links.email);
        $('.linkedin').attr('href', links.linkedin);
        $('.github').attr('href', links.github);
        $('.telegram').attr('href', links.telegram);
        $('.twitter').attr('href', links.twitter);
        $('.resume').attr('href', links.resume);
    }

    // Show About container
    $(".about").click(function (e) {
        $("#about_container").css("display", "inherit");
        $("#about_container").addClass("animate__slideInLeft animate__animated");
        setTimeout(function () {
            $("#about_container").removeClass("animate__slideInLeft animate__animated");
        }, 400);
    })

    // Close About container
    $("#about_container .button").click(function () {
        $("#about_container").addClass("animate__slideOutLeft animate__animated");
        setTimeout(function () {
            $("#about_container").removeClass("animate__slideOutLeft animate__animated");
            $("#about_container").css("display", "none");
        }, 400);
    });

    // Show Skill container
    $(".skill").click(function () {
        $("#skill_container").css("display", "inherit");
        $("#skill_container").addClass("animate__slideInLeft animate__animated");
        setTimeout(function () {
            $("#skill_container").removeClass("animate__slideInLeft animate__animated");
        }, 400);
    });

    // Close Skill container
    $("#skill_container .button").click(function () {
        $("#skill_container").addClass("animate__slideOutLeft animate__animated");
        setTimeout(function () {
            $("#skill_container").removeClass("animate__slideOutLeft animate__animated");
            $("#skill_container").css("display", "none");
        }, 400);
    });

    // Show Work container
    $(".work").click(function () {
        $("#work_container").css("display", "inherit");
        $("#work_container").addClass("animate__slideInRight animate__animated");
        setTimeout(function () {
            $("#work_container").removeClass("animate__slideInRight animate__animated");
        }, 400);
    });

    // Close Work container
    $("#work_container .button").click(function () {
        $("#work_container").addClass("animate__slideOutRight animate__animated");
        setTimeout(function () {
            $("#work_container").removeClass("animate__slideOutRight animate__animated");
            $("#work_container").css("display", "none");
        }, 400);
    });

    // Show Contact container
    $(".contact").click(function () {
        $("#contact_container").css("display", "inherit");
        $("#contact_container").addClass("animate__slideInUp animate__animated");
        setTimeout(function () {
            $("#contact_container").removeClass("animate__slideInUp animate__animated");
        }, 400);
    });

    // Close Contact container
    $("#contact_container .button").click(function () {
        $("#contact_container").addClass("animate__slideOutDown animate__animated");
        setTimeout(function () {
            $("#contact_container").removeClass("animate__slideOutDown animate__animated");
            $("#contact_container").css("display", "none");
        }, 400);
    });

    // Show Loader on page load
    setTimeout(function () {
        $("#loading").addClass("animate__zoomOut animate__animated");
        setTimeout(function () {
            $("#loading").removeClass("animate__zoomOut animate__animated");
            $("#loading").css("display", "none");
        }, 500);
    }, 350);
})