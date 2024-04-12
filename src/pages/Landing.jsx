import videoBg from '../assets/videoBg.mp4'
const Landing = () => {
    return (
      <div className=' relative w-screen h-screen'>
         <div className="overlay"></div>
       <video src={videoBg} autoPlay loop muted  className='w-screen h-screen object-cover'/>
       <div className='flex flex-col justify-center items-center absolute top-0 w-screen h-screen text-white'>
        <h1 className=' text-2xl md:text-6xl font-bold'>Welcome to Tech Profuse </h1>
        <h2 className=' text-lg md:text-2xl'>Unleashing Cloud Potential, Transforming Businesses!</h2>
       </div>
      </div>
    );
  };
  
  export default Landing;
  