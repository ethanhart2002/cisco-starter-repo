import React from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class Latency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latency:  null
        };
    }

    latencyCalculator() {
        client.onmessage = (message) => {
            this.setState ({latency: new Date().getTime - message.getTime})
        };
    }

    render() {
        return (
            <span className='Latency'>
                {this.state.latency}
            </span>
        );
    }
}

export default Latency;