import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form className="w-full max-w-md flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition p-3 rounded font-semibold"
        >
          Send Message
        </button>

      </form>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8 text-2xl">

        <a
          href="https://github.com/your-username"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:your@email.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>

      </div>

    </section>
  )
}

export default Contact