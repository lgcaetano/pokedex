# Ioasys Pokédex

A front-end web application that simulates a Pokédex with the help of the [PokéAPI](https://pokeapi.co/). Built with React, Redux and Styled Components.

A build of this project is live and can be found [here](https://lgcaetanopokedex.netlify.app/).

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and either `npm` or `yarn` installed globally on your machine.  

Installation:

`npm install` or `yarn install`

To Start Server:

`npm start` or `yarn start`

To Visit App:

Access [localhost:3000](localhost:3000) on your web browser of preference.  

## Reflection:

This project was built for [Ioasys Camp 2022](https://camp.ioasys.com.br/). Because of that, there were certain requirements to be fulfilled, such as: 
 
- Following a predesigned layout for reference (almost everything about the layout of the application had already been designed)
- A list with Pokémons
- The ability to search for Pokémons by name
- Providing extra information (such as stats, abilities, etc.) about a specific Pokémon when its card is clicked. (I implemented this feature by wrapping the cards in links that take the user to that Pokémon's own page which was generated dynamically through dynamic routes with the help of `react-router-dom`)
- Dark mode/Light mode toggling
- A list of the user's favorite Pokémons. The list should store a maximum of 12 Pokémons, and it should be stored in LocalStorage.
- Using `styled-components`
- Using endpoint `sprites/other/dream-world` to fetch the Pokémons' pictures. 
- Implementing infinite scroll to load more Pokémons, taking advantage of the fact that the API is paginated.

Because of these requirements, there weren't many decisions to be made about the project, but there were some important ones, such as what state management tool to use and how to handle API requests. I chose to use `redux` for state management, because I had just started to learn it and this seemed the perfect opportunity to build a project using it. It should be noted that I used `@redux/toolkit` and `redux-saga`, and have only used Redux with these tools. I chose `axios` to handle my API requests because I had some experience with it and I think `axios` helps keep the code more organized by instantiating objects to represent the APIs you might access.

One of the main challenges I ran into was Responsiveness. Because of the predetermined design, it was challenging to make the layout responsive as the mobile design of the website was quite different from the desktop design in many aspects. The most challenging part was making the Pokémons' details page responsive.

Also, because I'm not very used to Redux, I had some difficulty with it, especially when dealing with asynchronous data.

Overall, I was satisfied with this project, it was certainly challenging at times, but I think I learned a lot while making it, especially about Redux and Styled Components.

Although I think all the requirements have been met, I do intend on adding more features to the project, like a quiz.
