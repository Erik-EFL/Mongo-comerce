db.produtos.updateMany(
  { nome: { $not: /McChicken/i } },
  { $set: { ingredientes: "ketchup" } },
);
