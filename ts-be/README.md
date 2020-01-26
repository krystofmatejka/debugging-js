# Debugging typescript

## PhpStorm

- Install ts-node `npm i -D ts-node`
- Add settings in Run > Edit configurations > +
- Set Node.js:
  - node interpret
  - node parameter `--require ts-node/register`
  - working directory
  - Javascript_file as an entry point to app

Set a new configurations for each stand alone app in phpstorm project.

[Documentation](https://www.jetbrains.com/help/webstorm/running-and-debugging-typescript.html)
