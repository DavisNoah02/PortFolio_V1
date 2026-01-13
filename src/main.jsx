import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Service Worker Registration with proper update handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Check for existing registrations
      const existingRegs = await navigator.serviceWorker.getRegistrations();
      
      // Only unregister if there's a different service worker
      for (const reg of existingRegs) {
        if (reg.active && reg.active.scriptURL.includes('service-worker.js')) {
          // Don't unregister, just update
          console.log('[SW] Existing service worker found, checking for updates');
        } else {
          // Unregister different/old service workers
          await reg.unregister();
          console.log('[SW] Old service worker unregistered');
        }
      }

      // Register service worker
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
        updateViaCache: 'none' // Always check for updates
      });

      console.log('✅ Service Worker registered:', registration.scope);

      // Check for updates on page load
      registration.update();

      // Check for updates every 60 seconds
      setInterval(() => {
        registration.update();
      }, 60000);

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        console.log('[SW] New service worker found, installing...');

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available
            console.log('[SW] New version available!');
            
            // Option 1: Auto-reload (less disruptive)
            // Tell the service worker to skip waiting
            newWorker.postMessage({ type: 'SKIP_WAITING' });
            
            // Reload after a short delay
            setTimeout(() => {
              console.log('[SW] Reloading for update...');
              window.location.reload();
            }, 1000);

            // Option 2: Show notification (more user-friendly)
            // Uncomment this and comment out the auto-reload above if preferred
            /*
            if (confirm('New version available! Reload to update?')) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
              window.location.reload();
            }
            */
          }
        });
      });

      // Reload when new service worker takes control
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          console.log('[SW] Controller changed, reloading...');
          window.location.reload();
        }
      });

    } catch (error) {
      console.error('❌ Service Worker registration failed:', error);
    }
  });
}