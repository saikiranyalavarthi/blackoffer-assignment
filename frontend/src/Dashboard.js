import React, { useState } from 'react';
import './App.css'
const Dashboard = ({ data }) => {
  // State variables for filters
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [pestFilter, setPestFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [swotFilter, setSwotFilter] = useState('');

  // Filtered data based on applied filters
  const filteredData = data.filter(item => {
    let isEndYearMatch = true;
    let isTopicMatch = true;
    let isSectorMatch = true;
    let isRegionMatch = true;
    let isPestMatch = true;
    let isSourceMatch = true;
    let isSwotMatch = true;

    if (endYearFilter && item.end_year !== null) {
      isEndYearMatch = item.end_year === endYearFilter;
    }
    if (topicFilter) {
      isTopicMatch = item.topic === topicFilter;
    }
    if (sectorFilter) {
      isSectorMatch = item.sector === sectorFilter;
    }
    if (regionFilter) {
      isRegionMatch = item.region === regionFilter;
    }
    if (pestFilter) {
      isPestMatch = item.pestle === pestFilter;
    }
    if (sourceFilter) {
      isSourceMatch = item.source === sourceFilter;
    }
    if (swotFilter) {
      isSwotMatch = item.swot === swotFilter;
    }

    return (
      isEndYearMatch &&
      isTopicMatch &&
      isSectorMatch &&
      isRegionMatch &&
      isPestMatch &&
      isSourceMatch &&
      isSwotMatch
    );
  });

  return (
    <div>
      <h1>Energy Outlook Dashboard</h1>

      {/* Filters */}
      <div>
        <label>End Year:</label>
        <input
          type="text"
          value={endYearFilter}
          onChange={e => setEndYearFilter(e.target.value)}
        />

        <label>Topic:</label>
        <input
          type="text"
          value={topicFilter}
          onChange={e => setTopicFilter(e.target.value)}
        />

        <label>Sector:</label>
        <input
          type="text"
          value={sectorFilter}
          onChange={e => setSectorFilter(e.target.value)}
        />

        <label>Region:</label>
        <input
          type="text"
          value={regionFilter}
          onChange={e => setRegionFilter(e.target.value)}
        />

        <label>PEST:</label>
        <input
          type="text"
          value={pestFilter}
          onChange={e => setPestFilter(e.target.value)}
        />

        <label>Source:</label>
        <input
          type="text"
          value={sourceFilter}
          onChange={e => setSourceFilter(e.target.value)}
        />

        <label>SWOT:</label>
        <input
          type="text"
          value={swotFilter}
          onChange={e => setSwotFilter(e.target.value)}
        />
      </div>

      {/* Display filtered data */}
      {filteredData.map(item => (
        <div className='data-item ' key={item._id}>
          <h2>{item.title}</h2>
          <p>Published: {item.published}</p>
          <p>Country: {item.country}</p>
          <p>Region: {item.region}</p>
          <p>Source: {item.source}</p>
          <p>Insight: {item.insight}</p>
          <p>
            URL: <a href={item.url}>{item.url}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
