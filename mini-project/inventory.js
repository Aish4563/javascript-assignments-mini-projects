// Capstone: Interactive Product Inventory & Analytics Dashboard
(function () {
  const ask = (msg, def) => (typeof prompt === "function" ? prompt(msg, def) : def);
  const show = (arr) => "[" + arr.map((s) => `"${s}"`).join(", ") + "]";

  console.log("--- Initializing Inventory System ---");
  const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
  ];

  // ---- Functions & scope ----
  function getCategory(price) {            // switch(true) assigns badges by price
    switch (true) {
      case price < 50:
        return "Budget";
      case price < 500:
        return "Standard";
      default:
        return "Premium";
    }
  }

  function findProduct(list, name) {       // loop + early exit
    for (let i = 0; i < list.length; i++) {
      if (list[i].name.toLowerCase() === name.toLowerCase()) return list[i];
    }
    return null;
  }

  function calculateTotal(list) {
    return list.reduce((sum, item) => sum + item.price, 0);
  }

  const applyAdjustments = (total, { tax = 0, discount = 0 } = {}) =>
    Math.round(total * (1 - discount / 100) * (1 + tax / 100) * 100) / 100;

  // ---- Input with validation (loop + break/continue) ----
  function readNewProduct() {
    for (let attempt = 1; attempt <= 3; attempt++) {
      const rawName = ask("Enter new product name:", "Monitor");
      const rawPrice = rawName === null ? null : ask("Enter product price:", "150");
      if (rawName === null || rawPrice === null) {
        console.log("Input cancelled. No product added.");
        return null;
      }
      const name = rawName.trim();
      const price = Number(rawPrice.replace("$", "").trim()); // explicit conversion

      if (name === "" || !Number.isFinite(price) || price <= 0) {
        console.log(`Invalid input (attempt ${attempt}/3): enter a name and a price above 0.`);
        continue;
      }
      return { name, price };
    }
    console.log("Too many invalid attempts. No product added.");
    return null;
  }

  const newProduct = readNewProduct();
  if (newProduct) {
    if (findProduct(inventory, newProduct.name)) {
      console.log(`"${newProduct.name}" already exists. Skipped.`);
    } else {
      inventory.push(newProduct);
      console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
    }
  }

  // ---- Array methods ----
  console.log("--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((p) => console.log(`* Item: ${p.name} ($${p.price}) -> Category: ${getCategory(p.price)}`));

  console.log("--- Financial Analytics ---");
  const total = calculateTotal(inventory);
  console.log(`Total Inventory Value: $${total}`);

  const affordable = inventory.filter((p) => p.price < 200).map((p) => p.name);
  console.log(`Filtered Affordable Items (Under $200): ${show(affordable)}`);

  const report = inventory.map((p) => `${p.name.toUpperCase()}: $${p.price}`);
  console.log(`Formatted Report List: ${show(report)}`);

  // Bonus: custom tax / discount
  console.log(`Bonus - Value after 10% discount and 18% tax: $${applyAdjustments(total, { tax: 18, discount: 10 })}`);
})();
