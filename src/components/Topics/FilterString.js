import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                '1qwerty',
                '1asdfgh',
                '1zxcvbn'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterArray(str) {
        var arr = []
        arr = this.state.unFilteredArray.filter((el) => el.includes(str))
        this.setState({ filteredArray: arr})
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ (e) => this.filterArray(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
