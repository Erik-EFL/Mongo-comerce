db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  { nome: { $ne: "Big Mac" } },
  { _id: 0, nome: 1, curtidas: 1 },
);
