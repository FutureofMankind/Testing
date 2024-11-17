import luna from '../modules/luna';

test.each([
  ['visa', '4024007143634649', true],
  ['visa', '4539371730302749', true],
  ['visa', '4485544324588998845', true],
  ['visa', '4485544324588998841', false],
  ['visa Electron', '4026221903036279', true],
  ['visa Electron', '4508491265531525', true],
  ['visa Electron', '4917393342407908', true],
  ['visa Electron', '4917393342407901', false],
  ['MasterCard', '5215482771003969', true],
  ['MasterCard', '5208195655263553', true],
  ['MasterCard', '2720992987239038', true],
  ['MasterCard', '2720992987239031', false],
  ['MIR', '2204432163648392', true],
  ['MIR', '2204471447988851', true],
  ['MIR', '2200343193828207', true],
  ['MIR', '2200343193828201', false],
  ['Maestro', '6304036190376032', true],
  ['Maestro', '5893482477262280', true],
  ['Maestro', '5018515576427427', true],
  ['Maestro', '5018515576427421', false],
  ['JCB', '3545435911852410', true],
  ['JCB', '3530300421993970', true],
  ['JCB', '3589076095506636420', true],
  ['JCB', '3589076095506636421', false],
])(
  ('test luna, value = %s: %s'),
  (_, numberCard, expected) => {
    const received = luna(numberCard);

    expect(received).toEqual(expected);
  },
);
