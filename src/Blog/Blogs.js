import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider text-3xl font-bold">Question No : 1</div>
                <div className="grid h-60 card bg-base-300 rounded-box place-items-center p-5">
                    <h1 className='text-2xl'>
                        Question: What are the different ways to manage a state in a react application ?
                    </h1>
                    <h4 className='text-center font-bold'>Answer : Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                    </h4>
                </div>
                <div className="divider text-3xl font-bold">Question No : 2</div>
                <div className="grid h-60 card bg-base-300 rounded-box place-items-center p-5">
                    <h1 className='text-2xl'>
                        Question: how does prototypical inheritance work ?
                    </h1>
                    <h4 className='text-center font-bold'>Answer : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                    </h4>
                </div>
                <div className="divider text-3xl font-bold">Question No : 3</div>
                <div className="grid h-40 card bg-base-300 rounded-box place-items-center p-5">
                    <h1 className='text-2xl'>
                        Question: what is unit test why should we write unit test ?
                    </h1>
                    <h4 className='text-center mt-2 font-bold'>Answer :The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly.
                    </h4>
                </div>
                <div className="divider text-3xl font-bold">Question No : 4</div>
                <div className="grid h-40 card bg-base-300 rounded-box place-items-center p-5">
                    <h1 className='text-2xl'>
                        Question: react vs angular vs vue ?
                    </h1>
                    <h4 className='text-center mt-2 font-bold'>Answer : A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;