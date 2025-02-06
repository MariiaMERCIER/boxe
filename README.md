# Boxing Club Website

This project is a boxing club website built using **Next.js 14.1.4** and styled with **Tailwind Material** for a clean and responsive design.

## Purpose

This project is about creating a responsive website for a club. It displays key information about the club, prices, planning, contact, photos, and more. The website is designed to adapt to different screen sizes, ensuring a smooth user experience on desktop, tablet, and mobile devices.

Additionally, this project allowed me to further develop my skills in Next.js, a React framework, and explore new libraries for implementing advanced features and improving performance.

## Features

The website is a **single-page** application that includes the following sections:

- **Home**: A homepage featuring a **carousel** of images showcasing the club's highlights.
- **About the Club**: Provides information about the club, its mission, and other essential details.
- **Pricing Plans**: Describes the different pricing plans and packages offered by the club.
- **Course Schedule**: Displays the schedule of upcoming classes, allowing users to see when sessions are available.
- **Contact Section**: Enables users to send a contact message to be re-contacted.
  - (You should receive the message in your inbox if the email is correctly set up).
- **Location Map**: Displays the club's location on a map, allowing users to easily find the venue for courses.
- **Competition Photos**: A separate page showcasing photos from past competitions.
  - Users can log in to **add or remove photos** to keep the gallery up to date.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name
   ```

2. Create a `.env.local` file in the root of the project and add the necessary environment variables. Example:
   ```bash
   DB_URI=your-database-uri
   SECRET_KEY=your-secret-key
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## Admin Login

To log in as an **Admin**, you can use the following credentials:

- **Email address**: `boxe@test.com`
- **Password**: `Sfqy#@qQM9f!Rm&S`

These credentials will allow you to access the admin section where you can add or remove photos and perform other admin tasks.
