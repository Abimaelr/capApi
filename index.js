const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8877;

app.use(express.json());
app.use(cors())

const meet = [{
    // img: `${ fig1 }`,
    title: 'Sala 1',
    sub:"+Digital - CIÊNCIAS",
    link: 'http://meet.google.com/mke-jbrz-sre',
},
{
    // img: `${fig2}`,
    title: 'Sala 2',
    sub:"+Digital - CIÊNCIAS",
    link: 'http://meet.google.com/tza-fcpu-awq',
},{
    // img: `${fig3}`,
    title: 'Sala 3',
    sub:"+Digital - HISTÓRIA",
    link: 'http://meet.google.com/csw-tvrn-sfv',
},{
    // img: `${fig4}`,
    title: 'Sala 4',
    sub:"+Digital - HISTÓRIA",
    link: 'http://meet.google.com/fkm-bfpu-jex',
},{
    // img: `${fig5}`,
    title: 'Sala 5',
    sub:"+Digital - ARTES",
    link: ' http://meet.google.com/sqb-khtv-vgh',
},{
    // img: `${fig6}`,
    title: 'Sala 6',
    sub:"+Digital - ARTES",
    link: 'http://meet.google.com/wer-rjeq-zma',
},{
    // img: `${fig7}`,
    title: 'Sala 7',
    sub:"+Digital - READAPTADOS",
    link: 'http://meet.google.com/twh-sdej-mea',
},{
    // img: `${fig8}`,
    title: 'Sala 8',
    sub:"+Digital - RESERVA",
    link: 'http://meet.google.com/nzp-mhcj-mcp',
},{
    // img: `${fig9}`,
    title: 'Sala 9',
    sub:"+Digital - RESERVA",
    link: 'http://meet.google.com/iwc-fuob-rsc',
},
{
    // img: `${fig10}`,
    title: 'Sala 10',
    sub:"SaberJP - SECRETÁRIOS ESCOLARES",
    link: 'http://meet.google.com/irt-hnws-zwb',
},
{
    // img: `${fig11}`,
    title: 'Sala 11',
    sub:"SaberJP - SECRETÁRIOS ESCOLARES",
    link: 'http://meet.google.com/ivw-zfyg-ehg',
},
{
    // img: `${fig12}`,
    title: 'Sala 12',
    sub:"Sala de estudos Saber JP",
    link: 'http://meet.google.com/qic-jpgq-yhx',
},
{
    // img: `${fig13}`,
    title: 'Sala 13',
    sub:"Sala de estudos Saber JP",
    link: 'http://meet.google.com/qap-jgtk-sap',
},
{
    // img: `${fig14}`,
    title: 'Sala 14',
    sub:"-",
    link: 'http://meet.google.com/crv-kpbo-pqf',
},
{
    // img: `${fig15}`,
    title: 'Sala 15',
    sub:"-",
    link: 'http://meet.google.com/udj-osvu-mrw',
},
{
    // img: `${fig16}`,
    title: 'Sala 16',
    sub:"-",
    link: 'http://meet.google.com/usn-ubbe-yrk',
},
{
    // img: `${fig17}`,
    title: 'Sala 17',
    sub:"+Digital - Sala de Estudos",
    link: 'http://meet.google.com/imn-ntrs-cgk',
}
]

const message = {
    title: "PROGRAMA MAIS DIGITAL",
    sub:"A partir de 04/10/2021 até 28/10/2021",
    message: "18h:30m-20h:30m",
    public: "PÚBLICO: PROFESSORES -> CIÊNCIAS, HISTÓRIA E ARTES",
}

app.get('/rooms', (req, res) => {
    res.status(200).json(meet);
})

app.get("/message", (req, res) => {
    res.status(200).json(message);
})

app.listen(PORT, () => {
    console.log("STARTING")
})