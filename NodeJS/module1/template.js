const template = (data) => `
    <h1>Templates</h1>
    <ul>
        ${data.map((word) => {
            return `<li> ${word} </li>`
        }).join('')}
    </ul>
`;
module.exports = template;

// template(['word1','word1','word1','word1','word1']);