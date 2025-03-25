export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      const apiUrl = `https://headless.tebex.io${url.pathname}`;
      
      return fetch(apiUrl, {
        headers: {
          'X-Tebex-Secret': env.TEBEX_SECRET,
          'Content-Type': 'application/json'
        }
      });
    }
  }