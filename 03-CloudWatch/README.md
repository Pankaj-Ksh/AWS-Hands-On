# 🧭📈 Amazon CloudWatch – Project Portfolio

## 🌟 What is Amazon CloudWatch?

Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. It can collect logs, metrics, and events from AWS services, custom applications, and on-premises resources.

---

## ⚙️ Key Features at a Glance

- 📊 Collect and visualize metrics (CPU, memory, disk, etc.)
- 📁 Aggregate and analyze logs from multiple sources
- 🚨 Trigger alarms based on metric thresholds
- 🔁 Automate actions using alarms + SNS, Lambda, EC2, etc.
- 🔍 Gain visibility into applications and infrastructure
- 🧠 Integrate with anomaly detection and canaries

---

## 📂 Project Index – Hands-On Labs

### 1️⃣ [EC2 Termination via CloudWatch Alarm (CPU < 5%) – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/03-CloudWatch/01-EC2-Termination-Via-CloudWatch-Alarm/ec2-termination-via-cloudWatch-alarm.md)

#### ✅ Summary:
- 🔍 Monitored EC2 instance CPU utilization to identify underused compute resources.
- 📉 Set up a CloudWatch alarm to **automatically terminate EC2** when CPU usage fell below 5%.
- 📬 Integrated **Amazon SNS** to send real-time email alerts when the termination was triggered.
- 💻 Tested end-to-end by letting CPU idle, watching termination trigger, and receiving alert.
- 🧾 Verified the complete event history via CloudWatch Logs for auditability.
- ⚠️ Ensured alerts were reliable and documented the **irreversibility** of instance termination for safe use.

---

### 2️⃣ [AWS Billing Alarm in INR (₹) using CloudWatch and SNS – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/03-CloudWatch/02-AWS-Billing-Alarm-In-INR-Using-CloudWatch-And-SNS/aws-billing-alarm-in-INR-using-cloudwatch-and-sns.md)

#### ✅ Summary:
- 🧑‍💻 Built a personal billing alert system to monitor AWS usage in INR (₹) using **CloudWatch metrics** and **SNS notifications**.
- 🧾 Created the billing alarm in the **us-east-1 (N. Virginia)** region, since billing metrics are not supported in the **Mumbai region**.
- 📉 Set a **cost threshold of ₹120** to trigger alerts when estimated monthly charges exceed the limit.
- 📬 Integrated **Amazon SNS** to receive real-time **email notifications** upon alarm trigger.
- 🔁 Leveraged AWS's **default billing reset behavior**, where `EstimatedCharges` resets to ₹0 on the **1st of each month**, enabling automatic monthly tracking.
- 📊 Designed this setup to **stay within Free Tier**, track usage patterns, and improve **budget control** across AWS services.


---

### 3️⃣ [AWS CloudWatch: Monitoring Linux EC2 Instances 🐧 – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/03-CloudWatch/03-CloudWatch-Logs-and-Custom-Metrics-Setup-on-Amazon-EC2-Linux/CloudWatch-logs-and-custom-metrics-setup-on-amazon-ec2-linux.md)

#### ✅ Summary:
- ✅ Installed and configured **CloudWatch Agent** on a Linux EC2 instance for CPU, memory, and disk metrics.
- 🔒 Set up IAM roles with **least privilege access** to allow secure log and metric publishing.
- 📈 Built a **custom CloudWatch dashboard** to visualize instance health in real time.
- 🪵 Enabled system log collection (e.g., `/var/log/messages`) for centralized log analysis via CloudWatch Logs.
- 🛠️ Resolved real-world setup issues like missing `awslogs` packages and permission conflicts.
- 🌐 Created a **production-ready setup** useful for health monitoring, alerting, and compliance needs.

---

### 4️⃣ [🚀 AWS CloudWatch Canary Project: Monitor, Capture, and Store Website Health Logs – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/03-CloudWatch/04-AWS-CloudWatch-Canary-Application-Monitoring/aws-cloudwatch-canary-application-monitoring.md)

#### ✅ Summary:
- ✅ Deployed **AWS CloudWatch Synthetics Canary** to monitor a production website hosted on Vercel.
- 🖼️ Configured periodic **UI screenshot capture** to verify frontend rendering and availability.
- ☁️ Stored screenshots and logs in **Amazon S3** for auditing and historical analysis.
- 🔐 Solved **S3 access and encryption issues**, including Bucket Owner Enforced (BOE) constraints.
- 🚀 Enabled early detection of **frontend issues, downtime, or performance drops**.
- 📡 Improved production observability and automated incident detection via Canary monitoring.
