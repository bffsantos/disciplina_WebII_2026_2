const soap = require('soap')

const url = "http://localhost:8001/produto?wsdl"

async function main(){

    const client = await soap.createClientAsync(url)

    console.log(client.describe())

    const args = { preco: 100, percentual: 25}

    client.CalcularDesconto(args, (err, result) => {
        if(err){
            console.error('Erro na chamada SOAP', err)
            return
        }

        console.log('Resposta', result)
    })
}

main()