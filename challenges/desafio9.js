db.produtos.find(
  { valoresNutricionais: {
    $elemMatch: { $and: [{ tipo: "calorias" }, { quantidade: { $lt: 500 } }] },
  } }, { nome: 1, _id: 0 },
);
