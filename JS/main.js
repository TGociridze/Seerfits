function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

datas = [{
        img: "./img/A (1).png",
        name: "Seerfit A1",
        ability: "Sees the future",
        weakness: "Can not interact with others",
        id: 1,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560265251701653505",
        background_color: "#fed2a5",
        class: "light",
    },

    {
        img: "./img/L (34).png",
        name: "Seerfit L34",
        ability: "Emotion Manipulation",
        weakness: "Does not speak",
        id: 2,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560319127771414529",
        background_color: "d7e1f2",
    },

    {
        img: "./img/F (20).png",
        name: "Seerfit F20",
        ability: "Flying",
        weakness: "Colorblind",
        id: 3,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560255356097003521",
        background_color: "#d7e1f2"
    },

    {
        img: "./img/U (1).png",
        name: "Unique 1",
        ability: "Encourages other Seerfits",
        weakness: "",
        id: 4,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560326824352808961",
        background_color: "",
        class: "unique",
    },


    {
        img: "./img/M (24).png",
        name: "Seerfit M24",
        ability: "Fire Manipulation",
        weakness: "Aquaphobia",
        id: 5,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560309232166764545",
        background_color: "#300013",
        class: "dark",
    },


    {
        img: "./img/U (2).png",
        name: "Unique 2",
        ability: " Fire manipulation; Gets stronger when other Seerfit burns",
        weakness: "",
        id: 6,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560330122887692289",
        background_color: "",
        class: "unique",
    },

    {
        img: "./img/H (38).png",
        name: "Seerfit H38",
        ability: "Slow-aging",
        weakness: " Big ego",
        id: 7,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560272948283047937",
        background_color: "#6a21b7",
    },

    {
        img: "./img/K17.png",
        name: "Seerfit K17 ",
        ability: "Self-Multiplication",
        weakness: "Egocentric",
        id: 8,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560303734608625665",
        background_color: "",
    },

    {
        img: "./img/B (4).png",
        name: "Seerfit B4",
        ability: "Healing Powers",
        weakness: "Has migraines",
        id: 9,
        link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/49042427957066619857585285253343355115321443428513723401117560266351213281281",
        background_color: "#ff7bac",
    },

];



var data = datas.forEach((data) => {
    const statusDiv = document.getElementById("container");


    const cardDiv = document.createElement('div');
    const imgBox = document.createElement('div');
    const img = document.createElement('img');

    const contentDiv = document.createElement('div');
    const nameHeader = document.createElement('h2')
    const abilityDiv = document.createElement('div')
    const abilityHeader = document.createElement('h3')

    const weaknessDiv = document.createElement('div')
    const weaknessHeader = document.createElement('h3')

    const detailA = document.createElement('a');



    cardDiv.className = "card";
    cardDiv.style.backgroundColor = data.background_color
    imgBox.className = "imgBx";
    img.src = data.img;
    contentDiv.className = "contentBx";
    nameHeader.innerHTML = data.name;
    abilityDiv.className = "size";
    abilityHeader.innerHTML = "ABILITY:" + " " + data.ability;
    weaknessDiv.className = "color";
    weaknessHeader.innerHTML = "WEAKNESS:" + " " + data.weakness

    if (data.class == "unique") {
        abilityHeader.innerHTML = "ABILITY:" + " " + data.ability;
        weaknessHeader.innerHTML = ""
    } else if (data.class == "dark") {
        nameHeader.style.color = "white"
        abilityHeader.style.color = "white"
        weaknessHeader.style.color = "white"

    } else {

        abilityHeader.innerHTML = "ABILITY:" + " " + data.ability;
        weaknessHeader.innerHTML = "WEAKNESS:" + " " + data.weakness
        nameHeader.style.color = "black"
        abilityHeader.style.color = "black"
        weaknessHeader.style.color = "black"
    }


    // detailA.className = "details"
    detailA.href = data.link
    detailA.text = "See Details"


    weaknessDiv.appendChild(weaknessHeader)
    abilityDiv.appendChild(abilityHeader)

    contentDiv.appendChild(nameHeader)
    contentDiv.appendChild(abilityDiv)
    contentDiv.appendChild(weaknessDiv)
    contentDiv.appendChild(detailA)

    imgBox.appendChild(img);


    cardDiv.appendChild(imgBox);
    cardDiv.appendChild(contentDiv)


    statusDiv.appendChild(cardDiv)
        // console.log('af"')
});