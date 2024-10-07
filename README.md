# ScriptGen - Automated Script Generator

## Overview

ScriptGen is a web application that allows developers to generate automated scripts interactively. With an easy-to-use interface, users can select script templates, customize parameters, and generate scripts in real-time.

## Features

- Interactive script generation based on user input
- Multiple script templates available (e.g., Bash, Python)
- Real-time preview of the generated script
- (Optional) Save and manage generated scripts

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Python , FastAPI
- **Database**: mariaDB

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or higher)
- Python (version 3.6 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/scriptgen.git
   cd scriptgen
   ```

2. **Install frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:

   ```bash
   source backend/setup_script_maker.sh 
   ```

### Running the Application

1. **Start the backend and frontend server**:

   ```bash
   make run
   ```
   **For stop the servers use:**

   ```bash
   make stop
   ```
3. **Open your browser** and navigate to `http://localhost:3000` to access the application.
<br></br>
   **Careful** if you open more than one instance the host value will increment to 3001, 3002...
## Usage

- Select a script template from the main page.
- Fill in the necessary parameters in the provided form.
- View the generated script in real-time.
- (Optional) Save your script for future use.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

