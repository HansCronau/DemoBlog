EcoChain Blog
=============

I created this project early 2018 as an assessment for *EcoChain*.
The goal was to create a blog with proper url handling, text snippets, and search functionality.

I used the opportunity to get aquainted with software like Node and React, which were completely new to me at the time. (See "Software used".)
While there is much I would do differently now (2019), the project does demonstrate my approach to new tech.


Take it for a spin
------------------

You can run this demo using either NPM or Docker.

### NPM

To run this code yourself, you'll need Nodejs.  
The project can then be hosted by running the following in the project folder:

```
npm install
npm start
```

### Docker

If you prefer running the code within a Docker container, run the following from the project folder:

```
docker build -t hans/demoblog .
docker run -p 3000:3000 hans/demoblog
```

Software used
-------------

- lodash
- Docker
- Momentjs/React Moment
- Nodejs
- npm & Yarn
- React
- React Router
- Semantic UI React
