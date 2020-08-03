<p align="center">
  <img src="/web/src/assets/images/logo.svg" />
  
  <p align="center">
  App to ReactJS, React Native, Node.js and more.
  </p>

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
