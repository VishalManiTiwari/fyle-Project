const usernameInput = document.getElementById('username');
const fetchButton = document.getElementById('fetch-repos');
const repositoriesContainer = document.getElementById('repositories');

fetchButton.addEventListener('click', async () => {
  const username = usernameInput.value;
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    const repositories = await response.json();

    repositoriesContainer.innerHTML = ''; // Clear previous results

    repositories.forEach(repo => {
      const repoContainer = document.createElement('div');
      repoContainer.classList.add('repo');

      repoContainer.innerHTML = `
        <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
        <p>${repo.description}</p>
        <p>Language: ${repo.language}</p>
        <p>Stars: ${repo.stargazers_count}</p>
      `;

      repositoriesContainer.appendChild(repoContainer);
    });
  } catch (error) {
    console.error(error);
  }
});
