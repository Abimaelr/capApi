const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8877;

app.use(bodyParser);


const meet = [{
    title: 'Sala 1',
    sub:"Psicólogo",
    link: 'http://meet.google.com/mke-jbrz-sre',
},
{
    title: 'Sala 2',
    sub:"Supervisão Pedagógica",
    link: 'http://meet.google.com/tza-fcpu-awq',
},{
    title: 'Sala 3',
    sub:"Orientação Pedagógica",
    link: 'http://meet.google.com/csw-tvrn-sfv',
},{    title: 'Sala 4',
    sub:"Gestão Pedagógica",
    link: 'http://meet.google.com/fkm-bfpu-jex',
},{    title: 'Sala 5',
    sub:"Assistente Social",
    link: ' http://meet.google.com/sqb-khtv-vgh',
},{    title: 'Sala 6',
    sub:"---",
    link: 'http://meet.google.com/wer-rjeq-zma',
},{    title: 'Sala 7',
    sub:"---",
    link: 'http://meet.google.com/twh-sdej-mea',
},{    title: 'Sala 8',
    sub:"---",
    link: 'http://meet.google.com/nzp-mhcj-mcp',
},{    title: 'Sala 9',
    sub:"---",
    link: 'http://meet.google.com/iwc-fuob-rsc',
},
{
    title: 'Sala 10',
    sub:"---",
    link: 'http://meet.google.com/irt-hnws-zwb',
},
{
    title: 'Sala 11',
    sub:"---",
    link: 'http://meet.google.com/ivw-zfyg-ehg',
},
{
    title: 'Sala 12',
    sub:"---",
    link: 'http://meet.google.com/qic-jpgq-yhx',
}]

const message = {
    title = "Oficina COMO USAR O GOOGLE CLASSROOM",
    sub = "Dia 04/06 às 9h (manhã) e 14h (tarde)",
    public = "PÚBLICO: ESPECIALISTAS",
    message = ""
}

app.get('/rooms', (req, res) => {
    res.status(400).json(meet);
})

app.get("/message", (req, res) => {
    res.status(400).json(message);
})

app.listen(PORT, () => {
    console.log("STARTING")
})