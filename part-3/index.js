const App = () => {
    return (
        <div>
            <Person name="Rick" age="18" hobbies={["bird watching", "watching grass grow", "creeping on people"]}/>
            <Person name="Steve" age="39" hobbies={["playing hockey", "watching hockey", "drinking copious amounts of alcohol"]}/>
            <Person name="Bobby" age="99" hobbies={["not much these days tbh"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));