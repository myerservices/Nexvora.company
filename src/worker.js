// nexvora.com.my website on Cloudflare. Serves the static site; www redirects to the main address.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.nexvora.com.my") {
      url.hostname = "nexvora.com.my";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
