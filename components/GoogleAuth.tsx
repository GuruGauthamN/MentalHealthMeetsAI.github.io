
import React from 'react';
import type { GoogleUserProfile } from '../types';

interface GoogleAuthProps {
  isSignedIn: boolean;
  userProfile: GoogleUserProfile | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
        <path d="M1 1h22v22H1z" fill="none"></path>
    </svg>
);


export const GoogleAuth: React.FC<GoogleAuthProps> = ({ isSignedIn, userProfile, onSignIn, onSignOut }) => {
  if (isSignedIn && userProfile) {
    return (
      <div className="flex items-center space-x-3">
        <img src={userProfile.imageUrl} alt={userProfile.name} className="w-8 h-8 rounded-full" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:inline">{userProfile.name}</span>
        <button
          onClick={onSignOut}
          className="px-3 py-1.5 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/50 rounded-md hover:bg-gray-200/80 dark:hover:bg-gray-600/80 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onSignIn}
      className="flex items-center justify-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
        <GoogleIcon className="w-5 h-5"/>
      <span>Sign in to Log Chats</span>
    </button>
  );
};
