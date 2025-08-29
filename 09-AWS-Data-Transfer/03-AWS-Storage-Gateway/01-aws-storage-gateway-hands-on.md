# 📦**AWS Storage Gateway with S3 Integration**

**A hands-on project demonstrating how to configure and manage an AWS Storage Gateway.**  
**Covers EC2 instance setup, gateway activation, S3 file share creation, and resource cleanup.**  
**End-to-end workflow validated with CLI-based file creation and deletion.**

---

## 🎯 Objective
- 🔧 **Deploy and configure an AWS Storage Gateway File Gateway on EC2.**  
- ☁️ **Integrate the gateway with Amazon S3 for file storage and retrieval.**  
- 🖥 **Validate connectivity by mounting and writing files using CLI.**  
- 🧹 **Properly decommission and clean up resources to avoid extra costs.**

---

## 🏗 Architecture Overview

**High-Level Design:**  
- **AWS Storage Gateway (File Gateway)** deployed on an **EC2 instance**.  
- **Amazon S3 bucket** acts as backend storage.  
- **NFS file share** created to connect S3 to on-prem-like clients.  
- **Linux client (EC2)** to mount file share and write files.  

**Key AWS Services Used:**  
- **EC2** (compute)  
- **Storage Gateway** (hybrid cloud storage)  
- **Amazon S3** (object storage)    

  <img width="1429" height="915" alt="Screenshot (1377)" src="https://github.com/user-attachments/assets/ffaf62f7-b92a-47fa-8a0d-a6c2315853b2" />

---

## 🔄 Workflow Summary

1. **Launch EC2 instance** using the **AWS Storage Gateway File Gateway AMI**.  
2. **Activate the gateway** using the public IP address.  
3. **Configure cache storage** on additional EBS volume.  
4. **Create an S3 bucket** to store files.  
5. **Create a file share** and map it to the S3 bucket.  
6. **Launch a Linux client EC2**, mount the file share via CLI, and **write sample files**.  
7. **Validate file storage** by checking objects in S3.  
8. **Clean up resources** (terminate instances, delete bucket, volumes, file shares).  

---

## 🛠 Steps Performed (with Screenshots)

1. **AWS Storage Gateway Setup** – Naming gateway and selecting type (File Gateway).  
    <img width="1920" height="977" alt="Screenshot (1317)" src="https://github.com/user-attachments/assets/a3a16894-b9e0-4364-a392-7588361d1679" />

2. **Storage Gateway EC2 Instance Configuration** – Steps to launch and configure the gateway.  
    <img width="1920" height="977" alt="Screenshot (1318)" src="https://github.com/user-attachments/assets/22e9e1d9-5552-4adc-a9da-2bedd6deb70d" />

3. **EC2 Instance Launch Details** – Instance type, key pair, VPC selection.  
    <img width="1920" height="1034" alt="Screenshot (1319)" src="https://github.com/user-attachments/assets/e1ac6f94-6963-42f5-acb5-15ee6f6b1b24" />

4. **EC2 Instance Storage Configuration** – Adding extra EBS volume for cache.  
    <img width="1920" height="976" alt="Screenshot (1321)" src="https://github.com/user-attachments/assets/8578895a-70f3-42d6-a26a-ea464d11332e" />

5. **EC2 Security Group Inbound Rules** – Allowing SSH and NFS traffic.  
    <img width="1920" height="975" alt="Screenshot (1322)" src="https://github.com/user-attachments/assets/db6bbc14-434d-4412-87ac-ff566ce82794" />

6. **EC2 Instance Public IP Details** – IP needed for activation.  
    <img width="1920" height="973" alt="Screenshot (1324)" src="https://github.com/user-attachments/assets/286461ab-5de0-4a4f-999a-3a0d82898e16" />

7. **Gateway IP Address Connection** – Connecting to AWS console using instance IP.  
    <img width="1920" height="977" alt="Screenshot (1325)" src="https://github.com/user-attachments/assets/74bb5924-facf-41ad-a72f-60071ce6812a" />

8. **Gateway Review and Activate** – Verifying all details before activation.  
    <img width="1920" height="973" alt="Screenshot (1326)" src="https://github.com/user-attachments/assets/a5f1ca1e-8bf3-4e54-a51b-7f39a118b788" />

9. **Gateway Cache Configuration** – Allocating cache storage.  
    <img width="1920" height="978" alt="Screenshot (1327)" src="https://github.com/user-attachments/assets/34270e03-751e-4cc5-8c9e-8ca1ec6f9815" />

10. **S3 Bucket Creation** – Setting up storage backend.  
    <img width="1920" height="979" alt="Screenshot (1328)" src="https://github.com/user-attachments/assets/e0bb781a-65c3-4af9-8a5f-bf1949aa2e28" />

11. **Empty S3 Bucket** – Initial state before file operations.  
    <img width="1920" height="975" alt="Screenshot (1329)" src="https://github.com/user-attachments/assets/9de8f521-f11c-47f7-acbd-6ba7ec710efd" />

