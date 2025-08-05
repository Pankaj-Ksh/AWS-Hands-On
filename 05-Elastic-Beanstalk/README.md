# 🌿 AWS Elastic Beanstalk – Service Overview

Welcome to the **Elastic Beanstalk** section of my AWS Hands-On repository!  
Here, I explore how to deploy scalable web apps on AWS without managing the underlying infrastructure manually.

> ✅ **Service Type**: Platform-as-a-Service (PaaS)  
> 🧑‍💻 **Use Cases**: App hosting, quick deployments, automated scaling

---

## 🌟 What is Elastic Beanstalk?

Elastic Beanstalk is an orchestration service by AWS that handles deployment, capacity provisioning, load balancing, auto-scaling, and application health monitoring — so you can **focus on your code**.

🧑‍🍳 Think of it as a chef that cooks and serves your app in the cloud, just the way you like it — without you worrying about the kitchen.

---

## ⚙️ Key Features at a Glance

🚀 **One-click deployment** of your code via Console  
📦 **Automatic provisioning** of EC2, ELB, Auto Scaling Groups, Security Groups  
🔄 **Zero-downtime deployments** using Blue-Green strategy  
🌐 **Built-in monitoring** with CloudWatch  
🎯 **Supports multiple stacks** – Node.js, Python, Java, .NET, PHP, Docker  
🔒 **Integrates with RDS, S3, IAM**, and more  

---

## 📂 Project Index – Hands-On Lab

### ✅ [`01-Blue-Green-Deployment-With-NodeJS`](./01-Blue-Green-Deployment-With-NodeJS)

This real-world demo was implemented using the **AWS Management Console**, and covers:

🟢 Creating and uploading a **Node.js** web app ZIP  
🧭 Deploying through the **Elastic Beanstalk Console**  
🔁 Setting up a **Blue-Green Deployment** for high availability  
🔀 Swapping environments for **zero-downtime release**  
📊 Monitoring health and metrics via **Elastic Beanstalk Dashboard**

---
