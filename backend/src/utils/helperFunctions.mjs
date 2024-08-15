
/**
Function: toSingular
Description: Converts a word from singular or plural to singular form.
@param {string} word - The word to be converted.
@returns {string} - The word in singular form.
*/
const toSingular = (word) => {
    if (word.endsWith('s') || word.endsWith('es')) {
        // If the word ends with 's' or 'es', remove the ending to make it singular
        return word.slice(0, -1);
    } else if (word.endsWith('ies')) {
        // If the word ends with 'ies', replace 'ies' with 'y' to make it singular
        return word.slice(0, -3) + 'y';
    } else {
        // For other cases, it's already singular
        return word;
    }
};

/**
Function: toPlural
Description: Converts a word from singular or plural to Plural form.
@param {string} word - The word to be converted.
@returns {string} - The word in Plural form.
*/
const toPlural = (word) => {
    if (word.endsWith('s') || word.endsWith('es')) {
        // If the word already ends with 's' or 'es', it's already plural
        return word;
    } else if (word.endsWith('y')) {
        // If the word ends with 'y', replace 'y' with 'ies' to make it plural
        return word.slice(0, -1) + 'ies';
    } else {
        // For other cases, simply add 's' to the end to make it plural
        return word + 's';
    }
};

export{
    toSingular,
    toPlural
}
