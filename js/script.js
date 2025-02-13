const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),
selectTag.forEach((tag, id) => {
    tag.addEventListener('change', () => {
        toText.value = "";
        toText.setAttribute("placeholder", "Translation");
    });
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en" ? "selected" : "" : country_code == "hi" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});
exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});
fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});
translateBtn.addEventListener("click", async() => {
    try{
        let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
        if(!text){
            alert("Please enter text to translate");
            return;
        }
        toText.setAttribute("placeholder", "Translating...");
        let apiUrl = await `https://lingva.ml/api/v1/${translateFrom}/${translateTo}/${encodeURIComponent(text)}`;
        console.log(apiUrl)
        
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);        
        if (!data || !data.translation) {
            throw new Error('No translation found! Please try again.');
        }

        toText.value = data.translation;    
        if (data.matches) {
            data.matches.forEach(match => {
                if (match.id === 0 && match.translation) {
                    toText.value = match.translation;
                    console.log(match.translation);
                    
                }
            });
        }
    } catch (error) {
        toText.value = "";
        toText.setAttribute("placeholder", "Failed to translate");
        alert(`Translation Error: ${error.message}`);
    } finally {
        if (toText.getAttribute("placeholder") === "Translating...") {
            toText.setAttribute("placeholder", "Translation");
        }
    }
});
icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});