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

  function onButtonClick(event, items) {
      const dataset = event.target.dataset
      const key = dataset.key;
      const value = dataset.value;

      if (key == null || value == null) {
          return;
      }

    //데이터를 삭제하고 다운받는 트래픽이 심한 코드
      const filtered = items.filter(item => item[key] === value);
      console.log(filtered);
      displayItems(filtered)
  }


  function setEvenListeners(items) {
      const logo = document.querySelector('.logo');
      const buttons = document.querySelector('.buttons');
      logo.addEventListener('click', () => displayItems(items));
      buttons.addEventListener('click', event => onButtonClick(event, items));
  }
  
  //main
  loadsItems()
    .then((items) => {
        console.log(items)
        displayItems(items);
        setEvenListeners(items);
    })
    .catch(console.log);
  