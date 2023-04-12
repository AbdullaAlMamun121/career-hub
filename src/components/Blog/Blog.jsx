import React from 'react';
import HeaderBodyTwo from '../HeaderBodyTwo/HeaderBodyTwo';

const Blog = () => {
    return (
        <>
            <HeaderBodyTwo>Question and Answer</HeaderBodyTwo>
            <div className='mt-5 w-75 mx-auto'>
                <div class="card">
                    <div class="card-header">
                        When should you use context api in react?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Data that might be regarded as "global" or shared among numerous components in your application is shared via React's Context API. The Context API should be used when:

                            Several components need to access the same data at different layers of the component tree. If this is the case, you can use the Context API to provide a means to exchange the data without having to pass it through every intermediate component using props.

                            Prop drilling becomes tedious: Using the Context API can make your code clearer and easier to maintain when you have numerous layers of nested components and passing data down through props becomes time-consuming and difficult.

                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        What is custom hooks in react?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            The reusable code of a React functional component can be taken out using custom hooks. A custom hook is a JavaScript function that makes use of one or more of the built-in React hooks (such as useState, useEffect, etc.) to provide a specific capability that may be shared by numerous components.

                            The use of custom hooks enables programmers to transform complex logic into reusable and testable routines. They may be used for anything involving React hooks or for obtaining data via APIs.

                            A function that makes use of one or more of the built-in React hooks can be created and exported to construct a custom hook in React. As with any other React hook, once you've generated a custom one, you may use it in any functional component.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        What is useRef() in React?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            React has a built-in hook called useRef that lets you make mutable objects that last through several renderings of functional components. If you want a value to remain constant across re-renders, you can use this object to hold a reference to a DOM element or any other value.

                            A ref object that can store any value is returned by useRef and is mutable. Using the current property of the returned object, the ref's value can be obtained. When a ref object's value is changed, the component is not re-rendered, unlike state variables established with the useState hook.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        What is useMemo() in React?
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            React's built-in useMemo hook enables you to improve the speed of your functional components by memoizing a function call's outcome.

                            Simply put, useMemo stores a function call's outcome and returns it rather than recalculating it each time the component appears. When expensive computations or procedures are routinely carried out yet the output doesn't change frequently, this can be helpful.

                            A function that executes the costly calculation and an array of dependents are the two arguments the useMemo hook accepts. If any of the dependencies have changed since the last render, the function will only be re-run.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;