db.produtos.updateOne(
  { nome: /Big Mac/i },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
