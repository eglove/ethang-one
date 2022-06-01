#output "ec2_public_ip" {
#  description = "Public IP address of EC2 instance."
#  value       = aws_instance.ec2.public_ip
#}
#
#output "ami_id" {
#  description = "ID of AMI"
#  value       = data.aws_ami.latest_amazon_linux2.id
#}

output "website-ip" {
  description = "IP of EthanG Website"
  value       = digitalocean_droplet.ethang-website.ipv4_address
}

output "website-domain" {
  description = "Domain of EthanG Website"
  value       = digitalocean_domain.ethang-dev.name
}
