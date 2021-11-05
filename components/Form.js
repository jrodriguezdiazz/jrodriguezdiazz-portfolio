export default function Form() {
  return (
    <form className="form rounded-lg bg-white p-4 flex flex-col">
      <label htmlFor="name" className="text-sm text-gray-600 mx-4">
        {' '}
        Your Name
      </label>
      <input
        required
        autoComplete={'name'}
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        id="name"
        name="name"
        placeholder="Type your username"
      />
      <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
        Email
      </label>
      <input
        required
        autoComplete={'email'}
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="email"
        id="email"
        placeholder="example@domain.com"
      />
      <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
        Message
      </label>
      <textarea
        required
        rows="4"
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="message"
        id="message"
      />
      <button
        type="submit"
        className="bg-blue-500 rounded-md w-2/5 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
      >
        Send Message
      </button>
    </form>
  );
}
