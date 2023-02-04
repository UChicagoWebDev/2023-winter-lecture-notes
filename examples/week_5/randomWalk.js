const bing_api_endpoint = "https://api.bing.microsoft.com/v7.0/images/search";
const bing_api_key = BING_API_KEY

function oneStep(query){
    console.log(query);
    // go again from here
    let queryurl = bing_api_endpoint + "?q=" + encodeURIComponent(query);
    // request.setRequestHeader("Ocp-Apim-Subscription-Key", bing_api_key);

    let walkHeaders = new Headers();
    walkHeaders.append("Ocp-Apim-Subscription-Key", BING_API_KEY);
    walkHeaders.append("Accept", "application/json");
    walkHeaders.append("Content-Type", 'application/json');

    const myInit = {
        method: 'GET',
        headers: walkHeaders,
    };

    let nextQuery = fetch(queryurl, myInit)
    .then((response) => {
        if(response.status != 200) { throw new Error("bad request"); }

        return response.json();
    })
    .then((json) => {
        let suggestions = json.relatedSearches;
        let size = suggestions.length;
        let randomIndex = Math.floor(Math.random() * size);
        randomSuggestion = suggestions[randomIndex];
        return randomSuggestion.text;
    });

    return nextQuery;
}

function walkFive() {
    let query = document.getElementById("input").value;
    oneStep(query)
    .then((response) => {
        if(response.status != 200) { throw new Error("bad request"); }

        return response.json();
    })
    .then((json) => {
        let suggestions = json.relatedSearches;
        let size = suggestions.length;
        let randomIndex = Math.floor(Math.random() * size);
        randomSuggestion = suggestions[randomIndex];
        return randomSuggestion.text;
    })
    .then((query) => {
        return oneStep(query);
    })
    .then((p) => {
        p.then((response) => {
            if(response.status != 200) { throw new Error("bad request"); }
    
            return response.json();
        })
        .then((json) => {
            let suggestions = json.relatedSearches;
            let size = suggestions.length;
            let randomIndex = Math.floor(Math.random() * size);
            randomSuggestion = suggestions[randomIndex];
            return randomSuggestion.text;
        })
        .then((query) => {
            return oneStep(query);
        })
        .then((p) => {
            p.then((response) => {
                if(response.status != 200) { throw new Error("bad request"); }
        
                return response.json();
            })
            .then((json) => {
                let suggestions = json.relatedSearches;
                let size = suggestions.length;
                let randomIndex = Math.floor(Math.random() * size);
                randomSuggestion = suggestions[randomIndex];
                return randomSuggestion.text;
            })
            .then((query) => {
                return oneStep(query);
            })
            .then((response) => {
                if(response.status != 200) { throw new Error("bad request"); }
        
                return response.json();
            })
            .then((json) => {
                let suggestions = json.relatedSearches;
                let size = suggestions.length;
                let randomIndex = Math.floor(Math.random() * size);
                randomSuggestion = suggestions[randomIndex];
                return randomSuggestion.text;
            })
            .then((query) => {
                return oneStep(query);
            })
        })
    })
}
