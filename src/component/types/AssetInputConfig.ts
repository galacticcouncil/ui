import IMask from 'imask';

export const maskSettings: IMask.MaskedNumberOptions = {
  mask: Number,
  scale: 18,
  signed: false,
  thousandsSeparator: ' ',
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: '.',
  mapToRadix: ['.'],
};
