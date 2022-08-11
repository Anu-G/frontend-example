export const inputLenValidator = (text, len) => text.length >= Number(len);

export const inputPhoneValidator = (text) => /^\+[0-9]+|[0-9]+$/.test(text)

export const inputEmailValidator = (text) => /\S+@\S+\.\S+/.test(text)