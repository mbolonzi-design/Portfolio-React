import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import {Form, Input, Button, TextArea} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './Contacts.css';

function Contacts () {

  const SERVICE_ID ='service_fj9dkxj'
  const TEMPLATE_ID ='template_s90me8a'
  const USER_ID = '8544wOHxpxmAkHLwn'

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Your message has been sent',
          showConfirmButton: false,
          timer: 1500
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          showConfirmButton: false,
          timer: 1500
        });
      });
    e.target.reset()
  }


  return (
    <div id='contact'>
      <section className='contact-sect'>
      <div className='form-container'>
        <h4>Send A Message</h4>
        <form onSubmit={sendEmail}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email'
            type='email'
            icom='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='user_message'
            placeholder='Message'
            required
          />
          <Button type='submit' color='green'>Send</Button>
        </form>
      </div>
      <div className='socials'>
        <h4>Let's Get Social</h4>
        <p>
          Whether you want to talk about a project collaboration, or just say hi, I'd love to hear from you.Simply fill the form and send me an email or send a DM on socials below.
        </p>
        <div className='social-icons'>
          <a href='https://github.com/mbolonzi-design' target='_blank' rel='noreferrer'>
            <FaGithub className='icon github' />
          </a>
          <a href='https://www.linkedin.com/in/mbolonzi-peter/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='icon linkedin' />
          </a>
          <a href='https://twitter.com/mbolonzi_' target='_blank' rel='noreferrer'>
            <FaTwitter className='icon twitter' />
          </a>
        </div>
      </div>
      </section>
    </div>
  )
}
export default Contacts;