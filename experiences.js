const experiences = [
    { 
        title: "Employée commerciale.", 
        company: "Super U", 
        year: "Nov. 2023 - Aujourd'hui", 
        description: [
            "Gestion des commandes, mise en rayon"
        ] 
    },
    { 
        title: "Agent d'entretien.", 
        company: "Hygiène 29",
        year: "Déc. 2022 - Avr. 2023", 
        description: [
            "Nettoyage en pharmacie."
        ] 
    },
    { 
        title: "Stagiaire Développeur Web.", 
        company: "PoussFm'",
        year: "Oct 2021", 
        description: [
            "Mise en place d'un WordPress pour une association", 
            "Formation de l'utilisation de Wordpress."
        ] 
    },
    { 
        title: "Hôtesse de caisse polyvalente.", 
        company: "DECATHLON", 
        year: "Jan. 2017 - Avr. 2018", 
        description: [
            "Conseil dans les rayons et cabine.", 
            "Gestion de la caisse."
        ] 
    },
];

function displayExperiences() {
    const experienceList = document.getElementById('experienceList');
    experiences.forEach(exp => {
        const li = document.createElement('li');
        
        // Créer des éléments pour chaque partie de l'expérience
        const companyElement = document.createElement('strong');
        companyElement.textContent = `${exp.company} - ${exp.year}`;

        // Créer un élément pour le titre et le mettre en italique
        const titleElement = document.createElement('em');
        titleElement.textContent = exp.title;
        
        // Créer une liste non ordonnée pour les descriptions
        const descriptionList = document.createElement('ul');
        exp.description.forEach(desc => {
            const descItem = document.createElement('li');
            descItem.textContent = desc;
            descriptionList.appendChild(descItem);
        });
        
        // Ajouter tous les éléments au li
        li.appendChild(companyElement);
        li.appendChild(titleElement);
        li.appendChild(descriptionList);
        experienceList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayExperiences();
});