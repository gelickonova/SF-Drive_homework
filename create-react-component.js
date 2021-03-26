const yargs = require('yargs');
const fs = require('fs');



const argv = yargs
    .option('functional', {alias: 'f'})
    .option('class', {alias: 'c'})
    .option('path', {default: './src/components/'})
    .command('create <name>', 'creates new react file', {}, (argv) => {
        if (argv.functional)
        {fs.writeFile(`${argv.path}${argv.name}.js`, `import React from 'react';\n\nexport const ${argv.name} = (props) => {\n  return (\n    <div>${argv.name} works</div>\n  );\n}`, (err) => {
            if (err) {
                console.error(err);
            }
            console.log('done!')
        })} else if (argv.class)
        {fs.writeFile(`${argv.path}${argv.name}.js`, `import React from 'react';\n\nexport default class ${argv.name} extends React.Component {\n    render() {\n        return(\n            <div>${argv.name} works</div>\n        )\n    }\n}`, (err) => {
            if (err) {
                console.error(err);
            }
            console.log('done!')
        })}
    })
    .argv