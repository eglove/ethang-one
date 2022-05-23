terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

module "vpc" {
  source         = "terraform-aws-modules/vpc/aws"
  name           = "vpc"
  cidr           = var.vpc_cider_block
  azs            = [var.aws_region_sub]
  public_subnets = [var.web_subnet_cidr_block]
  tags = {
    Terraform = "true"
    Name      = "VPC"
  }
}

module "web_server_sg" {
  source              = "terraform-aws-modules/security-group/aws//modules/http-80"
  name                = "web-server"
  description         = "Security group for web-server with HTTP ports open within VPC"
  vpc_id              = module.vpc.vpc_id
  ingress_cidr_blocks = [var.public_cidr_block]
}

data "aws_ami" "latest_amazon_linux2" {
  owners      = ["amazon"]
  most_recent = true
  filter {
    name   = "name"
    values = ["amzn2-ami-kernel-*-x86_64-gp2"]
  }
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}

resource "aws_key_pair" "ssh_keypair" {
  public_key = file(var.ssh_public_key_path)
  key_name   = "ssh_key"
}

module "ec2_instance" {
  source                 = "terraform-aws-modules/ec2-instance/aws"
  version                = "~> 3.0"
  name                   = "single-instance"
  ami                    = data.aws_ami.latest_amazon_linux2.id
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.ssh_keypair.key_name
  vpc_security_group_ids = [module.web_server_sg.security_group_id]
  subnet_id              = module.vpc.public_subnets[0]
  user_data              = file("entry-script.sh")
  tags = {
    Terraform = "true"
    name      = "EC2"
  }
}
