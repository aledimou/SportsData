import React,{useState, useEffect} from'react'
import './App.css';
import axios from 'axios'
import { Form,Container,Row,Col } from "react-bootstrap";
import Teams from "./components/Teams"



function App() {

const [teams, setTeams] = useState({ data: [] })

const [country, setCountry] = useState('51')
const [league, setLeague] = useState('default')






const api_key =process.env.REACT_APP_API_KEY;




useEffect(() => {
  const getData = async () => {
    const response = await axios.get(
      `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${api_key}&country_id=${country}`,
    );
    
    console.log(response);
    setTeams(response.data);
    
    console.log(response.data);
    
  };

  getData();
}, [country]);


function updateCountry(e) {
  setCountry(e.target.value)
}

function updateLeague(e) {
  setLeague(e.target.value)
}


function handleSubmit(e) {
  e.preventDefault();

}


  return (
    <div className="App">

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group >
        <label>Select Country: </label>
        <select  className="form-control" value={country}  onChange={updateCountry}>
          <option  value = 'default'>-Select-</option>
          <option value = '51'>Greece</option>      
        </select>
        
        <label >Select League: </label>
        <select  className="form-control" value={league}  onChange={updateLeague}>
          <option value = 'default'>-Select-</option>
          <option value = '348'>Superleague</option>
          <option value = '349'>Superleague 2</option>
          
        </select>

  
        </Form.Group>
        <button type="submit" className="btn btn-outline-secondary search-button">
        Search
        </button>
      </Form>

      <Container>
        <Row>
        {teams.data.map(team => <Teams key={team.team_id} name = {team.name} img = {team.logo} short = {team.short_code} />)}
        </Row>
      </Container>

    </div>
  );
}

export default App;
