document.addEventListener('DOMContentLoaded', () => {
    // API Providers Filtering
    const searchInput = document.getElementById('api-search');
    const categorySelect = document.getElementById('api-category');
    const priceSelect = document.getElementById('api-price');
    const apiProviderCards = document.querySelectorAll('.api-provider-card');

    if (searchInput && categorySelect && priceSelect) {
        function filterAPIProviders() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categorySelect.value;
            const selectedPrice = priceSelect.value;

            apiProviderCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const category = card.getAttribute('data-category');
                const price = card.getAttribute('data-price');

                const matchesSearch = title.includes(searchTerm);
                const matchesCategory = selectedCategory === '' || category === selectedCategory;
                const matchesPrice = selectedPrice === '' || price === selectedPrice;

                card.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';
            });
        }

        searchInput.addEventListener('input', filterAPIProviders);
        categorySelect.addEventListener('change', filterAPIProviders);
        priceSelect.addEventListener('change', filterAPIProviders);

        filterAPIProviders();
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            themeToggle.innerHTML = isDarkMode ? '<i class="fa fa-sun"></i> Light Mode' : '<i class="fa fa-moon"></i> Dark Mode';
        });
    }

    // Issue Solving Page Search
    const issueSearchInput = document.getElementById('issue-search');
    const issueCards = document.querySelectorAll('.issue-card');

    if (issueSearchInput) {
        function filterIssues() {
            const searchTerm = issueSearchInput.value.toLowerCase();
            issueCards.forEach(card => {
                const issueText = card.dataset.issue.toLowerCase();
                card.style.display = issueText.includes(searchTerm) ? 'block' : 'none';
            });
        }

        issueSearchInput.addEventListener('input', filterIssues);
        filterIssues();
    }

    // Roadmaps Interaction
    const roadmapCards = document.querySelectorAll('.roadmap-card');

    if (roadmapCards.length) {
        roadmapCards.forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.roadmap-content').forEach(content => {
                    content.style.display = 'none';
                });

                const targetId = card.getAttribute('data-target');
                const targetContent = document.querySelector(targetId);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            });
        });

        document.querySelectorAll('.roadmap-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
