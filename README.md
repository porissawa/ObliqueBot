# ObliqueBot
Twitter bot for overcoming creative blocks

## Instructions
Run `npm i` to install the necessary dependencies. Since the bot was sadly denied access to Twitter, 
as of now all of the cards will only be available as a console.log by running `node markov.js` when on its directory.

Change the the number of letters (the i in the for loop on l28 of markov.js) if you'd like to generate either shorter or longer phrases. I found 26 letters to give the best results but, it's fun to see what the program does in other scenarios.

## What is it?
ObliqueBot is a text generator based on Brian Eno's and Peter Schmidt's Oblique Stategy (OS) card deck.
OS was created and published during the mid 70's to help artists work on their creations by giving them a constraint.
What ObliqueBot does is, after collecting all cards from all editions, it generates new ones, based on the originals.
