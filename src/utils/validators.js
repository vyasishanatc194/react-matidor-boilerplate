const isValidPassword = (value) => {
    // password is required to be between 6 and 256 characters long and contain at least one digit and one non-digit character
    return (value.length >= 6 &&
        value.length <= 12);
};

const isValidEmailAddress = (value) => {
    return null !== value.match(/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]{2,})$/);
}
export { isValidPassword, isValidEmailAddress};
