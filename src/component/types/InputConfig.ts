import IMask from 'imask';

export const priceMaskSettings: IMask.MaskedNumberOptions = {
  mask: Number,
  scale: 18,
  signed: false,
  thousandsSeparator: ' ',
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: '.',
  mapToRadix: ['.'],
};

export const numberMaskSettings: IMask.MaskedNumberOptions = {
  mask: Number,
  min: 0,
};

export const textMask: RegExp = /^[0-9a-zA-Z]+$/;
