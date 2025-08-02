# ShadCN Dashboard

A modern, responsive dashboard built with Next.js, TypeScript, and ShadCN UI components. This project showcases a comprehensive admin dashboard with multiple pages, beautiful UI, and excellent user experience.

## 🚀 Features

### Pages
- **Dashboard** - Main overview with key metrics and charts
- **Analytics** - Detailed analytics with performance metrics
- **Projects** - Project management with progress tracking
- **Messages** - Email-like messaging system with inbox and composition
- **Notifications** - Real-time alerts and system notifications
- **Profile** - User profile with achievements and activity
- **Settings** - Comprehensive settings management

### UI Components
- Modern, responsive design
- Dark/Light theme support
- Interactive charts and graphs
- Beautiful animations and transitions
- Mobile-friendly layout
- Custom scrollbars and focus states

### Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- ShadCN UI components
- Tailwind CSS for styling
- Lucide React icons
- Theme provider with system preference detection
- Responsive sidebar navigation
- Error handling and loading states

## 📁 Project Structure

```
src/
├── app/
│   ├── analytics/          # Analytics page
│   ├── projects/           # Projects page
│   ├── messages/           # Messages page
│   ├── notifications/      # Notifications page
│   ├── profile/            # Profile page
│   ├── settings/           # Settings page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Dashboard page
│   ├── loading.tsx         # Loading component
│   ├── error.tsx           # Error handling
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── AppSidebar.tsx      # Sidebar navigation
│   ├── Navbar.tsx          # Top navigation
│   ├── NotificationBadge.tsx # Notification badge component
│   ├── MessageComposer.tsx # Message composition component
│   └── providers/          # Theme provider
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shadcn-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the sidebar navigation in `AppSidebar.tsx`
4. Add navigation links in `Navbar.tsx`

### Styling
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS
- Theme variables are defined in the CSS file
- Dark mode is automatically detected

### Components
- All UI components are from ShadCN UI
- Custom components are in `src/components/`
- Charts use Recharts library
- Icons use Lucide React

## 📱 Responsive Design

The dashboard is fully responsive with:
- Mobile-first approach
- Collapsible sidebar
- Adaptive layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎯 Key Features

### Dashboard
- Key performance indicators
- Revenue and user statistics
- Interactive charts
- Recent activity feed

### Analytics
- Conversion rate tracking
- Traffic source analysis
- Device breakdown
- Performance metrics

### Projects
- Project management interface
- Progress tracking
- Team collaboration
- Task completion stats

### Messages
- Email-like messaging system
- Message composition with rich editor
- Recipient search and selection
- Message threading and replies
- Inbox organization and filtering

### Notifications
- Real-time notification system
- Different notification types (success, warning, error, info)
- Notification preferences and settings
- Mark as read functionality
- Notification statistics and metrics

### Profile
- User information display
- Activity statistics
- Skills and expertise
- Recent projects

### Settings
- Profile management
- Security settings
- Notification preferences
- Theme customization
- API key management

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Consistent component structure

## 🚀 Deployment

The project can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

### Vercel Deployment
1. Connect your GitHub repository
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for beautiful components
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- [Recharts](https://recharts.org/) for charts

---

Built with ❤️ using modern web technologies
