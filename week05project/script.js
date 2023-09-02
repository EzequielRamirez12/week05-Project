class MenuItem {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }
  
  class MenuApp {
    constructor() {
      this.menuItems = [];
    }
  
    createMenuItem(name, price, description) {
      const newItem = new MenuItem(name, price, description);
      this.menuItems.push(newItem);
    }
  
    viewMenu() {
      const menuElement = document.getElementById('menu');
      menuElement.innerHTML = '';
  
      this.menuItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<strong>${item.name}</strong> - $${item.price} - ${item.description}
          <button onclick="deleteMenuItem(${index})">Delete</button>`;
        menuElement.appendChild(itemElement);
      });
    }
  
    deleteMenuItem(index) {
      if (index >= 0 && index < this.menuItems.length) {
        this.menuItems.splice(index, 1);
        this.viewMenu();
      }
    }
  }
  
  const menuApp = new MenuApp();
  
  function createMenuItem() {
    const name = prompt('Enter item name:');
    const price = parseFloat(prompt('Enter item price:'));
    const description = prompt('Enter item description:');
    
    if (name && !isNaN(price) && description) {
      menuApp.createMenuItem(name, price, description);
    }
  }
  
  function viewMenu() {
    menuApp.viewMenu();
  }
  
  function deleteMenuItem(index) {
    menuApp.deleteMenuItem(index);
  }
  