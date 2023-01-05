const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: { name.length > 8 ? name.slice(0,6) : name }</li>
                <li>Age: {age}</li>
            </ul>
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
            <h3>{ age > 18 ? "Please GO VOTE!" : "you must be 18 to vote" }</h3>
        </div>
    )
    
}