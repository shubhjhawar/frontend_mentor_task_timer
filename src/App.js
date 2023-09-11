import Banner from './components/Banner';
import Socials from './components/Socials';
import Timer from './components/Timer';
import './App.css';
import stars from "./assets/images/bg-stars.svg";

function App() {
  return (
    <div className="relative bg-[#0E1A24]">
      <img 
        src={stars}
        alt="stars"
        className='z-0 absolute inset-0 object-cover '
      />
      <div className="flex flex-1 flex-col items-center justify-center h-screen text-white z-10">
        <div>
          <Banner />
        </div>

        <div>
          <Timer />
        </div>

        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default App;
