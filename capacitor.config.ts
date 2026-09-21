import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'fr.roc.houilles.plateaurugby',
  appName: 'Plateau Rugby ROC',
  webDir: '.',
  server: { androidScheme: 'https' },
  android: { allowMixedContent: false }
};
export default config;
