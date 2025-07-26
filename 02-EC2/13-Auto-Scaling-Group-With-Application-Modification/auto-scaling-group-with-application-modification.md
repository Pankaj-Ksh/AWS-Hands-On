# 🚀 Auto Scaling Group (ASG) Hands-On with Application Modification

This project demonstrates how to create and manage an **Auto Scaling Group (ASG)** in AWS and dynamically update the running application using **Launch Template Versioning** and **Instance Refresh**. The goal is to understand how Auto Scaling works and how to handle changes in production with zero manual intervention.

---

## 🎯 Objective

- Understand and configure Auto Scaling Group with Launch Templates
- Integrate ASG with Load Balancer and Target Groups
- Handle dynamic scaling and versioning
- Modify running applications using Launch Template versioning
- Validate setup using Load Balancer DNS and instance IPs

---

## 🛠️ Steps Performed

### 1️⃣ Created a Launch Template with User Data  
📸 _Screenshot 1: Launch Template (with User Data)_  
➡ User data includes a simple Apache server setup with `index.html`.
<img width="1920" height="928" alt="Screenshot (672)" src="https://github.com/user-attachments/assets/61696b91-b527-4178-9c70-27cf9edb52f2" />

---

### 2️⃣ Edited Security Group Inbound Rules  
- Allowed **HTTP** and **SSH** from `My IP`.  

---

### 3️⃣ Created a Target Group  
📸 _Screenshot 2: Target Group created (not associated with Load Balancer yet)_
<img width="1920" height="931" alt="Screenshot (674)" src="https://github.com/user-attachments/assets/0b79585f-43d2-4f2c-882e-c479a6bbe333" />

---

### 4️⃣ Created Load Balancer  
📸 _Screenshot 3: Load Balancer created (no registered targets yet)_  
➡ ASG will register instances automatically.
<img width="1920" height="936" alt="Screenshot (675)" src="https://github.com/user-attachments/assets/f0d6f1fa-d42c-4a91-8af0-9498f2b54839" />

---

### 5️⃣ Created Auto Scaling Group  
#### 🧩 Step 1: Launch Template Selection  
📸 _Screenshot 4: ASG Step 1 (Choose Launch Template)_
<img width="1920" height="788" alt="Screenshot (676)" src="https://github.com/user-attachments/assets/7752692c-fea7-46ef-acb7-4317e3b483e5" />


#### 🌐 Step 2: Instance Launch Options & Network Settings  
📸 _Screenshot 5: ASG Step 2 (Configure network settings)_
<img width="1920" height="936" alt="Screenshot (677)" src="https://github.com/user-attachments/assets/312c57c0-3dab-420d-9da5-50f9ed1ad5e0" />


#### 🔗 Step 3: Integrate with Load Balancer  
📸 _Screenshot 6: ASG Step 3 (Attach to existing Load Balancer)_
<img width="1920" height="852" alt="Screenshot (678)" src="https://github.com/user-attachments/assets/bed88e5f-20a8-49ee-b4dd-f74e356eaf12" />


#### 📏 Step 4: Set Group Size and Scaling  
📸 _Screenshot 7: ASG Step 4 (Desired Capacity, Min, Max values)_
<img width="1920" height="937" alt="Screenshot (679)" src="https://github.com/user-attachments/assets/8aa1b8e6-d36b-480e-a133-6ef5329f81e6" />


#### ✉️ Step 5: Notification Setup  
📸 _Screenshot 8: ASG Step 5 (SNS Topic and Recipient configuration)_
<img width="1920" height="804" alt="Screenshot (681)" src="https://github.com/user-attachments/assets/bd48d1a2-e4ca-4b9e-a781-2c7ef3647f6c" />


#### 🏷️ Step 6 & 7: Tags and Review  

---

### 🔍 ASG Dashboard Overview  
📸 _Screenshot 9: ASG Dashboard showing group and instance status_
<img width="1920" height="1080" alt="Screenshot (688)" src="https://github.com/user-attachments/assets/0f4355b9-d031-4c26-91c1-fee0186eb293" />

---

### 📩 Email Confirmation for Notifications  
📸 _Screenshot 10: Gmail confirmation for SNS topic subscription_
<img width="1920" height="960" alt="Screenshot (685)" src="https://github.com/user-attachments/assets/0696717f-d34f-4610-b212-aa238093074d" />

---

### ✅ Instances Running from ASG  
📸 _Screenshot 11: EC2 Dashboard showing ASG-launched instances_
<img width="1920" height="925" alt="Screenshot (687)" src="https://github.com/user-attachments/assets/aa55d035-976c-418c-8a7f-6e571bd210f7" />

---

