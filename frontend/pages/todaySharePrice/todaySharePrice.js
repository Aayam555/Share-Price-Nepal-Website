const get_data = async () => {
    let response = await fetch('https://sharepricenepal.aayam555.repl.co/api/shares');
    let data = await response.json();
    return data;
}

const show_data = async () => {
    let shares = await get_data()
    let display_string = ``

    for(let j=0; j<shares.length; j++){
        display_string += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">Symbol: ${shares[j].Symbol}</h4>
                    <h5 class="card-text">Open: ${shares[j].Open}</h5>
                    <h5 class="card-text">High: ${shares[j].High}</h5>
                    <h5 class="card-text">Low: ${shares[j].Low}</h5>
                    <a href="${shares[j].Link}" target="_blank" class="btn btn-primary">Vist: ${shares[j].Symbol}</a>
                </div>
            </div>`
    }
        document.getElementById("container").innerHTML = display_string;
    await window.localStorage.setItem("sharesData", JSON.stringify(shares));
}

const search_data = () => {
    let data = JSON.parse(localStorage.getItem("sharesData"));
    let todaySharePriceInput = document.getElementById("todaySharePriceInput");
    let userInput = (todaySharePriceInput.value).toLowerCase();

    for(let i = 0; i < data.length; i++){
        if (userInput == (data[i].Symbol).toLowerCase()){
             display_string = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">Symbol: ${data[i].Symbol}</h4>
                    <h5 class="card-text">Open: ${data[i].Open}</h5>
                    <h5 class="card-text">High: ${data[i].High}</h5>
                    <h5 class="card-text">Low: ${data[i].Low}</h5>
                    <a href="${data[i].Link}" target="_blank" class="btn btn-primary">Vist: ${data[i].Symbol}</a>
                </div>
            </div>`;
        document.getElementById("container").innerHTML = display_string;

        }
    } 
}

show_data()