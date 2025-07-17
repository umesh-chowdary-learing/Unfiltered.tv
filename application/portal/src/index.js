import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
// Render the application
root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </QueryClientProvider>
);
