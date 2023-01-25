import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>How does react work?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>What is the difference between props and state in react?</h2>
            <p>While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
            <h2>What are the uses in useeffect in react?</h2>
            <p>useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</p>
        </div>
    );
};

export default Question;