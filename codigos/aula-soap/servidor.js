const soap = require('soap');
const http = require('http');
const fs = require('fs');

const service = {
  ProdutoService: {
    ProdutoPort: {
      CalcularDesconto: function (args) {
        const { preco, percentual } = args;
        const final = preco - (preco * percentual / 100);
        return { precoFinal: final.toFixed(2) };
      }
    }
  }
};

const xml = fs.readFileSync('produto.wsdl', 'utf8');

const server = http.createServer((req, res) => {
  res.end('Serviço SOAP no ar')
});

server.listen(8001, () => {
  soap.listen(server, '/produto', service, xml);
  console.log("WSDL disponível em: http://localhost:8001/produto?wsdl");
});
