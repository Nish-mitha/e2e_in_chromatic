# E2E Visual Tests for Playwright in Chromatic

## Overview

I have created a streamlined, Dockerized project showcasing the dynamic duo of Playwright and Chromatic.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone git@github.com:Nish-mitha/e2e_in_chromatic.git
    cd e2e_in_chromatic/
    ```


2. **Update the chromatic script in package.json the file with your chromatic project token:**

    ```bash
    "scripts": {
        //other scripts
        "chromatic": "npx chromatic@latest --build-script-name=build-archive-storybook -t=<your-token>
    },
    ```


3. **Update the tests/ folder with your playwright scripts.**


4. **Spin Up the Docker Container:**

    When there are changes in your website or your playwright scripts make sure that you build the docker file.

    ```bash
    docker-compose build
    ```


5. **View snapshot in storybook:**

    ```bash
    docker-compose up
    ```


6. **Witness the Magic:**
    Visit the Chromatic project and witness Playwright and Chromatic in action. See how this combination effortlessly handles end-to-end tests and keeps a vigilant eye on visual regressions.

    
    Give it a try - it's the coolest combo you didn't know you needed. 



    Happy testing!😁

---

*Note: Ensure that Docker and Docker Compose are installed on your machine before running the integration.*
