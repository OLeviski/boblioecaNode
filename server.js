import { createServer } from 'node:http';
import https from 'node:https';

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    const url = request.url;

    if (url === '/') {
        response.write('Página inicial - Hello World!');
    } else if (url === '/livrei') {
        response.write('Já me livrei da maldição!');
    } else if (url === '/outra-rota') {
        response.write('Esta é outra rota!');
    } else if (url === '/imagem') {
        // URL de exemplo de uma imagem hospedada no Google Imagens
        const imageUrl = 'https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png';         
        https.get(imageUrl, (res) => {
            res.pipe(response)
        });
        return
    }else {
        response.write('Rota não encontrada');
    }

    return response.end();
});

server.listen(3333);
