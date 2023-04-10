const FormMessage = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-col">
          <label className="font-montserrat font-medium font-lg">
            Your Name
          </label>
          <input
            className="border border-[#BDCDD6] w-[285px] px-2 py-1 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-montserrat font-medium font-lg">
            Your Email
          </label>
          <input
            className="border border-[#BDCDD6] w-[285px] px-2 py-1 rounded-sm"
            type="email"
          />
        </div>
      </div>
      <textarea
        placeholder="Type your message here..."
        className="h-36 border border-[#BDCDD6] px-2 py-1 rounded-sm placeholder:text-sm placeholder:tracking-wider"
      />
      <button
        type="submit"
        className="bg-slate-900 p-2 mx-auto text-sm text-white rounded-sm"
      >
        Send Message
      </button>
    </form>
  );
};

export default FormMessage;
