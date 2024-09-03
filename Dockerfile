FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY . .
RUN find -maxdepth 1 -type f -delete
WORKDIR /usr/local/apache2/htdocs/reveal.js
RUN find -maxdepth 1 '(' -type f -o '(' -type d ! -name 'plugin' ! -name 'dist' ')' ')' -delete
