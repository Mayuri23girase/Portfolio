const About = () => {
  return (
    <section  id ="about" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-6">
      
      <h2 className="text-3xl font-bold mb-6 text-center text-amber-200">
        About Me
      </h2>
            
      <div className="max-w-3xl text-semibold text-gray-300 space-y-4">
         
        <p>
          Hi, I'm Mayuri! I'm a passionate web developer based in India.
          I specialize in building responsive and user-friendly web applications using React and TypeScript.
        </p>

        <div>
          <h3 className="font-bold text-lg">🎓 Education</h3>
          <p>
            I am currently pursuing my degree in Btech from R.C. Patel Institute of Technology.
            I have developed a strong foundation in programming and web development.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">💼 Experience</h3>
          <p>
            I have worked on multiple projects including portfolio websites and web applications.
            I focus on clean UI design and efficient functionality.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About