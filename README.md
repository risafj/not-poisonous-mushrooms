This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


### Setting up your environment

Change your node version to `14.15.0`.

Run `yarn`.


### Dev

Run the site locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### Deploy

#### Warning about sitemaps

There is currently a bug related to locales [and the error paths must be deleted](https://github.com/iamvishnusankar/next-sitemap/issues/212).

#### Build and deploy scripts

`yarn build`

go to out/public/sitemap.xml

remove invalid paths

### Check SEO viability

https://search.google.com/test/mobile-friendly

https://search.google.com/search-console/welcome?utm_source=wmx&utm_medium=deprecation-pane&utm_content=home

Verify site ownership to get detailed SEO breakdown:

https://support.google.com/webmasters/answer/9008080?hl=en

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
