import { useState } from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaSearch, FaComments, FaTicketAlt, FaBook } from 'react-icons/fa';

export default function Support() {
  const [faqs] = useState([
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.'
    },
    {
      question: 'How can I track my order?',
      answer: 'To track your order, go to the Orders page and click on the tracking number associated with your order. This will show you the current status and location of your package.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.'
    }
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-purple-50 rounded-lg"
        >
          <FaComments className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
          <p className="mt-2 text-sm text-gray-500">Get instant help from our support team</p>
          <button className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-800">
            Start Chat
            <span className="ml-2">→</span>
          </button>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-blue-50 rounded-lg"
        >
          <FaTicketAlt className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Submit Ticket</h3>
          <p className="mt-2 text-sm text-gray-500">Create a support ticket for complex issues</p>
          <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
            New Ticket
            <span className="ml-2">→</span>
          </button>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-green-50 rounded-lg"
        >
          <FaBook className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Knowledge Base</h3>
          <p className="mt-2 text-sm text-gray-500">Browse our help articles and tutorials</p>
          <button className="mt-4 inline-flex items-center text-green-600 hover:text-green-800">
            View Articles
            <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>

      <Card title="Frequently Asked Questions">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 pb-4"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-gray-400 group-open:transform group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-gray-600 text-sm">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Card>

      <Card title="Search Help Articles">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </Card>
    </div>
  );
}