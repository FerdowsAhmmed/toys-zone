

const Contact = () => {
    return (
    <section className="w-9/12 mx-auto my-32" data-aos="zoom-in">
      <h1 className="text-center text-4xl">Feel free to contact with us</h1>
           <div className=" mx-auto  px-10"   >
      <form className="bg-amber-600 p-10 mt-4">
        <div className="fle">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-primary input-bordered w-full"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-primary input-bordered w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-primary textarea-bordered w-full"
            placeholder="Enter your message"
            required
          />
        </div>
        <div>
          <button className="btn btn-primary w-full" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </section>
  );
}

export default Contact;