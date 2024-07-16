import React, { useState } from 'react';
import 'carbon-components/css/carbon-components.min.css';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Database, Warehouse, Truck, ShoppingCart, Users, Cloud, QrCode, TrendingUp, Package, Recycle, BarChart2, Eye, Zap, RefreshCw, AlertCircle, PackageCheck, CloudRainWind } from 'lucide-react';

const IBMSterlingSupplyChainControlTowerDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const inventoryData = [
    { name: 'Organic Apples', current: 80, optimal: 50 },
    { name: 'Fresh Kale', current: 30, optimal: 60 },
    { name: 'Grass-Fed Beef', current: 45, optimal: 40 },
    { name: 'Free-Range Eggs', current: 90, optimal: 70 },
  ];

  const demandForecast = [
    { day: 'Mon', demand: 100, weather: 'Sunny' },
    { day: 'Tue', demand: 120, weather: 'Rainy' },
    { day: 'Wed', demand: 110, weather: 'Cloudy' },
    { day: 'Thu', demand: 140, weather: 'Sunny' },
    { day: 'Fri', demand: 160, weather: 'Rainy' },
    { day: 'Sat', demand: 180, weather: 'Sunny' },
    { day: 'Sun', demand: 130, weather: 'Cloudy' },
  ];

  const automatedActions = [
    { text: "AI detected potential stockout for Fresh Kale. Automated reorder initiated.", icon: <AlertCircle style={{ width: 24, height: 24 }} /> },
    { text: "Excess inventory alert for Organic Apples. Markdown process started to reduce waste.", icon: <Recycle style={{ width: 24, height: 24 }} /> },
    { text: "Supply delay detected for Grass-Fed Beef. Alternate supplier engaged.", icon: <PackageCheck style={{ width: 24, height: 24 }} /> },
    { text: "Weather alert: Potential disruption to transportation. Rerouting shipments.", icon: <CloudRainWind style={{ width: 24, height: 24 }} /> },
  ];

  const workQueues = [
    { text: "Resolve potential stockout for Fresh Kale", action: "Resolve" },
    { text: "Review markdown strategy for Organic Apples", action: "Review" },
    { text: "Assess alternative suppliers for Grass-Fed Beef", action: "Assess" },
  ];

  const kpis = {
    wasteReduction: 18,
    costSavings: 12500,
    stockoutReduction: 25,
    inventoryTurnover: 15,
  };

  const integrations = [
    { name: 'ERP System', icon: <Database style={{ width: 24, height: 24 }} /> },
    { name: 'Warehouse Management', icon: <Warehouse style={{ width: 24, height: 24 }} /> },
    { name: 'Transportation Management', icon: <Truck style={{ width: 24, height: 24 }} /> },
    { name: 'Point of Sale', icon: <ShoppingCart style={{ width: 24, height: 24 }} /> },
    { name: 'Supplier Portals', icon: <Users style={{ width: 24, height: 24 }} /> },
    { name: 'Weather Data Services', icon: <Cloud style={{ width: 24, height: 24 }} /> },
  ];

  const benefits = [
    { text: 'Reduced stockouts by 25% through predictive analytics and automated reordering', icon: <TrendingUp style={{ width: 24, height: 24 }} /> },
    { text: 'Improved inventory efficiency, saving $12,500 annually', icon: <Package style={{ width: 24, height: 24 }} /> },
    { text: 'Decreased food waste by 18% with AI-driven inventory management', icon: <Recycle style={{ width: 24, height: 24 }} /> },
    { text: 'Enhanced decision-making with real-time, end-to-end supply chain visibility', icon: <Eye style={{ width: 24, height: 24 }} /> },
    { text: 'Improved operational resilience through automated issue detection and resolution', icon: <Zap style={{ width: 24, height: 24 }} /> },
    { text: 'Increased inventory turnover by 15%, optimizing working capital', icon: <RefreshCw style={{ width: 24, height: 24 }} /> },
    { text: 'Strengthened brand reputation through blockchain-enabled product traceability', icon: <BarChart2 style={{ width: 24, height: 24 }} /> },
  ];

  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'IBM Plex Sans, sans-serif',
    },
    header: {
      backgroundColor: '#0f62fe',
      color: 'white',
      padding: '24px',
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: '24px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    tabContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '24px',
      backgroundColor: '#e0e0e0',
      padding: '8px',
      borderRadius: '8px',
    },
    tabButton: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      marginRight: '8px',
      marginBottom: '8px',
      backgroundColor: isActive ? '#0f62fe' : '#ffffff',
      color: isActive ? 'white' : '#0f62fe',
      border: '1px solid #0f62fe',
      borderRadius: '4px',
      cursor: 'pointer',
    }),
    section: {
      backgroundColor: '#f4f4f4',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '24px',
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    },
    card: (backgroundColor) => ({
      backgroundColor,
      padding: '16px',
      borderRadius: '8px',
    }),
    cardTitle: {
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    alert: {
      padding: '16px',
      borderRadius: '4px',
      border: '1px solid #d1d5db',
      marginBottom: '8px',
    },
    alertTitle: {
      fontWeight: 'bold',
      marginLeft: '8px',
    },
    alertDescription: {
      marginLeft: '32px',
    },
    benefitsContainer: {
      backgroundColor: '#d1fae5',
      padding: '24px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '24px',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      flex: '1 1 300px',
    },
    workQueue: {
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#e5e7eb',
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    workQueueTitle: {
      fontWeight: 'bold',
      color: '#0f62fe',
    },
    workQueueButton: {
      padding: '8px 16px',
      backgroundColor: '#0f62fe',
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    analyticsCard: {
      backgroundColor: '#d1fae5',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '8px',
    },
    largeText: {
      fontSize: '16px',
    },
  };

  const TabButton = ({ tab }) => (
    <button
      style={styles.tabButton(activeTab === tab)}
      onClick={() => setActiveTab(tab)}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  );

  const Section = ({ title, children }) => (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );

  const renderOverview = () => (
    <Section title="Control Tower Overview">
      <p style={{ marginBottom: '16px' }}>IBM Sterling Supply Chain Control Tower provides actionable real-time supply chain visibility, orchestrating your end-to-end supply chain network.</p>
      <div style={styles.grid}>
        <div style={styles.card('#cfe2f3')}>
          <h3 style={styles.cardTitle}>True End-to-End Visibility</h3>
          <p>Break down data barriers and inefficiencies to establish real-time visibility across your global supply chain.</p>
        </div>
        <div style={styles.card('#d9ead3')}>
          <h3 style={styles.cardTitle}>Intelligent Workflows</h3>
          <p>Detect, display, streamline, and prioritize work tasks in real-time. Benefit from AI-informed and data-driven decisions.</p>
        </div>
        <div style={styles.card('#fff2cc')}>
          <h3 style={styles.cardTitle}>Smarter Integration</h3>
          <p>Connect all your existing systems and services to resolve supply chain disruptions more quickly and gain a competitive edge.</p>
        </div>
        <div style={styles.card('#f4cccc')}>
          <h3 style={styles.cardTitle}>AI-Powered Insights</h3>
          <p>Leverage industry-leading AI to predict potential disruptions and take actions based on recommendations to mitigate effects.</p>
        </div>
      </div>
      <Section title="Key Benefits for Green Garden">
        <div style={styles.benefitsContainer}>
          {benefits.map((benefit, index) => (
            <div key={index} style={styles.benefitItem}>
              {benefit.icon}
              <span style={{ marginLeft: '8px' }}>{benefit.text}</span>
            </div>
          ))}
        </div>
      </Section>
    </Section>
  );

  const renderVisibility = () => (
    <Section title="Real-time Supply Chain Visibility">
      <div style={styles.grid}>
        <div>
          <h3 style={styles.cardTitle}>Inventory Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#8884d8" name="Current Stock" />
              <Bar dataKey="optimal" fill="#82ca9d" name="Optimal Stock" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 style={styles.cardTitle}>Demand Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandForecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="demand" stroke="#8884d8" />
              <Line type="monotone" dataKey="weather" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );

  const renderWorkflows = () => (
    <Section title="Intelligent Workflows">
      <div style={{ marginBottom: '16px' }}>
        <h3 style={styles.cardTitle}>AI-Driven Automated Actions</h3>
        <div style={styles.grid}>
          {automatedActions.map((action, index) => (
            <div key={index} style={styles.card('#e0f7fa')}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                {action.icon}
                <span style={{ ...styles.largeText, marginLeft: '8px' }}>{action.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 style={styles.cardTitle}>Work Queues</h3>
        <p style={{ marginBottom: '8px' }}>Prioritized list of issues that can be assigned to users to act on and track to resolution:</p>
        <div>
          {workQueues.map((queue, index) => (
            <div key={index} style={styles.workQueue}>
              <p style={styles.workQueueTitle}>{queue.text}</p>
              <button style={styles.workQueueButton}>{queue.action}</button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );

  const renderIntegration = () => (
    <Section title="Smarter Integration">
      <p style={{ marginBottom: '16px' }}>IBM'S Control Tower uses out-of-the-box connectors and APIs to seamlessly integrate with your existing systems:</p>
      <div style={styles.grid}>
        {integrations.map((item, index) => (
          <div key={index} style={{ ...styles.card('#d9ead3'), ...styles.flexCenter }}>
            {item.icon}
            <span style={{ marginLeft: '8px' }}>{item.name}</span>
          </div>
        ))}
      </div>
      <h2 style={{ ...styles.sectionTitle, marginTop: '32px' }}>Product Traceability</h2>
      <div style={{ ...styles.card('#fff2cc'), ...styles.flexCenter }}>
        <QrCode style={{ width: 96, height: 96, color: '#2563eb', marginRight: '24px' }} />
        <div>
          <p style={{ marginBottom: '8px' }}>Scan this QR code to access detailed product origin and quality information:</p>
          <p style={{ fontSize: '14px', color: '#2563eb', marginTop: '16px' }}>This QR code integrates with our blockchain-based IBM Food Trust system for complete supply chain transparency.</p>
        </div>
      </div>
    </Section>
  );

  const renderAnalytics = () => (
    <Section title="Advanced Analytics and Insights">
      <div style={{ ...styles.grid, marginBottom: '16px' }}>
        {Object.entries(kpis).map(([key, value]) => (
          <div key={key} style={styles.analyticsCard}>
            <h3 style={styles.cardTitle}>{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>
              {typeof value === 'number' && key !== 'costSavings' ? `${value}%` : (key === 'costSavings' ? `$${value.toLocaleString()}` : value)}
            </p>
          </div>
        ))}
      </div>
      <div style={{ ...styles.card('#d1fae5') }}>
        <h3 style={styles.cardTitle}>AI-Powered Insight</h3>
        <p>Increase Fresh Kale stock by 15% to meet predicted demand surge and prevent stockouts. This action is estimated to improve revenue by 3% and customer satisfaction by 5%.</p>
      </div>
    </Section>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>IBM Sterling Supply Chain Control Tower for Green Garden</h1>
      </div>
      
      <div style={styles.tabContainer}>
        {['overview', 'visibility', 'workflows', 'integration', 'analytics'].map((tab) => (
          <TabButton key={tab} tab={tab} />
        ))}
      </div>

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'visibility' && renderVisibility()}
      {activeTab === 'workflows' && renderWorkflows()}
      {activeTab === 'integration' && renderIntegration()}
      {activeTab === 'analytics' && renderAnalytics()}
    </div>
  );
};

export default IBMSterlingSupplyChainControlTowerDemo;
