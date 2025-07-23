# 📦 EC2 AMI Creation and Launch from Image (Linux)

This hands-on demonstrates the process of creating a custom Amazon Machine Image (AMI) from an existing **Linux EC2 instance**. It covers launching a new instance using the created AMI, verifying that files or installed software are preserved, and performing a safe cleanup by terminating the instances, deregistering the AMI, and deleting associated snapshots.

---

## 🎯 Objective

- Understand how to create an **AMI from an EC2 instance**
- Launch a new EC2 instance from the created AMI
- Verify data persistence like files or installed software
- Learn how to **deregister an AMI and delete snapshots**
- Handle snapshot/image dependency errors during cleanup

---

## 🛠️ Steps Performed

### ✅ Step 1: Launch & Connect to Instance

- Launched a **Linux EC2 instance**
- Connected via **PuTTY**
- Created a file named `file1` using the `touch` command  

📸 _Screenshot 1: PuTTY terminal with `file1` created_  
<img width="1920" height="928" alt="Screenshot (567)" src="https://github.com/user-attachments/assets/d4b052ed-188d-4a97-aa6f-d506a4372588" />

---

### ✅ Step 2: Create an Image

- Selected the instance → **Actions → Image and Templates → Create Image**
- Only **volume size** and **Delete on termination** are editable
- Fields like volume type, snapshot ID, IOPS, encryption, etc., are **disabled** for root volume
- Additional volumes can be added with all options editable  

📸 _Screenshot 2: Create Image dashboard_  
<img width="1920" height="941" alt="Screenshot (571)" src="https://github.com/user-attachments/assets/db73f9d0-a9f1-42f9-961c-520df6bc122f" />

---

### ✅ Step 3: Check AMI Status

- Verified the **AMI status** as `Available`
- ⚠️ If AMI status = `Failed`, a common reason is the instance was not in a `running` or `stopped` state while creating the image

📸 _Screenshot 3: AMI status_  
<img width="1920" height="931" alt="Screenshot (573)" src="https://github.com/user-attachments/assets/983d7654-0643-46de-8853-a65e8b919730" />

---

### ✅ Step 4: Launch from AMI

- Launched a new instance from the created **AMI**
- Named it **Custom-Instance**

📸 _Screenshot 4: Launch instance from AMI Dashboard  
<img width="1920" height="932" alt="Screenshot (574)" src="https://github.com/user-attachments/assets/c5360924-680e-4fe2-98aa-82951fad5e6b" />

---

### ✅ Step 5: Connect & Verify

- Logged into the **Custom-instance** using PuTTY  
- Verified that `file1` was present ✅

📸 _Screenshot 5: Terminal showing the file_  
<img width="1920" height="920" alt="Screenshot (575)" src="https://github.com/user-attachments/assets/e126244b-ba9e-4f5e-ac62-247684a9bfc3" />

---

### ✅ Step 6: Terminate Instances

- Terminated both the original and custom EC2 instances to free up resources

---

### ⚠️ Step 7: Snapshot Delete Error

- Attempted to delete the **snapshot first** before deregistering the AMI  
- ❌ Error received: _"Snapshot is currently in use by AMI"_

📸 _Screenshot 6: Error message_  
<img width="1920" height="934" alt="Screenshot (586)" src="https://github.com/user-attachments/assets/99b02009-9bcc-45eb-bfe4-fff3caefe3af" />

---

### ✅ Step 8: Deregister Image & Delete Snapshot

- Deregistered the AMI
- ✅ This enabled the option to delete the associated snapshot — either directly from the deregister prompt or later from the **Snapshots** section
- 🔁 To delete the snapshot, the AMI **must be deregistered first**; otherwise, you’ll encounter a dependency error


---

## 📘 Key Learnings & Observations

- **AMI creation** captures the full state (OS, data, configuration) of an EC2 instance
- Useful for **backups**, **base templates**, or **version-controlled deployments**
- AMIs can only be created from instances in **running or stopped** states
- Deregistering the AMI is required before deleting its associated snapshot

---

## 📌 Importance of This Concept

- AMIs are essential for **automation**, **auto scaling**, and **disaster recovery**
- Used to maintain **consistency** across development, staging, and production
- Enable **quick environment cloning** and rollback capabilities

---

## 🌍 Real-World Use Case

- DevOps teams use AMIs to launch pre-configured EC2 instances across environments
- Organizations rely on custom AMIs for building **standardized base images** with required software, configurations, and security settings

---

## 🏷️ Tags

`EC2` `AMI` `Snapshots` `Linux` `PuTTY` `AWS Hands-on` `Image Management` `Automation` `Infrastructure as Code`

---

## 💡 Tip

- Make sure to **create the image only when the instance is in a `running` or `stopped` state**. Creating an image in other states may result in failure.
- Use **clear and meaningful tags** (e.g., purpose, environment, creation date) on your AMIs to simplify management in large or multi-team environments.
- Always **deregister your AMI before deleting its associated snapshot** to avoid dependency errors like _"snapshot is currently in use by AMI."_

---
