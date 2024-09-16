const lancheForm = document.getElementById('add-lanche-form')
const formaBotton = document.getElementById('show-form-btn');
const clseBtn = document.getElementById('close-lanche-form-btn');
let lancheData;


// Inicializar os dados do localStorage
const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('lancheData');
    return data ? JSON.parse(data) : [
        { imag: "ima/cachorroamericano.jpg", name: "Cachorro Quente Americano", valor: "10.00", type: "lanche" },
        { imag: "ima/hamburguer.jpg", name: "Hamburguer", valor: "22.00", type: "lanche" },
        { imag: "ima/lacheNatural.jpg", name: "Lanche Natural", valor: "32.00", type: "lanche" },
        { imag: "ima/pizaa grande.png", name: "Pizza Grande", valor: "30.00", type: "massa" }, 
        { imag: "ima/pizza media.jpg", name: "Pizza Média", valor: "24.00", type: "massa" },
        { imag: "ima/pizza broto.jpg", name: "Pizza Broto", valor: "15.00", type: "massa" },
        { imag: "ima/agua.jpg", name: "Água", valor: "15.00", type: "liquido" },
        { imag: "ima/suco.webp", name: "Suco", valor: "8.00", type: "liquido" },
        { imag: "ima/refri.webp", name: "Refrigerante 2L", valor: "8.00", type: "liquido" },
        {imag: "data:image/jpeg;base64,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", name: "Batata 300g", valor: "23.00", type: "acompanhamento"}
    ];
};

// Salvar dados no localStorage
const saveDataToLocalStorage = (data) => {
    localStorage.setItem('lancheData', JSON.stringify(data));
};

// Função para atualizar os contêineres com base no tipo
const updateContainers = (data) => {
    const lancheContainer = document.getElementById("lanche");
    const massaContainer = document.getElementById("massa");
    const liquidoContainer = document.getElementById("liquido");
    const AcompanhamentoContainer = document.getElementById("Acompanhamento");

    lancheContainer.innerHTML = "";
    massaContainer.innerHTML = "";
    liquidoContainer.innerHTML = "";
    AcompanhamentoContainer.innerHTML = "";

    data.forEach(({ imag, name, valor, type }) => {
        const section = `
            <section class="separador">
                <img class="image" src="${imag}" alt="${name}">
                <p class="NomeLanche">${name}<br>R$${valor}</p>
            </section>
        `;

        if (type === "lanche") {
            lancheContainer.innerHTML += section;
        } else if (type === "massa") {
            massaContainer.innerHTML += section;
        } else if (type === "liquido") {
            liquidoContainer.innerHTML += section;
        } else if (type === "acompanhamento") {
            AcompanhamentoContainer.innerHTML += section;
        } 
    });
};

lancheData = getDataFromLocalStorage();
updateContainers(lancheData);

// Adicionar novo item ao formulário
lancheForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Obter dados do formulário
    const name = document.getElementById('name-input').value;
    const image = document.getElementById('image-input').value;
    const price = document.getElementById('price-input').value;
    const type = document.getElementById('type-input').value;

    // Criar novo item
    const newItem = { imag: image, name: name, valor: price, type: type };

    // Adicionar novo item aos dados existentes
    lancheData.push(newItem);

    // Salvar dados atualizados no localStorage
    saveDataToLocalStorage(lancheData);

    // Atualizar contêiner com os dados atualizados
    updateContainers(lancheData);

    // Limpar o formulário
    lancheForm.reset();
});

// Mostrar formulário
formaBotton.addEventListener('click', () => {
    lancheForm.style.display = 'block'; // Mostrar o formulário
});

// Fechar formulário
clseBtn.addEventListener('click', () => {
    lancheForm.style.display = 'none'; // Esconder o formulário
});
