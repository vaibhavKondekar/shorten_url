# shorten_url
# Short URL Service

A simple Node.js application to shorten URLs, built with Express and MongoDB.

## Features

- Generate short URLs for any valid URL
- Redirect to the original URL using the short link
- Track visit history for each short URL

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- shortid (for generating unique short codes)

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/short_url.git
cd short_url
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

- Make sure MongoDB is running locally on `mongodb://localhost:27017/short-url`
- You can change the MongoDB URI in `index.js` if needed.

### 4. Start the Server

```bash
npm start
```

The server will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Create a Short URL

- **Endpoint:** `POST /url`
- **Body:** `{ "url": "https://example.com" }`
- **Response:** `{ "id": "shortId" }`

### 2. Redirect to Original URL

- **Endpoint:** `GET /url/:shortId`
- **Redirects** to the original URL and updates visit history.
