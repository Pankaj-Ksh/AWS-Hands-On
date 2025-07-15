# ☁️ Amazon EC2 (Elastic Compute Cloud) Overview

## 📘 What is EC2?

**EC2** stands for **Elastic Compute Cloud** — a web service from **AWS** that provides **resizable compute services** in the cloud.

- **Resizable** = 🔁 Scale Out/In (number of instances) + ⬆️⬇️ Scale Up/Down (instance size)
- **Servers** in EC2 are known as **Instances**
- **Pricing Model**: 💰 **Pay as you go**
  - You pay **per hour**
  - **750 hours/month free** under the Free Tier
  - ⏱️ If you start and terminate 2 instances for 5 minutes each → It counts as **2 full hours**

---

## 🔹 Key Features of EC2

- ⚖️ **Scalability**: Quickly scale up/down based on traffic.
- 🧠 **Variety of Instance Types**: Choose based on CPU, memory, storage, and network.
- 🌐 **Elastic IPs**: Static IPs for dynamic cloud computing.
- 🔒 **Security Groups**: Virtual firewalls to control traffic at the instance level.
- 🛡️ **NACL (Network Access Control List)**: Stateless firewall to control traffic at the subnet level.
- 💽 **Storage Options**: EBS (Elastic Block Store) and Instance Store.
- 🖼️ **Snapshots**: Backup your volumes for disaster recovery or cloning.
- 📦 **AMI (Amazon Machine Image)**: Preconfigured OS/software image to launch instances.
- 🔑 **Key Pairs**: SSH login for secure access.
- ⚖️ **Load Balancer**: Distribute traffic evenly across multiple instances.
- 📈 **Auto Scaling**: Automatically adjust capacity for performance and cost-efficiency.

---

## 🔹 Common EC2 Use Cases

- 🌍 Hosting websites and web apps
- 🛠️ Running backend services or APIs
- 🧪 Development and test environments
