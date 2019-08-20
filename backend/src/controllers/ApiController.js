const axios = require('axios');

const wadl = {
  "Web Application Description Language": true,
  AppInfo: {
    About: "Informações sobre a utilização da API disponibilizada pela aplicação.",
    Name: "Tindev API",
    Version: "1.0.0",
    VersionDate: new Date(2019, 08, 11, 18, 53),
    Description: "Aplicação backend para tratamento dos dados do projeto Omni Stack 8.0",
    Repository: { "type": "git", "url": "https://github.com/alfgomes/Omni-Stack-8.0" },
    Bugs: "https://github.com/alfgomes/Omni-Stack-8.0/issues",
    License: "GNU General Public License v3.0",
    Author: { "name": "Diego Fernandes", "email": "diego.schell.f@gmail.com", "url": "http://rocketseat.com.br" },
    Contributors: [
      { "name": "André Gomes", "email": "alfgomes@outlook.com", "url": "https://github.com/alfgomes" }
    ]
  },
  Resources: [
      {
        Title: "GET Test",
        Description: "Teste de Funcionamento da API.",
        Command: "/?args",
        Method: "GET",
        Request: {
          Style: "query",
          Args: [{ Name: "nome", Value: "valor" }]
        },
        Response: {
          MediaType: "app/json"
        }
      },
      {
        Title: "List Devs",
        Description: "Obter a Lista de Developers",
        Command: "/devs",
        Method: "GET",
        Request: null,
        Response: {
          MediaType: "app/json"
        }
      },
      {
        Title: "Record Dev",
        Description: "Grava os dados do developer obtido através do ID do Github",
        Command: "/devs",
        Method: "POST",
        Request: {
          Style: "body",
          MediaType: "app/json"
        },
        Response: {
          MediaType: "app/json"
        }
      },
      {
        Title: "Like Dev",
        Description: "Adiciona o developer passado informado na lista de Likes",
        Command: "/devs/:devId/likes",
        Method: "POST",
        Request: [
            {
              Style: "header",
              Params: [{ Name: "nome", Value: "valor" }]
            },
            {
              Style: "body",
              MediaType: "app/json"
            }
        ],
        Response: {
          MediaType: "app/json"
        }
      },
      {
        Title: "Dislike Dev",
        Description: "Adiciona o developer passado informado na lista de Dislikes",
        Command: "/devs/:devId/dislikes",
        Method: "POST",
        Request: [
          {
            Style: "header",
            Params: [{ Name: "nome", Value: "valor" }]
          },
          {
            Style: "body",
            MediaType: "app/json"
          }
        ],
        Response: {
          MediaType: "app/json"
        }
      },
    ]
}

module.exports = {
  async wadl(req, res) {
    return res.json(wadl);
  }
};