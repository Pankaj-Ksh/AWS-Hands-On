# 🔐 AWS IAM Role and Policy Management for EC2 Instance

This project teaches the basics of **Identity and Access Management (IAM)** in AWS. It shows how to create and attach a custom **IAM role and policy** to an EC2 instance. The goal is to give the instance only the permissions it needs—**just enough to perform read-only tasks on IAM resources**. This follows the **principle of least privilege**, ensuring the **EC2 instance cannot access** anything it doesn’t need.

---

## 🎯 Objective

* 🔹 To create a custom IAM policy that grants an EC2 instance read-only access to specific IAM resources.  
* 🔹 To establish a secure and efficient way for an EC2 instance to interact with AWS services without using static access keys.  
* 🔹 To demonstrate the principle of least privilege by providing only the necessary permissions to the compute resource.

---

## 🏗 Architecture Overview
The architecture involves:  
- 👤 **IAM User (PankajIAM):** The creator of EC2 instance and roles, with AdministratorAccess.  
- 🔑 **IAM Role (Linux-Server1-Role):** Assigned to EC2 to grant specific permissions.  
- 📄 **IAM Policy (Linux-Server1-Policy):** Custom policy allowing read-only IAM operations.  
- 🖥 **EC2 Instance:** Receives the role to execute AWS CLI commands without user credentials.

---

## 🔄 Workflow Summary
1. 🛠 Create IAM Role for EC2 with trusted entity as "AWS Service → EC2".  
2. 📃 Define and attach a custom IAM Policy to the role.  
3. 🚀 Launch EC2 instance or attach role to an existing instance.  
4. ✅ Verify IAM role permissions by executing AWS CLI commands from EC2.

---

## 🛠 Steps Performed

1.  **🔹 Create IAM Role - Select Trusted Entity:** A new IAM role was initiated, selecting **EC2** as the trusted entity. This establishes the trust relationship, allowing EC2 instances to assume the role.
     <img width="1920" height="977" alt="Screenshot (1186)" src="https://github.com/user-attachments/assets/cc692f0c-22e5-4158-84a7-8b66b319734c" />

2.  **📄 Create IAM Policy - Specify Permissions:** A new IAM policy named **`Linux-Server1-Policy`** was created. The policy's JSON content was defined to grant list permissions for various IAM resources, including users, groups, and policies.
     <img width="1920" height="977" alt="Screenshot (1187)" src="https://github.com/user-attachments/assets/616d79d7-fa48-4ba4-b200-5d4f0d126cba" />

3.  **✅ Create IAM Policy - Review and Create:** The policy was reviewed for correctness and then created, making it available for attachment.  

4.  **🔑 Create IAM Role - Add Permissions:** During the role creation process, the **`Linux-Server1-Policy`** was selected from the list of customer-managed policies and attached to the new IAM role.
     <img width="1920" height="973" alt="Screenshot (1189)" src="https://github.com/user-attachments/assets/dcb55b22-658f-4633-93b0-6538363de9df" />

     <img width="1920" height="977" alt="Screenshot (1190)" src="https://github.com/user-attachments/assets/b0478765-069d-4792-91a1-0c5271d45dd5" />

5.  **🏷 Create IAM Role - Name, Review, and Create:** The role was named **`Linux-Server1-Role`**, reviewed, and finalized.
   
     <img width="1920" height="979" alt="Screenshot (1191)" src="https://github.com/user-attachments/assets/ba04965e-4fab-4ae7-bc30-405221543906" />

6.  **🖥 EC2 Instance Details - Modify IAM Role:** The existing EC2 instance, identified as `i-02b27700eb555867a`, was selected, and the "Modify IAM role" option was chosen.
     <img width="1920" height="974" alt="Screenshot (1188)" src="https://github.com/user-attachments/assets/5e35e68d-eab0-461e-ac06-2a54108be11b" />
 
7.  **➕ EC2 Instance - Attach IAM Role:** The newly created **`Linux-Server1-Role`** was selected from the dropdown menu and attached to the EC2 instance.
     <img width="1920" height="973" alt="Screenshot (1192)" src="https://github.com/user-attachments/assets/24871968-f02b-440a-9406-598d6f5c72d7" />
 
