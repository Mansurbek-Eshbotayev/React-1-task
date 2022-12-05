import './App.scss';
import Header from "./components/Header/Header"
import CoverHead from "./components/CoverHead/CoverHead"
import LittleCard from "./components/LittleCard/LittleCard"
import MinTitle from "./components/MinTitle/MinTitle"
import ResultItem from "./components/ResultItem/ResultItem"
import LastCard from "./components/LastCard/LastCard"
import Logo from "./assets/images/logo.svg"
function App() {
  return (
    <div className="App">
    <div className='wrapper'>
      <Header img={Logo}/>
      <div className='cover__list'>
        <div className='container'>
          <CoverHead />
          <ul className='little__list'>
            <LittleCard text="Unresolved" number="60" />
            <LittleCard text="Overdue" number="16" />
            <LittleCard text="Open" number="43" />
            <LittleCard text="On hold" number="64" />
          </ul>
          <div className='content__list'>
            <MinTitle />
            
            <ul className='result__list'>
              <ResultItem text="Resolved" number="449" />
              <ResultItem text="Received" number="426" />
              <ResultItem text="Average first response time" number="33m" />
              <ResultItem text="Average response time" number="3h 8m" />
              <ResultItem text="Resolution within SLA" number="94%" />
            </ul>
          </div>
          <div className='last__card'>
           <LastCard titl="Unresolved tickets" texting="Group: Support" link="View details" />
           <LastCard titl="Tasks" texting="Today" link="View all" />
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default App;
  