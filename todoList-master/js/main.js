let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

const criarItem = ( ) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <section>${tarefa}</section>
        <input type="button" value="x" data-indice=${indice}>
        `;

    document.getElementById('todoList').appendChild(novoItem);
}

const AtualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.foreach ( (item, indice) => (item.tarefa, item.status, indice));
}

const limparTarefas = () => {
    const lista = document.getElementById('todoList');
    while(lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const inserirItem = () => {
    const tecla = evento.key;
    const texto = evento.target.value;

    if(texto == 'Enter') {
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status':''});
        setBanco(banco);
        AtualizarTela();
        evento.target.value = '';
    }
}

document.getElementById('todo_item').addEventListener('keypress', inserirItem);