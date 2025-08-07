# 🚀 AWS IAM Project: Switch Role with S3 Full Access

This project demonstrates how to **use the "Switch Role" concept in AWS IAM** to allow a user from another AWS account (Shravni’s) to assume a role in **my AWS account** with specific permissions (in this case, **S3 Full Access**).

---

## 🎯 Objective

- ✅ Implement the **Switch Role** concept for cross-account access.
- ✅ Create an IAM Role in **my AWS account** that trusts Shravni’s AWS account.
- ✅ Attach the **AmazonS3FullAccess** managed policy to the role.
- ✅ Allow Shravni to assume the role and interact with S3 resources.
- ✅ Test and verify access behavior and permission boundaries.

---

## 🛠️ Steps Performed

### 1️⃣ Created IAM Role in My AWS Account

- Created role named `ShravniRole`.
- Chose **AWS Account** as the trusted entity type.
- Entered **Shravni’s AWS Account ID** in the trust policy.
- Attached **AmazonS3FullAccess** managed policy to the role.

📸 *Screenshot 1: Creating role with trusted entity (Shravni’s Account ID)*

<img width="1920" height="986" alt="1" src="https://github.com/user-attachments/assets/cd564122-d966-41cc-a195-90732a9e1abd" />


---

### 2️⃣ Verified Role Configuration

- Confirmed role creation details: name, ARN, last activity, switch role link, and policies.
- Role had **no activity initially** (before being used).

📸 *Screenshot 2: Role dashboard with switch role link and policy info*  

<img width="1920" height="981" alt="2" src="https://github.com/user-attachments/assets/85a0fa46-c3f3-458d-8082-be12f6f12d11" />


---

### 3️⃣ S3 Bucket Created in Friend’s Account

- Shravni created a new S3 bucket in **her own AWS account** named `shravni-bkt-1`.

📸 *Screenshot 3: S3 Bucket created by Shravni in her account*  

![3](https://github.com/user-attachments/assets/4b67074c-a524-4b86-ac2b-90046ebff231)


---

### 4️⃣ Verified EC2 Restriction in Friend’s Account

- Shravni attempted to launch an EC2 instance but received a **permission denied** error, confirming that only **S3 access** was granted via the role.

📸 *Screenshot 4: EC2 launch error due to lack of permissions*  

![4](https://github.com/user-attachments/assets/2b660917-00fc-4d7b-ac9b-21900af903b7)


---

### 5️⃣ Verified Cross-Account S3 Access

- From **Shravni’s account**, she switched role using the provided link.
- Successfully accessed and modified the S3 bucket (`shravni-bkt-1`) from my AWS account using the assumed `ShravniRole`.

📸 *Screenshot 5: Viewing S3 bucket Created by Shravni from my Account*  

<img width="1920" height="983" alt="5" src="https://github.com/user-attachments/assets/0890a916-67d3-4aae-9c56-f79b190302d9" />


---

### 6️⃣ Verified Role Usage Activity

- The IAM Role dashboard in **my account** now showed **"Last Activity" timestamp updated**, indicating that Shravni successfully assumed the role.

📸 *Screenshot 6: Role dashboard showing updated last activity*  

<img width="1920" height="982" alt="6" src="https://github.com/user-attachments/assets/1e20c584-7754-4595-8e3d-4247f672e425" />


---

## ✅ Outcome

- Successfully enabled cross-account access for Shravni to assume a role in my AWS account.
- Verified that **only S3 operations were permitted** as per the attached policy.
- Confirmed **permission boundaries** and **activity logging** through IAM dashboard.

---

## 💡 Key Learnings / Observations

- 🔄 IAM Roles with cross-account trust allow secure delegation between AWS accounts.
- 🔐 Fine-grained access control can be enforced using managed or custom policies.
- 🧪 You can validate access scope by attempting operations like EC2 which aren't permitted.
- 🕵️ IAM console tracks role usage through the **"Last Activity"** field, helpful for auditing.

---

## 📌 Importance of This Task in Real Life

- 🏢 **Multi-account Strategy**: In real-world AWS environments, organizations often use multiple AWS accounts (e.g., Dev, Test, Prod, or per team). Switch Role enables **secure access between these accounts** without sharing credentials.
- 🔄 **Delegated Administration**: Lets teams or external partners access specific resources without full account access, maintaining **security and isolation**.
- 📊 **Centralized Monitoring**: By granting access to centralized roles, operations teams can monitor or manage resources across accounts while keeping audit trails.
- 🛡️ **Security Best Practice**: Encourages role-based access control (RBAC) and avoids use of permanent credentials—an essential part of AWS security best practices.

---

## 🏷️ Tags

`#AWS` `#IAM` `#SwitchRole` `#S3FullAccess` `#CrossAccountAccess` `#MiniProject` `#AWSHandsOn`

---
