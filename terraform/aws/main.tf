terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region     = var.AWS_DEFAULT_REGION
  access_key = var.AWS_ETHANG_ADMIN_ACCESS_KEY
  secret_key = var.AWS_ETHANG_ADMIN_SECRET_KEY
}

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr_block
  tags = {
    "Name" = var.main_vpc_name
  }
}

resource "aws_subnet" "web" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.web_subnet
  availability_zone = var.subnet_zone
  tags = {
    "Name" : var.web_subnet_name
  }
}

resource "aws_internet_gateway" "web_internet_gateway" {
  vpc_id = aws_vpc.main.id
  tags = {
    "Name" = "${var.main_vpc_name} Internet Gateway"
  }
}

resource "aws_default_route_table" "main_vpc_default_route_table" {
  default_route_table_id = aws_vpc.main.default_route_table_id
  route {
    cidr_block = var.default_cidr_block
    gateway_id = aws_internet_gateway.web_internet_gateway.id
  }
  tags = {
    "Name" : var.default_route_table_name
  }
}

resource "aws_default_security_group" "default_security_group" {
  vpc_id = aws_vpc.main.id
  egress {
    cidr_blocks = [var.default_cidr_block]
    from_port   = 0
    protocol    = "-1"
    to_port     = 0
  }
  ingress {
    cidr_blocks = [var.default_cidr_block]
    from_port   = 22
    protocol    = "tcp"
    to_port     = 22
  }
  ingress {
    cidr_blocks = [var.default_cidr_block]
    from_port   = 80
    protocol    = "tcp"
    to_port     = 80
  }
  tags = {
    "Name" : "Default Security Group"
  }
}
