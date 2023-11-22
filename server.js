const prompts = require('prompts');
const fs = require('fs');
const createSvg = require('svg-parser');
//These are the questions for the different parameters that you will enter in to the console.
const questions = [
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
];
//this is the waiting for the server to run, and the prompts to be answered and this will be stored in the response const.
// (async () => {
//     const response = await prompts(questions);
//   })();

  async function createSVGFile() {
    try {
      const response = await prompts(questions);
  
      // Use response data to create an SVG
      const svgContent = createSvg(response);
  
      // Write SVG content to a file named 'logo.svg'
      fs.writeFileSync('logo.svg', svgContent);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  createSVGFile();