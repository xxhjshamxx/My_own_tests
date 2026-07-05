
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Security Group
resource "aws_security_group" "main" {
  name        = "project4-security-group"
  description = "Allow SSH, HTTP, HTTPS, and internal traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instances (K8s workers)
resource "aws_instance" "worker" {
  count         = 2
  ami           = "ami-0c101f26f147fa7fd"
  instance_type = "t3.medium"
  vpc_security_group_ids = [aws_security_group.main.id]
  tags = {
    Name = "project4-worker-${count.index}"
  }
}

# RDS PostgreSQL
resource "aws_db_instance" "default" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "15"
  instance_class       = "db.t3.micro"
  name                 = "project4db"
  username             = "admin"
  password             = "password123"
  skip_final_snapshot  = true
  publicly_accessible  = true
  vpc_security_group_ids = [aws_security_group.main.id]
}

# S3 Bucket
resource "aws_s3_bucket" "static" {
  bucket = "project4-static-${random_string.suffix.result}"
  tags = {
    Name = "Project4 Static Assets"
  }
}

resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
}

# Elastic Load Balancer (ELB)
resource "aws_elb" "main" {
  name               = "project4-elb"
  availability_zones = ["us-east-1a", "us-east-1b"]

  listener {
    instance_port     = 80
    instance_protocol = "http"
    lb_port           = 80
    lb_protocol       = "http"
  }

  instances = [aws_instance.worker[0].id, aws_instance.worker[1].id]
}

output "elb_dns_name" {
  value = aws_elb.main.dns_name
}

output "rds_endpoint" {
  value = aws_db_instance.default.endpoint
}

output "s3_bucket_name" {
  value = aws_s3_bucket.static.bucket
}

output "ec2_public_ips" {
  value = aws_instance.worker.*.public_ip
}

