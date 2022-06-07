terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.digital_ocean
}

resource "digitalocean_droplet" "graphql-gateway" {
  image      = "ubuntu-20-04-x64"
  name       = "graphql-gateway"
  region     = "nyc1"
  size       = "s-2vcpu-4gb-intel"
  monitoring = true
}

resource "digitalocean_domain" "ethang-dev" {
  name       = "ethang.dev"
  ip_address = digitalocean_droplet.graphql-gateway.ipv4_address
}
