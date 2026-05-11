# DetectXr - Code Similarity and Risk Detection

A comprehensive tool for detecting code plagiarism and analyzing security risks in code submissions.

## Features

- **Code Similarity Detection**: Analyzes code submissions to detect plagiarism
- **Behavior Analysis**: Detects suspicious coding patterns and potential malicious code
- **Risk Assessment**: Provides a comprehensive risk score based on multiple factors
- **Code Metrics**: Analyzes code complexity, structure, and quality
- **Web Interface**: User-friendly React-based frontend for easy analysis

## Project Structure

```
detectxr/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB configuration
│   │   ├── controllers/
│   │   │   └── submission.controller.js
│   │   ├── routes/
│   │   │   └── submission.routes.js
│   │   ├── models/
│   │   │   └── submission.model.js
│   │   ├── services/
│   │   │   ├── similarity.service.js  # Code similarity analysis
│   │   │   ├── behavior.service.js    # Behavior pattern detection
│   │   │   ├── risk.service.js        # Risk assessment
│   │   │   └── analysis.service.js    # Comprehensive analysis
│   │   ├── utils/
│   │   │   ├── normalize.js           # Code normalization
│   │   │   ├── tokenize.js            # Code tokenization
│   │   │   └── helpers.js             # Utility functions
│   │   └── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeInput.jsx          # Code submission input
│   │   │   ├── ResultBox.jsx          # Analysis results display
│   │   │   └── RiskPanel.jsx          # Risk assessment panel
│   │   ├── pages/
│   │   │   └── Home.jsx               # Main page
│   │   ├── styles/
│   │   │   ├── Home.css
│   │   │   ├── ResultBox.css
│   │   │   └── RiskPanel.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## Installation

### Backend Setup

1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_uri
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

Or install all dependencies at once:
```bash
npm run install-all
```

## Running the Application

### Development Mode

**Backend:**
```bash
npm run dev
```

**Frontend (in another terminal):**
```bash
npm run frontend
```

### Production Mode

**Build Frontend:**
```bash
npm run frontend:build
```

**Start Backend:**
```bash
npm start
```

## API Endpoints

### POST /api/submissions/analyze
Analyzes code for similarity and risk.

**Request Body:**
```json
{
  "submissionCode": "string",
  "referenceCode": "string"
}
```

**Response:**
```json
{
  "similarity": { /* similarity analysis */ },
  "behavior": { /* behavior analysis */ },
  "metrics": { /* code metrics */ },
  "risk": { /* risk assessment */ }
}
```

## Services

### Similarity Service
Detects code plagiarism by comparing token sequences and code structure.

### Behavior Service
Analyzes code for suspicious patterns including:
- Code obfuscation
- Dynamic code execution
- Suspicious imports
- Unusual encoding patterns

### Risk Service
Assesses overall risk by combining:
- Similarity scores
- Behavioral analysis
- Code metrics
- Risk factors

### Analysis Service
Orchestrates all analysis types and generates comprehensive reports.

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment configuration

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **CSS3** - Styling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
