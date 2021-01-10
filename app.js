class App extends React.Component {
    //stany(zmiany):
    state = {
        value: ""
    }

    //metody:
    //bierze to co wpisujemy w input
    handleInputChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    //czyszczi nasz input
    handleCleanValue() {
        this.setState({
            value: ""
        })
    }

    //strona:
    render () {
        return(
            <>
                <input value={this.state.value} placeholder="wpisz.." onChange={this.handleInputChange.bind(this)} type="text"/>
                <button onClick={this.handleCleanValue.bind(this)}>RESET</button>
                <h1 className = "title">{this.state.value.toUpperCase()}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));w