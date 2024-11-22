import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, ThumbsDown, MessageSquare, Flag } from 'lucide-react';
import { CompanyWithVote } from '../types';

interface CompanyCardProps {
  company: CompanyWithVote;
  onVote: (id: string, value: 1 | -1) => void;
  onComment: (id: string) => void;
}

export function CompanyCard({ company, onVote, onComment }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Reported {formatDistanceToNow(new Date(company.created_at), { addSuffix: true })}
          </p>
        </div>
        <Flag className="text-red-500 h-5 w-5" />
      </div>
      
      <p className="mt-3 text-gray-700">{company.description}</p>
      
      <div className="mt-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onVote(company.id, 1)}
            className={`p-1 rounded hover:bg-gray-100 ${
              company.userVote === 1 ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <ThumbsUp className={`h-5 w-5 ${company.userVote === 1 ? 'fill-green-600' : ''}`} />
          </button>
          <span className={`font-medium ${
            company.votes > 0 ? 'text-green-600' : 
            company.votes < 0 ? 'text-red-600' : 'text-gray-600'
          }`}>
            {company.votes}
          </span>
          <button 
            onClick={() => onVote(company.id, -1)}
            className={`p-1 rounded hover:bg-gray-100 ${
              company.userVote === -1 ? 'text-red-600' : 'text-gray-600'
            }`}
          >
            <ThumbsDown className={`h-5 w-5 ${company.userVote === -1 ? 'fill-red-600' : ''}`} />
          </button>
        </div>
        
        <button 
          onClick={() => onComment(company.id)}
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          <span>{company.comments}</span>
        </button>
        
        <span className="text-sm text-gray-500">
          {company.location}
        </span>
      </div>
    </div>
  );
}