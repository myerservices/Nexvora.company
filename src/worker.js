// nexvora.company website on Cloudflare. Serves the static site; www redirects to the main address.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.nexvora.company") {
      url.hostname = "nexvora.company";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
