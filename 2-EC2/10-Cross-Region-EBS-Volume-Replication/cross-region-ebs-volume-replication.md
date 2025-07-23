# 🎬 AWS EC2 Hands-on: Cross-Region EBS Volume Replication (Money Heist Use Case)

## 📖 Introduction

Imagine Netflix has just released a new season of **Money Heist** in the **US (N. Virginia)** region. As a cloud engineer, your task is to **replicate the content** to the **Indian (Mumbai)** region to ensure it is available for viewers in India.

In AWS terms, this means:  
> "Copying an EBS volume from one region to another so it’s available for EC2 instances in India."

---

## 🎯 Objective

- 💡 Understand EBS volume lifecycle across regions
- 🛠️ Learn to create and manage snapshots
- 🌍 Copy a snapshot from one region to another
- 🧩 Create a volume from a snapshot in a different region
- 🔗 Attach the new volume to an EC2 instance

---

## 🪜 Steps Performed

### 1️⃣ Launch EC2 Instance in US (N. Virginia)
- Go to EC2 Dashboard → Launch a new instance
- Select Amazon Linux 2 AMI and t2.micro type
- Launch instance in `us-east-1`
- Name it: `moneyheist-source-instance`

📸 `step1-launch-ec2-us`
<img width="1920" height="934" alt="Screenshot (620)" src="https://github.com/user-attachments/assets/ec5be37c-c5af-4b08-b1a4-80d761ae7f07" />

---

### 2️⃣ Create and Attach an Additional Volume (Money Heist Data)
- Go to **Elastic Block Store > Volumes**
- Create a 5 GiB volume in the same AZ as your US instance
- Name it: `moneyheist-volume-us`
- Attach it to the US EC2 instance

📸 `step2-create-volume`  
📸 `step3-attach-volume`
<img width="1920" height="932" alt="Screenshot (621)" src="https://github.com/user-attachments/assets/813face7-c850-47eb-84c8-059d3052f426" />

---

### 3️⃣ Create Snapshot of Volume in US Region
- Select the `moneyheist-volume-us`
- Click **Actions > Create Snapshot**
- Add description: "Money Heist Season Snapshot - US"

📸 `step4-create-snapshot`
<img width="1920" height="892" alt="Screenshot (622)" src="https://github.com/user-attachments/assets/f0d671f5-1f66-4197-b5d1-6baa94f9c580" />

---

### 4️⃣ Copy Snapshot to Mumbai Region
- Go to **Snapshots > Select snapshot**
- Click **Actions > Copy Snapshot**
- Set destination region: `ap-south-1 (Mumbai)`
- Description: "Money Heist India Copy"

📸 `step5-copy-snapshot`
<img width="1920" height="937" alt="Screenshot (624)" src="https://github.com/user-attachments/assets/c7d1219e-2fda-4b2d-a111-a6ba6f370507" />

---

### 5️⃣ Create New Volume from Snapshot in Mumbai
- Switch to **Mumbai region**
- Go to **Snapshots**, find copied snapshot
- Click **Actions > Create Volume**
- Choose AZ: `ap-south-1a` and size: 5 GiB

📸 `step6-create-volume-mumbai`
<img width="1920" height="930" alt="Screenshot (625)" src="https://github.com/user-attachments/assets/92df4d75-2431-4296-91ed-74f84bcdf493" />

---

### 6️⃣ Attach Volume to EC2 in Mumbai
- Launch a new EC2 instance in Mumbai (if not already)
- Go to **Volumes**, select the new volume
- Click **Actions > Attach Volume**
- Choose Mumbai instance

📸 `step7-attach-volume-mumbai`
<img width="1920" height="877" alt="Screenshot (627)" src="https://github.com/user-attachments/assets/115d8b07-bde3-4884-804c-b9c30105f61f" />

---

### 7️⃣ ✅ Final Result: Volume Successfully Replicated to Mumbai

- Log in to the EC2 instance in Mumbai.
- If required, mount the volume and verify content.
- 🎉 You have **successfully replicated a US-based volume to the Mumbai region** and attached it to an EC2 instance.

📸 `step8-final-result` 
<img width="1920" height="934" alt="Screenshot (628)" src="https://github.com/user-attachments/assets/c91d3324-f968-49ec-8b87-e2e8c608eaa3" />

---

## 🧠 Key Learnings and Observations

- AWS volumes are **region-locked**, but snapshots are **portable**
- Volume replication enables **disaster recovery, content distribution,** and **multi-region availability**
- Snapshot copying is **asynchronous** and can take a few minutes
- Elastic Block Store integrates easily with EC2 for persistent storage

---

### 🧐 Why Snapshot and Not Other Options?

- ❌ **Direct volume copy across regions is not supported** — EBS volumes are region-specific.
- ✅ **Snapshots are the AWS-recommended method** for cross-region replication.
- 📦 Snapshots are stored in S3 (internally), making them portable, durable, and cost-effective.
- 🔄 Snapshots can be reused to create multiple volumes in different AZs or regions.
- 🛠️ Other options like `rsync` or `SCP` are slow, manual, and not scalable.

---

## 📌 Importance of This Concept

- Enables **geographical content distribution**
- Critical for **multi-region application deployments**
- Helps in building **regionally redundant systems** and **failover architectures**
- Useful for **media platforms, global services, backups,** and **cross-region testing**

---

## 🌍 Real-World Use Case

> Netflix releases *Money Heist* in the US, but users in India also need access.
> Instead of rebuilding the entire setup, engineers **replicate the volume** containing the show into the India region and serve it via a local EC2 instance — **faster delivery, lower latency.**

---

## 🏷️ Tags

`#AWS` `#EC2` `#EBS` `#Snapshot` `#CrossRegion` `#Mumbai` `#NVirginia` `#HandsOn` `#CloudEngineer` `#ContentReplication`

---

## 💡 Tips

- Always **verify snapshot status** before copying
- Copying snapshots across regions incurs **data transfer costs**
- Unused Snapshots, and Volumes should be **deleted** to avoid charges
- Name your resources properly to avoid confusion across regions

---
