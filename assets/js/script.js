document.getElementById("subBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let nameId = document.getElementById("name").value;
    let image = document.getElementById("image");

    fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${nameId}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "49c86d3675mshd4e5cfee9c6b664p122169jsn0f4cab3f254f"
	}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        image.setAttribute("src", data[0].img);
    })
    .catch(err => {
        console.error(err);
    });
})