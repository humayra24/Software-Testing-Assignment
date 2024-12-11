[![Coverage Status](https://coveralls.io/repos/github/humayra24/Software-Testing-Assignment/badge.svg?branch=main)](https://coveralls.io/github/humayra24/Software-Testing-Assignment?branch=main)

# E-Commerce Library Testing

This repository contains unit tests and continuous integration (CI) pipeline setup for the E-Commerce utility library. The testing framework includes GitHub Actions for CI and Coveralls for test coverage reporting.

## Overview
This project aims to evaluate the usability and maturity of the provided utility library for the E-Commerce application. It includes:
- Unit tests for critical library functions using **Jest**.
- CI pipeline configuration using **GitHub Actions**.
- Coverage reporting integrated with **Coveralls**.

## Prerequisites
1. **Git**: Version control tool to clone and manage the repository.  
   - [Git Homepage](https://git-scm.com)
2. **Node.js**: JavaScript runtime environment (version 14 or later recommended).  
   - [Node.js Homepage](https://nodejs.org/en)  
3. **npm**: Node package manager, included with Node.js installation.  

***Optional tools***:  
 A virtual machine for isolated environment testing.
  

## Setup Instructions

### Local Environment
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/humayra24/Software-Testing-Assignment.git

2. **Install Dependencies**:
    ```bash
   npm install

4.  **Run a Simple Test (to verify setup)**:
    ```bash
    npm test
    
### CI Pipeline
**GitHub Actions Workflow**:
- A pre-configured .github/workflows/node_test.yml file ensures automated testing on every push.

**Coveralls Integration**:
- Link your repository to Coveralls for test coverage reporting. 
- Ensure your GitHub repository is connected to Coveralls.

### How to Run Tests
**Run All Tests Locally**:
 ```bash
npm test
```
**Generate Coverage Reports Locally**:
 ```bash
npm run coverage
```
**Coverage Reports**
- Coverage reports are generated using Jest and uploaded to Coveralls.
- Add the Coveralls badge to your repository README for easy access.





