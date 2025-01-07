import React from 'react';

const Lab_3 = () => {
  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
          }

          header {
            background-color: #34495e;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          header h1 {
            font-size: 20px;
          }

          nav ul {
            list-style: none;
            display: flex;
            gap: 15px;
          }

          nav ul li {
            display: inline;
          }

          nav ul li a {
            color: white;
            text-decoration: none;
          }

          .container {
            display: flex;
            flex-wrap: wrap;
            margin: 20px;
            gap: 20px;
          }

          .left-section,
          .right-section {
            flex: 1 1 calc(50% - 40px);
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }

          .left-section {
            background-color: #ecf0f1;
            text-align: center;
          }

          .left-section img {
            width: 100%;
            height: auto;
            max-height: 300px;
            object-fit: cover;
            border-radius: 8px;
          }

          .right-section {
            background-color: #e8f4f8;
          }

          .right-section h3 {
            margin-bottom: 10px;
            color: #2c3e50;
          }

          footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 10px 20px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }

          footer a {
            margin: 0 10px;
            text-decoration: none;
            color: white;
          }

          @media screen and (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .left-section,
            .right-section {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
      
      <header>
        <h1>KLU University</h1>
        <nav>
          <ul>
            <li><a href="https://www.kluniversity.in/">Home</a></li>
            <li><a href="https://www.kluniversity.in/">About</a></li>
            <li><a href="https://www.kluniversity.in/">Portfolio</a></li>
            <li><a href="https://www.kluniversity.in/">Login</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="left-section">
          <img src="https://via.placeholder.com/300" alt="Placeholder" />
        </div>
        <div className="right-section">
          <h3>Project Name: Amazing Project</h3>
          <p><strong>Domain:</strong> Web Development</p>
          <p><strong>Batch:</strong> 2024</p>
          <p><strong>Year:</strong> 2025</p>
        </div>
      </div>

      <footer>
        <p>
          Footer Links:
          <a href="https://www.kluniversity.in/">a</a>
          <a href="https://www.kluniversity.in/">b</a>
          <a href="https://www.kluniversity.in/">c</a>
          <a href="https://www.kluniversity.in/">d</a>
        </p>
      </footer>
    </div>
  );
};

export default Lab_3;
