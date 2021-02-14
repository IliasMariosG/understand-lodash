# understand lodash

Implementing some methods from the [lodash.js](https://lodash.com/docs/4.17.15) library which is used to work with arrays, numbers, objects, string etc.

This exercise is part of my JavaScript practice journey. It is intended to improve problem-solving and understand how the methods work.

The test suite has been pre-written. It's part of the Codecademy Pro Full-Stack Path.

---
The only dependency to getting started is node.

Node version used: ```v14.15.3```

## Setup

If you already have node installed, feel free to jump to the next section.

Navigate to the [Node website](https://nodejs.org/en/) and download the version labeled "LTS".

For diferrent operating systems and version you can consult the [Node downloads page](https://nodejs.org/en/download/).

After your download is complete, open the downloaded installation package and follow the installation instructions.

After installation, open a new terminal and run `which node` to find out if it's correctly installed. If so, this command specifies the path in which node is running.

You can also check which version of Node you downloaded with the `node -v` command.

## Run

- Fork the current repo

- Jump to the terminal

- Create a directory locally on your computer:

   e.g. `lodash/`

- Jump to the new directory:

  `cd lodash/`

- Still in the terminal, type:

  $ `node _.js`

  The tests should all pass.

---

## Breakdown

If you want to try experimenting on you own, you may delete the content of the `_.js` file and follow the logic below:

- Create Lodash Object

  Create a new variable called `_` that is initialised to an empty object.

- About the Test Suite

  The test files are pre-written for each task and can be found in the `test` directory. To check if the lodash object is initialised correcly try running:
  
  `node test/lodash.js`

- "Number" method `clamp()`

  - Add a method called `clamp` to the object `_`.
  - `clamp` takes three parameters: `number`, `lower` and `upper`

:TODO

Add logic guidelines to complete the challenge. Repeat running test instruction.
