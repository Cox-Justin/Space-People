// fetch('http://api.open-notify.org/astros.json').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
//     for(let i = 0; i < data.number; i++) {
//         if(data.people[i].name == "Oleg Kononenko") {
//             document.querySelector("#oleg").appendChild(createAstronaut(data.people[i]));
//             let imgOleg = document.createElement("img");
//             imgOleg.src = "https://www.nasa.gov/sites/default/files/styles/946xvariable_height/public/jsc2014e088156.jpg?itok=zDabZ-ok";
//             imgOleg.height = 300;
//             imgOleg.width = 250;
//             document.querySelector("#oleg").append(imgOleg);

//         } else if(data.people[i].name == "David Saint-Jacques") {
//             document.querySelector("#david").appendChild(createAstronaut(data.people[i]));
//             let imgDavid = document.createElement("img");
//             imgDavid.src = "http://www.asc-csa.gc.ca/images/recherche/tiles/5f594103-dcf2-4e1d-bf95-b0bd43e9f6f1.jpg";
//             imgDavid.height = 300;
//             imgDavid.width = 250;
//             document.querySelector("#david").append(imgDavid);
            
//         } else if(data.people[i].name == "Anne McClain") {
//             document.querySelector("#anne").appendChild(createAstronaut(data.people[i]));
//             let imgAnne = document.createElement("img");
//             imgAnne.src = "http://www.spacefacts.de/bios/portraits/astronauts/mcclain_anne.jpg";
//             imgAnne.height = 300;
//             imgAnne.width = 250;
//             document.querySelector("#anne").appendChild(imgAnne);
//         }
                
//     }
//         console.log(data);
//         console.log(data.people[0].name);
//     });

    // Due to issues with https I will have to create a json object and use that instead of making an api call

    let spaceData = 
    {
        "number" : "3",
        "astros" : [
            {"name" : "Oleg Kononenko", "days" : "30"},
            {"name" : "David Saint-Jacques", "days" : "30"},
            {"name" : "Anne McClain", "days" : "30"}
        ]
    };

    console.log(spaceData.number);
    for(let i = 0; i < spaceData.number; i++) {
        if(spaceData.astros[i].name == "Oleg Kononenko") {
            let olegImg = document.createElement("img");
            olegImg = new Image(250, 300);
            olegImg.src = "https://www.nasa.gov/sites/default/files/styles/946xvariable_height/public/jsc2014e088156.jpg?itok=zDabZ-ok";

            let days = `<h3>${spaceData.astros[i].days}</h3>`;

            document.querySelector("#olegInfo").appendChild(createAstronaut(spaceData.astros[i]));
            document.querySelector("#olegPic").append(olegImg);

        } else if(spaceData.astros[i].name == "David Saint-Jacques") {
            let davidImg = document.createElement("img");
            davidImg = new Image(250, 300);
            davidImg.src = "http://www.asc-csa.gc.ca/images/recherche/tiles/5f594103-dcf2-4e1d-bf95-b0bd43e9f6f1.jpg";

            let days = `<h3>${spaceData.astros[i].days}</h3>`;

            document.querySelector("#davidInfo").appendChild(createAstronaut(spaceData.astros[i]));
            document.querySelector("#davidPic").append(davidImg);
        } else if(spaceData.astros[i].name == "Anne McClain") {
            let anneImg = document.createElement("img");
            anneImg = new Image(250, 300);
            anneImg.src = "http://www.spacefacts.de/bios/portraits/astronauts/mcclain_anne.jpg";

            let days = `<h3>${spaceData.astros[i].days}</h3>`;
            document.querySelector("#anneInfo").appendChild(createAstronaut(spaceData.astros[i]));
            document.querySelector("#annePic").append(anneImg);
        }
    }
    function createAstronaut(astro) {
        console.log(astro.name);
        const item = document.createElement("p");
        item.innerHTML = `<h2> ${astro.name} </h2>`;

        return item;
    }
