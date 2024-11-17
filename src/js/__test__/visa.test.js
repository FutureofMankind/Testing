import visa from '../modules/visa';

test.each([
  ['visa', '4024007143634649', true],
  ['visa', '4539371730302749', true],
  ['visa', '4485544324588998845', true],
  ['visa Electron', '4026221903036279', true],
  ['visa Electron', '4508491265531525', true],
  ['visa Electron', '4917393342407908', true],
  ['MasterCard', '5215482771003969', false],
  ['MasterCard', '5208195655263553', false],
  ['MasterCard', '2720992987239038', false],
  ['MIR', '2204432163648392', false],
  ['MIR', '2204471447988851', false],
  ['MIR', '2200343193828207', false],
  ['Maestro', '6304036190376032', false],
  ['Maestro', '5893482477262280', false],
  ['Maestro', '5018515576427427', false],
  ['JCB', '3545435911852410', false],
  ['JCB', '3530300421993970', false],
  ['JCB', '3589076095506636420', false],
])(
  ('test visa, value = %s: %s'),
  (_, numberCard, expected) => {
    const received = visa(numberCard);

    expect(received).toEqual(expected);
  },
);
