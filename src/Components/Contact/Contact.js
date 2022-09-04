import React from 'react';
const Contact = () => {
    return (
        <div className="my-16 p-10" id='cform' style={{background: `url("https://mosaiccounselling.co.uk/wp-content/uploads/2021/08/contact-powershop-stoddart-1024x478-1.jpg")`, backgroundSize:'cover'}}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className='text-center text-gray font-bold mb-7'>
          <h4 className='text-xl'>Contact Us</h4>
            <h1 className='text-3xl'>Stay connected with us</h1>
          </div>
            <form className="sm:max-w-sm lg:max-w-lg mx-auto textarea-primary shadow-2xl">
              <div className="form-control text-xl">
                <input type="email" placeholder="Email Address" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <input type="text" placeholder="Subject" className="input input-bordered my-5" />
              </div>
              <div className="form-control">
              <textarea className="textarea textarea-success" placeholder="Your message"></textarea>
              </div>
              <div className="form-control">
                <button className="btn text-white bg-gradient-to-r from-green-500 via-green-400 to-green-500 my-5">Submit</button>
              </div>
          </form>
      </div>
    );
};

export default Contact;