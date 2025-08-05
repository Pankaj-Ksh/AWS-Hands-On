# ⏰ Amazon EventBridge – Service Overview

Welcome to the **Amazon EventBridge** section of my AWS Hands-On repository!  
Here, I explore how to build event-driven systems and automate cloud workflows using real-time events.

> ✅ **Service Type**: Serverless Event Bus (Event-Driven Architecture)  
> 🧑‍💻 **Use Cases**: Automation, notifications, integration, scheduling, monitoring

---

## 🌟 What is Amazon EventBridge?
Amazon EventBridge is a **serverless event bus service** that connects application components using events. It enables you to build scalable, event-driven architectures with minimal code by integrating AWS services and custom sources.

🧑‍🍳 Think of it as a **real-time messenger** between AWS services — EventBridge listens, detects, and routes events instantly, so your automation runs exactly when and how you want it.

## ⚙️ Key Features at a Glance
- 🔁 Event-driven workflows across AWS without polling
- 🕹️ Native integrations with over 200+ AWS services
- ⏰ Supports cron-based **scheduled tasks**
- 🧠 JSON-based rules for fine-grained filtering
- 🧩 Integrates with Lambda, SNS, SQS, Step Functions, and more
- 🔒 Built-in security with IAM and encryption support

## 📂 Project Index – Hands-On Lab

### 1️⃣ [EC2 Launch Notification using EventBridge and SNS – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/04-Amazon-EventBridge/01-EC2-Launch-Notification-Using-EventBridge-And-SNS/ec2-launch-notification-using-eventBridge-and-sns.md)

📌 **Project Highlights:**
- 🚀 Automatically sends email alerts **whenever a new EC2 instance is launched**
- 📡 Uses **EventBridge rule** to capture the `RunInstances` API call from CloudTrail
- 📬 Triggers an **SNS Topic** to notify admins instantly via email
- 🛡️ Follows **least-privilege** IAM policy setup for event handling and publishing
- 🔍 Great for **auditing**, **security compliance**, and **infrastructure tracking**
- 🧾 Fully monitored using CloudWatch Logs for transparency and troubleshooting

---

### 2️⃣ [EC2 Auto Start/Stop System with Notifications — Real-Time Cloud Automation (AWS) – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/04-Amazon-EventBridge/02-EC2-Auto-Start-Stop-Schedular/ec2-auto-start-stop-schedular.md)

📌 **Project Highlights:**
- ⏰ Automatically starts EC2 instances at **9:00 AM** and stops them at **6:00 PM** daily
- 🏷️ Operates only on instances with the tag **Dev: Yes** for targeted automation
- 🧠 Built using **EventBridge Scheduler** and **Lambda functions** for fully serverless logic
- 📢 Integrated with **SNS** to send success/failure email alerts for each operation
- 💸 Optimizes cost by ensuring **non-production resources** aren't left running
- 📊 Logs are captured in **CloudWatch Logs** for observability and debugging

---
