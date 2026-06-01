const API = "http://localhost:3000";

/* ==========================
ABAS
========================== */

function abrirAba(id) {

```
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.classList.remove("ativa");
});

document.getElementById(id).classList.add("ativa");
```

}

/* ==========================
UTILITÁRIOS
========================== */

function limparElemento(elemento) {

```
while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
}
```

}

/* ==========================
DASHBOARD
========================== */

async function atualizarDashboard() {

```
try {

    const [jogadores, times, modalidades, confrontos] =
        await Promise.all([
            fetch(`${API}/jogadores`).then(r => r.json()),
            fetch(`${API}/times`).then(r => r.json()),
            fetch(`${API}/modalidades`).then(r => r.json()),
            fetch(`${API}/confrontos`).then(r => r.json())
        ]);

    document.getElementById("totalJogadores").textContent =
        jogadores.total;

    document.getElementById("totalTimes").textContent =
        times.total;

    document.getElementById("totalModalidades").textContent =
        modalidades.total;

    document.getElementById("totalConfrontos").textContent =
        confrontos.total;

} catch (erro) {

    console.log(erro);

}
```

}

/* ==========================
JOGADORES
========================== */

async function carregarJogadores() {

```
const resposta =
    await fetch(`${API}/jogadores`);

const dados =
    await resposta.json();

const lista =
    document.getElementById("listaJogadores");

limparElemento(lista);

dados.jogadores.forEach(jogador => {

    const card =
        document.createElement("div");

    card.className = "card";

    const nome =
        document.createElement("h3");

    nome.textContent =
        jogador.nome;

    const turma =
        document.createElement("p");

    turma.textContent =
        `Turma: ${jogador.turma}`;

    const email =
        document.createElement("p");

    email.textContent =
        `Email: ${jogador.email}`;

    const time =
        document.createElement("p");

    time.textContent =
        `Time ID: ${jogador.timeId}`;

    card.appendChild(nome);
    card.appendChild(turma);
    card.appendChild(email);
    card.appendChild(time);

    lista.appendChild(card);

});

atualizarDashboard();
```

}

async function cadastrarJogador() {

```
const nome =
    document.getElementById("nomeJogador").value;

const turma =
    document.getElementById("turmaJogador").value;

const email =
    document.getElementById("emailJogador").value;

const timeId =
    Number(document.getElementById("timeJogador").value);

await fetch(`${API}/jogadores`, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        nome,
        turma,
        email,
        timeId
    })

});

document.getElementById("nomeJogador").value = "";
document.getElementById("turmaJogador").value = "";
document.getElementById("emailJogador").value = "";
document.getElementById("timeJogador").value = "";

carregarJogadores();
```

}
/* ==========================
TIMES
========================== */

async function carregarTimes() {

```
const resposta =
    await fetch(`${API}/times`);

const dados =
    await resposta.json();

const lista =
    document.getElementById("listaTimes");

limparElemento(lista);

dados.times.forEach(time => {

    const card =
        document.createElement("div");

    card.className = "card";

    const nome =
        document.createElement("h3");

    nome.textContent =
        time.nome;

    const turma =
        document.createElement("p");

    turma.textContent =
        `Turma: ${time.turma}`;

    const jogadores =
        document.createElement("p");

    jogadores.textContent =
        `Jogadores: ${time.jogadores}`;

    const cor =
        document.createElement("div");

    cor.className = "cor-time";
    cor.style.backgroundColor = time.cor;

    card.appendChild(nome);
    card.appendChild(turma);
    card.appendChild(jogadores);
    card.appendChild(cor);

    lista.appendChild(card);

});

atualizarDashboard();
```

}

async function cadastrarTime() {

```
const nome =
    document.getElementById("nomeTime").value;

const turma =
    document.getElementById("turmaTime").value;

const cor =
    document.getElementById("corTime").value;

await fetch(`${API}/times`, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        nome,
        turma,
        cor
    })

});

document.getElementById("nomeTime").value = "";
document.getElementById("turmaTime").value = "";

carregarTimes();
```

}

