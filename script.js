const API = "http://localhost:3000";

/* ===========================
CONTROLE DAS ABAS
=========================== */

function abrirAba(id) {

```
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.classList.remove("ativa");
});

document.getElementById(id).classList.add("ativa");
```

}

/* ===========================
JOGADORES
=========================== */

async function carregarJogadores() {

```
const resposta = await fetch(`${API}/jogadores`);
const dados = await resposta.json();

const lista = document.getElementById("listaJogadores");

lista.innerHTML = "";

dados.jogadores.forEach(jogador => {

    lista.innerHTML += `
        <div class="card">
            <h3>${jogador.nome}</h3>
            <p><strong>Turma:</strong> ${jogador.turma}</p>
            <p><strong>Email:</strong> ${jogador.email}</p>
            <p><strong>Time ID:</strong> ${jogador.timeId ?? "-"}</p>
        </div>
    `;
});
```

}

async function cadastrarJogador() {

```
const nome = document.getElementById("nomeJogador").value;
const turma = document.getElementById("turmaJogador").value;
const email = document.getElementById("emailJogador").value;
const timeId = Number(document.getElementById("timeJogador").value);

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

carregarJogadores();

document.getElementById("nomeJogador").value = "";
document.getElementById("turmaJogador").value = "";
document.getElementById("emailJogador").value = "";
document.getElementById("timeJogador").value = "";
```

}

/* ===========================
TIMES
=========================== */

async function carregarTimes() {

```
const resposta = await fetch(`${API}/times`);
const dados = await resposta.json();

const lista = document.getElementById("listaTimes");

lista.innerHTML = "";

dados.times.forEach(time => {

    lista.innerHTML += `
        <div class="card">
            <h3>${time.nome}</h3>
            <p><strong>Turma:</strong> ${time.turma}</p>
            <p><strong>Jogadores:</strong> ${time.jogadores}</p>

            <div 
                class="cor-time"
                style="background:${time.cor}">
            </div>
        </div>
    `;
});
```

}

async function cadastrarTime() {

```
const nome = document.getElementById("nomeTime").value;
const turma = document.getElementById("turmaTime").value;
const cor = document.getElementById("corTime").value;

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

carregarTimes();

document.getElementById("nomeTime").value = "";
document.getElementById("turmaTime").value = "";
```

}

/* ===========================
MODALIDADES
=========================== */

async function carregarModalidades() {

```
const resposta = await fetch(`${API}/modalidades`);
const dados = await resposta.json();

const lista = document.getElementById("listaModalidades");

lista.innerHTML = "";

dados.modalidades.forEach(modalidade => {

    lista.innerHTML += `
        <div class="card">
            <h3>${modalidade.nome}</h3>

            <p>
                <strong>Descrição:</strong>
                ${modalidade.descricao}
            </p>

            <p>
                <strong>Pontuação:</strong>
                ${modalidade.pontuacao}
            </p>
        </div>
    `;
});
```

}

async function cadastrarModalidade() {

```
const nome = document.getElementById("nomeModalidade").value;
const descricao = document.getElementById("descricaoModalidade").value;
const pontuacao = Number(document.getElementById("pontuacaoModalidade").value);

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

carregarModalidades();

document.getElementById("nomeModalidade").value = "";
document.getElementById("descricaoModalidade").value = "";
document.getElementById("pontuacaoModalidade").value = "";
```

}

/* ===========================
CONFRONTOS
=========================== */

async function carregarConfrontos() {

```
const resposta = await fetch(`${API}/confrontos`);
const dados = await resposta.json();

const lista = document.getElementById("listaConfrontos");

lista.innerHTML = "";

dados.confrontos.forEach(confronto => {

    lista.innerHTML += `
        <div class="card">

            <h3>${confronto.modalidade}</h3>

            <p>
                <strong>Casa:</strong>
                ${confronto.timeCasa}
            </p>

            <p>
                <strong>Visitante:</strong>
                ${confronto.timeVisitante}
            </p>

            <p>
                <strong>Data:</strong>
                ${confronto.data}
            </p>

            <p>
                <strong>Status:</strong>
                ${confronto.status}
            </p>

        </div>
    `;
});
```

}

async function cadastrarConfronto() {

```
const timeCasaId =
    Number(document.getElementById("timeCasa").value);

const timeVisitanteId =
    Number(document.getElementById("timeVisitante").value);

const modalidadeId =
    Number(document.getElementById("modalidadeConfronto").value);

const data =
    document.getElementById("dataConfronto").value;

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

carregarConfrontos();

document.getElementById("timeCasa").value = "";
document.getElementById("timeVisitante").value = "";
document.getElementById("modalidadeConfronto").value = "";
document.getElementById("dataConfronto").value = "";
```

}

/* ===========================
INICIALIZAÇÃO
=========================== */

window.onload = () => {

```
carregarJogadores();
carregarTimes();
carregarModalidades();
carregarConfrontos();
```

};
