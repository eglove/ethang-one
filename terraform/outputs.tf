output "gateway-ip" {
  description = "IP of EthanG Website"
  value       = digitalocean_droplet.graphql-gateway.ipv4_address
}

output "gateway-domain" {
  description = "Domain of EthanG Website"
  value       = digitalocean_domain.ethang-dev.name
}
