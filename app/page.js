'use client';

import { useState } from 'react';

export default function Home() {
  const [examStart, setExamStart] = useState('2024-11-24');
  const [examEnd, setExamEnd] = useState('2024-12-06');
  const [showResults, setShowResults] = useState(false);

  const calculateTimeline = () => {
    const examEndDate = new Date(examEnd);
    const today = new Date();

    // Calculate key dates
    const oneWeekAfter = new Date(examEndDate);
    oneWeekAfter.setDate(oneWeekAfter.getDate() + 7);

    const twoWeeksAfter = new Date(examEndDate);
    twoWeeksAfter.setDate(twoWeeksAfter.setDate() + 14);

    const oneMonthAfter = new Date(examEndDate);
    oneMonthAfter.setMonth(oneMonthAfter.getMonth() + 1);

    return {
      examEndDate,
      oneWeekAfter,
      twoWeeksAfter,
      oneMonthAfter,
      today
    };
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const timeline = showResults ? calculateTimeline() : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#1a202c',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          🎯 Job Switch Timing Calculator
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#718096',
          marginBottom: '40px',
          fontSize: '1.1rem'
        }}>
          Find your optimal job switch timeline
        </p>

        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#2d3748'
          }}>
            Exam Start Date:
          </label>
          <input
            type="date"
            value={examStart}
            onChange={(e) => setExamStart(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              outline: 'none',
              transition: 'all 0.3s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#2d3748'
          }}>
            Exam End Date:
          </label>
          <input
            type="date"
            value={examEnd}
            onChange={(e) => setExamEnd(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              outline: 'none',
              transition: 'all 0.3s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        <button
          onClick={() => setShowResults(true)}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            marginBottom: '30px'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Calculate Best Timing
        </button>

        {showResults && timeline && (
          <div>
            <div style={{
              background: '#f7fafc',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '25px',
              border: '2px solid #e2e8f0'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#2d3748',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📅 Your Exam Period
              </h2>
              <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: '5px 0' }}>
                <strong>Start:</strong> {formatDate(new Date(examStart))}
              </p>
              <p style={{ color: '#4a5568', fontSize: '1.1rem', margin: '5px 0' }}>
                <strong>End:</strong> {formatDate(timeline.examEndDate)}
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              marginBottom: '25px',
              boxShadow: '0 10px 30px rgba(72, 187, 120, 0.3)'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                ✅ Recommended Timeline
              </h2>
              <div style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '15px' }}>
                  <strong>🎓 Focus on exams:</strong> November 24 - December 6, 2024
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong>🔍 Start job search:</strong> Mid-December 2024 ({getMonthName(timeline.oneWeekAfter)})
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong>💼 Begin interviews:</strong> Late December 2024 - January 2025
                </p>
                <p>
                  <strong>🚀 Ideal switch month:</strong> <span style={{
                    fontSize: '1.3rem',
                    background: 'rgba(255,255,255,0.2)',
                    padding: '5px 15px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    marginTop: '10px'
                  }}>January 2025</span>
                </p>
              </div>
            </div>

            <div style={{
              background: '#fff5f5',
              border: '2px solid #fc8181',
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                color: '#c53030',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.3rem'
              }}>
                ⚠️ Avoid Switching During
              </h3>
              <ul style={{ color: '#742a2a', lineHeight: '2', fontSize: '1.05rem' }}>
                <li>November 2024 - Your exam preparation is critical</li>
                <li>First week of December - You need recovery time after exams</li>
              </ul>
            </div>

            <div style={{
              background: '#ebf8ff',
              border: '2px solid #4299e1',
              borderRadius: '15px',
              padding: '25px'
            }}>
              <h3 style={{
                color: '#2c5282',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.3rem'
              }}>
                💡 Pro Tips
              </h3>
              <ul style={{ color: '#2c5282', lineHeight: '2', fontSize: '1.05rem' }}>
                <li>Start updating your resume after December 6</li>
                <li>Research companies during your break (Dec 7-15)</li>
                <li>Network during holiday season when people are relaxed</li>
                <li>Target Jan-Feb start dates - companies have new budgets</li>
                <li>Give 2-4 weeks notice at current job</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
