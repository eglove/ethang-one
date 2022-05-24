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

resource "aws_vpc" "vpc" {
  cidr_block = var.vpc_cider_block
  tags = {
    "Terraform" = true
  }
}

resource "aws_subnet" "web_subnet"{
  vpc_id = aws_vpc.vpc.id
  cidr_block = var.web_subnet_cidr_block
  availability_zone = var.aws_region_sub
  tags = {
    "Terraform" = true
  }
}

resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    "Terraform" = true
  }
}

resource "aws_default_route_table" "route_table" {
  default_route_table_id = aws_vpc.vpc.default_route_table_id

  route {
    cidr_block = var.public_cidr_block
    gateway_id = aws_internet_gateway.internet_gateway.id
  }
  tags = {
    "Terraform" = true
  }
}

resource "aws_default_security_group" "security_group" {
  vpc_id = aws_vpc.vpc.id
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [var.public_cidr_block]
  }
  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = [var.public_cidr_block]
  }
  ingress {
    from_port = 8080
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = [var.public_cidr_block]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [var.public_cidr_block]
  }
  tags = {
    "Terraform" = true
  }
}

resource "aws_key_pair" "terraform_ssh_key"{
  key_name = "terraform_ssh_key"
  public_key = file(var.ssh_public_key_path)
}

data "aws_ami" "latest_amazon_linux2"{
  owners = ["amazon"]
  most_recent = true
  filter{
    name = "name"
    values = ["amzn2-ami-kernel-*-x86_64-gp2"]
  }

  filter {
    name = "architecture"
    values = ["x86_64"]
  }
}

resource "aws_instance" "ec2" {
  ami = data.aws_ami.latest_amazon_linux2.id
  instance_type = "t2.micro"

  subnet_id = aws_subnet.web_subnet.id
  vpc_security_group_ids = [aws_default_security_group.security_group.id]
  associate_public_ip_address = true # Sensitive
  key_name = aws_key_pair.terraform_ssh_key.key_name

  tags = {
    "Terraform" = true
  }
}

