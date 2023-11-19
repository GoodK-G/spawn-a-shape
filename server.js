const prompt = require('prompt');
const fs = require('fs');
const createSvg = require('svg-parser');

async function getUserInput()  {
    const response =await prompts([
        {
            type: 'text',
            name: 'text',
            message: 'enter up to three characters for text inside of the shape: '
        },
        {
            type: 'text',
            name: 'textColor',
            message: 'Enter the color of the text here (keyword or hexidecimal): '
        },
        {
            type: 'select',
            name: 'shape',
            message:'choose a shape: ',
            choices: [
                {title: 'Circle', value:'circle'},
                {title: 'Triangle', value:'triangle'},
                {title: 'Square', value: 'square'}
            ]
        },
        {
            type: 'text',
            name: 'shapeColor',
            message: 'Enter shape color! (keyword or hexadecimal): '
        }
    ]);
    return response;
}