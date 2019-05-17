# ODE-APP

Web Pipeline For Kinetic (ODE-Based) Models.

## Development

> This project uses StandardJS for styling, linting and formatting purposes. Please find more documentation related to that [here](https://standardjs.com/).

The app consists of 2 components; the React Client and Backend Node server. All the react components go into the src folder where as the backend has its independent folders for controllers and api routes.

Follow the below instructions to get the app up and running:

- You need Node & Yarn to run this application. Download them here - [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com).

- First you will need to install the dependencies of the project. Do that by running this:

  ```bash
  yarn
  ```

- Then run the following command to start the React Client and Node server simultaneously:

  ```bash
  yarn dev
  ```

## Other Scripts

- To run the node server independently, use:

  ```bash
  yarn server
  ```

- To run the react client independently, use:

  ```bash
  yarn client
  ```

- To run tests on the react client, use:

  ```bash
  yarn client-test
  ```

- To build a production react client, use:

  ```bash
  yarn client-build
  ```

- To eject the configuartiona and scripts from the react-scripts package, use:

  ```bash
  yarn client-eject
  ```
