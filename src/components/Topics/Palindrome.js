import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: true
        }
    }

    handleChange(val){
        this.setState({ userInput: val })
    }

    isPalindrome() {
        // var str = this.state.userInput
        // var len = str.length
        // for (var i = 0; i < len/2; i++) {
        //     if (str[i] !== str[len - 1 - i]) { 
        //         this.setState({ palindrome: false })
        //     } else {this.setState({ palindrome: true })}
        // }

        var forwards = this.state.userInput;
        var backwards = this.state.userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
    
        if ( forwards === backwards ) {
          this.setState({ palindrome: true });
        } else {
          this.setState({ palindrome: false });
        }
    }

    render () {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ (e) => this.isPalindrome(this.state.userInput) }>Check</button>
                <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome, null, 10) }</span>
            </div>
        )
    }
}