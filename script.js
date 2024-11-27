// Объект природы
const nature = {
    VG: prompt("Введите текущее время года (зима, весна, лето, осень):"),
    Time: prompt("Введите текущее время суток (утро, обед, вечер, ночь):")
};

// Базовый объект для члена семьи
const FamilyShablon = {
    name: "",
    age: 0,
    favoriteSeason: ""
};

// Функция для создания члена семьи
function createFamilyMember() {
    const member = Object.create(FamilyShablon);
    member.name = prompt("Введите имя члена семьи:");
    member.age = parseInt(prompt("Введите возраст члена семьи:"), 10);
    member.favoriteSeason = prompt("Введите любимое время года (зима, весна, лето, осень):");
    return member;
}

// Создание членов семьи
const family = {
    father: createFamilyMember(),
    mother: createFamilyMember(),
    child: createFamilyMember(),
    pet: {}
};

// Заполнение данных о питомце
family.pet.name = prompt("Введите имя питомца:");
family.pet.age = parseInt(prompt("Введите возраст питомца:"), 10);
family.pet.type = prompt("Введите тип питомца (собака, кошка):");

// Функция для проверки любимого времени года
function checkFavoriteSeason() {
    for (const member in family) {
        if (member !== "pet") { // Исключаем питомца
            const familyMember = family[member];
            if (familyMember.favoriteSeason === nature.VG && 
                (nature.Time === "обед" || nature.Time === "вечер")) {
                
                switch (nature.VG) {
                    case "зима":
                        document.write(`${familyMember.name} лепит снеговика`);
                        break;
                    case "лето":
                        document.write(`${familyMember.name} загорает`);
                        break;
                    case "осень":
                        document.write(`${familyMember.name} смотрит фильм`);
                        break;
                    case "весна":
                        document.write(`${familyMember.name} гуляет с другом`);
                        break;
                }
            }
        }
    }
}

// Функция для проверки питомца
function checkPet() {
    const pet = family.pet;

    if (pet.type === "собака") {
        if (nature.Time === "утро") {
            if (family.child.age < 18) {
                document.write(`${family.father.name} выгуливает ${pet.name}`);
            } else {
                document.write(`${family.child.name} выгуливает ${pet.name}`);
            }
        }
    }
    else if (pet.type === "кошка") {
        if (nature.Time === "ночь") {
            document.write(`${pet.name} ловит мышей`);
        }
    } 
    else {
        document.write(`Питомец: ${pet.name}, Возраст: ${pet.age}, Тип: ${pet.type}`);
    }
}

// Вызов функций
checkFavoriteSeason();
checkPet();