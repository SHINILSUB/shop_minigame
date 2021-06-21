//Fetch the items from the Json
function loadsItems() {
    return fetch("data/data.json")
    .then((response) => response.json())
    .then(json => json.items)
  }

  function displayItems(items) {
      const container = document.querySelector('.items');
      const html = items.map(item => createHTMLString(item));
      console.log(html);
      container.innerHTML = items.map(item => createHTMLString(item)).join('');
  }

  function createHTMLString(item) {
      return `
      <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumnail"/>
        <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
      `;
  }
  
  //main
  loadsItems()
    .then((items) => {
        console.log(items)
        displayItems(items);
      // setEvenListeners(items);
    })
    .catch(console.log);
  