# ☁️ AWS DataSync: S3 → EFS Migration Step-by-Step 🚀

A complete hands-on guide to migrate data from an **Amazon S3 bucket** to **Amazon EFS** using **AWS DataSync**.

---

## 🗂️ Step 1: S3 Bucket Setup 🪣

### ✅ Create an S3 Bucket
1. Navigate to **S3 → Create Bucket**
2. Provide a unique name (e.g., `demo-bkt-datasync`) and select a region.
3. Enable encryption and configure versioning if required.

### 📤 Upload Files
- Upload sample files (e.g., `Audi.jpg`, `Defender.jpg`) into the bucket.  
- ✅ S3 is now ready as the **source**.

---

## 💾 Step 2: Amazon EFS Setup

### ✅ Create an EFS File System
1. Navigate to **EFS → Create File System**
2. Select VPC & subnets across multiple AZs for high availability.
3. Configure **mount targets** in each subnet.

### 🔐 Set EFS File System Policy
- Configure **read/write permissions**  
- Prevent **root access**  
- Enable **encryption**

- ✅ EFS is now ready as the **destination**.

---

## 📊 Step 3: Configure AWS DataSync

### ✅ Open DataSync
- Navigate to **AWS DataSync → Create Task**

### 🏁 Set Source Location (S3)
1. Choose **Amazon S3**  
2. Provide **S3 URI** of your bucket  
3. Assign IAM role with `s3:ListBucket` & `s3:GetObject` permissions  

### 🎯 Set Destination Location (EFS)
1. Select **Amazon EFS**  
2. Provide **filesystem ID**, subnet, and security group  

### ⚙️ Task Settings
- Mode: **Basic**  
- (Optional) Add **include/exclude filters**  

### 🕒 Schedule & Logging
- Configure **recurring schedule** (automation)  
- Enable **CloudWatch Logs** (auditing)  

- ✅ DataSync task is now ready.

---

## 💻 Step 4: EC2 for Validation

### ✅ Launch EC2 Instance
- AMI: **Amazon Linux 2**  
- Security Group: Allow **SSH (22)** and **NFS (2049)** inbound  

### 🛠️ Mount EFS on EC2
```
# Install NFS utilities
sudo yum install -y amazon-efs-utils

# Create mount directory
sudo mkdir /mnt/efs

# Mount the EFS filesystem
sudo mount -t efs <EFS_ID>:/ /mnt/efs

# Verify mounted EFS
df -h
```

## 🏗 Architecture Overview

<img width="2310" height="703" alt="diagram-export-8-28-2025-7_44_21-PM" src="https://github.com/user-attachments/assets/0eabc136-8764-40c8-88b2-c3db6d630b40" />
