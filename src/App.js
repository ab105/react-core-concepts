import logo from './logo.svg';
import './App.css';

function App() {

  const number = 555;
  const singer = {
    name : 'Dr. Mahfuz',
    job : 'singer'
  };
  const singer2 = {
    name : 'Eva rahman',
    job : 'kokil konti'
  };

  const singerStyle = {
    backgroundColor: 'blue',
    color: 'white'
  };
  
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Chan mia', 'Omar Sani'];


  // array of object
  const cinemas = [
    {nayok: 'koober', nayika: 'kopila'},
    {nayok: 'Rubel', nayika: 'Moushumi'},
    {nayok: 'Razzak', nayika: 'Shabana'},
    {nayok: 'Jashim', nayika: 'Kobori'},
  ]

  return (
    <div className="App">
      <ul>
        {/* <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li> */}
        {
          // nayoks.map(nayok => console.log(nayok))
          nayoks.map(nayok => <li>{nayok}</li>)
          //aita holo dynamic korar suto kato ekta way
        }
      </ul>
      {/* <Cinema nayok="J Bond" nayika="cat women"></Cinema> */}
      
      {
        // cinemas.map(cinema => console.log(cinema))

        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

      
    </div>
  );
}

/* Module : 45-3 
<a href="www.google.com">Google.com</a>
      <p id="title">Title</p>
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="Bapparaz" nayika="Cheka"></Person>      <Person name="kuber"  nayika="kopila"></Person>
*/
/*module 45-4
      <Friend phone="0165654526" address="noakali"></Friend>
      <Friend phone="017533322" address="Jessore"></Friend>
      <Friend phone="01324567654" address="Rangpur"></Friend>


*/

//nicher function er Person ta holo nijer html tag  
function Person(props){
  console.log(props);
  const person = {
    backgroundColor: 'red',
    border:'3px solid green',
    margin: '20px',
    borderRadius: '20px' 
  }
  return (
    <div className="person">
    <h1 style={person}>Name: {props.name}</h1>
    <h4 style={{backgroundColor: 'yellow',border:'3px solid green',margin: '20px', borderRadius: '20px'}}>Hero of: {props.nayika}</h4>
    </div>
  );
}

function Friend(props){
  return(
    <div className="person">
      <h3 >Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}

function Cinema(props) {
  return(
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  );
}

/*module 45-2 

<header className="App-header">
        <h3>yo yo reaxt mama</h3>
        <p>happy happy react</p>
        <div className="container">
          <h3>This is inside my container</h3>
          <p>my number is: {47 + 55}</p>
          <p>my number : {number}</p>
          <p style={{
            backgroundColor: 'pink',color: 'green',fontSize: '50px'
            //aikane 2 ta second bracket cz ekta style er value er jonno and ekta dynamic korar jonno
            
          }}>my name : {singer.name +" "+ singer.job}</p>
          <p style={singerStyle} className="container">Real singer : {singer2.job}</p>

          <p ></p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */


/* 
<Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>      <Person name={nayoks[2]}  nayika="kopila"></Person>
*/

export default App;
