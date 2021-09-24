const Person = ({age, name, hobbies}) => {
    let nameOutput = name
    let message
    if (age >= 18) {
        message = 'please go vote!'
    } else {
        message = 'you must be 18'
    }

    if (name.length > 8) {
        nameOutput = name.slice(0, 9)
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <h4>{nameOutput}</h4>
            <h3>{message}</h3>
            <ul>Hobbies
                {hobbies.map(h => <li>{h}</li>) }
            </ul>
        </div>
    )
}