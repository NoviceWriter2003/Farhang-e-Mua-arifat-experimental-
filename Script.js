// Array of word objects with name and link properties
const words = [
    { name: "Word 1", link: "entries/word1.html" },
    { name: "Word 2", link: "entries/word2.html" },
    { name: "Word 3", link: "entries/word3.html" },
    // Add more words as needed
];

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
