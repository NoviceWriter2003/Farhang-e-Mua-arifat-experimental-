// Function to update dictionary entry
function updateEntry() {
    const wordName = "Example Word"; // The word you want to display
    const englishDefinition = "Definition of the word in English."; 
    const urduDefinition = "اردو میں لفظ کی تعریف";
    const partOfSpeech = "Noun"; 
    const exampleEnglish = "This is an example sentence using the word.";
    const exampleUrdu = "یہ ایک مثال جملہ ہے جس میں لفظ استعمال ہوا ہے۔";
    const additionalNotes = "Any extra context or important information about the word.";

    // Updating the content dynamically
    document.getElementById('word-name').textContent = wordName;
    document.getElementById('english-definition').textContent = englishDefinition;
    document.getElementById('urdu-definition').textContent = urduDefinition;
    document.getElementById('part-of-speech').textContent = partOfSpeech;
    document.getElementById('additional-notes').textContent = additionalNotes;

    // Updating the example sentence
    const exampleSentenceDiv = document.querySelector('.example-sentence');
    exampleSentenceDiv.innerHTML = `
        <h3>Example Sentence:</h3>
        <p><strong>English:</strong> ${exampleEnglish}</p>
        <p><strong>Urdu:</strong> ${exampleUrdu}</p>
    `;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateEntry);
