const username = 'Eduzeraaa';
const repoContainer = document.getElementById('github-projects');

async function fetchRepositories() {
    try {
        // Buscando TODOS os repositórios públicos do seu perfil
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
            throw new Error(`Erro na API do GitHub: Status ${response.status}`);
        }

        const repositories = await response.json();
        
        // Limpa a mensagem de carregamento
        repoContainer.innerHTML = '';

        // Lista exata dos repositórios que você quer exibir no portfólio
        const projetosAlvo = ['IA_Generativa', 'Automacao_Python', 'Analise_Dados', 'portfolio_HUB']; 
        
        // Filtra os repositórios reais que vieram da API
        const projetosFiltrados = repositories.filter(repo => 
            projetosAlvo.some(alvo => repo.name.toLowerCase() === alvo.toLowerCase())
        );

        if (projetosFiltrados.length === 0) {
            repoContainer.innerHTML = '<p style="color: #94a3b8;">Nenhum dos 4 repositórios alvo foi encontrado no seu GitHub. Verifique os nomes.</p>';
            return;
        }

        // Desenha os cards na tela
        projetosFiltrados.forEach(repo => {
            const nomeFormatado = repo.name.replace(/_/g, ' ');
            
            const card = document.createElement('div');
            card.className = 'card'; // Usa a mesma classe CSS que já está estilizada no seu HTML
            card.innerHTML = `
                <h3>${nomeFormatado}</h3>
                <p>${repo.description || 'Sem descrição disponível no GitHub.'}</p>
                <p class="tech">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count} | Linguagem: ${repo.language || 'Python'}</p>
                <a href="${repo.html_url}" target="_blank" style="margin-top: 10px; display: inline-block;">Ver Projeto →</a>
            `;
            repoContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Erro detalhado:', error);
        repoContainer.innerHTML = `<p style="color: #ef4444;">Não foi possível carregar os projetos no momento. (Motivo: ${error.message})</p>`;
    }
}

fetchRepositories();