/* ==========================
MODALIDADES
========================== */

async function carregarModalidades() {

```
const resposta =
    await fetch(`${API}/modalidades`);

const dados =
    await resposta.json();

const lista =
    document.getElementById("listaModalidades");

limparElemento(lista);

dados.modalidades.forEach(modalidade => {

    const card =
        document.createElement("div");

    card.className = "card";

    const nome =
        document.createElement("h3");

    nome.textContent =
        modalidade.nome;

    const descricao =
        document.createElement("p");

    descricao.textContent =
        `Descrição: ${modalidade.descricao}`;

    const pontuacao =
        document.createElement("p");

    pontuacao.textContent =
        `Pontuação: ${modalidade.pontuacao}`;

    card.appendChild(nome);
    card.appendChild(descricao);
    card.appendChild(pontuacao);

    lista.appendChild(card);

});

atualizarDashboard();
```

}

async function cadastrarModalidade() {

```
const nome =
    document.getElementById("nomeModalidade").value;

const descricao =
    document.getElementById("descricaoModalidade").value;

const pontuacao =
    Number(
        document.getElementById(
            "pontuacaoModalidade"
        ).value
    );

await fetch(`${API}/modalidades`, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        nome,
        descricao,
        pontuacao
    })

});

document.getElementById(
    "nomeModalidade"
).value = "";

document.getElementById(
    "descricaoModalidade"
).value = "";

document.getElementById(
    "pontuacaoModalidade"
).value = "";

carregarModalidades();
```

}
/* ==========================
CONFRONTOS
========================== */

async function carregarConfrontos() {

```
const resposta =
    await fetch(`${API}/confrontos`);

const dados =
    await resposta.json();

const lista =
    document.getElementById("listaConfrontos");

limparElemento(lista);

dados.confrontos.forEach(confronto => {

    const card =
        document.createElement("div");

    card.className = "card";

    const modalidade =
        document.createElement("h3");

    modalidade.textContent =
        confronto.modalidade;

    const casa =
        document.createElement("p");

    casa.textContent =
        `Time Casa: ${confronto.timeCasa}`;

    const visitante =
        document.createElement("p");

    visitante.textContent =
        `Time Visitante: ${confronto.timeVisitante}`;

    const data =
        document.createElement("p");

    data.textContent =
        `Data: ${confronto.data}`;

    const status =
        document.createElement("p");

    status.textContent =
        `Status: ${confronto.status}`;

    card.appendChild(modalidade);
    card.appendChild(casa);
    card.appendChild(visitante);
    card.appendChild(data);
    card.appendChild(status);

    lista.appendChild(card);

});

atualizarDashboard();
```

}

async function cadastrarConfronto() {

```
const timeCasaId =
    Number(
        document.getElementById(
            "timeCasa"
        ).value
    );

const timeVisitanteId =
    Number(
        document.getElementById(
            "timeVisitante"
        ).value
    );

const modalidadeId =
    Number(
        document.getElementById(
            "modalidadeConfronto"
        ).value
    );

const data =
    document.getElementById(
        "dataConfronto"
    ).value;

await fetch(`${API}/confrontos`, {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        timeCasaId,
        timeVisitanteId,
        modalidadeId,
        data
    })

});

document.getElementById(
    "timeCasa"
).value = "";

document.getElementById(
    "timeVisitante"
).value = "";

document.getElementById(
    "modalidadeConfronto"
).value = "";

document.getElementById(
    "dataConfronto"
).value = "";

carregarConfrontos();
```

}

/* ==========================
INICIALIZAÇÃO
========================== */

window.onload = () => {

```
abrirAba("dashboard");

carregarJogadores();

carregarTimes();

carregarModalidades();

carregarConfrontos();

atualizarDashboard();
```

};
