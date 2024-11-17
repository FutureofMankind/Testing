import ValidatorPlay from './ValidatorPlay';
import Validator from './Validator';

const domElement = document.getElementById('hw-4');

const validatorPlay = new ValidatorPlay();
validatorPlay.bindToDOM(domElement);

const validator = new Validator(validatorPlay);
validator.init();

console.log('app started');
