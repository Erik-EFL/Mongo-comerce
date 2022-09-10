db.produtos.find({ curtidas: { $lt: 100, $gt: 10 } }, { nome: 1, curtidas: 1 });
