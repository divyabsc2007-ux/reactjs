import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './components/App';
import ApplyLeave from './components/ApplyLeave';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import LeaveHistory from './components/LeaveHistory';
import LeaveCard from './components/LeaveCard';
import StatCard from './components/StatCard';
import TabBar from './components/TabBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <ApplyLeave/>
    <Dashboard/>
    <Header/>
    <LeaveHistory/>
    <LeaveCard/>
    <StatCard/>
    <TabBar/>


    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
