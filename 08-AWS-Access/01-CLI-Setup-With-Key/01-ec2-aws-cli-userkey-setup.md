# 🚀 AWS CLI Setup on EC2 Using IAM User Keys (Demo & Security Risks)

This project demonstrates the installation and configuration of the AWS Command Line Interface (CLI) on a Linux-based EC2 instance using IAM user credentials. It covers creating IAM users, generating access keys, configuring the AWS CLI, and running commands to interact with AWS resources. The project also highlights security considerations, including the risks of storing long-term credentials on EC2, and emphasizes best practices like using IAM Roles for production environments.  

---

## 🎯 Objective
- 🖥️ Understand AWS CLI setup on an EC2 Linux instance using IAM user keys.
- 🔑 Learn to create and configure IAM user access keys for CLI usage.
- 📄 Practice listing IAM user policies and verifying access.
- ⚠️ Demonstrate the security risks of long-term IAM credentials.

---

## 🏗 Architecture Overview
- 🖥️ **EC2 Linux Instance**: Red Hat Enterprise Linux 10
- 👤 **IAM User**: PankajAM with AdministratorAccess and Billing
- 🛠️ **AWS CLI**: Installed on EC2 to manage AWS resources
- 🔐 **Access Method**: Long-term IAM user keys stored in `~/.aws`

---

## 🔄 Workflow Summary
1. 🖥️ Launch EC2 Linux server
2. 🔒 Configure Security Group to allow SSH
3. 👤 Create IAM user and generate access key
4. 🔗 SSH into EC2 instance
5. 🛠️ Install and configure AWS CLI using the IAM user key
6. ✅ Run AWS CLI commands to verify IAM access

---

## 🛠 Steps Performed

1. 🖥️ **Create a Linux Server on EC2**  
   Launched a Red Hat Enterprise Linux 10 server.
   <img width="1920" height="972" alt="Screenshot (1172)" src="https://github.com/user-attachments/assets/a13302fe-faf7-4ec3-9e67-08d850430620" />

2. 🔒 **Configure a Security Group Rule**  
   Added inbound rule for SSH traffic.
   <img width="1920" height="973" alt="Screenshot (1173)" src="https://github.com/user-attachments/assets/1cd69554-3f89-477d-98ee-8dba1ec657ea" />

3. 👤 **Review IAM User Permissions**  
   IAM user `PankajAM` has `AdministratorAccess` and `Billing`.
   <img width="1920" height="973" alt="Screenshot (1174)" src="https://github.com/user-attachments/assets/9159abd1-ee74-4333-a02e-dc75473abbf1" />

4. 🔑 **Create an Access Key**  
   Created new Access Key ID and Secret Access Key for CLI.
   <img width="1920" height="977" alt="Screenshot (1175)" src="https://github.com/user-attachments/assets/f6100b78-e5bc-493c-8675-c26cfc65b721" />

5. 🖥️ **Select the Use Case for the Access Key**  
   Chose "Command Line Interface (CLI)" for the access key usage.
   <img width="1920" height="978" alt="Screenshot (1176)" src="https://github.com/user-attachments/assets/422cf671-2a2a-4452-acd2-6e1c76883353" />

6. 💾 **Retrieve and Download the Access Key**  
   Saved Access Key ID and Secret Access Key to use on EC2.
   <img width="1920" height="977" alt="Screenshot (1177)" src="https://github.com/user-attachments/assets/e09390e7-a692-473b-aa42-28b151697458" />

7. 🛠️ **Install AWS CLI on the EC2 Instance**  
   Downloaded and installed AWS CLI using curl and unzip commands.
   <img width="1920" height="975" alt="Screenshot (1178)" src="https://github.com/user-attachments/assets/b0fe3ef7-319d-4a14-8d50-19acb422ab79" />

8. ⚙️ **Configure AWS CLI**  
   Ran `aws configure` to input Access Key ID, Secret Key, and default region.
   <img width="1920" height="973" alt="Screenshot (1180)" src="https://github.com/user-attachments/assets/4da2ecdb-a981-4bd3-96e9-086c81b24acc" />

9. 📄 **List EC2 Key Pairs via CLI**  
   Ran `aws ec2 describe-key-pairs` to verify CLI setup.
   <img width="1920" height="971" alt="Screenshot (1181)" src="https://github.com/user-attachments/assets/895a136d-ac1e-49b2-92e0-38fded1fba95" />

10. 🔍 **Verify AWS CLI Configuration Files**  
    Checked `~/.aws/config` and `~/.aws/credentials` to confirm keys were saved.
    <img width="1920" height="975" alt="Screenshot (1182)" src="https://github.com/user-attachments/assets/02ec8309-0d52-4872-91fd-0928503b5f46" />

11. 📜 **List IAM User Policies from EC2 Instance**  
    Ran `aws iam list-attached-user-policies --user-name PankajAM` to verify IAM policies.
    <img width="1920" height="973" alt="Screenshot (1183)" src="https://github.com/user-attachments/assets/4034d745-97cc-4cc6-879d-7cfb43b2ee4a" />

12. 🗂️ **IAM User Access Key Details**  
    Viewed IAM user details to confirm active access key.
    <img width="1920" height="977" alt="Screenshot (1184)" src="https://github.com/user-attachments/assets/ecb87840-9d97-45b2-8997-52a1d2286a0f" />

---

## ⚠️ Issues Faced
- 🔓 Long-term access keys are **exposed** if the instance is compromised  
- 🔄 Manual rotation of keys is required  
- 📁 `~/.aws` directory must be present for keys to work  
- ❌ Not recommended for production due to security risks

---

## ✅ Outcome
- 🏁 Successfully ran AWS CLI commands from EC2 using IAM user keys  
- 📚 Learned how to manage IAM user keys and verify permissions  
- ⚠️ Demonstrated a **bad practice scenario** for educational purposes

---

## 📚 Key Learnings & Observations
- 🔓 Storing IAM user keys on EC2 is insecure  
- ⚙️ AWS CLI requires `~/.aws/credentials` for user key access  
- 🔑 Best practice is to **avoid long-term keys** and use IAM Roles instead  
- 🖥️ Can programmatically list users, policies, and groups with CLI

---

## 🌍 Real-World Use Case
- 🤖 Automating AWS tasks using IAM user keys (not recommended for production)  
- ⚠️ Understanding the risks of storing long-term credentials on EC2

---

## 🏷️ Tags
`AWS` `EC2` `IAM` `AWS CLI` `Linux` `Security` `BadPractice`

---

## 💡 Best Practices
- 🔑 **Use IAM Roles** instead of long-term credentials for production  
- 🔒 **Keep the `~/.aws/credentials` file secure** and avoid sharing it  
- 🔄 **Rotate IAM user keys regularly** if using CLI for testing or automation  

**Note:** This method works but is insecure; credentials can be exposed and require manual rotation. Always prefer IAM Roles for production.
