import { Outlet, Link } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/payment-options">Payment</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/stops">Stops</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renders the current route */}
      </main>
      <footer>© 2024 Van Tracking App</footer>
    </div>
  );
}
