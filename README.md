# Attendance Marking Application

## What does it do?

This application allows teachers to ensure and keep track of the students present in the class. Here’s how it works:
- Once the teacher creates a link, it is sent to students.
- Students enter their email and roll number to receive an OTP.
- They then enter the OTP to mark themselves as present.

## How to Use the Repo

### Client Setup

1. Clone the repository to your local computer.
2. Enter the `client` directory and run:

    ```bash
    npm install
    ```

3. Run:

    ```bash
    npm run dev
    ```

### Server Setup

1. Enter the `server` directory and run:

    ```bash
    npm install
    ```

2. Create a `.env` file with the following content:

    ```env
    MONGO_URI="Your MongoDB connection string"
    PORT="Any available PORT"
    APP_PASS="Your App Password" # Details on how to obtain this are below
    GMAIL="Your Gmail" # Consider this as the admin Gmail
    ```

3. Run:

    ```bash
    npm start
    ```

### App Password

1. Go to your Google Account settings.
2. Enable 2-Step Verification.
3. In the search bar, search for "App Password" and click on it.
4. Create an app password and copy it.

    **Note:** This password is for the admin's mail, so do not share it.

## Additional Notes

- The app is minimalist as it is a mini-project. It still needs a lot of work.
- As I am still learning, your suggestions would be greatly appreciated.

Thank you for your time! Happy Coding!!
