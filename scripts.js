const date = new Date();
let alreadyOpened = [];

function loadCalender() {
    let loadedOpenDoors = loadFromLocalStorage();
    if (loadedOpenDoors != null) {
        alreadyOpened = loadedOpenDoors;
    }
    for (let i = 0; i < alreadyOpened.length; i++) {
        setBackgroundImg(alreadyOpened[i]);
    }
}

function openDoor(i) {
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if (month == 12) {
        if (i <= day) {
            alreadyOpened.push(i);
            setBackgroundImg(i);
            saveToLocalStorage()
        }
    }
}

function setBackgroundImg(i) {
    let door = document.getElementById(`calendarDoor${i}`);
    door.style.backgroundImage = `url(./img/bild${i}.jpg)`;
    door.style.color = "transparent";
    door.style.color = "rgba(0, 0, 0, 0.2)";
}

function saveToLocalStorage() {
    localStorage.setItem("alreadyOpened", JSON.stringify(alreadyOpened));
}

function loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("alreadyOpened"));
}