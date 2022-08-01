import React from 'react'

class IPAddress extends React.Component {

    render() {

        const fetchAddress = useState([])

        const getData = () => {
            fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
            console.log(data)
            fetchAddress(data)
            })
        }

        useEffect(() => {
        getData()
        }, [])
        
        return (
            <>
            </>
        );

    }
}

export default IPAddress;