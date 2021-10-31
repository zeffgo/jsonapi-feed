# JSON-Placeholder API browser

Built with Angular 12
Allows to browse 100 posts, provided by public JSON Placeholder API

# App Structure

App has one module/route showing Posts (master/smart cmp), 
displaying 100 post objects visualized by Post (presentational cmp)

For 'main' branch fetching data is done in Posts cmp.
For rxjs-shared-state - fetching is done by Posts Service class.

* rxjs-shared-state: on this branch when 'flipping' a Post component -
app gets updated and shows 'flipped' count in header (if count > 0)

* 'flip a post' - clicking a Post component triggers a 'rotating' animation
# JSON-Placeholder API browser

Built with Angular 12
Allows to browse 100 posts, provided by public JSON Placeholder API

# App Structure

App has one module/route showing Posts (master/smart cmp), 
displaying 100 post objects visualized by Post (presentational cmp)

For 'main' branch fetching data is done in Posts cmp.
For rxjs-shared-state - fetching is done by Posts Service class.

* rxjs-shared-state: on this branch when 'flipping' a Post component -
app gets updated and shows 'flipped' count in header (if count > 0)

* 'flip a post' - clicking a Post component triggers a 'rotating' animation

# Run & Live demo

Run with npm start:dev, as start reserved for deployed runtime
OR 
`npm run build`, then `npm start`, then open localhost:8080

Live demo: https://jsonfeed-browser.herokuapp.com/ (rxjs-shared-state branch deployed)

# Tests
JEST runner.
Accessible with `npm test` command

Coverage:
* 95.83% Statements 69/72
* 75% Branches  3/4
* 81.25% Functions 13/16
* 95.08% Lines 58/61

# Links
API / Docs + examples - https://jsonplaceholder.typicode.com/

# Misc
During development of the app I solved a problem of integrating JEST in Angular 12.
Below link to a post I wrote about it :)
https://tdsnip.blogspot.com/2021/10/using-jest-in-angular-12.html 
# Run & Live demo

Run with npm start:dev, as start reserved for deployed runtime
OR 
`npm run build`, then open localhost:8080

Live demo: https://jsonfeed-browser.herokuapp.com/ (rxjs-shared-state branch deployed)

# Links
API / Docs + examples - https://jsonplaceholder.typicode.com/

# Misc
During development of the app I solved a problem of integrating JEST in Angular 12.
Below link to a post I wrote about it :)
https://tdsnip.blogspot.com/2021/10/using-jest-in-angular-12.html 