### 🌐 Tested Application via Load Balancer  
📸 _Screenshot 12: Load Balancer DNS test (application output visible)_
<img width="1920" height="1017" alt="Screenshot (689)" src="https://github.com/user-attachments/assets/b510a766-b3dd-4eed-a889-3c6da7a6ff3e" />

---

### ✏️ Modified Application via Launch Template  
- Edited Launch Template with new User Data and saved as **Version 2**  
📸 _Screenshot 13: Modified User Data for new app_
<img width="1920" height="929" alt="Screenshot (692)" src="https://github.com/user-attachments/assets/f58cc12d-66b7-46c9-97c1-ecdd75249638" />

---

### 🧾 Verified Launch Template Version  
📸 _Screenshot 14: Launch Template shows 2 versions (v1 and v2)_
<img width="1920" height="933" alt="Screenshot (693)" src="https://github.com/user-attachments/assets/a125837c-43af-4824-bb39-e33efd8824e2" />

---

### 🔄 Updated ASG to Use New Launch Template Version  
📸 _Screenshot 15: ASG updated to Launch Template Version 2_
<img width="1920" height="935" alt="Screenshot (694)" src="https://github.com/user-attachments/assets/32828a38-c07d-454a-ba96-020f5073d357" />

---

### 🔁 Started Instance Refresh in ASG  
📸 _Screenshot 16: Started Instance Refresh to roll out new version_
<img width="1920" height="931" alt="Screenshot (695)" src="https://github.com/user-attachments/assets/5bde52a9-b2d4-45f3-a894-0e4ccdec9182" />

---

### 📥 Received AWS Notification Emails  
📸 _Screenshot 17: Various emails from AWS regarding instance launch/terminate_
<img width="1920" height="1080" alt="Screenshot (697)" src="https://github.com/user-attachments/assets/477b522b-bdd7-457d-b5d9-ee875ddfceb8" />

---

### 📊 Verified ASG Activity History  
📸 _Screenshot 18: ASG Activity History showing refresh events_
<img width="1920" height="1080" alt="Screenshot (698)" src="https://github.com/user-attachments/assets/9daab24f-61b3-4f98-930b-703776d9dcff" />

---

### 🌐 Load Balancer Resource Map  
📸 _Screenshot 19: Load Balancer Resource Map shows attached instances_
<img width="1920" height="1080" alt="Screenshot (699)" src="https://github.com/user-attachments/assets/48f1991b-4731-48f5-b111-43fe13d95437" />

---

### 🎉 Final Output: Old vs New Application  
📸 _Screenshot 20: Output of both old and new application (compared using instance Public IPs)_  
> ⚠️ **Note**: In real-world, this would be tested using the **Load Balancer DNS**, not individual IPs.
<img width="1920" height="1021" alt="Screenshot (701)" src="https://github.com/user-attachments/assets/55723bf4-38ab-4391-9def-1651368e091a" />

---

## ✅ Outcome

- Successfully created an Auto Scaling Group with Apache-based web server
- Deployed initial version and verified via Load Balancer DNS Link
- Modified the app using Launch Template versioning
- Refreshed instances using ASG’s instance refresh feature
- Verified successful rollout of new version without downtime

---

## 📚 Key Learnings & Observations

- ASG **doesn't replace instances automatically** on template update—you must use **Instance Refresh**
- Load Balancer + Target Groups offer clean abstraction for backend changes
- Launch Templates with versioning is the safest way to push app changes
- SNS notifications can provide full transparency of scaling events

---

## ✅ Things to Do Properly

- Always **version** your Launch Templates
- Use **Instance Refresh** instead of manual termination
- Ensure **Health Checks** are working so ASG can identify unhealthy instances
- Properly **configure security groups** (HTTP, SSH, RDP if needed)

---

## 🌍 Real-World Use

| Use Case | Why It's Useful |
|----------|-----------------|
| Rolling Deployments | Modify app version without downtime |
| Auto-Healing | Unhealthy instances automatically replaced |
| Traffic Scaling | Scale based on CPU/network/requests |
| Notifications | Stay informed with launch/failure events |

---

## 🏷️ Tags

`AWS` `Auto Scaling` `Launch Template` `EC2` `Load Balancer` `ASG` `User Data` `Apache` `Cloud Architecture` `Instance Refresh`

---

## 💡 Tips

- ✅ Always test your `User Data` locally or on a standalone instance first
- 🛑 Don’t forget to allow HTTP/SSH in your **Security Groups**
- 🔁 **Use Instance Refresh** instead of manually terminating instances
- 📬 Subscribe to SNS Topics for visibility on launch/terminate events
- 🧪 Use **Load Balancer DNS** for testing — don’t rely on instance IPs in real deployments

---
