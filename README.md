# JSON-Placeholder api browser

Built with Angular 12
Allows to browse 100 posts, provided by public JSON Placeholder API

# App Structure

App has one module/route showing Posts (master/smart cmp), 
displaying 100 post objects visualized by Post (presentational cmp)

For 'main' branch fetching data is done in Posts cmp.
For rxjs-shared-state - fetching is done by Posts Service class.

* rxjs-shared-state: on this branch when 'flipping' a Post component -
app gets updated and shows 'flipped' count in header (if count > 0)

** 'flip a post' - clicking a Post component triggers a 'rotating' animation

# Run & Live demo

Run with npm start:dev, as start reserved for deployed runtime
OR 
`npm run build`, then open localhost:8080

Live demo: https://jsonfeed-browser.herokuapp.com/ (rxjs-shared-state branch deployed)

# Links
API / Docs + examples - https://jsonplaceholder.typicode.com/

