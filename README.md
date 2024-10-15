# Promptly - AI Prompt Sharing Platform

Promptly is a full-stack web application built with **Next.js** that allows users to create, share, and discover AI prompts. Whether you're looking for inspiration or contributing your own ideas, this platform empowers users to explore a wide variety of creative prompts.

### **Prerequisites**

Make sure you have the following installed on your system:

- Node.js 18+
- MongoDB (local or remote)
- Vercel CLI (optional, for deployment)

### **Project Installation**

1.Clone the repository:

```bash
git clone https://github.com/anupkb/promptly.git
cd promptly
```

2.Install dependencies:
npm install

## **Create .env File in Your Root Directory**

- **Add the following variables to the .env file:**
  GOOGLE_ID=<your-google-client-id>
  GOOGLE_CLIENT_SECRET=<your-google-client-secret>
  MONGODB_URI=<your-mongodb-connection-uri>
  NEXTAUTH_URL=<your-app-url>
  NEXTAUTH_URL_INTERNAL=<your-internal-url>
  NEXTAUTH_SECRET=<your-nextauth-secret>

## **Run the Project**

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## **Features**

- **Share your AI-Prompts**

  - Share your AI-Prompts with a # and discover other's prompt for your task.

- **Search Functionality**
  - Search by **prompt content**, **tag**, or **username**.
- **Tag-based Filtering**

  - Click on a tag to instantly filter and explore prompts related to that tag.

- **User Profiles**

  - View other users' profiles to see all the prompts they’ve shared.

- **Authentication**
  - Complete login system with support for **OAuth 2.0** and **OpenID Connect**.
- **Fully Responsive UI**
  - Optimized for desktop and mobile using **Tailwind CSS**.

---

## **Tech Stack**

- **Stack:** React.js, Next.js, Tailwind CSS
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** NextAuth, OAuth 2.0, OpenID Connect, Auth0
- **Deployment:** Vercel

---

- **Home Page**  
  ![Home Page Screenshot]()

- **Create Prompt**  
  ![Create Prompt Screenshot]()

- **User Profile View**  
  ![User Profile Screenshot]()

---

## **Contributing**

    - Feel free to submit a pull request if you'd like to contribute to this project!
