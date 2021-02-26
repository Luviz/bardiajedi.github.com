import React, { useEffect, useState } from 'react';
import { GithubSvg } from '../assets/svg/NavIcons';

export default function Sim() {
    return <main>
        <Meh />
    </main>
}

class Meh extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            x: 400,
            y: 400,
            angle: 0
        }
    }



    GetNextLocation(x, y, v, a) {
        const _x = Math.sin(a) * v;
        const _y = Math.cos(a) * v;
        return [x + _x, y + _y]
    }

    componentDidMount() {
        this.intId = setInterval(() => {
            const { x, y, angle } = this.state;
            const [_x, _y] = this.GetNextLocation(x, y, 10, angle);
            if (0 < _x && _x < 700) {
                if (0 < _y && _y < 700) {
                    this.setState({
                        x: _x,
                        y: _y
                    })
                }
            }
        }, 100);
    }

    componentWillUnmount(){
        clearInterval(this.intId)
    }

    render() {
        const { x, y, angle } = this.state;
        return <div>
            <div
                style={{ margin: "1rem", backgroundColor: 'black', width: '800px', height: '800px'}}
            >
                <GithubSvg onClick={console.log} style={{ 
                    position: "relative", 
                    top: `${y}px`, left: `${x}px`,
                    width: "100px",
                    height: "100px",     
                    transition: "all 100ms linear 0s",
                    transform: `rotate(${angle}Rad)`
                    }} />
            </div>
            <input onChange={(e) => this.setState({ angle: e.target.value * Math.PI / 100 })} defaultValue={angle} type="range" min="0" max="200" step="1" ></input>
            <span>{angle}</span>
        </div>
    }
}