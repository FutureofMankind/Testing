import ValidatorPlay from '../ValidatorPlay';
import Validator from '../Validator';

test.each([
  ['Visa', '4024007143634649', true],
  ['Visa', '4539371730302749', true],
  ['Visa', '4485544324588998845', true],
  ['Visa', '4485544324588998841', false],
  ['MasterCard', '5215482771003969', true],
  ['MasterCard', '5208195655263553', true],
  ['MasterCard', '2720992987239038', true],
  ['MasterCard', '2720992987239031', false],
  ['Mir', '2204432163648392', true],
  ['Mir', '2204471447988851', true],
  ['Mir', '2200343193828207', true],
  ['Mir', '2200343193828201', false],
])(
  ('test jsDom, value = %s: %s'),
  (name, numberCard, expected) => {
    document.body.innerHTML = '<div id="container"></div>';
    const domElement = document.querySelector('#container');

    const validatorPlay = new ValidatorPlay();
    validatorPlay.bindToDOM(domElement);

    const validator = new Validator(validatorPlay);
    validator.init();

    const input = domElement.querySelector('[data-id=validator-card]');
    input.value = numberCard;

    const submit = domElement.querySelector('[data-id=validate-btn]');
    submit.click();

    const label = domElement.querySelector('[data-id=validator-label]');

    const received = label.textContent === name;

    expect(received).toEqual(expected);
  },
);
