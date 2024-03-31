function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateAnimals() {
    var animalNumberSelect = document.getElementById("animal-number");
    var animalNumber = parseInt(animalNumberSelect.value);

    var animals = [
        {name: "Dog", image: "https://via.placeholder.com/150?text=Dog"},
        {name: "Cat", image: "https://via.placeholder.com/150?text=Cat"},
        {name: "Rabbit", image: "https://via.placeholder.com/150?text=Rabbit"},
        {name: "Bear", image: "https://via.placeholder.com/150?text=Bear"},
        {name: "Lion", image: "https://via.placeholder.com/150?text=Lion"},
        {name: "Elephant", image: "https://via.placeholder.com/150?text=Elephant"},
        {name: "Tiger", image: "https://via.placeholder.com/150?text=Tiger"},
        {name: "Giraffe", image: "https://via.placeholder.com/150?text=Giraffe"},
        {name: "Zebra", image: "https://via.placeholder.com/150?text=Zebra"},
        {name: "Monkey", image: "https://via.placeholder.com/150?text=Monkey"},
        {name: "Penguin", image: "https://via.placeholder.com/150?text=Penguin"},
        {name: "Koala", image: "https://via.placeholder.com/150?text=Koala"},
        {name: "Kangaroo", image: "https://via.placeholder.com/150?text=Kangaroo"},
        {name: "Dolphin", image: "https://via.placeholder.com/150?text=Dolphin"},
        {name: "Rhino", image: "https://via.placeholder.com/150?text=Rhino"}
    ];

    animals = shuffleArray(animals);

    var container = document.getElementById("animal-container");
    container.innerHTML = "";

    for (var i = 0; i < animalNumber; i++) {
        var animal = animals[i];

        var animalElement = document.createElement("div");
        animalElement.classList.add("animal");

        var imageElement = document.createElement("img");
        imageElement.src = animal.image;
        imageElement.alt = animal.name;

        var textElement = document.createElement("p");
        textElement.textContent = animal.name;

        animalElement.appendChild(imageElement);
        animalElement.appendChild(textElement);

        container.appendChild(animalElement);
    }
}

// Call generateAnimals function when the page loads
window.onload = generateAnimals;
