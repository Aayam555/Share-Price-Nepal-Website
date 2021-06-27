// Getting data from backend api
const getData = async () => {
  let response = await fetch("https://sharepricenepal.aayam555.repl.co/api/livestock");
  let json = await response.json();
  return json;
}

const color = (color_data) => {
  if (color_data == "green-background"){
    return "#4ccc4c";
  } else if (color_data == "red-background"){
    return "#fd3b3b";
  }
}


const showData = async () => {
  const shareData = await getData();
  const container = document.getElementById("container");

  window.localStorage.setItem("liveSharePrice", JSON.stringify(shareData));

  let shareDataHTML = "";

  if (shareData == "Market is Closed"){
    shareDataHTML = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <span>Market is Closed</span>
                    <a class="btn btn-primary" href="../todaySharePrice/todaySharePrice.html">Today's Share Price</a>
                </div>
            </div>`
  }
  else{
    for (let shareDataIndex = 0; shareDataIndex<shareData.length; shareDataIndex++){
      let shareDataHTMLTemplate = `<div class="card" style="width: 18rem; background: ${color(shareData[shareDataIndex].color)}">
                  <div class="card-body">
                      <span class="card-title">${shareData[shareDataIndex].symbol}</span>
                      <span class="card-text">Last Traded Price: ${shareData[shareDataIndex].last_traded_price}</span>
                      <span class="card-text">Percentage Change: ${shareData[shareDataIndex].percentage_change}</span>
                      <span class="card-text">Point Change: ${shareData[shareDataIndex].point_change}</span>
                      <span class="card-text">Previous Change: ${shareData[shareDataIndex].previous_change}</span>
                      <span class="card-text">Opening Price: ${shareData[shareDataIndex].opening_price}</span>
                      <span class="card-text">Low Price: ${shareData[shareDataIndex].low_price}</span>
                      <span class="card-text">High Price: ${shareData[shareDataIndex].high_price}</span>
                      <span class="card-text">Loan To Value: ${shareData[shareDataIndex].loan_to_value}</span>
                      <span class="card-text">Volume: ${shareData[shareDataIndex].volume}</span>
                  </div>
              </div>`;
      shareDataHTML += shareDataHTMLTemplate;
    }
  }

  container.innerHTML = shareDataHTML;

}

const searchData = () => {
  const userInput = document.getElementById("liveSharePriceInput").value;
  const shareData = JSON.parse(window.localStorage.getItem("liveSharePrice"));
  const container = document.getElementById("container");
  let shareDataHTML;

  for (let shareDataIndex = 0; shareDataIndex<shareData.length; shareDataIndex++){
    if ((shareData[shareDataIndex].symbol).toLowerCase() == userInput.toLowerCase()){
      let shareDataHTMLTemplate = `<div class="card" style="width: 18rem; background: ${color(shareData[shareDataIndex].color)}">
                  <div class="card-body">
                      <span class="card-title">${shareData[shareDataIndex].symbol}</span>
                      <span class="card-text">Last Traded Price: ${shareData[shareDataIndex].last_traded_price}</span>
                      <span class="card-text">Percentage Change: ${shareData[shareDataIndex].percentage_change}</span>
                      <span class="card-text">Point Change: ${shareData[shareDataIndex].point_change}</span>
                      <span class="card-text">Previous Change: ${shareData[shareDataIndex].previous_change}</span>
                      <span class="card-text">Opening Price: ${shareData[shareDataIndex].opening_price}</span>
                      <span class="card-text">Low Price: ${shareData[shareDataIndex].low_price}</span>
                      <span class="card-text">High Price: ${shareData[shareDataIndex].high_price}</span>
                      <span class="card-text">Loan To Value: ${shareData[shareDataIndex].loan_to_value}</span>
                      <span class="card-text">Volume: ${shareData[shareDataIndex].volume}</span>
                  </div>
              </div>`;
      shareDataHTML = shareDataHTMLTemplate;
    }

    container.innerHTML = shareDataHTML;
    }

}

showData();
