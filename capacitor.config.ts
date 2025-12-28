import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ec.edu.pucese.incentivos',
  appName: 'PUCESE Incentivos',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#003DA5",
      showSpinner: true,
      spinnerColor: "#FCD34D"
    }
  }
};

export default config;

