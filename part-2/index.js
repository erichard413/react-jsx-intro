let tweets = [
<Tweet username="erichard413" name="Erik Richard" date="January 4th 2023" message="Hey look at me! This is my first Tweet." />, 
<Tweet username="AryaBark" name="Arya Bark" date="January 4th 2023" message="Woof I am Erik's dog and a very very good girl." />, 
<Tweet username="tonyhawk" name="Tony Hawk" date="January 4th 2023" message="I am tony hawk." />

]

const App = () => (
    <div>
        {tweets}
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));