import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Swift Back Office</h2>
      </div>
      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-link">Dashboard</a>
        <div className="dropdown">
          <a href="#accord" className="nav-link">Accord</a>
          <div className="dropdown-content">
            <a href="/Accord-Form-25" className="nav-link" target="_blank">Accord 25-COI/POI</a>
            <a href="/Accord-Form-125" className="nav-link" target="_blank">Accord 125-General Info</a>
            <a href="/Accord-Form-126" className="nav-link" target="_blank">Accord 126-General Liability</a>
            <a href="/Accord-Form-140" className="nav-link" target="_blank">Accord 140-Property Insurance</a>
            <a href="/Accord-Form-175" className="nav-link" target="_blank">Accord 175-Endorsement</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#posts" className="nav-link">Policy Management</a>
          <div className="dropdown-content">
            <a href="premium_comparison.html" className="nav-link" target="_blank">Premium Comparison</a>
            <a href="coverage-comparison.html" className="nav-link" target="_blank">Coverage Comparison</a>
          </div>
        </div>
        <a href="#comments" className="nav-link">Producers</a>
        <a href="#settings" className="nav-link admin-only">Settings</a>
      </nav>
    </aside>
  );
};

const Card = ({ title, percentage, total, color }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="percentage-circle">
          <svg viewBox="0 0 36 36" className={`circular-chart ${color}`}>
            <path className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <text x="18" y="20.35" className="percentage">{percentage}%</text>
          </svg>
        </div>
      </div>
      <div className="card-body">
        <div className="loading-circle"></div>
        <p>{total}</p>
        <a href="#">View More</a>
      </div>
    </div>
  );
};

const ChartSection = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const pieChartInstance = useRef(null);
  const lineChartInstance = useRef(null);

  useEffect(() => {
    if (pieChartInstance.current) {
      pieChartInstance.current.destroy();
    }

    const pieCtx = pieChartRef.current.getContext('2d');
    pieChartInstance.current = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Accord-25-Form', 'Accord-125-Form', 'Accord-126-Form', 'Accord-140-Form', 'Accord-175-Form'],
        datasets: [{
          label: 'Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            '#ff5f6d',
            '#24C6DC',
            '#FF4E50',
            '#1FA2FF',
            '#A770EF'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#333'
            }
          }
        }
      }
    });

    if (lineChartInstance.current) {
      lineChartInstance.current.destroy();
    }

    const lineCtx = lineChartRef.current.getContext('2d');
    lineChartInstance.current = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Accord-25-Form',
            data: [12, 15, 13, 20, 25, 30, 35],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.1
          },
          {
            label: 'Accord-125-Form',
            data: [19, 22, 25, 30, 35, 40, 45],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.1
          },
          {
            label: 'Accord-126-Form',
            data: [3, 5, 7, 10, 15, 20, 25],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            tension: 0.1
          },
          {
            label: 'Accord-140-Form',
            data: [5, 10, 15, 20, 25, 30, 35],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
          },
          {
            label: 'Accord-175-Form',
            data: [2, 5, 8, 10, 15, 20, 25],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#333'
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Votes'
            }
          }
        }
      }
    });
  }, []);

  return (
    <section id="dashboard" className="content-section">
      <div className="chart-grid">
        <div className="content-section">
          <h2>Accord Form Graph</h2>
          <div className="chart-container pie-chart">
            <canvas ref={pieChartRef} id="myPieChart"></canvas>
          </div>
        </div>
        <div className="content-section">
          <div className="chart-container line-chart">
            <canvas ref={lineChartRef} id="myLineChart"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

const UploadSection = () => {
  const [policy1, setPolicy1] = useState(null);
  const [policy2, setPolicy2] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.name === "policy-upload-1") {
      setPolicy1(e.target.files[0]);
    } else if (e.target.name === "policy-upload-2") {
      setPolicy2(e.target.files[0]);
    }
  };

  const handleUploadAndCompare = async () => {
    if (!policy1 || !policy2) {
      alert("Please select both policy documents.");
      return;
    }

    const formData = new FormData();
    formData.append("policy1", policy1);
    formData.append("policy2", policy2);

    try {
      const response = await axios.post("http://localhost:5000/compare-policies", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setComparisonResult(response.data);

      console.log("Comparison Result:", response.data);
    } catch (error) {
      console.error("Error uploading and comparing policies:", error);
    }
  };

  return (
    <section id="posts" className="content-section">
      <h2>Policy Management</h2>
      <div className="upload-section">
        <div className="character1"></div>
        <div className="upload-controls">
          <label htmlFor="policy-upload-1" className="file-label">
            <input type="file" id="policy-upload-1" className="file-input" name="policy-upload-1" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            Policy Document 1
          </label>
          <label htmlFor="policy-upload-2" className="file-label">
            <input type="file" id="policy-upload-2" className="file-input" name="policy-upload-2" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            Policy Document 2
          </label>
        </div>
        <button onClick={handleUploadAndCompare}>Upload and Compare</button>
      </div>
      {comparisonResult && (
        <div className="comparison-result">
          <h3>Comparison Result</h3>
          <pre>{JSON.stringify(comparisonResult, null, 2)}</pre>
        </div>
      )}
    </section>
  );
};

const DocumentSection = () => {
  useEffect(() => {
    const bullet = document.querySelector(".bullet");
    const generateButton = document.getElementById("generate-button");

    bullet.addEventListener("mouseover", function() {
      bullet.style.animationPlayState = "paused";
    });

    bullet.addEventListener("mouseout", function() {
      bullet.style.animationPlayState = "running";
    });

    bullet.addEventListener("click", function() {
      generateButton.click();
    });

    return () => {
      bullet.removeEventListener("mouseover", function() {
        bullet.style.animationPlayState = "paused";
      });
      bullet.removeEventListener("mouseout", function() {
        bullet.style.animationPlayState = "running";
      });
      bullet.removeEventListener("click", function() {
        generateButton.click();
      });
    };
  }, []);

  return (
    <section id="comments" className="content-section">
      <h2>Document</h2>
      <div className="generate-document-container">
        <div className="character">
          <div className="bullet">
            <button className="generate-button" id="generate-button">Generate Document</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <header className="main-header">
          <h1>Swift Back Office</h1>
          <button className="menu-toggle" onClick={() => {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
          }}></button>

        </header>
        <section id="users" className="content-section">
          <div className="card-container">
            <Card title="Active Users" percentage={75} total={1500} color="blue" />
            <Card title="Accord Form" percentage={60} total={200} color="green" />
            <Card title="Policy Management" percentage={40} total={300} color="yellow" />
          </div>
        </section>
        <ChartSection />
        <UploadSection />
        <DocumentSection />
      </main>
    </div>
  );
};

export default Dashboard;
