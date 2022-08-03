import React from 'react'

class IPAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    fetchComponent() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ipAddress: data.ip}));
    }
    render() {

        return (
            <span className="IPAddress">
                {this.state.ipAddress}
            </span>
        );

    }
}

export default IPAddress;