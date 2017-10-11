# META+LAB UI Kit
> Official META+LAB UI Kit

## Getting Started
Welcome to the project. Start by installing the necessary repo dependencies. 
```bash
$ yarn install
````
Learn more about [Yarn](https://yarnpkg.com/en/docs/getting-started)

## devDependencies
```bash
$ yarn add laravel-mix
$ yarn add cross-env
$ yarn add font-awesome
$ yarn add normalize
````

## Webpack Front-End Commands
```bash
# One-Time Compile Files For Development
$ yarn run dev

# One-Time Compile Files For Production
$ yarn run prod
>Should only be use during final stages of development

# Watching Assets For Changes
$ yarn run watch
```
You may find that in certain environments Webpack isn't updating when your files change using `yarn run watch`. If this is the case on your system, consider using the `watch-poll` command:
```bash
$ yarn run watch-poll
````
### Installing Yarn
```bash
# Mac
$ brew install yarn

# Windows
$ choco install yarn
```
### Managing Front-End Yarn Packages
```bash
$ yarn add <package-name>
$ yarn upgrade <package-name>
$ yarn remove <package-name>
```

### Required Learning
Front-End
1. SASS
2. BEM
