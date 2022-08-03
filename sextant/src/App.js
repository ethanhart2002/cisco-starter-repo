import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';
import Latency from './Latency';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Public IPv4 Address">
          <IPAddress url='https://api.ipify.org?format=json' />
      </Exhibit>

      <Exhibit name="Public IPv6 Address">
          <IPAddress url='https://api64.ipify.org?format=json' />
      </Exhibit>

      <Exhibit name="Latency Calculator">
          <Latency />
      </Exhibit>
    </div>
  );
}

export default App;