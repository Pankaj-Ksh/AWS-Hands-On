# 🚀🔁🌐 Load Balancer with EC2 Instances - Hands-On Project

This project demonstrates how to launch multiple EC2 instances, host a basic webpage using user data, configure a Load Balancer, implement stickiness, and perform path-based routing using AWS services.

---

## 🎯 Objective

- Launch and configure EC2 instances with user data.
- Configure Security Groups with HTTP access using MyIP.
- Create and configure an Application Load Balancer.
- Create and register Target Groups.
- Implement stickiness and path-based routing.
- Understand and test Load Balancer behavior in failure scenarios.
- Review Load Balancer and Target Group dashboards and actions.

---

## 🛠️ Steps Performed

### 🚀 1. Launch EC2 Instances

- Launched **2 EC2 instances** (Amazon Linux) with the following user data:
  - **Server 1**: `My first website on server1`
  - **Server 2**: `My first website on server2`
- Verified instances with public IPs in the browser.

### 🔐 2. Configure Security Group

- Edited Inbound Rules:
  - **HTTP (port 80)** from **My IP**
  - **SSH (port 22)** from **My IP**

📸 _Screenshot 1: SG showing HTTP, SSH, RDP on MyIP._
<img width="1920" height="797" alt="Screenshot (636)" src="https://github.com/user-attachments/assets/dc58d8ac-5040-4d08-9d18-df51d6df34db" />

---

### 🌐 3. Create Load Balancer

- Created **Application Load Balancer (ALB)**:
  - Internet-facing
  - IPv4
  - Associated with correct VPC, Subnets, and Security Group

📸 _Screenshot 2: Load Balancer creation wizard_  
<img width="1920" height="931" alt="Screenshot (639)" src="https://github.com/user-attachments/assets/f60f99ef-c566-483e-b747-99f0414554d5" />

📸 _Screenshot 3: LB Summary page_
<img width="1920" height="929" alt="Screenshot (641)" src="https://github.com/user-attachments/assets/adc4eb11-9fb7-4e1f-95cb-8244a957e583" />

---

### 🎯 4. Create Target Group (Index-TG)

- Target Type: `instance`
- Protocol: `HTTP`
- Port: `80`
- Health Check Path: `/index.html`
- Registered the 2 EC2 instances

📸 _Screenshot 4: Target Group creation_  
<img width="1920" height="934" alt="Screenshot (642)" src="https://github.com/user-attachments/assets/db4b8763-d0b9-489d-b9e7-1d4c6f37fd73" />

📸 _Screenshot 5: Health Check config_  
<img width="1920" height="896" alt="Screenshot (643)" src="https://github.com/user-attachments/assets/8cf8ece1-cfcf-4681-aaa6-965d21136d4f" />

📸 _Screenshot 6: Registering targets_
<img width="1920" height="910" alt="Screenshot (644)" src="https://github.com/user-attachments/assets/140e5b7a-64e1-4606-8d50-2d77c51876cc" />

---

### 📊 5. Monitor Load Balancer

- Opened **LB Dashboard > Resource Map** to verify 2 instances under Index-TG
- Verified architecture visually

📸 _Screenshot 7: Resource map showing Index-TG and instances_
<img width="1920" height="935" alt="Screenshot (649)" src="https://github.com/user-attachments/assets/d2458d74-d81b-44e2-92b7-9954886baec3" />

---

### 🔄 6. Enable Sticky Sessions (Stickiness)

- Enabled stickiness in Target Group settings
- Verified that client sticks to the same instance during session

---

### 🔁 7. Path-Based Routing

#### 🔹 Additional Setup:

- Launched **More 2 instances**:
  - 2 with `/admin/index.html` (assigned to `Admin-TG`)

#### 🔸 Rule Setup:

- Navigated to:  
  **Load Balancer > Listeners > Edit Rules**
- Added Rule:
  - **Condition**: Path = `/admin/index.html`
  - **Action**: Forward to `Admin-TG`

📸 _Screenshot 8: Load Balancer Dashboard  
<img width="1920" height="935" alt="Screenshot (652)" src="https://github.com/user-attachments/assets/c93dea75-84aa-4053-a20d-8cd2b47bd8b9" />

