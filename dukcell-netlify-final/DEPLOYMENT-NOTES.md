# DUK CELL — Deploy independente no Netlify

## Configuração
- Build command: `npm run build`
- Publish directory: `dist/public`
- O `netlify.toml` já contém essa configuração.
- O projeto é uma aplicação React/Vite estática; o servidor Node não é necessário para o site público.

## Antes de publicar
1. Substitua `https://SEU-DOMINIO-AQUI.com` pelo domínio definitivo da DUK CELL nos metadados/canonical/sitemap/robots.
2. Confirme que todas as imagens estão em `client/public/assets/`.
3. No Netlify, deixe o build usar o `netlify.toml` do repositório.
4. Depois de publicar, configure o domínio e o Google Search Console.
