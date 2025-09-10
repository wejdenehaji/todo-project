# TaskMate

TaskMate is a modern React + TypeScript web application for managing daily tasks, planning, and archiving completed work. It features a multi-page welcome flow, a responsive dashboard, and a simple account modal.

## Features

- **Welcome Pages:** Animated onboarding screens introducing TaskMate.
- **Task Management:** Add, edit, delete, and sort tasks by status, category, and deadline.
- **Category Support:** Custom categories with color coding.
- **Responsive Design:** Works well on desktop and mobile.
- **Profile & Account Modal:** Simple login/signup modal (UI only).
- **Persistent Storage:** Tasks and categories are saved in `localStorage`.
- **Tailwind CSS:** Utility-first styling.
- **Framer Motion:** Smooth page and element transitions.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd react-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

- `src/components/` — React components (HomePage, ToDoPage, NavigationBar, etc.)
- `src/assets/` — Images and icons
- `src/App.tsx` — Main app entry
- `src/main.tsx` — React root
- `index.html` — HTML template
- `tailwind.config.cjs` — Tailwind CSS config
- `postcss.config.cjs` — PostCSS config

## Customization

- **Styling:** Modify Tailwind config in [`tailwind.config.cjs`](react-app/tailwind.config.cjs).
- **Task Logic:** See [`ToDoPage`](react-app/src/components/ToDoPage.tsx) and [`InputPlace`](react-app/src/components/ToDoComponents/InputPlace.tsx).
- **Welcome Flow:** Edit onboarding screens in [`WelcomePages/content.tsx`](react-app/src/components/WelcomePages/content.tsx).

## License

This project is for educational purposes.

---

Made with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
