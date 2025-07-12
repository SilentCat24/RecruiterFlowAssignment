# RecruiterFlow Assignment

This project is a simple React application that demonstrates:
- Fetching a list of cards from a mock API (`json-server`)
- Displaying the cards in a Material-UI Card layout
- Adding new cards dynamically
- Deleting existing cards (API + UI)
- Maintaining good code structure with custom hooks

---

## 🛠️ Tech Stack

- **Framework:** React
- **Component Library:** Material-UI (MUI)
- **Mock API:** json-server

---

## ✅ Features

1. Displays a list of cards as responsive MUI cards.
2. Data is fetched from a mock API (`db.json`).
3. Each card has a Delete button — deletes the card from both UI and API.
4. New cards can be added dynamically using the Add button.
5. All API calls handled via custom hooks for better architecture.

---

## 🚀 Getting Started

1️⃣ Clone the repository:  
`git clone https://github.com/silentcat24/RecruiterFlowAssignment.git`  
`cd RecruiterFlowAssignment/recruiterflow`

2️⃣ Install dependencies:  
`npm install`

3️⃣ Install JSON Server globally (if needed):  
`npm install -g json-server`

4️⃣ Run JSON Server:  
`json-server --watch db.json --port 3001`

5️⃣ Start the React app:  
`npm start`

Visit: `http://localhost:3000` to see the app running.

---

## How to Build and View Output
- **Build:** No extra build step is needed — `npm start` runs the React dev server.
- **Mock API:** The app connects to `json-server` at `http://localhost:3001/cards`.
- **Output:** The browser will open at `http://localhost:3000` — you will see cards displayed as MUI cards.
- Use the **Add** button to add new cards.
- Use the **Delete** icon to remove cards.
- The UI updates automatically based on your actions.

---

## 🌿 Branching Strategy
- `main` — stable production-ready code.
- `feature/card-list` — work branch for displaying, adding, deleting card features.

---
