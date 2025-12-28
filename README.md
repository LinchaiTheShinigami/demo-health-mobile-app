# Demo Health Mobile App

A baseline mobile application built with React Native and Expo, using TypeScript.

## Features

- Cross-platform (Android & iOS)
- TypeScript for type safety
- ESLint and Prettier for code quality
- Jest for testing
- CI/CD with GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Scripts

- `npm start`: Start Expo development server
- `npm run android`: Run on Android emulator/device
- `npm run ios`: Run on iOS simulator (macOS only)
- `npm run web`: Run in web browser
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `npm run test`: Run tests
- `npm run typecheck`: Run TypeScript type checking

## Building for Production

Use Expo Application Services (EAS) for building:

1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Configure: `eas build:configure`
4. Build: `eas build --platform android` or `eas build --platform ios`

## CI/CD

This project uses GitHub Actions for CI/CD:

- **Linting**: ESLint checks code quality
- **Testing**: Jest runs unit tests
- **Type Checking**: TypeScript validates types
- **Security**: CodeQL scans for vulnerabilities, npm audit checks dependencies
- **Dependabot**: Automatically updates dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Run tests and linting
5. Submit a pull request

## License

Licensed under the Apache License, Version 2.0