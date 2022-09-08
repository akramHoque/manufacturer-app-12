import React from "react";


const Blogs = () => {
  return (
    <div className="mb-20">
      <h1 className="text-5xl font-bold my-8">Welcome to blogs😁</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div class="card w-96 bg-green-200 text-black  mx-auto">
          <div class="card-body">
            <h2 class="card-title ">
              How will you improve the performance of a React Application?
            </h2>
            <p className="font-mono">
              Improving performance of a React Application we should do some
              task, here are some- Firstly we should disable all kind of
              extension temporarily, specially react developer tools, because of
              they can mess with the result of the analysis. Make sure the
              application is running in development mode. That is, the
              application should be running on your localhost.Stop the
              recording.React events will be grouped under the “User Timing”
              label.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-green-200 text-black  mx-auto">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="font-mono">
              here are four main types of state you need to properly manage in
              your React apps: Local (UI) state – Local state is data we manage
              in one or another component.Global (UI) state – Global state is
              data we manage across multiple components.Server state – Data that
              comes from an external server that must be integrated with our UI
              state.URL state – Data that exists on our URLs, including the
              pathname and query parameters.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-green-300  text-black  mx-auto">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p className="font-mono">
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype.Prototypical inheritance allows us to
              reuse the properties or methods from one JavaScript object to
              another through a reference pointer function.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-green-300  text-black  mx-auto">
          <div class="card-body">
            <h2 class="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p className="font-mono">
              UNIT TESTING is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development of an application by the
              developers. Unit Tests isolate a section of code and verify its
              correctness. A unit may be an individual function, method,
              procedure, module, or object.
            </p>
          </div>
        </div>
        <div class="card w-96  mx-auto bg-green-300 text-black">
          <div class="card-body">
            <h2 class="card-title">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <textarea
              rows="7"
              class="textarea textarea-bordered p-2"
              readOnly
              placeholder='const products = [
                { name:"SqcruDriver", desc:"tools", price: "$50" },
                { name:"Cutter", value:"Electric tools", price: "$69" },
                { name:"Tester", value:"Electric tools", price: "$10" },
                { name:"scotch tape", value:"daily needs", price: "$5" },
                { name:"Pipe Cutter", value:"Pipe and fittings", price: "$30" }
            ];
            const object = products.find(obj => obj.name === "scotch tape");
            console.log(object); 
            
            
            output : { name: "scotch tape", value: "daily needs", price: "$5" }'
            ></textarea>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Blogs;