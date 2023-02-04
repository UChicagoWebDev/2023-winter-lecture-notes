const bing_api_endpoint = "https://api.bing.microsoft.com/v7.0/images/search";
const bing_api_key = BING_API_KEY

function oneStep(query){
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
        randomSuggestion = suggestions[randomIndex].text;
        console.log(randomSuggestion);
        return randomSuggestion;
    });
    // nextQuery is a Promise, because then() returns a Promise
    return nextQuery;
}

function walkFive() {
    let query = document.getElementById("input").value;
    oneStep(query)
    .then((nextQuery) => { 
        // nextQuery is a Promise when it is passed in to this handler,
        // but when you pass a Promise as an argument inside a then()
        // it is automatically "unwrapped" to the underlying return
        // type, in this case the string randomSuggestion. So inside
        // this code block, nextQuery is a string, and we can pass it
        // to oneStep()
        return oneStep(nextQuery) })
    .then((nextQuery) => { return oneStep(nextQuery) })
    .then((nextQuery) => { return oneStep(nextQuery) })
    .then((nextQuery) => { return oneStep(nextQuery) })
    .then((nextQuery) => { return oneStep(nextQuery) })
}
