const formations = [
    { 
        titre: "Bachelor Développement Web", 
        ecole: "ISCOD", 
        annee: "2024-2026", 
        description: ["Formation dans le développement web"] 
    },
    { 
        titre: "Développeur web full stack", 
        ecole: "Studi", 
        annee: "2020 - 2021", 
        description: ["Stage pour l’association Pouss’Fm"] 
    },
    { 
        titre: "Licence de droit", 
        ecole: "Université du Tampon", 
        annee: "2017 - 2019", 
        description: ["Stage pour l’association Pouss’Fm"] 
    },
    { 
        titre: "STAPS (sciences et techniques des activités physiques et sportives)", 
        ecole: "Université du Tampon", 
        annee: "2016 - 2017", 
        description: ["Spécialisation musculation - fitness"] 
    },
    { 
        titre: "Obtention du baccalauréat technologique ST2S", 
        ecole: "Lycée Roland Garros", 
        annee: "2014 - 2016", 
        description: ["Stage maison du diabète (4 semaines)"] 
    },
    { 
        titre: "Obtention CAP petite enfance", 
        ecole: "Lycée Moissac", 
        annee: "2012 - 2014", 
        description: ["Stage école maternelle (8 semaines)", "Stage crêperie ambulante (4 semaines)"] 
    },
];

function displayFormations() {
    const formationsList = document.getElementById('formationsList');
    formations.forEach(exp => {
        const li = document.createElement('li');
        
        // Créer des éléments pour chaque partie de l'expérience
        const ecoleElement = document.createElement('strong');
        ecoleElement.textContent = `${exp.ecole} - ${exp.annee}`;

        // Créer un élément pour le titre et le mettre en italique
        const titreElement = document.createElement('em');
        titreElement.textContent = exp.titre;
        
        // Créer une liste non ordonnée pour les descriptions
        const descriptionList = document.createElement('ul');
        exp.description.forEach(desc => {
            const descItem = document.createElement('li');
            descItem.textContent = desc;
            descriptionList.appendChild(descItem);
        });
        
        // Ajouter tous les éléments au li
        li.appendChild(ecoleElement);
        li.appendChild(titreElement);
        li.appendChild(descriptionList);
        formationsList.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    displayFormations();
});