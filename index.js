
const listaContatos = [];
let id = 0;

const listaContatosContainer = document.querySelector('.secao_listaContatos_contatos');

const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campoTelefone = document.getElementById('campoTelefone');

const botaoAdicionar = document.getElementById('botaoAdicionar');

function adicionarNovoContato() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value;

    const novoContato = {
        id: id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone

    };
    id++;
    listaContatos.push(novoContato);

    renderizarLayout();
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);

function removerContato(evento) {
    // console.log(evento);
    const botaoClicado = evento.target;
    const contatoClicado = botaoClicado.parentElement;
    const idContatoClicado = contatoClicado.dataset.id;

    const contatoRemovido = listaContatos.find((contato) =>
        contato.id == idContatoClicado
    );
    const posicaoContatoRemovido = listaContatos.indexOf(contatoRemovido);
    listaContatos.splice(posicaoContatoRemovido, 1);

    renderizarLayout()
}

function renderizarLayout() {
    listaContatosContainer.innerHTML = '';

    if (listaContatos.length !== 0) {
        for (let i = 0; i < listaContatos.length; i++) {
            criarLayout(listaContatos[i]);
        }
    }
    else{
        const listaContatosVazia = `<li>
        <p>Não há contatos na sua lista!</p>
    </li>`;
    listaContatosContainer.innerHTML = listaContatosVazia;
    }
}

renderizarLayout();

function criarLayout(contato) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    button.id = "removerContato";
    button.addEventListener('click', removerContato);

    li.dataset.id = contato.id;
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.telefone;

    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaContatosContainer.appendChild(li);

}
