# Debugging node.js

## CLI

```
node inspect node-be/index.js
```

Type `help` command in inspect REPL to see more options.

## PhpStorm

- Add settings in Run > Edit configurations  > +
- Set Node.js:
  - node interpret
  - working directory
  - Javascript_file as an entry point to app

Set a new configurations for each stand alone app in phpstorm project.

[Documentation](https://www.jetbrains.com/help/phpstorm/running-and-debugging-node-js.html#)
