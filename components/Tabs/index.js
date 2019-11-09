// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topsDiv = document.querySelector(".topics");

// Asynchronous Function
EmTopics = async url => {
  try {
    response = await axios.get(url);
    response.data.topics.forEach(item => {
      topsDiv.appendChild(topsTabs(item));
    });
  } catch (err) {
    console.log(err);
  }
};

EmTopics("https://lambda-times-backend.herokuapp.com/topics");


function topsTabs(obj) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = obj;

  return tab;
}