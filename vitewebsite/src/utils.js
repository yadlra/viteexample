export const getCurrentTime = () => {
    return new Date().toLocaleDateString();
};

export const greet = (name) => {
    return `Hello, ${name}!`;
}