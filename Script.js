// Array of word objects with name and link properties
const words = [
    { name: "Gupt-Zan", link: "Entries/Gupt-Zan.html" },
    { name: "Natakiya", link: "Entries/Natakiya.html" },
    { name: "Zareefa", link: "Entries/Zareefa.html" },
];

// Sort the words array alphabetically by name
words.sort((a, b) => a.name.localeCompare(b.name));

// Function to generate word list
function generateWordList() {
    const wordList = document.getElementById('wordList');
    words.forEach(word => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = word.link;
        link.textContent = word.name;
        listItem.appendChild(link);
        wordList.appendChild(listItem);
    });
}

// Call the function to generate the word list
generateWordList();
