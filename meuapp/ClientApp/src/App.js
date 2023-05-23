import React from 'react'

const Team = (props) => {
    return (
        <div>
            <About
                username={props.name}
                office={props.office}
                age={props.age}
                
            />
            <Social
                instagram={props.itgm}
                tw={props.twitter}
                linked={props.linkedIn}
            />
            <hr/>
        </div>
    );
}
const About = (props) => {
    return (
        <div>
            <h2>Hello i'm: {props.username}</h2>
            <h3>Office: {props.office}</h3>
            <h3>Age: { props.age}</h3>

        </div>
    );
}
const Social = (props) => {
    return (
        <div>
            <a href={props.instagram}>Instragam </a>
            <br/>
            <a href={props.linked}>LinkedIn </a>
            <br/>
            <a href={props.tw}>Twitter </a>
           
        </div>
    );
}
function App() {
    return (
        <div>
            <h1>This is our team:</h1>
            <Team name="Matheus" office="Devolper" age="24" itgm="https://matheusrraposo" twitter = "https://raposomatheus2" linkedIn="https://MatheusRapos0" />
            <Team name="Eliezer" office="Product Oner" age="44" itgm="https://gggsasdad" twitter="https://sdfassdsfaf" linkedIn="https://adfsdfsdafdws" />
            <Team name="Anita" office="UI/UX Desiner" age="22" itgm="https://mfdfsfsafsa" twitter="https://rdsdasffasdf" linkedIn="https://dfasfdsfasdfadfasd" />
        </div>
    )
}
export default App
