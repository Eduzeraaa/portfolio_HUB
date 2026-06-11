const url = 'https://api.github.com/users/Eduzeraaa/repos';

fetch(url)
.then(response => response.json())
.then(data => {
const container = document.getElementById('github-projects');
container.innerHTML = '';

data.forEach(repo => {
  if (repo.name === 'Assistente-Financeiro-Pessoal' || repo.name === 'projeto-agendador' || repo.name === 'malware-detection-tool' || repo.name === 'fifa-recommendation-system') {
    const card = document.createElement('div');
    card.style.background = '#1e293b';
    card.style.padding = '20px';
    card.style.marginBottom = '15px';
    card.style.borderRadius = '8px';
    
    const nomeFormatado = repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    card.innerHTML = `
      <h3 style="color: #38bdf8; margin-top: 0;">${nomeFormatado}</h3>
      <p style="color: #94a3b8;">${repo.description || 'Sem descrição disponível.'}</p>
      <a href="${repo.html_url}" target="_blank" style="color: #38bdf8; text-decoration: none; font-weight: bold;">🔗 Ver projeto</a>
    `;
    container.appendChild(card);
  }
});
})
.catch(error => {
console.error('Erro ao carregar projetos:', error);
});