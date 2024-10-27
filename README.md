# Foodify

Foodify is a Next.js application for [brief description of your project].

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Visual Studio Code**: A lightweight but powerful source code editor.
   - Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - Follow the installation instructions for your operating system.

2. **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version for stability.
   - Follow the installation instructions for your operating system.

3. **pnpm**: A fast, disk space efficient package manager.
   - After installing Node.js, open your terminal and run:
     ```
     npm install -g pnpm
     ```

## Setting Up the Project

Follow these steps to set up the Foodify project on your local machine:

1. **Clone the repository**
   Open your terminal and run:
   ```
   git clone https://github.com/vani0-0/foodify.git
   ```

2. **Navigate to the project directory**
   ```
   cd foodify
   ```

3. **Install dependencies**
   Run the following command to install the project dependencies:
   ```
   pnpm install
   ```

4. **Set up environment variables**
   Copy the `.env.example` file to `.env.local` and fill in the required environment variables:
   ```
   cp .env.example .env.local
   ```
   Open `.env.local` in a text editor and add your specific configuration values.

5. **Run the development server**
   Start the Next.js development server:
   ```
   pnpm dev
   ```

6. **Open the application**
   Visit [http://localhost:3000](http://localhost:3000) in your web browser to see the application running.

## Building and Running the Project

After setting up project, you can build and run it using the following staps:

1. **Build the project**
     Run the following command to build the project:
     ```
     pnpm build
     ```
    This command creats an optimized production build of your application.
2. **Start the production server**
     After build is complete, you can start the production server:
     ```
     pnpm start
     ```
     This will start the application in production mode.

3. **Access the application**
Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the production version of your application running.

Note: The development server (`pnpm dev`) is typically used during development, while the production build and start commands are used for deploying and running the optimized version of your application.


## Available Scripts

In the project directory, you can run:

- \`pnpm dev\`: Runs the app in development mode.
- \`pnpm build\`: Builds the app for production.
- \`pnpm start\`: Runs the built app in production mode.
- \`pnpm lint\`: Runs the linter to check for code style issues.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [pnpm Documentation](https://pnpm.io/motivation) - learn about pnpm features and benefits.

## Contributing

[Include instructions for how others can contribute to your project]

## License

This project is licensed under the terms of the license file in the root directory of this repository. For more details, see the [LICENSE](https://github.com/vani0-0/foodify/blob/main/LICENSE) file.
