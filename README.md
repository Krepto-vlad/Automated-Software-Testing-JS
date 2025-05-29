## Automated testing Project
23-HR-JS1

This project is a demo for automated UI testing (playwright).

---
### Requirements

* Node.js (v22 or higher)
* npm o yarn
* Chrome browser installed

#### Useful links:
- Playwright https://playwright.dev/
- Node https://nodejs.org/en
- Cucumber https://cucumber.io/
---


### Installation

Clone this repository and install dependencies:
```bash
git clone https://github.com/Krepto-vlad/Automated-Software-Testing-JS.git
```

Install dependencies:
```bash
npm i
```

### Running tests
Run all tests: 
```bash
npm run test
```

---

Run BDD tests:
```bash
npm run test:BDD
```
---

Run BDD test by tag @date
```bash
npx cucumber-js --tags "@date"
```

---

### Project Structure
-`/tests` - contain tests files

-`/pages` - Page Object Model files

-`/helpers` -  auxiliary

-`/features/step_definitions` - steps

-`/features/support` - world

-`/features` - gherkin

---

### CI/CD
The project is configured to run tests automatically using GitHub actions. 
* Daily
* On every pull request

### Test Reports
After each test run, a detailed report is generated

Launch Test Reports:
```bash
npm run test:report
```
