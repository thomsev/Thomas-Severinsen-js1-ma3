const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ece944dc0bea4529a33d03a1ebd9c13f";

window.addEventListener("load", ()=>{
    const loader=document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader"); 
    })
})

/*const resultsContainer = document.querySelector(".results")

async function makeApiCall(){
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    } catch (error) {
        console.log(error)
        resultsContainer.innerHTML = error
        }
}

makeApiCall();

*/
function fetchData(){
    fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
.then(results => {
    console.log(results.results);
    const html = results.results
    .map(game =>{
        return `
        <div class="game">
        <p>Name: ${game.name}</p>
        <p>Rating: ${game.rating}</p>
        <p>Tags: ${game.tags.length}</p>
        </div>
        `;
    })
    .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
})
.catch(error => {
    console.log(error)
});
}
fetchData();

