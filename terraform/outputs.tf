output "ec2_public_ip" {
  description = "Public IP address of EC2 instance."
  value       = module.ec2_instance.public_ip
}

output "vpc_id" {
  description = "ID Of VPC"
  value       = module.vpc.vpc_id
}

output "ami_id" {
  description = "ID of AMI"
  value       = data.aws_ami.latest_amazon_linux2.id
}
