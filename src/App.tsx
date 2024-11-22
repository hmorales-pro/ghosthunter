import React, { useEffect, useState } from 'react';
import { Ghost } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { CompanyCard } from './components/CompanyCard';
import { SubmitCompany } from './components/SubmitCompany';
import { AuthModal } from './components/AuthModal';
import { DataService } from './lib/db';
import { auth } from './lib/firebase';
import type { CompanyWithVote } from './types';
import { onAuthStateChanged, User } from 'firebase/auth';

const db = new DataService();

export default function App() {
  const [companies, setCompanies] = useState<CompanyWithVote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const fetchCompanies = () => {
    try {
      setError(null);
      const data = db.getCompanies().map(company => ({
        ...company,
        userVote: user ? db.getUserVote(company.id, user.uid) : 0
      }));
      setCompanies(data);
    } catch (err) {
      setError('Unable to load companies. Please try again later.');
      console.error('Error fetching companies:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [user]);

  const handleVote = (id: string, value: 1 | -1) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    try {
      db.vote(id, user.uid, value);
      fetchCompanies();
    } catch (err) {
      console.error('Error voting:', err);
    }
  };

  const handleComment = (id: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    // Implement comment modal/functionality
    console.log('Comment on company:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Ghost className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Ghost Guard</h1>
            </div>
            {user ? (
              <button
                onClick={() => auth.signOut()}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="text-sm text-purple-600 hover:text-purple-900"
              >
                Sign In
              </button>
            )}
          </div>
          <p className="mt-2 text-gray-600">Track companies that ghost job candidates</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <SubmitCompany onSubmit={fetchCompanies} user={user} onAuthRequired={() => setShowAuthModal(true)} />
        
        {error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        ) : loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <Ghost className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500">Loading reports...</p>
            </div>
          </div>
        ) : companies.length === 0 ? (
          <div className="text-center py-12">
            <Ghost className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No Reports Yet</h3>
            <p className="mt-2 text-gray-500">Be the first to report a company!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onVote={handleVote}
                onComment={handleComment}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}