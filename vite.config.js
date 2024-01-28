import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default {
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        home: './src/pages/home/Home.jsx',
        about: './src/pages/about/About.jsx',
        treatment: './src/pages/treatment/Treatment.jsx',
        contact: './src/pages/contact/Contact.jsx',
        replacement: './src/pages/replacement/Replacement.jsx',
        hipreplace: './src/pages/hipreplace/Hip.jsx',
      }
    }
  },
  
}