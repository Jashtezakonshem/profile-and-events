module.exports = function(dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};