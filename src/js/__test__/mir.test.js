import mir from '../modules/mir';

test.each([
  ['visa', '4024007143634649', false],
  ['visa', '4539371730302749', false],
  ['visa', '4485544324588998845', false],
  ['visa Electron', '4026221903036279', false],
  ['visa Electron', '4508491265531525', false],
  ['visa Electron', '4917393342407908', false],
  ['MasterCard', '5215482771003969', false],
  ['MasterCard', '5208195655263553', false],
  ['MasterCard', '2720992987239038', false],
  ['MIR', '2204432163648392', true],
  ['MIR', '2204471447988851', true],
  ['MIR', '2200343193828207', true],
  ['Maestro', '6304036190376032', false],
  ['Maestro', '5893482477262280', false],
  ['Maestro', '5018515576427427', false],
  ['JCB', '3545435911852410', false],
  ['JCB', '3530300421993970', false],
  ['JCB', '3589076095506636420', false],
])(
  ('test mir, value = %s: %s'),
  (_, numberCard, expected) => {
    const received = mir(numberCard);

    expect(received).toEqual(expected);
  },
);
