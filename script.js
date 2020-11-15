let apiQuotes = [];
// Get Quote from API
async function getQuote() {
    //получаем цитату
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl ='https://type.fit/api/quotes';
    try {
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json();
        console.log(data);
    } catch(error){
        console.log("oops, something goes wrong", error);
    }
}
getQuote();
