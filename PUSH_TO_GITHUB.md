# Push this project to the PAANI POP GitHub repository

The target repository is currently empty: `https://github.com/adityaharsh1101/paani-pop`.

1. Extract this folder.
2. Open a terminal inside the `paani-pop` directory.
3. Run the following commands (GitHub authentication will be handled by your configured Git credential manager or browser login):

```bash
git init
git branch -M main
git add .
git commit -m "Initialise PAANI POP web application MVP"
git remote add origin https://github.com/adityaharsh1101/paani-pop.git
git push -u origin main
```

Then install dependencies and run locally:

```bash
npm install
npm run dev
```

If Git reports that `origin` already exists, use `git remote set-url origin https://github.com/adityaharsh1101/paani-pop.git` instead of `git remote add`.
