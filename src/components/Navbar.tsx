
const Navbar = () => {
 
    
  
  return (
    
    <div className= "sticky top-0 z-10 transition-all   bg-gray-700 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Mayuri <span className='text-amber-300'>Girase</span></div>
      
      
         <nav >
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#project" className="hover:text-gray-400">Project</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
         <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        
    </nav>
      
    </div>
  
  )
}

export default Navbar
