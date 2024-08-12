import React from 'react';
import './PortfolioItem.css';

function PortfolioItem({ title, description }) {
  return (
    <div className="PortfolioItem">
       <h2>Experience</h2>
      <h3>Product Support Engineer</h3>
      <p>OPEN Financial Technologies</p>
      <p>May 2021 - Present, Bangalore</p>
      <ul>
        <li>Maintained product development schedules and prioritized projects by coordinating with the Dev team.</li>
        <li>Supported software integration and implemented maintenance enhancements.</li>
        <li>Maintained effective customer relationships and identified future business opportunities to support and strengthen the corporation's mission.</li>
        <li>Exhibited strong technical aptitude and application expertise resulting in optimized performance, continuous improvement recommendations, and product innovation.</li>
        <li>Communicated with clients to define business objectives and present individualized solutions.</li>
        <li>Coordinated support responses to customer issues, verifying closure of concerns and correction of deficiencies.</li>
        <li>Searching logs from Grafana and Sumo Logic.</li>
        <li>Coordinated deployments of new software, feature updates, and fixes.</li>
      </ul>
    </div>
  );
}
export default PortfolioItem;
