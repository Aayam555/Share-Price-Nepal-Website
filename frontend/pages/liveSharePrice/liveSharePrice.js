// Getting data from backend api
const getData = async () => {
  let response = await fetch("https://sharepricenepal.aayam555.repl.co/api/livestock");
  let json = await response.json();
  return json;
}

const showData = async () => {
  const shareData = await getData();
  const container = document.getElementById("container");
  const userInput = document.getElementById("liveSharePriceInput");

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
      let shareDataHTMLTemplate = `<div class="card" style="width: 18rem;">
                  <div class="card-body">
                      <span class="card-title">Symbol: ${shareData[shareDataIndex].symbol}<span>
                      <span class="card-text">Last Traded Price (LTP): ${shareData[shareDataIndex].last_traded_price}<span>
                      <span class="card-text">Percentage Change: ${shareData[shareDataIndex].percentage_change}<span>
                      <span class="card-text">Point Change: ${shareData[shareDataIndex].point_change}<span>
                      <span class="card-text">Previous Change: ${shareData[shareDataIndex].previous_change}<span>
                      <span class="card-text">Opening Price: ${shareData[shareDataIndex].opening_price}<span>
                      <span class="card-text">Low Price: ${shareData[shareDataIndex].low_price}<span>
                      <span class="card-text">High Price: ${shareData[shareDataIndex].high_price}<span>
                      <span class="card-text">Loan To Value(LTV): ${shareData[shareDataIndex].loan_to_value}<span>
                      <span class="card-text">Volume: ${shareData[shareDataIndex].volume}<span>
                  </div>
              </div>`;
      shareDataHTML += shareDataHTMLTemplate;
    }
  }

  container.innerHTML = shareDataHTML;

}

showData();
