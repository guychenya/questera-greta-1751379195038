import { useState } from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaPlay, FaPause } from 'react-icons/fa';

export default function Campaigns() {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Sale 2024',
      type: 'Email',
      status: 'Active',
      reach: '15,000',
      conversion: '2.5%',
      budget: '$1,200'
    },
    {
      id: 2,
      name: 'New Product Launch',
      type: 'Social Media',
      status: 'Scheduled',
      reach: '25,000',
      conversion: '3.2%',
      budget: '$2,500'
    },
    {
      id: 3,
      name: 'Holiday Special',
      type: 'SMS',
      status: 'Draft',
      reach: '10,000',
      conversion: '0%',
      budget: '$800'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Campaigns</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <FaPlus className="mr-2" />
          Create Campaign
        </motion.button>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full sm:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Types</option>
              <option>Email</option>
              <option>Social Media</option>
              <option>SMS</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Scheduled</option>
              <option>Draft</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.reach}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.conversion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.budget}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      {campaign.status === 'Active' ? (
                        <button className="text-yellow-600 hover:text-yellow-900">
                          <FaPause />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <FaPlay />
                        </button>
                      )}
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}