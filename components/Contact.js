import Title from "@components/Title";
import Form from "@components/Form";

export default function Contact() {
  return (
    <section>
      <Title title={"Contact"} />
      <div className="relative z-10 rounded-md shadow-md bg-[#777777] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-gray-200 my-4">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
