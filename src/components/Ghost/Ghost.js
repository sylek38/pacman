import React, { Component } from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';
import './style.css';

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 50 * 3,
            left: 50 * 3,
        }
    }

    componentDidMount() {
        this.changeDirectionInterval = setInterval(this.changeDirection, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.changeDirectionInterval);
    }

    changeDirection = () => {
        const arrayOfMovement = ['left','up','right','down'];
        const movement = Math.floor(Math.random() * 4);

        this.setState({ direction: arrayOfMovement[movement] }, () => {
            console.log('movement: ', this.state.direction);
        });
    }

    move = () => {
        
    }

    render() {
        const { color } = this.props;
        return (
            <div 
            style={this.state.position}
            className="ghost">
                <GhostSvg className={`ghost-${color}`}/>
            </div>
        )
    }
}

Ghost.defaultProps = {
    color: 'red',
    step: 50,
    size: 50,
    // TODO: move to config
    border: 10*2,
    topScoreBoardHeight: 50
}

export default Ghost;