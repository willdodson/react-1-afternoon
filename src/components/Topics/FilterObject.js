import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jack',
                    lastName: 'Jackson',
                    age: 25,
                    lol: 'haha'
                },
                {
                    name: 'Peter',
                    lastName: 'Peterson',
                    age: 25,
                },
                {
                    name: 'Charles',
                    lastName: 'Charleston'
                },
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterArray(prop) {
        var arr = []
        arr = this.state.unFilteredArray.filter((el) => el.hasOwnProperty(prop))
        // for (var i = 0; i < unFilteredArr.length; i++) {
        //     if (unFilteredArr[i].hasOwnProperty(prop)) {
        //         arr.push(unFilteredArr[i])
        //     }
        // }
        this.setState({ filteredArray: arr })
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ (e) => this.filterArray(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}