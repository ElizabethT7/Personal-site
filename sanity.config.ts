import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'vhpn050s',
  dataset: 'production',
  title: 'My personal website',
  apiVersion: '2023-07-14',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;