# Next.js Project with shadcn/ui

This is a [Next.js](https://nextjs.org) project using [shadcn/ui](https://ui.shadcn.com/) for the component library and a custom server setup.

## 📸 Screenshots

### Dashboard
![Dashboard](./public/screenshots/dashboard.png)

### Components Preview
![Components](./public/screenshots/components.png)

### Dark Mode
![Dark Mode](./public/screenshots/dark-mode.png)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js 16.8.0 or later
- npm or yarn or pnpm

## Getting Started

1. Clone the repository ⛏
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Create a .env file in the root directory
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will start on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                # Next.js 13+ App Router
├── components/         # React components including shadcn/ui
├── lib/               # Utility functions and shared logic
├── styles/           # Global styles and CSS
├── server.js         # Custom server configuration
└── .env              # Environment variables
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
PORT=3000
NODE_ENV=development
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- Custom Express server setup

## Adding New shadcn/ui Components

To add new shadcn/ui components, use the CLI:

```bash
npx shadcn-ui@latest add [component-name]
# Example: npx shadcn-ui@latest add button
```

## Customization

### Styling
- Components can be customized in the `components/ui` directory
- Global styles are managed in `app/globals.css`
- Tailwind configuration is in `tailwind.config.js`

## Deployment

You can deploy this application using:

1. [Vercel](https://vercel.com) (Recommended)
2. Custom server deployment
   - Make sure to set proper environment variables
   - Use process manager like PM2 for production

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
