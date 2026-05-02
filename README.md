# Microservices E-Commerce Platform
**Graduation Project 2026**

Designed, maintained, and configured by: **Ramzy Ahmed Ramzy Mohamed**

## Architecture Overview
This is a production-grade, fully containerized microservices architecture utilizing:
- **Container Orchestration:** Kubernetes & Docker
- **CI/CD Pipeline:** Jenkins
- **Message Broker:** NATS Event Bus
- **Observability:** Prometheus & Grafana Monitoring
- **Infrastructure:** Ansible & Terraform

## Quick Start
To deploy the entire cluster locally:
```bash
kubectl apply -f infra/k8s/
```
