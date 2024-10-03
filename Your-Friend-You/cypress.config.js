import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Adicione aqui o baseUrl
    setupNodeEvents(on, config) {
      // implemente aqui os listeners de eventos do Node
    },
  },
});


