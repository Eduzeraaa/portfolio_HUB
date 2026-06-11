const repoContainer = document.getElementById('github-projects');

const meusProjetos = [
    {
        name: 'Assistente Financeiro Pessoal',
        description: 'Agente financeiro inteligente em Python, LangChain e MCP. Interpreta linguagem natural para registrar transações, consultar saldos e simular compras com persistência no MongoDB.',
        html_url: 'https://github.com/Eduzeraaa/Assistente-Financeiro-Pessoal',
        language: 'Python'
    },
    {
        name: 'Projeto Agendador',
        description: 'Sistema full-stack em Streamlit que automatiza agendamentos via chat por linguagem natural, integrando a LLM Groq, Google Calendar API e banco de dados MongoDB.',
        html_url: 'https://github.com/Eduzeraaa/projeto-agendador',
        language: 'Python'
    },
    {
        name: 'Malware Detection Tool',
        description: 'Ferramenta de análise de arquivos que integra a API do VirusTotal com Inteligência Artificial para identificar ameaças e traduzir relatórios técnicos em explicações simples.',
        html_url: 'https://github.com/Eduzeraaa/malware-detection-tool',
        language: 'Python'
    },
    {
        name: 'Fifa Recommendation System',
        description: 'Dashboard e chatbot inteligente que analisa dados do FIFA 23 com Pandas para recomendar contratações de jogadores baseadas em orçamento, posição e potencial.',
        html_url: 'https://github.com/Eduzeraaa/fifa-recommendation-system',
        language: 'Python'
    },
];

function renderizarProjetos() {
    try {

        repoContainer.innerHTML = '';

        meusProjetos.forEach(repo => {
            const nomeFormatado = repo.name.replace(/_/g, ' ');
            
            const card = document.createElement('div');
            card.className = 'card'; 
            card.innerHTML = `
                <h3>${nomeFormatado}</h3>
                <p>${repo.description}</p>
                <p class="tech">⚡ Projeto Ativo | Linguagem: ${repo.language}</p>
                <a href="${repo.html_url}" target="_blank" style="margin-top: 10px; display: inline-block;">Ver Projeto →</a>
            `;
            repoContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Erro ao renderizar:', error);
        repoContainer.innerHTML = '<p style="color: #ef4444;">Erro ao carregar os cards dos projetos.</p>';
    }
}

renderizarProjetos();