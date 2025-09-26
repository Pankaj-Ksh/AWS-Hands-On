# 🚀 Project: Secure VPC with NAT Gateway & S3 Gateway Endpoint

This project demonstrates how to securely configure **connectivity in AWS VPC** for instances in a **private subnet**.  
It establishes **internet access** via a NAT Gateway and **private S3 access** via a Gateway Endpoint, ensuring controlled and secure traffic flows.  
Validation is done by testing **S3 bucket operations** and **internet reachability** separately.  

---

## 🎯 Objective
- 🔒 Provide **private EC2 instances** with secure S3 access via a Gateway Endpoint.  
- 🌐 Enable **internet access** from private instances through a NAT Gateway.  
- 🪪 Use **IAM Roles** instead of static credentials for secure S3 access.  
- ✅ Validate both **NAT Gateway routing** and **S3 endpoint functionality**.  

---

## 🔄 Workflow Summary
1. 🏗️ **VPC creation** with Public + Private subnets.  
2. 🛠️ Install & verify **AWS CLI** on EC2.  
3. 🔑 Attach **IAM Role** with S3 permissions.  
4. 🌍 Configure **NAT Gateway + Route Tables** for outbound internet.  
5. 📂 Create & access **S3 bucket** from private instance.  
6. 🔗 Configure **S3 Gateway Endpoint** for secure S3 connectivity.  
7. ✅ Validate: S3 accessible, internet via NAT only.  

---

## 🛠 Steps Performed  

### 1. VPC Dashboard and Subnet Overview  
Displays **Pankaj-VPC** with CIDR `192.168.0.0/16`, two subnets (Public & Private), Route Tables, and NAT Gateway.  
<img width="1920" height="979" alt="1" src="https://github.com/user-attachments/assets/de18214f-3728-4b25-b78a-292e1dd54e6d" />

---

### 2. AWS CLI Installation and Environment Setup  
Shows installation and verification of AWS CLI + handling `.pem` file permissions.  
<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/cbd7d1b1-7e90-4a72-91e9-02c814ff30f5" />

---

### 3. SSH Connection Attempt and Command Issues  
Depicts SSH login attempt into **192.168.2.139**, followed by invalid command executions (`awscli2.zip`, `pws`).  
<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/8293327e-69c5-4d7e-a5a3-a2808de1ddc1" />

---

### 4. AWS CLI Version Check and Missing Credentials  
CLI confirms version **2.12.2** + Python details. Error: **"Unable to locate credentials"**.  
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/ecf8f76b-c245-46d0-8e88-a59d9bfe811d" />

---

### 5. IAM Role for S3 Access  
IAM Console shows `DBServer-S3-Role` with **AmazonS3FullAccess** attached.  
<img width="1920" height="978" alt="5" src="https://github.com/user-attachments/assets/d326fd04-03de-4252-808e-ba69bc20b4e5" />

---

### 6. Attaching IAM Role to EC2 Instance  
EC2 dashboard → **Modify IAM Role** for instance `i-0c2f0f79660191f5`.  
<img width="1920" height="979" alt="6" src="https://github.com/user-attachments/assets/6e9246c2-968e-4ee2-89b6-20a6da60b2cc" />

---

### 7. S3 Bucket Creation with Missing Credentials Error  
Initial S3 creation fails, then works after attaching IAM Role → bucket created: **pankaj-vpc-bucket**.  
<img width="1920" height="1080" alt="7" src="https://github.com/user-attachments/assets/74769495-b0a1-49c5-8fb7-232e31184c7d" />

---

### 8. VPC Route Table Configuration  
Editing routes in private Route Table → **0.0.0.0/0** traffic directed to **NAT Gateway**.  
<img width="1920" height="978" alt="8" src="https://github.com/user-attachments/assets/45fb097f-df65-49dc-94ff-86bc94cbff5e" />

---

### 9. S3 Bucket Listing Confirmation  
Confirmed **bucket creation**. Listing shows **empty bucket** (no files yet).  
![Uploading 9.png…]()

---

### 10. S3 Gateway Endpoint Creation  
VPC console → Endpoint type: **Gateway**, Service: **S3**, Region: `ap-south-1`.  

---

### 11. S3 Gateway Endpoint Configuration  
Endpoint associated with **Private-RT** → enabling private S3 access.  
<img width="1920" height="980" alt="11" src="https://github.com/user-attachments/assets/ee94c8b1-3543-48c1-ba1a-36e5076cb5a3" />

---

### 12. S3 Access and Internet Connectivity Test  
✔️ S3 operations succeed.  
❌ Ping to `google.com` fails → proving only NAT provides internet.  
<img width="1920" height="1080" alt="12" src="https://github.com/user-attachments/assets/775cbdc7-2be4-4d74-8544-9640b6d22520" />

---

## ⚠️ Issues Faced
- ❌ Missing credentials in AWS CLI (fixed with IAM Role).  
- ⚡ SSH confusion with invalid commands (`pws`, `awscli2.zip`).  
- 🌐 Internet ping failed when relying only on S3 Endpoint → resolved by NAT.  

---

## ✅ Outcome
- 🎉 Private EC2 accessed **S3 securely** using Gateway Endpoint.  
- 🔒 No credentials stored → IAM Role worked seamlessly.  
- 🌐 Internet connectivity available **only via NAT Gateway**, ensuring security.  

---

## 📚 Key Learnings & Observations
- 🛡️ Always **use IAM Roles** for EC2 instead of static keys.  
- 📂 **S3 Gateway Endpoint** keeps traffic inside AWS network → secure + cost-optimized.  
- 🌍 **NAT Gateway is required** for external internet access.  
- 🗺️ Route Tables control **which path traffic follows** → critical to design carefully.  

---

## 🌍 Real-World Use Case
- 🏦 Banking & Finance → secure private workloads uploading to S3.  
- 📊 Data Analytics → pipelines sending logs/data to S3 privately.  
- 🏢 Enterprise → maintain compliance while enabling selective internet access.  

---

## 🏷️ Tags
`AWS` `VPC` `NAT Gateway` `S3` `IAM Role` `Private Subnet` `Gateway Endpoint` `Networking`  

---

## 💡 Tips
- 🔐 Use **IAM Roles** for credentials-free access.  
- 🚫 Don’t confuse NAT Gateway with S3 Endpoint → they solve different problems.  
- 🧭 Document Route Tables → avoid misrouting issues.  
- 📖 Validate with `aws configure list` if issues appear.  

---
