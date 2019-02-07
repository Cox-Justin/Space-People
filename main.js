fetch('http://api.open-notify.org/astros.json').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    for(let i = 0; i < data.number; i++) {
        if(data.people[i].name == "Oleg Kononenko") {
            document.querySelector("#oleg").appendChild(createAstronaut(data.people[i]));
            let imgOleg = document.createElement("img");
            imgOleg.src = "https://www.nasa.gov/sites/default/files/styles/946xvariable_height/public/jsc2014e088156.jpg?itok=zDabZ-ok";
            imgOleg.height = 300;
            imgOleg.width = 250;
            document.querySelector("#oleg").append(imgOleg);

        } else if(data.people[i].name == "David Saint-Jacques") {
            document.querySelector("#david").appendChild(createAstronaut(data.people[i]));
            let imgDavid = document.createElement("img");
            imgDavid.src = "http://www.asc-csa.gc.ca/images/recherche/tiles/5f594103-dcf2-4e1d-bf95-b0bd43e9f6f1.jpg";
            imgDavid.height = 300;
            imgDavid.width = 250;
            document.querySelector("#david").append(imgDavid);
            
        } else if(data.people[i].name == "Anne McClain") {
            document.querySelector("#anne").appendChild(createAstronaut(data.people[i]));
            let imgAnne = document.createElement("img");
            imgAnne.src = "http://www.spacefacts.de/bios/portraits/astronauts/mcclain_anne.jpg";
            imgAnne.height = 300;
            imgAnne.width = 250;
            document.querySelector("#anne").appendChild(imgAnne);
        }
                
    }
        console.log(data);
        console.log(data.people[0].name);
    });

    function createAstronaut(astro) {
        console.log(astro.name[0]);
        const item = document.createElement("p");
        item.innerHTML = `<h2> ${astro.name} </h2>`;

        return item;
    }