12. **AWS Gateway Overview** – Dashboard view showing the active gateway.  
    <img width="1920" height="978" alt="Screenshot (1330)" src="https://github.com/user-attachments/assets/8627830f-b830-4737-81d7-8fa4c2593b2b" />

13. **Create Storage Gateway File Share** – Linking S3 bucket to file share.  
    <img width="1920" height="973" alt="Screenshot (1331)" src="https://github.com/user-attachments/assets/47a3f178-d97a-4eda-a971-5d9c517de1fc" />

14. **EC2 Instance AMI Selection** – Selecting Storage Gateway AMI.  
    <img width="1920" height="975" alt="Screenshot (1332)" src="https://github.com/user-attachments/assets/25ff9cd4-c4f8-439b-9b9f-94db3d4604f2" />

15. **Storage Gateway File Share Details** – Protocol, access points, and settings.  
    <img width="1920" height="975" alt="Screenshot (1333)" src="https://github.com/user-attachments/assets/d615f59e-3e00-4758-9e1b-b97756b8d3dc" />

16. **EC2 User Server Launch** – Client instance setup (RHEL).  
    <img width="1920" height="978" alt="Screenshot (1334)" src="https://github.com/user-attachments/assets/24fcf8eb-f391-45e0-a3b8-ade5a8899652" />

17. **Linux CLI File Creation** – `touch` commands to create files.  
    <img width="1920" height="977" alt="Screenshot (1336)" src="https://github.com/user-attachments/assets/19c004d7-b246-41a9-a06c-46cae2075f7e" />

18. **Files Written to S3 via CLI** – Validating files in S3 bucket.  
    <img width="1920" height="977" alt="Screenshot (1337)" src="https://github.com/user-attachments/assets/d5e8f677-7590-494a-8e48-65aa657806d3" />

19. **EC2 Instance Termination** – Stopping compute resources.  
    <img width="1920" height="977" alt="Screenshot (1338)" src="https://github.com/user-attachments/assets/b2dfb003-4981-474e-adf1-20cde21238c7" />

20. **S3 Bucket Deletion** – Confirming deletion of bucket.  
    <img width="1920" height="977" alt="Screenshot (1339)" src="https://github.com/user-attachments/assets/914a2d2a-ace0-4246-9ebf-adfeb34abad1" />

21. **Delete Storage Gateway Confirmation** – Removing the gateway.  
    <img width="1920" height="973" alt="Screenshot (1340)" src="https://github.com/user-attachments/assets/8df39196-a520-4f62-979f-fc5705052f9e" />

22. **Storage Gateway File Share Deletion** – Cleaning up shares.  
    <img width="1920" height="980" alt="Screenshot (1341)" src="https://github.com/user-attachments/assets/549e4353-a936-47ab-af01-41d2d55e4abc" />

23. **EC2 Volume Deletion** – Releasing unused storage.  
    <img width="1920" height="977" alt="Screenshot (1342)" src="https://github.com/user-attachments/assets/d1301e5b-93ab-4420-9e95-e172c8b5b4e3" />

---

## ⚠️ Issues Faced

- **Gateway Activation Delay** – Needed correct security group and inbound rules for NFS.  
- **Cache Disk Detection** – Required re-checking volume attachment.    
- **S3 Bucket Region Mismatch** – Ensured file share and bucket were in the same region.  

---

## ✅ Outcome

- Successfully configured **AWS Storage Gateway File Gateway** with S3 integration.  
- Validated **end-to-end workflow** by creating files and confirming them in S3.  
- Properly cleaned up all AWS resources, avoiding unnecessary costs.  

---

## 📚 Key Learnings & Observations
 
- **Storage Gateway is powerful** for hybrid storage use cases.  
- **NFS/SMB support** makes it flexible for multiple OS environments.  
- **Cleanup is crucial** to avoid ongoing charges.  

---

## 🌍 Real-World Use Case

- **Hybrid Cloud Storage:** Enterprises can extend on-prem file systems to AWS without heavy migration.  
- **Backup & Archival:** Easy way to store files in S3 and use lifecycle policies for cost optimization.  
- **Data Analytics Pipelines:** Write data via file share and process it using AWS analytics tools.  

---

## 🏷️ Tags

`AWS` `Storage Gateway` `Amazon S3` `Hybrid Cloud` `EC2` `IAM` `File Gateway`  

---

## 💡 Tips
  
- Open necessary **ports for SMB/NFS** before activation.  
- Use **CloudWatch metrics** to monitor gateway health.  
- Always **delete unused resources** after testing.  

---

## 📖 References & Official Documentation

- [AWS Storage Gateway (Overview)](https://docs.aws.amazon.com/storagegateway/)  
- [What is Amazon S3 File Gateway?](https://docs.aws.amazon.com/filegateway/latest/files3/what-is-file-s3.html)  
- [Create and Activate a File Gateway](https://docs.aws.amazon.com/filegateway/latest/files3/create-gateway-file.html)  
- [Create a File Share](https://docs.aws.amazon.com/filegateway/latest/files3/GettingStartedCreateFileShare.html)  
- [Access the File Share](https://docs.aws.amazon.com/filegateway/latest/files3/GettingStartedAccessFileShare.html)  
