// Array de Alunos
let studentsList = [];

// Adicionar dados do estudante criado na tabela
function populateTable() {
    const tableBody = document.getElementById('tBody'); 
    tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    studentsList.forEach(student => {
        let row = document.createElement('tr'); // Cria uma nova linha na tabela

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.days}</td>
            <td>
                <a href="#" class="link">Editar</a>
                <a href="#" class="link">Excluir</a>
            </td>
        `;

        tableBody.appendChild(row); // Adiciona a linha à tabela
    });
}

// Chamar a função para preencher a tabela ao carregar a página
populateTable();

// Elementos do formulário
const newStudentButton = document.querySelector('#criar-aluno');
const newStudentWindow = document.querySelector('#janela-criar-aluno');
const btnClose = document.querySelector('#btn-cancelar');
const userID = document.querySelector('#userID'); // Campo de ID
const userName = document.querySelector('#userName'); // Campo de Nome
const userDays = document.querySelector('#userDays'); // Campo de Dias
const btnAddNewStudent = document.querySelector('#btn-adicionar');

// Abrir e fechar a janela de criação de aluno
newStudentButton.addEventListener('click', newWindowCreateStudent);
btnClose.addEventListener('click', closeWindowCreateStudent);
btnAddNewStudent.addEventListener('click', addNewStudent);

function newWindowCreateStudent() {
    newStudentWindow.style.display = 'flex';
    userID.value = studentsList.length + 1; // Gerar ID automático
    userName.focus();
}

function closeWindowCreateStudent() {
    newStudentWindow.style.display = 'none';
}

// Verifica se o campo nome está preenchido
function isPopulated() {
    return userName.value.trim() !== ''; // Retorna true se preenchido
}

// Criar um novo objeto aluno
function createObject(id, name, days) {
    return { id, name, days };
}

// Adicionar um novo estudante ao array e atualizar a tabela
function addNewStudent() {
    if (!isPopulated()) {
        alert('Adicione um nome para prosseguir!');
        return;
    }

    const newObject = createObject(userID.value, userName.value, userDays.value);
    studentsList.push(newObject); // Adiciona ao array
    populateTable(); // Atualiza a tabela

    // Limpar os campos após adicionar o aluno
    userName.value = '';
    userDays.value = '';

    // Fechar a janela após adicionar o aluno
    closeWindowCreateStudent();
}



