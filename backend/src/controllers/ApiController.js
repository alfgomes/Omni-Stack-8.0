const axios = require('axios');

const wadl = {
  Title: "WADL - Web Application Description Language",
  App: {
    About: "Informações sobre a utilziação da API disponibilizada pela aplicação.",
    Name: "backend",
    Version: "1.0.0",
    Description: "Aplicação backend para tratamento dos dados do projeto Omni Stack 8.0",
    Repository: { "type": "git", "url": "https://github.com/alfgomes/repo.git" },
    Bugs: "https://github.com/alfgomes/repo/issues",
    License: "MIT",
    VersionDate: new Date(2019, 08, 11, 18, 53),
    Author: { "name": "Diego Fernandes", "email": "diego.schell.f@gmail.com", "url": "http://rocketseat.com.br" },
    Contributors: [
      { "name": "André Gomes", "email": "alfgomes@outlook.com", "url": "http://" }
    ],
    Resources: [
      {
        Title: "Teste de Funcionamento da API.",
        Command: "/name={?}",
        Method: "GET",
        Request: { Style: "query",
                   Args: [{ Name: "nome", Type: "string" }]
                 },
        Response: "app/json",
        Description: ""
      },
      {
        Title: "Criação de Usuário.",
        Command: "/devs",
        Method: "POST",
        Request: {
          Style: "body",
          MmediaType: "app/json"
        },
        Response: {
          MmediaType: "app/json"
        },
        Description: ""
      },
      {
        Title: "Adicionando Usuário a Lista de Likes.",
        Command: "/devs/:devId/likes",
        Method: "POST",
        Request: [
          {
            Style: "header",
            Params: [{ Name: "nome", Type: "string" }]
          },
          {
            Style: "body",
            MmediaType: "app/json"
          }
        ],
        Response: {
          MmediaType: "app/json"
        },
        Description: "Inclui um usuário pelo ID na lista de Likes do usuário logado."
      },
    ]
  }
}

module.exports = {
  async wadl(req, res) {
    return res.json(wadl);
  }
};