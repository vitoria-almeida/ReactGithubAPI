import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
// import Card from './card';

function Repositories() {
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null) {
          repositoriesName = JSON.parse(repositoriesName);
          setRepositories(repositoriesName);
          localStorage.clear();
        } else {
          navigate('/repositories')
        }
      }, []);
  
    return (
        <>  
            <h3>REPOS:</h3>
            <ul>
                { repositories.map(repository => { return (<li>{ repository }</li>) }) }
            </ul>   

            {/* <Card/> */}
            <Link to="/">Voltar</Link>   
        </>
    )
}

export default Repositories