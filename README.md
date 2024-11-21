# SmartLink

A feature-rich web application to shorten long URLs, generate QR codes for the shortened links, and track the number of clicks on each link. Designed with modern UI/UX principles and optimized for scalability and usability.

## Features
- 🔗 Shorten long URLs into compact, shareable links.
- 📱 Generate QR codes for shortened URLs.
- 📊 Track click analytics (total clicks).
- 🎨 Responsive and visually appealing UI with **Tailwind CSS**.
- 🛠️ Modular code structure for easy maintainability.

---

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing URL mappings and analytics)
- **Others**: QR Code generation library, Postman (for API testing)

---

## Project Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed locally or a cloud instance
- Vite installed globally (optional for frontend)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```
2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```
3. Configure the environment:
   - Create a .env file in the backend directory.
   - Add the following variables:
      ```env
      PORT=5000
      MONGO_URI=your_mongo_db_connection_string
      BASE_URL=http://localhost:5000
      ```
4. Start the backend server:
    ```bash
    npm run dev
    ```
5. Set up the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

5. Start the frontend server:
    ```bash
    npm run dev
    ```
Access the application:

 - Frontend: 
    ```
    http://localhost:3000
    ```
 - Backend API: 
    ```
    http://localhost:5000/api
    ```

