export default {
  async fetch(request) {
    return new Response("Hello from rob0labs. Deploy pipeline works.", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
