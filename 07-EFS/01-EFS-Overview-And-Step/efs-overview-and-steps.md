# Amazon EFS Hands-On Practical 🖥️☁️📂

Amazon EFS (Elastic File System) is a **fully managed, scalable, and shared file storage service** for AWS. 🌐 This project demonstrates creating an EFS file system, mounting it on EC2 instances, verifying shared access, and exploring replication for data durability. 💾

---

## 🎯 Objective
- ⚡ **Set up and configure** an Amazon EFS file system.  
- 🖥️ **Integrate EC2 instances** to access the shared EFS storage.  
- 🔄 **Test real-time shared access** between multiple EC2 instances.  
- 🛡️ **Configure security groups** and NFS rules for proper connectivity.  
- 📦 **Explore EFS replication** for cross-region disaster recovery.  

---

## 🏗 Architecture Overview
- 🗂️ **EFS** created in the AWS Management Console.  
- 🌍 **Mount targets** configured across multiple Availability Zones (multi-AZ).  
- 🖥️ **EC2 instances** launched in the same VPC/subnets to access EFS.  
- 🔐 **Security groups** configured for NFS traffic (TCP port 2049).  
- 🔄 **Replication** checked for cross-region setup (optional).  

---

## 🔄 Workflow Summary
1. 🛠️ Create EFS file system with recommended or custom settings.  
2. 🌐 Configure VPC, subnets, and security groups.  
3. 🖥️ Launch EC2 instances and connect them to EFS.  
4. 📥 Install NFS utilities and mount the EFS file system.  
5. 👀 Verify shared storage access between multiple EC2 instances.  
6. 🔄 Explore and configure EFS replication for durability.

---

## 🛠 Steps Performed
## 🛠 Steps Performed

**Followed Steps with Screenshots:**  

1. ✅ **Recommended Settings**  
   Quick-start creation using AWS defaults (throughput, lifecycle, encryption).  
   ![Screenshot](https://github.com/user-attachments/assets/54421c56-8507-4ac2-942b-3d8aa37e59a7)

2. ⚙️ **Custom File System Settings**  
   Detailed configuration including name, availability, lifecycle, encryption, and throughput.  
   ![Screenshot](https://github.com/user-attachments/assets/6ea801b3-a6a5-40d8-b945-97f8e4c29860)

3. 🌐 **Network Access**  
   Selected VPC, subnets, and security groups for mount targets.  
   ![Screenshot](https://github.com/user-attachments/assets/b1c84045-9171-4b3e-ac7a-11d80ada50db)

4. 🛡️ **File System Policy**  
   Optional access policy for controlling read/write permissions.  
   ![Screenshot](https://github.com/user-attachments/assets/a31dd36b-13ca-46f3-ac18-810654f77498)

5. 📝 **Mount Target Details**  
   Overview of IPs, subnets, and security groups across availability zones.  
   ![Screenshot](https://github.com/user-attachments/assets/d92f400b-b322-4372-8237-05d5568d2836)

6. 🖥️ **EC2 Integration (Optional)**  
   Attaching EFS during EC2 launch.  
   ![Screenshot](https://github.com/user-attachments/assets/4d4b7457-bdd1-4542-804b-5e6f21858caf)

7. 🔎 **EC2 Instance Details**  
   Verified instance ID, public/private IPs, and availability zone.  
   ![Screenshot](https://github.com/user-attachments/assets/fd95da6c-01da-47de-ba7c-157544d062ff)

8. 🔐 **Security Group Rules**  
   Configured inbound rule for NFS (TCP port 2049) to allow EFS access.  
   ![Screenshot](https://github.com/user-attachments/assets/e8335570-ea47-4bb0-b848-6aacea5d95ce)

9. 📄 **EFS Overview**  
   Checked DNS name, ARN, and performance settings.  
   ![Screenshot](https://github.com/user-attachments/assets/eddb83b6-5cfe-4a5f-a9ad-0062b57a078f)

10. 🖥️ **Prepare EC2 for EFS Mount**  
    Installed `nfs-utils` package to enable communication with EFS.  
    ![Screenshot](https://github.com/user-attachments/assets/c3cb516b-bf4f-468d-95b7-4d90362e8a28)

11. 📂 **Mounting and Creating Files**  
    Mounted EFS on EC2 instances and created test files.  
    ![Screenshot](https://github.com/user-attachments/assets/21d4160f-6201-4e8c-893d-d1cc1a722195)

12. 🔄 **Verify Shared Access**  
    Created files on one EC2 instance and confirmed visibility on another.  
    ![Screenshot](https://github.com/user-attachments/assets/d8b850ff-ed0d-46eb-b3a6-baa9836cf713)

13. 📊 **Check Replication Status**  
    Viewed current replication status in the EFS console.  
    ![Screenshot](https://github.com/user-attachments/assets/8f652f81-64c3-42e9-894b-20db2eef0e6c)

14. 🌍 **Configure Replication**  
    Selected destination region for cross-region replication.  
    ![Screenshot](https://github.com/user-attachments/assets/00569f18-48ef-4f51-84e2-26bfcd012678)

---

## ⚠️ Issues Faced
- ⏳ **Connection Timed Out** – Missing NFS inbound rule or incorrect DNS/VPC setup.  
- 🚫 **Access Denied by Server** – Restrictive EFS policy, missing IAM roles, or incorrect Access Points.  
- ❌ **No Such File or Directory** – Mount point directory doesn’t exist; ensure `/mnt/efs` is created.

---

## ✅ Outcome
- ✅ Successfully created and mounted EFS across multiple EC2 instances.  
- 🔄 Verified real-time shared access.  
- 🌍 Explored EFS replication for durability and disaster recovery.

---

## 📚 Key Learnings & Observations
- 🗂️ EFS is **regional and multi-AZ** by default.  
- 🔐 Security groups and NFS rules are critical for connectivity.  
- 📄 IAM and file system policies control access to EFS.  
- 💾 Backup and replication must be planned before deletion to avoid data loss.

---

## 🌍 Real-World Use Case
- 🌐 Shared storage for **web applications** running across multiple EC2 instances.  
- 📝 **CMS or collaborative applications** requiring concurrent access.  
- 🔄 **Cross-region disaster recovery** using EFS replication for compliance and resilience.

---

## 🏷️ Tags
`AWS` `Amazon EFS` `EC2` `NFS` `Cloud Storage` `Replication` `Hands-On`

---

## 💡 Tips
- 🖥️ Always create mount points (`/mnt/efs`) before mounting.  
- 🔐 Keep security groups minimal; allow only NFS port 2049 where necessary.  
- 💾 Use **AWS Backup** or replication to prevent accidental data loss.  
- 👀 Test shared access on multiple EC2 instances.  
- ❗ Deleting EFS permanently removes all data; backup first.
