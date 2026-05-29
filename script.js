const API = "http://localhost:3000";

// LISTAR JOGADORES
async function carregarJogadores() {

  const resposta = await fetch(`${API}/jogadores`);
  const dados = await resposta.json();

  const lista = document.getElementById("listaJogadores");

  lista.innerHTML = "";

  dados.jogadores.forEach(jogador => {

    lista.innerHTML += `
      <div class="card">
        <h3>${jogador.nome}</h3>
        <p>Turma: ${jogador.turma}</p>
        <p>Email: ${jogador.email}</p>
        <p>Time ID: ${jogador.timeId}</p>
      </div>
    `;
  });
}

// CADASTRAR JOGADOR
async function cadastrarJogador() {

  const nome = document.getElementById("nome").value;
  const turma = document.getElementById("turma").value;
  const email = document.getElementById("email").value;
  const timeId = Number(document.getElementById("timeId").value);

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
}

// carregar automaticamente
carregarJogadores();