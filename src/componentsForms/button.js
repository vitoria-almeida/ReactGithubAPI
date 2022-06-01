import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Button({user}) {
    const navigate = useNavigate();

    function handleSearch() {     
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            const data = res.data     
            // paragrafo.textContent = data.name
            // document.getElementById('image').src = data.avatar_url
            // document.getElementById('bio').textContent = data.bio
        })
        .catch((err) => console.log(err))  

        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(res => {
            const repositories = res.data
            const repositoriesName = []
            repositories.map((repository) => (
                repositoriesName.push(repository.full_name)      
            )) 
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
            navigate('/repositories')
        })
        .catch((err) => console.log(err))     
    }
  
    return (
        <div>
            <button type="button" onClick={handleSearch}>Pesquisar</button>  
        </div>
    )
}

export default Button