module.exports = function(dateString) {
    return new Date(dateString).toLocaleDateString();
};