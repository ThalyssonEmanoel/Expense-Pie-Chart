# Introduction

This is a simple project that uses the **Next.js** framework, which works with **React**, along with a Python script. The primary goal of this project is to create a web application that calculates expenses and displays a pie chart to the user. The chart shows, in percentages, what the user spent the most on and what they spent the least on.

## Step-by-Step Guide

If you want to run this code using a code editor, follow these steps:

* **Install** <a href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script" target="_blank">NVM</a>;
* **Node version** -> 21.7.3 
* Run `npm run dev` to start the website's front-end;
* Open a new terminal;
* Run `npm run api` (make sure you are using Node version 21.7.3);
* Go to the port indicated by Next.js/front-end;
* Be happy.

## Tools

### Python 3

Install [Python](https://www.python.org/downloads/)

### NVM Installation

To install **NVM** (Node Version Manager), run the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
### Node.js

```bash
nvm use 21.7.3  # Or install it if it's not already installed
```
