const getEvents = async () => {
  let eventData = await fetch("https://sharepricenepal.aayam555.repl.co/api/events");
  let eventJson = await eventData.json();

  return eventJson;
}


const showEvents = async () => {
  const eventContainer = document.getElementById("event-container");
  const eventsData = await getEvents();
  let eventHtml = "";

  for (let indexEvent = 0; indexEvent<eventsData.length; indexEvent++){
    let eventHtmlTemplate = `<div class="card" style="width: 18rem;">
    <img src="${eventsData[indexEvent].event_img}" alt="${eventsData[indexEvent].event_title}">
    <a href="${eventsData[indexEvent].event_link}">
  <div class="card-body">
    <h5 class="card-title">${eventsData[indexEvent].event_title}</h5>
  </div>
  </a>
</div>
`;

eventHtml += eventHtmlTemplate;

  }

  eventContainer.innerHTML = eventHtml;

}

showEvents();
