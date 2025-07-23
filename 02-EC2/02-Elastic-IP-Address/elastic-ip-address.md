# 🌐 AWS EC2 Elastic IP Hands-On

This README documents my hands-on activity with **Amazon EC2**, focusing on **Elastic IPs (EIP)**. In this task, I observed how **public IPs behave during stop/start operations** and how to **allocate, associate, and release** Elastic IPs for an EC2 instance.

---

## 🎯 Objective

- ✅ Understand the difference between **public IPs and Elastic IPs**
- ✅ Learn what happens to public/private IPs when EC2 is stopped or restarted
- ✅ Allocate an **Elastic IP (EIP)** and associate it with a running EC2 instance
- ✅ Verify if Elastic IP persists across instance restarts
- ✅ Learn how to **dissociate and release** Elastic IPs back to AWS

---

## 🔧 Steps Performed

### 🖥️ Step 1: Launch Linux EC2 Instance

- Created a **Linux EC2 instance** using the AWS Console  
- Chose default VPC settings and a new key pair  

---

### 🌐 Step 2: Observe IP Behavior on Stop/Start/Reboot

- Once the instance was running, I noted:
  - The **public IP address** assigned by AWS
  - The **private IP address** inside the VPC
- Actions taken:
  - 🛑 Stopped the instance → Started again  
    🔁 ✅ **Public IP changed**
    🔁 ✅ **Private IP remained the same**
  - 🔄 Rebooted the instance  
    🔁 ✅ **Both public and private IPs remained unchanged during reboot**

📘 _Note: This proves that **public IPs change on stop/start**, but private IPs stay fixed unless the instance is terminated._

---

### 🔗 Step 3: Allocate & Associate Elastic IP

1. Navigated to **EC2 Dashboard → Elastic IPs**
2. Clicked on **Allocate Elastic IP** and received a new EIP  
3. Clicked on **Actions → Associate Elastic IP**
4. Selected the running **Linux EC2 instance** from the dropdown  
📸 _Screenshot 1: Associating EIP with the instance_
<img width="1920" height="931" alt="Screenshot (555)" src="https://github.com/user-attachments/assets/a39edbd0-9f6b-44ac-b186-a1d97492b679" />

---

### 🔄 Step 4: EIP Behavior After Restart

- Stopped and started the **Linux EC2 instance** again
- ✅ **Elastic IP remained the same**
- Public IP shown on EC2 dashboard was now the **Elastic IP**

📸 _Screenshot 2: Instance now associated with Elastic IP_
<img width="1920" height="915" alt="Screenshot (556)" src="https://github.com/user-attachments/assets/afc07688-5f22-4b82-9101-7895a32f1d7f" />

---

## ❌ Problem or Issue Observed

- Initially, the instance had a regular public IP assigned by AWS
- After associating the EIP, that public IP was **replaced by the Elastic IP**
- EIP **does not change** after stop/start — which is ideal for hosting services

---

## ✅ Outcome

- Successfully observed that **default public IPs are dynamic**
- Confirmed that **Elastic IPs persist** across instance lifecycle events
- Learned how to **allocate, associate, dissociate, and release** Elastic IPs
- Elastic IP remained mapped to the instance **even after restarts**, ensuring static access

---

## 📘 Key Learnings & Observations

- 📌 **Elastic IPs** provide a **static public IP address** for EC2 instances
- 🔄 Default AWS public IPs change when stopping/starting an instance
- 🔐 Elastic IPs help avoid configuration issues for hosted apps, DNS records, etc.
- 💡 Only **one Elastic IP per instance** is allowed in Free Tier
- 💰 Charges may apply if an Elastic IP is allocated but not associated

---

## 🌍 Real-World Relevance

- Used in **web hosting**, **APIs**, **remote access tools**, where a **stable IP** is needed
- Critical for **DNS configurations**, **firewall rules**, or **external integrations**
- Prevents IP changes that could disrupt client/server connectivity

---

## 🏷️ Tags

`AWS` `EC2` `Elastic IP` `Linux` `Public IP` `Private IP` `IP Persistence` `Networking` `Hands-On` `Cloud Infrastructure`

---

💡 **TIP:** Always use **Elastic IPs** if you need consistent public access to your EC2 instance.

---
