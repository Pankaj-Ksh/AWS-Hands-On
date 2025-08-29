# 🚀 AWS Storage Gateway with S3 Integration:👉 Step-by-Step 

A complete hands-on guide to configure **AWS Storage Gateway (File Gateway)** with **Amazon S3** for hybrid storage integration.  


## 🗂️ Step 1: Go To Storage Gateway Dashboard  
✅ Create Gateway  

1. Open **AWS Console → Storage Gateway → Create Gateway**  
2. **Gateway name** → give a unique name (e.g., `demo-file-gateway`)  
3. **Gateway type** → Select **Amazon S3 File Gateway**  
4. **Platform option** → Choose **Amazon EC2**  
5. Click **Set up Gateway on Amazon EC2 → Launch instance**  
   - AWS automatically selects **Storage Gateway (File Gateway) AMI**  
6. Choose **Instance type** → e.g., `t3.large`  
7. **Attach key pair** & select **VPC/Subnet**  
8. **Add additional EBS volume** → e.g., **150 GB for cache storage**  
9. **Configure Security Group** → allow:  
   - **SSH (22)** for admin access  
   - **NFS (2049)** for client file system mounting  

✅ **EC2 instance for File Gateway is launched successfully**  

---

## 🔑 Step 2: Activate Storage Gateway  
✅ Connect Gateway to AWS  

1. Copy the **Public IP** of the File Gateway EC2 instance  
2. Go to **AWS Storage Gateway Console → Add Gateway**  
3. Select **File Gateway** as type  
4. Enter the **EC2 Public IP address**  
5. Click **Review & Activate**  
6. Select the **attached EBS volume** as **cache storage**  

✅ **Gateway is activated & cache is ready** 

---

## 🪣 Step 3: Create S3 Bucket  

1. Navigate to **S3 → Create Bucket**  
2. Provide a unique bucket name (e.g., `pankaj-demo-storage-gateway-bkt`)  
3. Choose the **same region** as the gateway  
4. Keep **encryption enabled**  

✅ **S3 bucket is ready as backend storage.**  

---

## 📂 Step 4: Create File Share  

1. Go to **AWS Storage Gateway Console → File Shares → Create File Share**  
2. Select **NFS protocol**  
3. Map it to the **S3 bucket** (`pankaj-demo-storage-gateway-bkt`)  
4. Configure **access permissions** (client IPs, read/write access)  

✅ **File Share is now created and linked to S3.**  

---

## 💻 Step 5: Launch Client EC2 & Mount File Share  

### ✅ Create EC2 Client  
1. Launch **Linux EC2 instance (Amazon Linux 2 / RHEL)**  
2. Configure **Security Group** → allow:  
   - **SSH (22)**  
   - **NFS (2049)**  

### 🛠️ Mount File Share on EC2  

Run the following commands:  

```
# Switch to root
sudo -s

# Install NFS utilities
yum install -y nfs-utils

# Create local directory for mounting
mkdir s3mount

# Mount Storage Gateway file share
sudo mount -t nfs -o nolock,hard <Gateway_Endpoint>:/pankaj-demo-storage-gateway-bkt s3mount/

# Move into mounted directory
cd s3mount

# Validate empty directory
ls

# Create test files
touch file1 file2
ls

touch file3.txt
ls
```
---
 ## 🔍 Step 6: Validate in S3  

1. Go to **Amazon S3 Console**  
2. Open the bucket → confirm that `file1`, `file2`, `file3.txt` are present  

✅ **End-to-end workflow validated.**  

---

## 🧹 Step 7: Cleanup  

1. Terminate **EC2 client** & **Storage Gateway instance**  
2. Delete **EBS volumes**  
3. Delete **S3 bucket**  
4. Delete **File Share & Gateway**
✅ **Cleanup done → no extra costs incurred.**  
---

## 🏗 Architecture Overview

  <img width="1429" height="915" alt="Screenshot (1377)" src="https://github.com/user-attachments/assets/ffaf62f7-b92a-47fa-8a0d-a6c2315853b2" />
