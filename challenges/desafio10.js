db.produtos.find(
  { valoresNutricionais: {
    $elemMatch: { $and: [{ tipo: "proteínas" }, { percentual: { $lte: 40, $gte: 30 } }] },
  } }, { nome: 1 },
);
