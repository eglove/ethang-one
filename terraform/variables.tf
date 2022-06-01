variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "aws_region" {}
variable "aws_region_sub" {}
variable "digital_ocean" {}
variable "ssh_public_key_path" {}

variable "public_cidr_block" {
  default     = "0.0.0.0/0"
  description = "All traffic allowed."
  type        = string
}

variable "vpc_cider_block" {
  default     = "10.0.0.0/16"
  description = "CIDR block for VPC"
  type        = string
}

variable "web_subnet_cidr_block" {
  default     = "10.0.0.0/24"
  description = "CIDR block for Web Subnet"
  type        = string
}
