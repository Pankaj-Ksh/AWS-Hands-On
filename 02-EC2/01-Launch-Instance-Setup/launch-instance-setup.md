# 🚀 AWS EC2 Instance SetUp : Windows and Linux Hands-On Lab

This document includes the steps I followed to launch and connect to both Windows and Linux EC2 instances, troubleshoot access issues, and successfully establish remote connections using RDP and SSH.

---

## 🎯 Objective

- ✅ Launch a **Windows Server 2025 EC2 instance** and connect via **Remote Desktop Protocol (RDP)**
- ✅ Launch a **Red Hat Linux EC2 instance** and connect via **PuTTY (SSH)**
- 🔐 Learn to create and manage **key pairs** (`.pem` and `.ppk`)
- 🔧 Understand the importance of **Security Groups (SG)** for access
- 🧠 Develop real-world troubleshooting skills for cloud environments

---

## 🪟 Windows EC2 Instance Setup

### 1️⃣ Launch Windows Instance

1. Go to **EC2 Dashboard → Launch Instance**
2. Choose **Windows Server 2025 Base** as OS  
📸 _Screenshot 1: Launch an instance (OS selection)_
<img width="1920" height="933" alt="Screenshot (536)" src="https://github.com/user-attachments/assets/c1f676e3-0409-415f-a2ba-787ff60c8458" />

### 2️⃣ Instance Type, Key Pair, Network Settings

3. Select `t3.micro` (Free Tier eligible)
4. Create a new **key pair** and download the `.pem` file safely  
📸 _Screenshot 2: Instance type, key pair, network settings_
<img width="1920" height="930" alt="Screenshot (537)" src="https://github.com/user-attachments/assets/cc4818c9-ef08-4b60-88e2-9acf3a593d5d" />

### 3️⃣ Configure Storage and Security Group

5. Keep default storage settings (30GB)
6. Create a new **Security Group**  
   ❗ *Initially forgot to allow RDP access (3389)*  
📸 _Screenshot 3: Security Group and storage settings_
<img width="1920" height="925" alt="Screenshot (538)" src="https://github.com/user-attachments/assets/09da5c0f-14b1-4152-9fca-abd960a1ba9e" />

### 4️⃣ Get Windows Password

7. After instance is in "running" state → **Actions > Security > Get Windows Password**
8. Upload `.pem` file to decrypt the password  
📸 _Screenshot 4: Getting Windows password_
<img width="1920" height="928" alt="Screenshot (540)" src="https://github.com/user-attachments/assets/2fb0f1b0-08cc-45b9-b51d-fe3ca90550b5" />

### 5️⃣ Connect via Remote Desktop

9. Open **Remote Desktop Connection (RDP)**
10. Enter public IP and use username `Administrator`, paste password  
📸 _Screenshot 5: Starting RDP connection_
<img width="1920" height="930" alt="Screenshot (544)" src="https://github.com/user-attachments/assets/1eed039b-2759-4075-baa3-d3f85a793342" />

### 6️⃣ ❌ Connection Issue

11. Received this error:  
📸 _Screenshot 6: RDP connection failed_
<img width="1920" height="926" alt="Screenshot (545)" src="https://github.com/user-attachments/assets/0246962a-21b0-45a8-82d3-af6f41927358" />

---

## 🐧 Linux EC2 Instance Setup

### 7️⃣ Launch Linux Instance & Download Tools(PuTTY and PuTTYGen)

1. Launch a new instance with **Red Hat Enterprise Linux**
2. Use the same key pair from the Windows setup  

### 8️⃣ Convert PEM to PPK using PuTTYGen

3. Open **PuTTYGen**
4. Load the `.pem` file → Click "Save private key" → Save as `.ppk`  
📸 _Screenshot 9: PuTTYGen convert PEM to PPK_
<img width="1920" height="928" alt="Screenshot (546)" src="https://github.com/user-attachments/assets/907eebbb-7211-4fc2-b424-e43fe3564701" />

### 9️⃣ Connect Using PuTTY

5. Open **PuTTY**
6. Under "Host Name", enter the **public IP**
7. Expand On Leftside `Connection > SSH > Auth > Credentials` → Browse and select `.ppk` file  
📸 _Screenshot 10: PuTTY SSH setup with PPK_
<img width="1920" height="932" alt="Screenshot (547)" src="https://github.com/user-attachments/assets/06ec24f0-cb83-4783-971e-7e174b37feda" />

### 🔟 ❌ Connection Error

8. Got this error:  
📸 _Screenshot 11: SSH connection error_
<img width="1920" height="933" alt="Screenshot (549)" src="https://github.com/user-attachments/assets/3a424c69-063d-426c-95f2-c1cc1d0d2292" />

---

## 🛠️ Troubleshooting

### 🔍 Checked Security Group Rules

1. Navigated to **EC2 > Security Groups > Inbound Rules**
2. Found that **RDP (3389)** and **SSH (22)** were not added  
3. Edited inbound rules:
   - ✅ **RDP** for Windows (TCP 3389) → **Source: My IP**
   - ✅ **SSH** for Linux (TCP 22) → **Source: My IP**  
📸 _Screenshot 12: Added RDP & SSH inbound rules_
<img width="1920" height="936" alt="Screenshot (551)" src="https://github.com/user-attachments/assets/94edcc72-91d0-447a-bcb4-8f6aaaacc4be" />

---

### 🔁 Retried Connections

- ✅ **Windows RDP**: Successfully connected after allowing RDP  
  📸 _Screenshot 13: Successful Windows connection_
  <img width="1920" height="929" alt="Screenshot (550)" src="https://github.com/user-attachments/assets/0c48e86a-a2fd-474b-9967-8207dc1c28b1" />

- ✅ **Linux SSH**: Successfully connected using PuTTY with `.ppk`  
  📸 _Screenshot 14: Successful Linux connection_
<img width="1920" height="932" alt="Screenshot (552)" src="https://github.com/user-attachments/assets/6e2036f8-5742-44de-90b8-c80c25927554" />

---

## ✅ Outcome

- 🟢 Successfully launched and connected to **Windows and Linux EC2 instances**
- 🔐 Understood how to generate and use **key pairs (.pem / .ppk)**
- 🔄 Identified and fixed **Security Group rules**
- 🖥️ Validated successful connection via **RDP and PuTTY**

---

## 📘 Key Learnings & Observations

- 🔑 **Key pairs** are essential — always keep your `.pem` files secure
- 🔥 **Security Groups** are like firewalls — no access unless explicitly allowed
- 🛠️ Troubleshooting is part of the process — always verify:
  - Instance is running
  - Status Check 
  - Inbound rules are set (RDP for Windows, SSH for Linux)
  - Correct credentials and IP are used
- 🌍 These are foundational skills used in **real-world cloud infrastructure**

---

## 🏷️ Tags

`AWS` `EC2` `Windows Server` `Linux` `SSH` `RDP` `PuTTY and PuTTYGen` `Key Pair` `Security Group` `Troubleshooting` `Cloud` `Hands-On` `Free Tier`

---

💡 **TIP:** Always check **inbound rules and instance state** first when you can’t connect.

---
