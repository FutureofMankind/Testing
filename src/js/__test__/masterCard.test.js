import masterCard from '../modules/masterCard';

test.each([
  ['visa', '4024007143634649', false],
  ['visa', '4539371730302749', false],
  ['visa', '4485544324588998845', false],
  ['visa Electron', '4026221903036279', false],
  ['visa Electron', '4508491265531525', false],
  ['visa Electron', '4917393342407908', false],
  ['MasterCard', '5215482771003969', true],
  ['MasterCard', '5208195655263553', true],
  ['MasterCard', '2720992987239038', true],
  ['Maestro', '6304036190376032', false],
  ['Maestro', '5893482477262280', false],
  ['Maestro', '5018515576427427', false],
  ['JCB', '3545435911852410', false],
  ['JCB', '3530300421993970', false],
  ['JCB', '3589076095506636420', false],
])(
  ('test masterCard, value = %s: %s'),
  (_, numberCard, expected) => {
    const received = masterCard(numberCard);

    expect(received).toEqual(expected);
  },
);
