import React from 'react'
import "./Contact.css"


const Contact = () => {
  return (
    <div className='everything'>
    <form>
      <div className='f-part'>
        <h1>Send Us A Message</h1>
        <input placeholder='your name'/>
        <input placeholder='your Email'/>
        <input placeholder='your Phone'/>
      </div>
      <div className='middleman'>
      <textarea name="message" rows="10" cols="30">Drop your Message</textarea>
      <br/>
      <button>Submit here</button>
      </div>

      <div className='down'>
          <div className='down-sec'>
            <h2>Contact Us</h2>
            <p>Holden Park Street, Harris Drive , Lagos, Nigeria</p>
            <p><span>Phone:</span> 0706 941 1946</p>
            <p> <span>Website:</span><a href='nuraluxurylimited.com'> nuraluxurylimited.com</a> </p>
            <p> <span>E-mail:</span><a href='nuraluxurylimited@gmail.com'> nuraluxurylimited@gmail.com</a> </p>
          </div>
        </div>

    </form>
    </div>
  )
}

export default Contact
