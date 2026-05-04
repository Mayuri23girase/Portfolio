
const Project = () => {
  return (
    <section id="project">
    <div className="bg-gray-900 p-8">
      <h1 className="text-3xl py-12 font-bold text-center text-amber-200 mb-4">Projects</h1>
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded shadow hover:bg-amber-100">   
          <h2 className="text-xl font-semibold">Project 1: Portfolio Website</h2>
          <p className="text-gray-600">A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.</p>
        </div>
        <div className="bg-white p-4 rounded shadow hover:bg-amber-100">
          <h2 className="text-xl font-semibold">Project 2: Budget Meal planner</h2>
          <p className="text-gray-600">A web application for planning meals within a budget, built with React and Firebase.</p>
        </div>
          <div className="bg-white p-4 rounded shadow hover:bg-amber-100">
          <h2 className="text-xl font-semibold">Project 3: Entry and Exit moitoring system</h2>
          <p className="text-gray-600">A real-time monitoring system for tracking entry and exit of individuals in a building, developed using React and Node.js.</p>
        </div>
         </div>
      </div>
</section>
  
  )
}

export default Project
