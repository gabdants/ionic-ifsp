const https = require('https');

module.exports = app => {

    const ip = app.get('ip');
    let counter = 0;

    const carros = [
        { "nome": "Alyf", "n1": 8, "n2": 9, "n3": 2, "n4": 0, "frequencia": 95, "fotos": `http://${ip}:8080/images/alyf.jpg` },
        { "nome": "Caue", "n1": 9, "n2": 5, "n3": 9, "n4": 0, "frequencia": 80, "fotos":  `http://${ip}:8080/images/caue.jpg` },
        { "nome": "Dantas", "n1": 4, "n2": 8, "n3": 2, "n4": 0, "frequencia": 90, "fotos": `http://${ip}:8080/images/dantas.jpg` },
        { "nome": "Igor", "n1": 6, "n2": 7, "n3": 6, "n4": 0, "frequencia": 93, "fotos": `http://${ip}:8080/images/igor.jpg` },
        { "nome": "Joao", "n1": 10, "n2": 9, "n3": 1, "n4": 0, "frequencia": 100, "fotos": `http://${ip}:8080/images/joao.jpg`},
    ];

    const usuario = {
        "id": 1,
        "nome": "João da Silva",
        "dataNascimento": "30/01/1990",
        "telefone": "(21) 9988-7788",
        "email": "joao@alura.com.br",
        "senha": "alura123"
    };

    app.get('/api/carro/listaTodos', (req, res) =>
        res.json(carros));

    app.post('/api/agendamento/agenda', (req, res) => {
        counter++;

        const agendamento = req.body;
        
        if (counter % 3 != 0) {
            console.log('Agendamento recebido: ' + JSON.stringify(agendamento));
            setTimeout(() => enviaNotificacao(agendamento), 5000);
            res.json(null);
        } else {
            console.log('Erro no processamento do agendamento.');
            res.status(500).end();
        }
    });

    app.post('/api/login', (req, res) => {
        let usuarioLogin = req.body;

        if (usuarioLogin.email == usuario.email 
            && usuarioLogin.senha == usuario.senha) {

                res.json(usuario);
        } else {
            res.status(403).end();
        }
    });

    function enviaNotificacao(agendamento) {
        const agendamentoId = agendamento.emailCliente + agendamento.data.substr(0, 10);

        const message = { 
            app_id: "e53f5d24-40e4-458f-99db-5230cf3f8bc0",
            headings: {"en": "Aluracar"},
            contents: {"en": "Agendamento confirmado!"},
            data: {"agendamento-id": agendamentoId},
            included_segments: ["All"]
        };

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic MGJlOGMxZGEtMDY3Ni00NWY3LWI0ZjYtMjRjMjYzMzhmZmEz"
        };
        
        const options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };
        
        const req = https.request(options, function(res) {  
          res.on('data', function(data) {
            // console.log("Response:");
            // console.log(JSON.parse(data));
          });
        });
        
        req.on('error', function(e) {
          console.log("ERROR:");
          console.log(e);
        });
        
        req.write(JSON.stringify(message));
        req.end();
      }
};
