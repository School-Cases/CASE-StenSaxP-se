let valElements = document.querySelectorAll(".val");

const stenp1 = document.getElementById("stenp1");
const saxp1 = document.getElementById("saxp1");
const påsep1 = document.getElementById("påsep1");

const stendata = document.getElementById("stenData");
const saxdata = document.getElementById("saxData");
const påsedata = document.getElementById("påseData");

const playAgainButton = document.querySelector("#playAgainButton");
const getLostElements = document.querySelectorAll(".getLost");

let p1Val = undefined;
let dataVal = undefined;


stenp1.addEventListener('click', function () {
    p1Val = "sten";
    stenp1.style.backgroundColor = "pink";
    setTimeout(() => {
        dataValAndCheckResult();
    }, 1432);
});

saxp1.addEventListener('click', function () {
    p1Val = "sax";
    saxp1.style.backgroundColor = "pink";
    setTimeout(() => {
        dataValAndCheckResult();
    }, 1432);
});

påsep1.addEventListener('click', function () {
    p1Val = "påse";
    påsep1.style.backgroundColor = "pink";
    setTimeout(() => {
        dataValAndCheckResult();
    }, 1432);
});


let datapoäng = 0;
let p1poäng = 0;

const dataValAndCheckResult = function () {
    dataVal = Math.floor(Math.random() * 3);
    if (dataVal === 0) {
        dataVal = "sten";
        stendata.style.backgroundColor = "lightblue";
    } else if (dataVal === 1) {
        dataVal = "sax";
        saxdata.style.backgroundColor = "lightblue";
    } else {
        dataVal = "påse";
        påsedata.style.backgroundColor = "lightblue";
    }
    if (p1Val === dataVal) {
        document.querySelector("#p1WinText").textContent = "oavgjort";
        document.querySelector("#dataWinText").textContent = "oavgjort";
    } else if (p1Val === "sten" && dataVal === "sax" || p1Val === "sax" && dataVal === "påse" || p1Val === "påse" && dataVal === "sten") {
        document.querySelector("#p1WinText").textContent = "wiiih du vann";
        p1poäng += 1;
        document.querySelector("#p1poäng").textContent = "dina poäng:" + " " + p1poäng;
    } else {
        document.querySelector("#dataWinText").textContent = "data vann";
        datapoäng += 1;
        document.querySelector("#datapoäng").textContent = "datapoäng:" + " " + datapoäng;
    }

    valElements.forEach(function (element) {
        if (element.style.backgroundColor !== "pink" && element.style.backgroundColor !== "lightblue") {
            element.style.display = "none";
        }
    });

    if (datapoäng === 3 || p1poäng === 3)
        if (datapoäng === 3) {
            document.querySelector(".winMessage").textContent = "data vann lol";
            getLostElements.forEach(function (element) {
                element.style.opacity = "0";
            });
        } else {
            document.querySelector(".winMessage").textContent = "du vann lol";
            getLostElements.forEach(function (element) {
                element.style.opacity = "0";
            });
        };
}

playAgainButton.addEventListener('click', function () {
    if (datapoäng === 3 || p1poäng === 3) {
        document.querySelector(".winMessage").textContent = "play dis stenet saxet påset först till 3";
        datapoäng = 0;
        p1poäng = 0;
        document.querySelector("#p1poäng").textContent = "dina poäng:" + " " + p1poäng;
        document.querySelector("#datapoäng").textContent = "datapoäng:" + " " + datapoäng;
    }
    resetVal();
});

const resetVal = function () {
    valElements.forEach(function (element) {
        element.style.backgroundColor = "white";
        element.style.display = "flex";
    });
    document.querySelector("#dataWinText").textContent = "";
    document.querySelector("#p1WinText").textContent = "";
    getLostElements.forEach(function (element) {
        element.style.opacity = "1";
    });
    
};

