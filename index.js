console.log('** DINDIN ACADEMY **');
// comentários
let cursos = [{
    id: 1,
    titulo: 'Investimentos para Iniciantes',
    descricao: 'Esse curso é para quem não manja de investimento mas quer ficar rico',
    professor: 'Jane Doe',
    listaAulas: []
}, {
    id: 2,
    titulo: 'Renda Extra',
    descricao: 'Renda extra sem sair de casa',
    professor: 'Seu Madruga',
    listaAulas: []
}];


function listarCursos() {
    let htmlCursos = "";
    //criando lista de cursos em HTML
    for (let index = 0; index < cursos.length; index++) {
        // = atribuir novo valor 
        // += acrescentar novo valor
        htmlCursos += `
            <article class="card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].professor}</p>
            </article>
        `;
    }

    // selecionando elemento que vai englobar a lista
    let painelCursos = document.querySelector(".painel-cursos");
    // inserindo lista de cursos no html
    painelCursos.innerHTML = htmlCursos;
}

function adicionarAula(idCurso, linkAula) {
    // encontrando posição do curso
    let indexCurso = null;
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == idCurso) {
            indexCurso = i;
        }
    }
    // adicionando nova aula ao curso selecionado
    if (indexCurso != null) {
        cursos[indexCurso].listaAulas.push(linkAula);
        console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)

    } else {
        console.log('Curso não encontrado.')
    }
}

listarCursos();