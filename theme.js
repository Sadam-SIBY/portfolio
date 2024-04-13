const theme = {
  init: function () {
      // On sélectionne le bouton qui permet de switcher de thème
      const themeSwitchButton = document.querySelector('#theme-switch');

      // On place un écouteur d'évènement sur le bouton
      themeSwitchButton.addEventListener('click', theme.handleToggleTheme);

      // On récupère le thème choisi par le user (darkMode vrai ou faux)
      const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      // On applique le thème qui a été choisi par le user
      const body = document.querySelector('body');

      // Si le thème est en dark dans le localStorage alors on l'applique immédiatement au body
      if (isDarkMode === true) {
          body.classList.add('theme-dark');
      }

     
  },



  /**
   * Actions à réaliser lors du clic sur le bouton de switch du thème
   */
  handleToggleTheme: function() {
      // On sélectionne l'élément <body>
      const body = document.querySelector('body');
      // On retire la classe 'theme-dark' si elle existe, sinon on l'ajoute
      body.classList.toggle('theme-dark');

      // On vérifie si le dark mode est activé
      const isDarkMode = body.classList.contains('theme-dark');

      // On stocke ensuite l'info dans le localStorage
      // pour la réutiliser au chargement de chaque page du site
      localStorage.setItem('darkMode', isDarkMode);
  }
}

// Etape 1 : Sauvegarder le thème choisi dans le localStorage (localStorage.setItem('...', '...'))

// Etape 2 : Récupérer le thème stocké dans le localStorage (localStorage.getItem('...'))

// Etape 3 : Appliquer, au chargement de la page, le thème qui a été récupéré dans le localStorage