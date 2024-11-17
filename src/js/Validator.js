import luna from './modules/luna';
import visa from './modules/visa';
import masterCard from './modules/masterCard';
import mir from './modules/mir';

export default class Validator {
  constructor(validatorPlay) {
    this.validatorPlay = validatorPlay;
  }

  init() {
    this.validatorPlay.addSubmitListeners(this.onSubmit.bind(this));
    this.validatorPlay.addValueListeners(this.onInput.bind(this));

    this.validatorPlay.drawUI();
  }

  onSubmit(value) {
    this.validating(value);
  }

  onInput() {
    this.validatorPlay.labelText('-');
  }

  validating(value) {
    this.validatorPlay.labelText('-');

    const lunaResult = luna(value);
    if (!lunaResult) {
      this.validatorPlay.labelText('invalid');
      return false;
    }

    const visaResult = visa(value);
    const masterCardResult = masterCard(value);
    const mirResult = mir(value);

    if (visaResult) { this.validatorPlay.labelText('Visa'); }
    if (masterCardResult) { this.validatorPlay.labelText('MasterCard'); }
    if (mirResult) { this.validatorPlay.labelText('Mir'); }

    if (!visaResult && !masterCardResult && !mirResult) {
      this.validatorPlay.labelText('valid');
    }

    return true;
  }
}
