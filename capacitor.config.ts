import type { CapacitorConfig } from '@capacitor/cli'
const config: CapacitorConfig = {
  appId: 'pt.rjp.enghub',
  appName: 'RJP Eng Hub',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
}
export default config
