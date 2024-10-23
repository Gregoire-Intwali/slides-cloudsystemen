# Vervolg netwerklaag
---
                Achilleshiel IPv4
                <aside class="notes">
                    Stel dat heel het Internet één groot lokaal netwerk was (en dat we toch IPv4 gebruikten), hoe veel
                    adressen dan?
                    (toon met rekenmachine)
                </aside>
---
privé-adresblokken:
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16
- localhost: 127.0.0.0/24
---
                NAT (PAT)
                <aside class="notes">
                    <ul>
                        <li>Netwerkadresvertaling / Network Address Translation</li>
                        <li>Vergelijk: ipconfig en myip.com</li>
                        <li>(indien IPv4): zal voor iedereen <strong>zelfde</strong> zijn!</li>
                    </ul>
                </aside>
---
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/2t8-WRZWCq8?si=IbcDw07DOS24lm2u&amp;start=47"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <aside class="notes">
                    <ul>
                        <li>bestaan variaties op het concept, maar dit is wat je typisch moet weten als programmeur</li>
                        <ul>
                            <li>sommige zaken moeten <strong>eerst</strong> de connectie opstarten</li>
                            <li>poort die zichtbaar is aan ontvangerkant is niet noodzakelijk echte poort van de
                                afzender</li>
                            <li>PAT doorbreekt protocolstapel</li>
                            <li>nadeel: routers moeten details van TCP/UDP kennen, zijn wel dominant maar hindert andere
                                zaken die bovenop IP staan</li>
                            <li>screenshot port forwarding Telenet settings heeft hier mee te maken (maar is niet dynamisch)</li>
                            <li>NAT/PAT doet al vrij lang goed dienst, maar is een "hack". Manuele port forwarding is
                                soms nodig, nieuwe protocols bovenop IP implementeren is lastig.</li>
                            <li>truukje "hole punching" (en reden) moet je kennen voor applicaties</li>
                        </ul>
                    </ul>
                </aside>
---
# Docker
---
                <iframe width="560" height="315" src="https://www.youtube.com/embed/J0NuOlA2xDc?si=hFJDadYzxPoWgbA8"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
---
                container vs. VM
                <aside class="notes">
                    <ul>
                        <li>VM = van de grond op (simulatie HW)</li>
                        <li>container = enkel exact wat applicatie nodig heeft</li>
                        <ul>
                            <li>tweede VM = dubbele kost</li>
                            <li>tweede container = minimale extra kost</li>
                        </ul>
                        <li>In de eerste plaats <strong>Linux</strong>, omdat images dus die kernel delen.</li>
                    </ul>
                </aside>
---
(installatie Docker Desktop)
---
                image vs. container
                <aside class="notes">
                    <ul>
                        <li>"template" vs. instantie</li>
                        <li>vergelijk met "klasse" vs. "object"</li>
                        <li>filmpje: image = onderste lagen (liggen vast), container heeft jouw eigen extra bovenste
                            laag</li>
                    </ul>
                </aside>
---
                Workshop (deel 1)
                <aside class="notes">
                    Doorlopen "Build a containerized..." op Azure tot en met "Customize a Docker image to run your own
                    web app, enkel "Retrieve..."."
                </aside>
---
- download de officiële `nginx` image van Docker Hub
- maak er een container mee en link poort 80 van host naar container
- log in op de container
- installeer een editor: `apt update; apt install nano`
- bewerk `/usr/share/nginx/html/index.html`
- controleer resultaat op `localhost`
---
Workshop (deel 2)

note:
- doe stappen "customize a Docker image..."
---
                <ul>
                    <li>Maak een nieuwe Dockerfile.</li>
                    <li>Zorg dat hij voortbouwt op <code>ubuntu:latest</code></li>
                    <li>Zorg dat hij beschikt over <code>curl</code>. In Ubuntu installeer je dit via <code>apt-get
                            update && apt-get install -y curl</code>.</li>
                    <li>Zorg dat hij de broncode van neverssl.com toont in de terminal wanneer hij start.</li>
                    <li>Test uit door hem te builden en uit te voeren.</li>
                </ul>
