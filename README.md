# Washington DC Council Chat
This project aims to provide a site to watch and chat about DC Council meetings.
## Setup
### Prerequisites
This project is based heavily on the horizon backend. As such we are using the horizon docker image. To get started you need to install:

    docker
    docker-compose
### Init
The project is initalized with a fake secret in `.hz/config.toml`. This secret should be changed to a secure secret before pushing to production.

### Startup
To startup the horizon app, run:

    docker-compose
This will start a dev server in developer mode. You can reach it at http://localhost:8181/
