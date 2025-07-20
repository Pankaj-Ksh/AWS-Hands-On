# 🚀 AWS EC2 Launch Template Hands-On 

This hands-on activity demonstrates how to create and use **Launch Templates** in Amazon EC2. Launch templates allow you to **predefine instance configurations** and reuse them to consistently and quickly deploy EC2 instances — a critical feature for scaling infrastructure efficiently.

---

## 🎯 Objective

- 🔧 Create a **Launch Template** from an existing Linux EC2 instance
- 🚀 Use the template to **launch new EC2 instances** with predefined settings
- 🧹 Understand how to **delete or manage launch templates** after usage
- 🧠 Learn the significance of launch templates in automated and repeatable deployments

---

## 🔧 Steps Performed

### 1️⃣ Create Launch Template from Existing Instance

- Launched a **Linux EC2 instance**
- Navigated to the instance → **Actions > Image and templates > Create template from instance**  
📸 _Screenshot: Create template from existing instance_
<img width="1920" height="932" alt="Screenshot (559)" src="https://github.com/user-attachments/assets/c12d2c97-b9ae-4c00-a821-921d6f9ec208" />

---

### 2️⃣ Configure Launch Template

- Opened the **Create launch template** dashboard
- Entered template name, description, and kept default or custom values for:
  - AMI ID
  - Instance Type
  - Key Pair
  - Security Group
  - Network Settings  
📸 _Screenshot: Launch template configuration page_
<img width="1920" height="934" alt="Screenshot (560)" src="https://github.com/user-attachments/assets/4e45d449-402e-47dd-abac-cc0c21ae6dda" />

---

### 3️⃣ Launch Instance from Template

- After saving the launch template:
- Selected the template → **Actions > Launch instance from template**  
📸 _Screenshot: Launch instance from launch template_
<img width="1920" height="912" alt="Screenshot (561)" src="https://github.com/user-attachments/assets/9595f565-3768-4851-86b1-29a3087b0861" />

---

### 4️⃣ Modify Configurations (Optional)

- On the **Launch instance from template** screen:
  - Could modify instance type, key pair, disk size, or network settings if needed
- This gives flexibility to override defaults when necessary  
📸 _Screenshot: Launch configuration override page_
<img width="1920" height="943" alt="Screenshot (562)" src="https://github.com/user-attachments/assets/0d4f1878-a42e-42e5-b47c-22d5d4d35423" />

---

### 5️⃣ Instance Created Successfully

- A new EC2 instance was successfully created using the launch template
- Verified it is running in the **EC2 instance dashboard**  
📸 _Screenshot: New instance created from template_
<img width="1920" height="918" alt="Screenshot (563)" src="https://github.com/user-attachments/assets/2e0d90ab-5cc8-4fde-84b8-210f644e5748" />

---

## 📘 Key Learnings & Observations

- Launch templates make it easy to launch EC2 instances **quickly and with the same settings**
- They help **save time** and **avoid manual errors**
- You can still **change settings during launch** if needed
- Very helpful when creating **multiple similar instances**

---

## 📌 Importance of Launch Templates

- Useful for **automation** and part of **Infrastructure as Code (IaC)**
- Needed for services like **Auto Scaling**
- Ensure all instances follow the **same setup and security rules**

---

## 🌍 Real-World Use Cases

- 🔁 Auto-scaling EC2 instances in response to traffic spikes
- 📦 Launching **identical environments** for development, testing, and staging
- 🧑‍💻 Creating **predefined virtual machines** for teams with consistent tooling and access
- 🛠️ Faster disaster recovery by rapidly redeploying from a known-good configuration

---

## 🏷️ Tags

`AWS` `EC2` `Launch Templates` `Automation` `Cloud Computing` `Infrastructure` `IaC` `Instance Provisioning` `Linux Server` `DevOps`

---

💡 **TIP:** Launch Templates help you create a repeatable setup for EC2. When combined with Auto Scaling Groups, you get automatic recovery and high availability.

---
