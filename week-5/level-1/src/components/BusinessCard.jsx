import React from 'react'

function BusinessCard({name,des,button1,button2,interest}) {
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '300px',
      margin: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
    },
    button: {
      padding: '8px 12px',
      fontSize: '14px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    interestSection: {
      marginBottom: '12px',
    },
    descriptionSection: {
      fontSize: '16px',
    },
  };
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <div style={styles.interestSection}>{interest}</div>
      <div style={styles.descriptionSection}>{des}</div>
      <div style={styles.buttonsContainer}>
      <div style={styles.button}>{button1}</div>
      <button style={styles.button}>{button2}</button>
      </div>
    </div>
  )
}

export default BusinessCard
