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


  return (
    <div className="App">
      <Friend phone="0165654526" address="noakali"></Friend>
      <Friend phone="017533322" address="Jessore"></Friend>
      <Friend phone="01324567654" address="Rangpur"></Friend>

      
    </div>
  );
}

/* Module : 45-3 
<a href="www.google.com">Google.com</a>
      <p id="title">Title</p>
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="Bapparaz" nayika="Cheka"></Person>      <Person name="kuber"  nayika="kopila"></Person>
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

export default App;
