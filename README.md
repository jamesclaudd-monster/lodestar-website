# IUNGO-inspired website (Vercel-ready)

A responsive Next.js recreation inspired by the publicly visible information architecture and design language of iungotech.com. This is an independent implementation, not the original site's source code or backend.

## Pages
- `/` Home
- `/services` Services
- `/about` About and team
- `/work` Selected work
- `/contact` Contact form

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: Next.js. Build command: `npm run build`.
4. Deploy.

## Contact form behavior
The contact form validates required fields and opens the visitor's configured email app with the enquiry prefilled. It does not silently claim to send mail. For server-side submission, connect a provider such as Resend or Formspree and store its API key in a Vercel environment variable; never expose secrets in client code.

## Customization
- Replace the `hello@iungotech.com` contact target in `app/contact/page.tsx` with an address you control.
- Update copy, metrics, team names and portfolio examples before publishing. Public website content is included as a reference recreation; verify that you have permission to reuse names, logos, images and claims.
- Replace the typographic logo and abstract CSS artwork with licensed brand assets if you have permission to use them.
