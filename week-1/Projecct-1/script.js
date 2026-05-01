let inventory = [];

function addItem() {
  console.log("Button clicked");

  const name = document.getElementById("itemName").value;
  const qty = document.getElementById("itemQty").value;

  const item = {
    name: name,
    quantity: qty,
  };

  inventory.push(item);

  showItems();
}

function showItems() {
  const list = document.getElementById("list");

  list.innerHTML = "";

  inventory.forEach((item) => {
    const li = `<li> ${item.name} - ${item.quantity}</li>`;
    list.innerHTML += li;
  });
}
