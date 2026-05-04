
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa"
import { SiC, SiMysql } from "react-icons/si"

const Skills = () => {
  const skills = [
    { icon: <SiC />, name: "C" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
  ]

  return (
    <section  id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">

      <h2 className="text-3xl text-amber-200 font-bold mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-xl 
                       hover:scale-110 hover:bg-amber-300 transition duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-2">
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills