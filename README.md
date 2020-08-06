
<!-- VARS -->
[license-url]: https://github.com/RodrigoBLima/proffy/blob/master/LICENSE
[issues-url]: https://github.com/RodrigoBLima/proffy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/
[nlw-badge]: https://img.shields.io/badge/NLW-building-important?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==

<!-- VARS -->


<p align="center">
  <img src="/web/src/assets/images/logo.png" />
  

  <p align="center">
        App to ReactJS, React Native, TypeScript Node.js and more. 🚀
  </p>


<div align="center">  
    
[![License][license-badge]][license-url]
![Git Stars][star-badge]
![Last Commit][last-commit-badge]
[![Netfly Stats][netfly-badge]][netfly-url]
![NLW Stats][nlw-badge]
![Codacy Quality][codacy-badge]

</div>

  <img src="/web/src/assets/images/wallppaper.png" />
</p>

# Development setup

> yarn is required

After cloning this repo:
### Server 
  - Run ```yarn``` in the ```server``` folder
  - Go back to the root folder
  - Run ```yarn dev:server``` to up the server
  - Open ```Insomnia``` or ```Postman``` and import the ```Insomnia.json``` workspace file at ```server``` folder
  - Use it! :D
### Website
  - Run ```yarn``` in the ```website``` folder
  - Go back to the root folder
  - Run ```yarn dev:web``` to up the project
### Mobile
  - Run ```yarn``` in the ```mobile``` folder
  - Update the ```baseURL``` at ```src/config/index.js```
  - Go back to the root folder
  - Run ```yarn dev:mobile``` to up the project

# Tests
### Server
  - Run ```yarn test:server``` at the root folder
  
  
# Improvements
I made some improvements like:

- Making the possibility to edit the incidents
- Adding neumorphism on parts of the website
- Adding the generated ID from registration automatically in the login field
- Adding the validation of all necessary routes
- Adding more tests
- Improving the tests architecture and organization
- Improving the code architecture and organization
- Deploying and setting the website on Netlify
- Deploying and setting the server on Heroku

# License
[MIT License](/LICENSE)
