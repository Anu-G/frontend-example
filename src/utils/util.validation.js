export const inputLenValidator = (text, len) => text.length >= Number(len);

export const inputPhoneValidator = (text) => /^(^\+[0-9]+|[0-9]+)/.test(text);

export const inputEmailValidator = (text) => /\S+@\S+\.\S+/.test(text);

export const inputPriceValidator = (text) => /[0-9]/.test(text);

// del, backspc, tab, esc, enter
export const allowedKey = [46, 8, 9, 27, 13, 110,];

// ctrl/command + [A/C/V]
export const allowedCommand = (e) => ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 67) && (e.ctrlKey === true || e.metaKey === true));

// home, end, left, right, down, up
export const allowedNavigation = (e) => (e.keyCode >= 35 && e.keyCode <= 40);

// allow +
export const allowPlus = (e) => ((e.keyCode == 61 || e.keyCode == 107) && (e.shiftKey === true));