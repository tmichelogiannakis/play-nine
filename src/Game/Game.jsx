import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faStar, faSync } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import styled from 'styled-components';
import Button from './Button/Button';
import Cell from './Cell/Cell';
import Star from './Star/Star';

library.add(faCheck);
library.add(faStar);
library.add(faSync);

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  border: 2px solid #eee;
  width: 8rem;
  height: 8rem;
  margin: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GameOver = props => {
  return <div style={{ textAlign: 'center' }}>You Won</div>;
};

const getRandomStars = current => {
  const random = () => Math.floor(Math.random() * 9) + 1;
  let stars = random();
  if (current) {
    while (stars === current) {
      stars = random();
    }
  }
  return stars;
};

const initialState = {
  numbers: Array.from(Array(9).keys(), n => n + 1),
  draws: 5,
  selectedNumbers: [],
  usedNumbers: []
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState, stars: getRandomStars() };
  }

  restart = () => {
    this.setState({ ...initialState, stars: getRandomStars() });
  };

  toggle = cell => {
    if (!this.state.usedNumbers.includes(cell)) {
      this.setState(prev => {
        return {
          selectedNumbers: prev.selectedNumbers.includes(cell)
            ? [...prev.selectedNumbers.filter(item => item !== cell)]
            : [...prev.selectedNumbers, cell]
        };
      });
    }
  };

  redraw = () => {
    if (this.state.draws > 0) {
      this.setState(prev => ({
        draws: prev.draws - 1,
        stars: getRandomStars(prev.stars)
      }));
    }
  };

  accept = () => {
    if (this.state.stars === this.state.selectedNumbers.reduce((a, b) => a + b, 0)) {
      this.setState(prev => ({
        selectedNumbers: [],
        stars: prev.usedNumbers.length === prev.numbers.length ? 0 : getRandomStars(prev.stars),
        usedNumbers: [...prev.usedNumbers, ...prev.selectedNumbers]
      }));
    }
  };

  render() {
    const { numbers, selectedNumbers, usedNumbers, stars } = this.state;

    const gameWon = usedNumbers.length === numbers.length;
    const selectedValue = selectedNumbers.reduce((a, b) => a + b, 0);
    const starElements = [];
    if (!gameWon) {
      for (let i = 0; i < stars; i++) {
        starElements.push(<Star key={i} />);
      }
    }

    return (
      <div className={this.props.className}>
        <div>
          {gameWon && <GameOver />}
          <Row>
            <Grid>{starElements}</Grid>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 16 }}>
                <Button onClick={this.accept} className="btn-primary" iconName="check" isDisabled={stars !== selectedValue} />
              </div>
              <div>
                <div>{this.state.draws.toString()}</div>
                <Button onClick={this.redraw} className="btn-outline-info" iconName="sync" />
              </div>
            </div>
            <Grid>
              {numbers.map(cell => (
                <Cell
                  key={cell}
                  label={cell}
                  isSelected={selectedNumbers.includes(cell)}
                  isUsed={usedNumbers.includes(cell)}
                  onSelect={this.toggle.bind(this, cell)}
                />
              ))}
            </Grid>
          </Row>
          <div style={{ textAlign: 'center' }}>
            <Button onClick={this.restart} className="btn-primary" label="Play Again" />
          </div>
        </div>
      </div>
    );
  }
}

export default styled(Game)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
