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


resource "digitalocean_droplet" "ethang-website" {
  image      = "ubuntu-20-04-x64"
  name       = "ethang-website"
  region     = "nyc1"
  size       = "s-2vcpu-4gb-intel"
  monitoring = true
}

resource "digitalocean_domain" "ethang-dev" {
  name       = "ethang.dev"
  ip_address = digitalocean_droplet.ethang-website.ipv4_address
}

resource "digitalocean_record" "ethang-dev-www" {
  domain = digitalocean_domain.ethang-dev.id
  name   = "www"
  type   = "A"
  value  = digitalocean_droplet.ethang-website.ipv4_address
}

resource "digitalocean_certificate" "ethang-cert" {
  name    = "ethang-cert"
  type    = "lets_encrypt"
  domains = [digitalocean_domain.ethang-dev.name]
}
