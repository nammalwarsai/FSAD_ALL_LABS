import React from 'react';

const Layout1 = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
      gridTemplateColumns: 'repeat(3, 1fr) 1fr',
      gridTemplateAreas: `
        "header header header header"
        "box1 box2 box3 sidebar"
        "main main main sidebar"
        "footer footer footer footer"
      `,
      height: '100vh',
    },
    header: {
      gridArea: 'header',
      backgroundColor: '#f5deb3',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '20px',
    },
    smallBoxes: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr) 1fr',
      gridColumn: 'span 4',
    },
    smallBox: {
      backgroundColor: '#00ffff',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000',
      padding: '20px',
    },
    sideBar: {
      backgroundColor: '#00ff00',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000',
      padding: '20px',
    },
    mainContent: {
      gridArea: 'main',
      backgroundColor: '#ffff00',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: '20px',
    },
    footer: {
      gridArea: 'footer',
      backgroundColor: '#0000ff',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
      padding: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>HEADER</div>
      <div style={styles.smallBoxes}>
        <div style={styles.smallBox}>SMALL BOX 1</div>
        <div style={styles.smallBox}>SMALL BOX 2</div>
        <div style={styles.smallBox}>SMALL BOX 3</div>
        <div style={styles.sideBar}>SIDE BAR</div>
      </div>
      <div style={styles.mainContent}>MAIN CONTENT</div>
      <div style={styles.footer}>FOOTER</div>
    </div>
  );
};

export default Layout1;
