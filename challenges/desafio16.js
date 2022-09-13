db.produtos.updateOne(
  { nome: /Big Mac/i },
  { $currentDate:
    {
      ultimaModificacao: { $type: "date" },
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ultimaModificacao: 1 },
);
