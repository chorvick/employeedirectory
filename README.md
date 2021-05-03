# Unit 19: React Week 1

## Overview

Our full-stack journey is coming full circle. We started at the front-end, creating simple apps with HTML, CSS and JavaScript, and we will end at the front-end, working with the same three core technologies of the web, but from a much different angle, to build complex user interfaces.

By now, you probably noted a theme in the history of the web. When developers find themselves repeatedly solving the same problems, they begin looking for standardized solutions. Our users now demand increased interactivity _and_ speed in a web application. As the complexity of an application grows, so too does the number of DOM manipulations required to render content, thus resulting in a slower user-experience.

In 2013, the developers at Facebook released React, a library that addresses this performance issue using the concept of a _virtual DOM_, an in-memory representation of the DOM that only updates nodes that have changed and not the entire DOM itself. In addition to improvements in user experience, React speeds up the development workflow as we can break our user interface into reusable components and, with the possible exception of JSX, write our components entirely in JavaScript without the need to learn the particular syntax of a template engine. React was quickly adopted by companies large and small and continues to gain in popularity as the library matures.

## Key Topics

- React
- Create React App
- Components
- JSX
- JSX variables
- Props

## Comprehension Check

You will be employer-ready if you can answer the following questions:

1. What is the virtual DOM?
2. How does one implement a stateful component?
3. What does it mean to mutate state?

## Learning Objectives

You will be employer-competitive if you are able to:

- Explain the purpose of the Create React App dependencies Webpack and Babel
- Explain and implement JSX and JSX variables to dynamically render HTML
- Compose functional and stateful components and explain their differences
- Explain one-way data binding and its relationship to components and props
- Compose event handlers and update application state based on user form input

## Homework: Employee Directory

- For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## Helpful Links

- [Why did we build React?](https://reactjs.org/blog/2013/06/05/why-react.html)
- [React.js](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Babel](https://babeljs.io/docs/en/)
- [webpack](https://webpack.js.org/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Components and Props](https://reactjs.org/docs/components-and-props.html#es6-classes)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

- As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render.

The user should be able to:

- Sort the table by at least one category

- Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

- Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

- Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

- Don't commit half done work, for the sake of your collaborators (and your future self!)

- Test your application before you commit to ensure functionality at every step in the development process

- We would like you to have well over 200 commits by graduation, so commit early and often!

- Deploy this site to GitHub Pages using the [Create React App docs for deployment.](https://create-react-app.dev/docs/deployment/#github-pages)

- **Important**: Be sure to push your codebase to GitHub and **NOT** your built and deployed code. Ensure this happens by following the above instructions and using the `gh-pages` branch to host the deployed application's code.

## Submission on BCS

You are required to submit the following:

- the URL to the deployed application

- the URL to the Github repository
