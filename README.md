# Language Tools Web Application

This project contains two primary tools: a **Dictionary** and a **Language Translator**. These tools help users to find word meanings, synonyms, antonyms, and examples or translate text between languages.

---

## Features

### 1. **Dictionary**
- Search for the meaning of any English word.
- Provides:
  - **Phonetics**: Pronunciation guide.
  - **Synonyms**: Alternative words with similar meanings.
  - **Examples**: Usage examples in sentences.
- Audio pronunciation of the word.
- Error handling for missing or incorrect words.

### 2. **Language Translator**
- Translate text between different languages.
- Provides options to copy translated text or listen to it using text-to-speech.
- Language exchange functionality to swap the source and target languages.

---

## Setup Instructions

1. **Clone the Repository**  
   Clone the project folder or download it as a ZIP and extract it.

2. **Open in Browser**  
   - Open `index.html` in your browser.
   - Use the navigation buttons to access the Dictionary or Translator tools.

3. **Test Features**  
   - In the Dictionary tool:
     - Enter a word and press "Enter" to fetch its details.
     - Click the speaker icon to hear the word's pronunciation.
   - In the Translator tool:
     - Enter text, select languages, and press the "Translate Text" button.
     - Use the text-to-speech or copy features.

---

## APIs Used

### 1. Dictionary
- API: [DictionaryAPI](https://api.dictionaryapi.dev/)
- Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

### 2. Translator
- API: [Lingva.ml](https://lingva.ml)
- Endpoint: `https://lingva.ml/api/v1/{source_lang}/{target_lang}/{text}`

---

## Error Handling

- **Dictionary**:  
  Displays an error message if the word is not found or there is an issue with the API.

- **Translator**:  
  Alerts users if the translation fails due to invalid text, unsupported languages, or API errors.

---

## Future Enhancements

- Add support for offline functionality.
- Extend the dictionary to include antonyms.
- Improve UI responsiveness for smaller screens.
