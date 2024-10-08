const deleteAllTweets = async () => {
  const processedButtons = new Set();
  
  const getDeleteButtons = () => Array.from(document.querySelectorAll('[data-testid="tweet"] [data-testid="caret"]'));
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const scrollToEnd = async () => {
    window.scrollTo(0, document.body.scrollHeight);
    console.log("Défilement vers le bas pour charger plus de tweets...");
    await delay(2000); // Attend que les nouveaux tweets se chargent
  };

  while (true) {
    const deleteButtons = getDeleteButtons().filter(button => !processedButtons.has(button));
    
    if (deleteButtons.length === 0) {
      await scrollToEnd();
      continue; // On continue à défiler si aucun bouton de suppression n'a été trouvé
    }

    for (const button of deleteButtons) {
      processedButtons.add(button);
      
      // Récupérer le nom ou contenu du tweet avant de le supprimer
      const tweetContainer = button.closest('[data-testid="tweet"]');
      const tweetContent = tweetContainer?.querySelector('[lang]')?.textContent || 'Tweet sans texte';
      
      // Log du tweet avant suppression
      console.log(`Suppression du tweet : "${tweetContent}"`);

      button.click();
      await delay(250);

      const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
      const deleteOption = menuItems.find(item => item.textContent === 'Supprimer');

      if (deleteOption) {
        deleteOption.click();
        document.querySelector('[data-testid="confirmationSheetConfirm"]')?.click();
        await delay(3000);
        console.log(`Tweet supprimé : "${tweetContent}"`);
      } else {
        const unretweetButton = tweetContainer?.querySelector('[data-testid="unretweet"]');

        if (unretweetButton) {
          unretweetButton.click();
          await delay(250);
          document.querySelector('[data-testid="unretweetConfirm"]')?.click();
          await delay(3000);
          console.log(`Retweet annulé pour : "${tweetContent}"`);
        }
      }
    }

    // Défiler jusqu'en bas après chaque itération
    await scrollToEnd();
  }

  console.log('Tous les tweets ont été supprimés avec succès!');
};

deleteAllTweets();
