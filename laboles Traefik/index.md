- zet een Apache web achter Traefik, toegankelijk via mywebsite.localhost
- zorg dat hier een eigen indexpagina in staat, niet de default
---
Statische config:

```yaml
entryPoints:
  web:
    address: :8081
providers:
  file:
    filename: /path/to/dynamic/conf
```
---
Dynamisch:

```yaml
http:
  routers:
    to-whoami:
      rule: "Host(`example.com`) && PathPrefix(`/whoami/`)"
      middlewares:
        - test-user # zie onder
      service: whoami
  middlewares:
    test-user:
      basicAuth:
        users:
        # dit is niet het wachtwoord, maar de hash
        # run htpasswd -nb usernaamnaarkeuze wachtwoordnaarkeuze
        - user:hashcode
  services:
    whoami:
      loadBalancer:
        servers:
        - url: http://private/whoami-service
```
---
- krijg deze totale configuratie aan de praat met Docker Compose
  - gebruik example.localhost in plaats van example.com
- zie Docker Hub voor gebruik statische config file
---
- deploy een eigen site op je Jinja VM, met TLS
- haal (eerste) certificate en privkey van Traefik.me
---
- registreer een domeinnaam via Github Education
- configureer automatische renewal LetsEncrypt, **eerst met de test service**
