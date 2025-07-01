import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUsers, FaShoppingBag, FaBoxes, FaBullhorn,
  FaChartBar, FaUserFriends, FaCog, FaHeadset, FaSignOutAlt 
} from 'react-icons/fa';

const navItems = [
  { to: '/dashboard', icon: FaHome, label: 'Dashboard' },
  { to: '/users', icon: FaUsers, label: 'Users' },
  { to: '/products', icon: FaShoppingBag, label: 'Products' },
  { to: '/orders', icon: FaBoxes, label: 'Orders' },
  { to: '/campaigns', icon: FaBullhorn, label: 'Campaigns' },
  { to: '/analytics', icon: FaChartBar, label: 'Analytics' },
  { to: '/team', icon: FaUserFriends, label: 'Team' },
  { to: '/settings', icon: FaCog, label: 'Settings' },
  { to: '/support', icon: FaHeadset, label: 'Support' }
];

export default function Sidebar({ onClose }) {
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button 
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50"
          onClick={() => {/* Implement logout */}}
        >
          <FaSignOutAlt className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}