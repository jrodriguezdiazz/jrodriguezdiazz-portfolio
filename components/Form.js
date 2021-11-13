import { useRef } from 'react';
import emailJs from 'emailjs-com';
import {
  NEXT_PUBLIC_SERVICE_ID,
  NEXT_PUBLIC_USER_ID,
  NEXT_PUBLIC_TEMPLATE_ID,
} from '@lib/getEnv';
import { alertMessage } from '@lib/alertMessage';

export default function Form() {
  const form = useRef();

  const sendEmail = async event => {
    try {
      event.preventDefault();
      const emailJSResponse = await emailJs.sendForm(
        NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        NEXT_PUBLIC_USER_ID
      );
      if (emailJSResponse.status === 200) {
        await alertMessage({
          icon: 'success',
          title: 'The email has been sent successfully',
        });
      } else {
        await alertMessage({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Try to communicate with me on LinkedIn',
        });
      }
      event.target.reset();
    } catch (error) {
      await alertMessage({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Try to communicate with me on LinkedIn',
      });
    }
  };

  return (
    <form
      className="form rounded-lg bg-white p-4 flex flex-col"
      ref={form}
      onSubmit={sendEmail}
    >
      <label htmlFor="subject" className="text-sm text-gray-600 mx-4 mt-4">
        {' '}
        Subject
      </label>
      <input
        required
        type="text"
        className="bg-white border-2 border-gray-200 rounded py-2 mt-2 px-1 mx-4 text-gray-700 focus:outline-none focus:border-grey-500"
        id="subject"
        name="subject"
        placeholder="What is your subject?"
        minLength="10"
        maxLength="30"
      />
      <label htmlFor="name" className="text-sm text-gray-600 mx-4 mt-4">
        {' '}
        Your Name
      </label>
      <input
        required
        autoComplete={'name'}
        type="text"
        className="bg-white border-2 border-gray-200 rounded py-2 mt-2 px-1 mx-4 text-gray-700 focus:outline-none focus:border-grey-500"
        id="name"
        name="name"
        placeholder="Type your username"
        pattern="\^[a-z ,.'-]+$\i"
        title="Invalid username."
        minLength="2"
        maxLength="20"
      />
      <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
        Email
      </label>
      <input
        required
        autoComplete={'email'}
        type="text"
        className="bg-white border-2 border-gray-200 rounded py-2 mt-2 px-1 mx-4 text-gray-700 focus:outline-none focus:border-grey-500"
        name="email"
        id="email"
        placeholder="example@domain.com"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        title="Invalid email address."
      />
      <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
        Message
      </label>
      <textarea
        required
        rows="4"
        type="text"
        className="bg-white border-2 border-gray-200 rounded py-2 mt-2 px-1 mx-4 text-gray-700 focus:outline-none focus:border-grey-500"
        name="message"
        id="message"
      />
      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-700 transition duration-2000 rounded-md w-2/5 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold rounded-full inline-block uppercase shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