8.  **💻 EC2 Instance - AWS CLI Version and `iam list-users` Output (Initial):** From the EC2 instance's terminal, a command to list IAM users initially failed, as the instance had not yet been assigned the necessary permissions.
     <img width="1920" height="977" alt="Screenshot (1193)" src="https://github.com/user-attachments/assets/dd23b55c-c64f-45b3-b032-cf904cefd53d" />

9.  **📊 EC2 Instance - AWS CLI `iam list-users` and `list-attached-user-policies` Output:** After the IAM role was attached, the same AWS CLI commands were executed successfully. The output showed the IAM user **`PankajIAM`** and its associated policies.
     <img width="1920" height="978" alt="Screenshot (1194)" src="https://github.com/user-attachments/assets/4fd6fff9-0db7-48c0-9735-d5496c67f92c" />
 
10. **✅ EC2 Instance - AWS CLI `iam list-users` and `list-attached-user-policies` Output (Final):** The continued successful execution of these commands confirmed that the EC2 instance was correctly assuming the permissions from its new IAM role.  
     <img width="1920" height="975" alt="Screenshot (1195)" src="https://github.com/user-attachments/assets/925fbd09-4d1d-44aa-98ac-ddc22414124b" />

---

## ⚠️ Issues Faced

* ❌ **Initial Permission Denial:** The `aws iam list-users` command initially failed because the EC2 instance had no attached IAM role and, therefore, no permissions to call the IAM API.  
* 🤔 **Credential Confusion:** Understanding why an IAM user's credentials (e.g., `PankajIAM`) are not automatically inherited by the EC2 instance launched by that user. The instance requires its own role for API calls.  

---

## ✅ Outcome

The project successfully demonstrated the secure and recommended way to provide permissions to an EC2 instance. By creating a dedicated IAM role and policy, the principle of least privilege was upheld, and the instance was able to perform its specific task without having broad, unnecessary permissions or static credentials.  

---

## 📚 Key Learnings & Observations

1. 🗂 On an EC2 instance using an IAM Role, you don’t need the `~/.aws` directory at all. The AWS CLI gets credentials automatically from the instance metadata, so commands like `aws iam list-users` will still work perfectly without `~/.aws`. In short: `cd ~/.aws` will fail, and that’s normal for a role-based instance.  

2. 👤 When you launch an EC2 instance as `PankajIAM`, your console session uses your user’s `AdministratorAccess` to create the instance, but that permission doesn’t automatically flow into the instance. Once the instance is running, it needs its own role to make AWS CLI calls.  

3. 🤔 What if `PankajIAM` wants to personally use CLI from EC2?  
   - 🚫 There’s no way to “assume” the exact IAM user identity (users can’t be assumed).  
   - 🔑 The correct approach is to give the EC2 instance a role with the same permissions.  
   - 💡 If you must act as `PankajIAM` (e.g., for billing access), use AWS SSO or run CLI from your local machine with your user’s credentials (not recommended on EC2).  

---

## 🌍 Real-World Use Case

This project's workflow is crucial for building secure and scalable applications on AWS.  

**Example scenarios:**  
- 🌐 A web server running on EC2 that needs to read/write to an Amazon S3 bucket. Assigning a role with S3 permissions avoids hardcoding credentials.  
- 📊 A monitoring agent that pushes metrics to CloudWatch from an EC2 instance.  
- 🗃 Scripts interacting with DynamoDB tables securely via IAM roles.  

---

## 🏷️ Tags

`☁️ AWS`, `👤 IAM`, `🖥 EC2`, `🔑 IAM Role`, `📄 IAM Policy`, `💻 AWS CLI`, `🛡 Cloud Security`, `⚖️ Least Privilege`  

---

## 💡 Tips

* 🎯 **Start with a clear objective:** Define exactly what permissions the resource needs.  
* ⚖️ **Use the Principle of Least Privilege:** Always grant only the minimum permissions required for a task.  
* 🔍 **Test and Validate:** Use AWS CLI to confirm that the permissions are working as intended.  
* 📌 **Separate Policies from Roles:** Custom policies allow reuse across roles, promoting scalability and consistency.
