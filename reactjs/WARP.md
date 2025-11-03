# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Structure

This is a React.js learning repository containing 8 independent React applications, each demonstrating specific React concepts:

- `1-react-app1/` - Basic React app with components
- `2-react-app2/` - Second basic React application  
- `3-react-app3/` - Third basic React application
- `4-app-react4/` - Fourth React application
- `5-props/` - Demonstrates React props and component composition
- `6-conditional-rendering/` - Shows conditional rendering patterns and component logic
- `7-event-handling/` - Event handling in React components
- `8-state-management/` - React state management with hooks (useState)

Each app directory is a standalone Vite-based React project with its own `package.json`, dependencies, and build configuration.

## Technology Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.x (with rolldown-vite in state-management app)
- **Language**: JavaScript (JSX)
- **Linting**: ESLint with React-specific rules
- **Development**: Hot Module Replacement (HMR) via Vite

## Common Development Commands

All commands must be run from within the specific app directory (e.g., `cd 1-react-app1`):

### Development
```powershell
npm run dev          # Start development server with HMR
npm run preview      # Preview production build locally
```

### Build & Lint
```powershell
npm run build        # Build for production
npm run lint         # Run ESLint on all files
```

### Package Management
```powershell
npm install          # Install dependencies for specific app
```

## Architecture Patterns

### Component Structure
- Each app follows the standard Vite React template structure
- `src/main.jsx` - Application entry point
- `src/App.jsx` - Root component
- `src/components/` - Reusable components directory

### Key React Concepts Demonstrated
- **Basic Components** (`1-react-app1`): Simple functional components and JSX
- **Props** (`5-props`): Component composition with children prop pattern
- **Conditional Rendering** (`6-conditional-rendering`): Multiple conditional rendering approaches
- **Event Handling** (`7-event-handling`): Event listeners and handlers
- **State Management** (`8-state-management`): useState hook for managing component state with arrays

### Code Patterns
- Functional components using ES6 arrow functions
- JSX with conditional rendering (ternary operators, logical AND)
- React hooks (useState) for state management
- Component prop destructuring
- Key prop usage for list rendering (`crypto.randomUUID()`)

## Working with Multiple Apps

Since this repository contains multiple independent React apps:

1. **Navigate to specific app**: Use `cd` to enter the app directory before running commands
2. **Install dependencies per app**: Each app has its own `node_modules` and requires separate `npm install`
3. **Development workflow**: Work on one app at a time, each runs on its own development server
4. **Testing concepts**: Each app demonstrates isolated React concepts - refer to directory names for context

## Development Notes

- All apps use ES modules (`"type": "module"` in package.json)
- ESLint configuration includes React-specific rules and hooks linting
- Vite provides fast development experience with instant HMR
- The `8-state-management` app uses a custom rolldown-vite build for experimentation
- Code style varies slightly between apps (some use `\r\n` line endings)

## Learning Path

The numbered directories suggest a learning progression:
1. Basic React setup and components
2-4. Additional basic React practice
5. Props and component composition
6. Conditional rendering techniques
7. Event handling patterns  
8. State management with hooks