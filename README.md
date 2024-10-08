# Twitter (X) Tweet Deletion Script

This script allows you to delete all tweets and retweets from your own Twitter (X) account automatically. It works by scrolling through your profile, deleting tweets, and removing retweets. Once the visible tweets are deleted, it will automatically scroll down to load more tweets and continue the process.

## How to Use

1. **Go to your Twitter profile:**  
   Open Twitter (X) in your browser and navigate to your profile page.

2. **Open Developer Tools:**  
   Press `F12` to open the developer tools and go to the "Console" tab.

3. **Run the script:**  
   Copy and paste the script from this repository into the console and press `Enter`.

4. **Sit back and relax:**  
   The script will delete all your tweets and retweets automatically. Once there are no more visible tweets, it will scroll down to load more and continue the deletion process.

### Language Settings

- The script currently works for Twitter accounts set to French (`item.textContent === 'Supprimer'`).
- If your Twitter account is in English, you will need to modify the script. Replace `item.textContent === 'Supprimer'` with `item.textContent === 'Delete'`.

### Important:  
We recommend running the script on both your main profile page and the `/with_replies` section to ensure all tweets and replies are deleted.

## Disclaimer

Use at your own risk. This script is designed for personal use only and may not comply with Twitter's terms of service. We are not responsible for any consequences that may arise from using this script.
