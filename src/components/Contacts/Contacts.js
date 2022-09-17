import React from 'react';
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
    <div className='contact-form'>
      <div className='email'>
        <strong>Email:</strong> mbolonzi.design@gmail.com
      </div>
      <div className='phone'>
        <strong>Phone:</strong> +254 746 488 732
      </div>
      <div>
        <h4>Leave me a message...</h4>
      </div>
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
  )
}
export default Contacts;