📸 _Screenshot 9: Target Group Dashboard  
<img width="1920" height="936" alt="Screenshot (666)" src="https://github.com/user-attachments/assets/97aee0b5-37c1-4db1-80e3-cd5bf3954a34" />

📸 _Screenshot 10: Adding listener rule for /admin path_ 
<img width="1920" height="938" alt="Screenshot (656)" src="https://github.com/user-attachments/assets/eb16a5a1-1140-4d09-9edd-aae1d72644f2" />

📸 _Screenshot 11: Resource map with all 4 instances and 2 TGs_  
<img width="1920" height="935" alt="Screenshot (659)" src="https://github.com/user-attachments/assets/712d6ff3-cdaa-4b08-b375-7efaf71d13d2" />

📸 _Screenshot 12: Dashboard showing all rules and targets_
<img width="1920" height="930" alt="Screenshot (664)" src="https://github.com/user-attachments/assets/35c60886-7e8f-4778-925c-5714403429c8" />

**Note**:  
Initially, using `/admin/*` didn't work, changed to `/admin/index.html` which worked.

📸 _Screenshot 13: Final 4-server output in one screen_  
<img width="1920" height="1080" alt="Screenshot (661)" src="https://github.com/user-attachments/assets/d097afac-97d9-49d9-90fb-7adf9fb816a0" />

📸 _Screenshot 14: CloudWatch metrics showing monitoring of all instances_
<img width="1920" height="936" alt="Screenshot (670)" src="https://github.com/user-attachments/assets/81b21338-7371-4e33-a38b-639a7317118f" />

---

### ❌ 8. Delete Resources

- Deleted:
  - EC2 instances
  - Load Balancer
  - Target Groups

📸 _Screenshot 15: Deleting Admin-TG while in use (demonstration)_
<img width="1920" height="934" alt="Screenshot (668)" src="https://github.com/user-attachments/assets/a7c31a1c-253a-4329-a026-0233dd6602c1" />

---

## ✅ Outcome

- All EC2 instances were reachable through the Load Balancer.
- Load Balancer successfully routed requests based on path rules.
- Sticky sessions tested successfully.
- Instances showed as healthy in the Target Group dashboard.
- Architecture map reflected correct setup.
- Real-time monitoring available through CloudWatch.

---

## ⚙️ How to Create Resources

### 🛠️ Create Load Balancer
1. **Select Scheme**: Internet-facing  
2. **Network**: IPv4, VPC, AZ  
3. **Listeners and Rules**  
4. **Select or Create Target Group**  
5. **Review and Create**

---

### 🛠️ Create Target Group
1. **Basic Config**: Target Type = Instance  
2. **Name Target Group**  
3. **Health Check**: `/index.html` or `/admin/index.html`  
4. **Register Targets**  
5. **Create**

---

### 🛠️ Add New Rule to Listener
1. Load Balancer → Listener → Manage Rules  
2. Add Condition: Path = `/admin/index.html`  
3. Action: Forward to `Admin_TG`  
4. Set Priority (e.g., 10)  
5. Save

---

## 🔍 Issues Faced & Resolutions

- **Issue**: Tried to create a new Listener for path-based routing instead of adding a new rule.
- **Fix**: Realized mistake and instead used the **Add Rule** option under the existing Listener in the LB.

---

## 📘 Key Learnings & Observations

- Understanding the role of Health Checks in Target Groups.
- Importance of correct listener rule configuration (`/admin/index.html` vs `/admin/*`).
- Stickiness is helpful in maintaining session consistency.
- The resource map and CloudWatch metrics offer great insights into performance and architecture.

---

## 🌍 Real-World Use Case

- Load Balancers are crucial for scaling applications horizontally and ensuring high availability.
- Path-based routing is commonly used in real-world applications (e.g., `/admin`, `/user`, `/api`).
- Sticky sessions are beneficial for login/session-based apps.

---

## 🏷️ Tags

`EC2` `Load Balancer` `Target Group` `Sticky Sessions` `Path-Based Routing` `AWS Hands-On` `Auto Scaling` `VPC`

---

## 💡 Tips

- Always use `/index.html` or a specific file for **Health Checks**.
- Path condition in rules must be specific (e.g., `/admin/index.html`) to route properly.
- Make sure Target Groups are registered and in the **same VPC** and **AZ**.
- Use **Resource Map** to visualize and validate your architecture.
- Always test after enabling stickiness or adding rules.

---
