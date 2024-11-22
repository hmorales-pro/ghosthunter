import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { DataService } from '../lib/db';
import type { User } from 'firebase/auth';

const db = new DataService();

interface SubmitCompanyProps {
  onSubmit: () => void;
  user: User | null;
  onAuthRequired: () => void;
}

export function SubmitCompany({ onSubmit, user, onAuthRequired }: SubmitCompanyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      onAuthRequired();
      return;
    }

    try {
      db.addCompany(formData);
      toast.success('Company reported successfully!');
      setIsOpen(false);
      setFormData({ name: '', description: '', location: '' });
      onSubmit();
    } catch (error) {
      toast.error('Failed to submit report');
      console.error('Error submitting report:', error);
    }
  };

  const handleClick = () => {
    if (!user) {
      onAuthRequired();
      return;
    }
    setIsOpen(true);
  };

  return (
    <div className="mb-8">
      {!isOpen ? (
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          <Send className="h-5 w-5" />
          <span>Report a Company</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">What Happened?</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="mt-1 block w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="mt-1 block w-full"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit Report
            </button>
          </div>
        </form>
      )}
    </div>
  );
}