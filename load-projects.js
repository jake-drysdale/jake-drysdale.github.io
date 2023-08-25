const projectList = [
    'research/airc.html',
    'research/style.html',
    'research/ads.html'
    // 'project2.html',
    // Add more project HTML file names here
];
document.addEventListener('DOMContentLoaded', loadProjects);

function loadProjects() {
    const container = document.getElementById('projects-container');
    const fetchPromises = projectList.map(project => {
        return fetch(project)
            .then(response => response.text())
            .then(content => {
                const projectSection = document.createElement('div');
                projectSection.className = 'project';
                projectSection.innerHTML = content;

                // Add event listener to toggle content visibility
                const titleElement = projectSection.querySelector('.project-title');
                titleElement.addEventListener('click', () => {
                    const detailsElement = projectSection.querySelector('.project-details');
                    toggleDisplay(detailsElement);
                });

                return projectSection;
            });
    });

    Promise.all(fetchPromises)
        .then(projectSections => {
            projectSections.forEach(projectSection => {
                container.appendChild(projectSection);
            });
        });
}

function toggleDisplay(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

