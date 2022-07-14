const fetch = require('node-fetch');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.listen(port);

async function main() {
    app.get('/:id', async (req, res) => {
        let response = await fetch(`https://cf.te2.biz/rest/venue/${req.params.id}/poi/all`, {
            method: 'GET', headers: {
                "Authorization": `Basic TW9iaWxlX0FQSTptZXJsNHlVMg==`
            },
        });
        let data = await response.json();
        switch (response.status) {
            case 200: return res.send({ error: false, status: response.status, data: data }); break;
            default: return res.send({ error: true, status: response.status, data: data }); break;
        }
    });
}

main();
