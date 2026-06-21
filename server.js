const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample Products
let products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Smart Phone", price: 18000 },
  { id: 3, name: "Smart Watch", price: 3500 }
];

// Get All Products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add Product
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({
    message: "Product Added Successfully",
    product
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
