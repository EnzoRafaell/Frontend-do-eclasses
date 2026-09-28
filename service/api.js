const BASE_URL = 'http://localhost:3000/';

async function _get(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Erro GET ${endpoint}:`, error);
        return [];
    }
}

async function _post(endpoint, body) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Erro POST ${endpoint}:`, error);
        throw error;
    }
}

async function _put(endpoint, body) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Erro PUT ${endpoint}:`, error);
        throw error;
    }
}

async function _delete(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Erro DELETE ${endpoint}:`, error);
        throw error;
    }
}

// GETs
async function getJogos() { return await _get('api/jogos'); }
async function getTimes() { return await _get('api/times'); }
async function getCompetidores() { return await _get('api/competidores'); }
async function getConfrontos() { return await _get('api/confrontos'); }

// POSTs
async function criarJogo(dados) { return await _post('api/jogos', dados); }
async function criarTime(dados) { return await _post('api/times', dados); }
async function criarCompetidor(dados) { return await _post('api/competidores', dados); }
async function criarConfronto(dados) { return await _post('api/confrontos', dados); }

// PUTs (editar)
async function atualizarJogo(id, dados) { return await _put(`api/jogos/${id}`, dados); }
async function atualizarTime(id, dados) { return await _put(`api/times/${id}`, dados); }
async function atualizarCompetidor(id, dados) { return await _put(`api/competidores/${id}`, dados); }
async function atualizarConfronto(id, dados) { return await _put(`api/confrontos/${id}`, dados); }

// DELETEs
async function apagarJogo(id) { return await _delete(`api/jogos/${id}`); }
async function apagarTime(id) { return await _delete(`api/times/${id}`); }
async function apagarCompetidor(id) { return await _delete(`api/competidores/${id}`); }
async function apagarConfronto(id) { return await _delete(`api/confrontos/${id}`); }
