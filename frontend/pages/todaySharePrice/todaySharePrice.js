// Getting data from backend api
const getData = async () => {
  let response = await fetch("https://sharepricenepal.aayam555.repl.co/api/todayshareprice");
  let json = await response.json();
  return json;
}

const showData = async () => {
  const shareData = await getData();
  const container = document.getElementById("container");

  let shareDataHTML = "";

  for (let shareDataIndex = 0; shareDataIndex<shareData.length; shareDataIndex++){
      let shareDataHTMLTemplate = `<div class="card" style="width: 18rem;">
                <div class="card-body" title="${shareData[shareDataIndex.title]}">
                    <h4 class="card-title">${shareData[shareDataIndex].symbol}</h4>
                    <h5 class="card-text">Open: ${shareData[shareDataIndex].open}</h5>
                    <h5 class="card-text">High: ${shareData[shareDataIndex].high}</h5>
                    <h5 class="card-text">Low: ${shareData[shareDataIndex].low}</h5>
                    <h5 class="card-text">Close: ${shareData[shareDataIndex].close}</h5>
                    <a href="${shareData[shareDataIndex].link}" target="_blank" class="btn btn-primary">Vist: ${shareData[shareDataIndex].symbol}</a>
                </div>
            </div>`;
      shareDataHTML += shareDataHTMLTemplate;
    }
  window.localStorage.setItem("shareData", JSON.stringify(shareData));
  container.innerHTML = shareDataHTML;
}

const searchData = () => {
  const shareData = JSON.parse(window.localStorage.getItem("shareData"));
  const userInput = document.getElementById("todaySharePriceInput").value;
  const container = document.getElementById("container");

  for (let shareDataIndex = 0; shareDataIndex < shareData.length; shareDataIndex++){
    if (userInput.toLowerCase() == (shareData[shareDataIndex].symbol).toLowerCase()){
        let shareDataHTML = "";
        let shareDataHTMLTemplate = `<div class="card" style="width: 18rem;">
                    <div class="card-body" title="${shareData[shareDataIndex].title}">
                        <h4 class="card-title">${shareData[shareDataIndex].symbol}</h4>
                        <h5 class="card-text">Open: ${shareData[shareDataIndex].open}</h5>
                        <h5 class="card-text">High: ${shareData[shareDataIndex].high}</h5>
                        <h5 class="card-text">Low: ${shareData[shareDataIndex].low}</h5>
                        <h5 class="card-text">Close: ${shareData[shareDataIndex].close}</h5>
                        <a href="${shareData[shareDataIndex].link}" target="_blank" class="btn btn-primary">Vist: ${shareData[shareDataIndex].symbol}</a>
                    </div>
                </div>`;
          shareDataHTML += shareDataHTMLTemplate;
          container.innerHTML = shareDataHTML;
        }
    userInput.value = "";
}}

showData();
