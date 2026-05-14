const alunos = [
    {
        nome: 'Ana',
        idade: 20,
        curso: 'Engenharia',
        nota: 8.5,
    },
    {
        nome: 'Carlos',
        idade: 22,
        curso: 'Engenharia',
        nota: 7.8,
    },
    {
        nome: 'Mariana',
        idade: 19,
        curso: 'Engenharia',
        nota: 9.2,
    },
    {
        nome: 'Joao',
        idade: 21,
        curso: 'Engenharia',
        nota: 5.9,
    },
];
 
const listaAlunos = document.getElementById('lista-alunos');
 
alunos.forEach((aluno) => {
    const situacao = aluno.nota >= 7 ? 'Aprovado' : 'Revisar conteudo';
 
    listaAlunos.innerHTML +=`
        <div class= 'card'>
            <h2>${aluno.nome}</h2>
            <p><strong>Idade:</strong>${aluno.idade}</p>
            <p><strong>Curso:</strong>${aluno.curso}</p>
            <p><strong>Nota:</strong>${aluno.nota}</p>
            <p><strong>Situacao:</strong>${situacao}</p>
 
            <button onclick= 'personalizarCard(this, ${aluno.nota})'>Personalizar</button>
        </div>
    `;
})
 
function personalizarCard(botao, nota){
    const card = botao.parentElement;
 
    if(nota >= 7) {
        card.classList.add('aprovado')
    }else {
        card.classList.add('revisar')
    }
}