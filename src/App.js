import React, { Component } from 'react';
import './App.css';
import beers from './beers.json'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Title from './components/Title'
import BeerCard from './components/BeerCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        beers: beers,
        unselectedBeers: beers
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectBeer = brewery => {
        const findBeer = this.state.unselectedBeers.find(item => item.brewery === brewery);

        if(findBeer === undefined) {
            // failure to select a new beer
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                beers: beers,
                unselectedBeers: beers
            });
        }
        else {
            // success to select a new beer
            const newBeers = this.state.unselectedBeers.filter(item => item.brewery !== brewery);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                beers: beers,
                unselectedBeers: newBeers
            });
        }

        this.shuffleArray(beers);
    };

    render() {
        return (
            <Wrapper>
                <Navbar
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.beers.map(beer => (
                        <BeerCard
                            brewery={beer.brewery}
                            image={beer.image}
                            selectBeer={this.selectBeer} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;