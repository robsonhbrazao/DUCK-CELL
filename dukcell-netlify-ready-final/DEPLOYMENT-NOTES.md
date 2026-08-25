# DUK CELL — Netlify

O projeto foi preparado para build estático com npm + Vite.

Configuração:
- Base directory: `dukcell-netlify-final` no repositório, se o projeto estiver dentro dessa pasta.
- Build command: `npm run build`
- Publish directory: `dist/public`

O `pnpm-lock.yaml` foi removido para evitar o erro de lockfile congelado. O `packageManager` do pnpm também foi removido para que o Netlify use npm.

Antes de publicar no domínio definitivo, ajuste canonical, sitemap, robots e URLs Open Graph para o domínio real.
