import React from 'react';
import { AlertCircle, Terminal, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BackendStartupError: React.FC = () => {
  const { t } = useTranslation();
  
  const handleRetry = () => {
    // Reload the page to retry
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-red-950/50 border-2 border-red-500/50 rounded-lg p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl font-bold text-red-100">
                {t('backendError.title')}
              </h2>
              
              <p className="text-red-200">
                {t('backendError.description')}
              </p>

              <div className="bg-black/50 rounded-lg p-4 border border-red-900/50">
                <div className="flex items-center gap-2 mb-3 text-red-300">
                  <Terminal className="w-5 h-5" />
                  <span className="font-semibold">{t('backendError.checkDockerLogs')}</span>
                </div>
                <p className="text-red-100 font-mono text-sm mb-3">
                  {t('backendError.dockerLogsDescription')}
                </p>
                <div className="space-y-2 text-xs text-red-300">
                  <p>{t('backendError.steps.openDocker')}</p>
                  <p>{t('backendError.steps.goToContainers')}</p>
                  <p>{t('backendError.steps.clickArchonServer')}</p>
                  <p>{t('backendError.steps.viewLogs')}</p>
                </div>
              </div>

              <div className="bg-yellow-950/30 border border-yellow-700/30 rounded-lg p-3">
                <p className="text-yellow-200 text-sm">
                  {t('backendError.commonIssue')}
                </p>
              </div>

              <div className="pt-4 border-t border-red-900/30">
                <p className="text-red-300 text-sm">
                  {t('backendError.fixInstructions')}
                </p>
                <code className="block mt-2 p-2 bg-black/70 rounded text-red-100 font-mono text-sm">
                  docker compose down && docker compose up -d
                </code>
                <p className="text-red-300 text-xs mt-2">
                  {t('backendError.dockerNote')}
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 rounded-lg text-red-100 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  {t('backendError.retryButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};