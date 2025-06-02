import React, { useState } from 'react'; import './index.css';

function App() { const [form, setForm] = useState({ reason: '', observations: '', infoReceived: '', policeAction: '', childrenWelfare: '', });

const [report, setReport] = useState('');

const handleChange = (e) => { const { name, value } = e.target; setForm({ ...form, [name]: value }); };

const generateReport = () => { const output = REASON FOR ATTENDANCE\n\n${form.reason}\n\nINITIAL OBSERVATIONS\n\n${form.observations}\n\nINFORMATION RECEIVED\n\n${form.infoReceived}\n\nPOLICE ACTION\n\n${form.policeAction}\n\nCHILDREN'S WELFARE\n\n${form.childrenWelfare}; setReport(output); };

return ( <div className="container"> <h1>FVRO Builder</h1> <textarea name="reason" placeholder="Reason for Attendance" onChange={handleChange} /> <textarea name="observations" placeholder="Initial Observations" onChange={handleChange} /> <textarea name="infoReceived" placeholder="Information Received" onChange={handleChange} /> <textarea name="policeAction" placeholder="Police Action" onChange={handleChange} /> <textarea name="childrenWelfare" placeholder="Children's Welfare (if any)" onChange={handleChange} /> <button onClick={generateReport}>Generate Report</button> <h2>Generated Report</h2> <pre>{report}</pre> </div> ); }

export default App;

import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>FVRO Builder Web</h1>
      <p>This is the start of your React Web version of the FVRO tool.</p>
    </div>
  );
}
