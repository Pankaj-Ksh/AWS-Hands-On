# ☁️ EC2 Termination via CloudWatch Alarm (CPU < 5%)

This hands-on demonstrates how to automatically **terminate an EC2 instance** using a **CloudWatch Alarm** when the instance's **CPU Utilization drops below 5%**. It also integrates **SNS notifications via email** for real-time alerts.

---

## 🎯 Objective

- Create and launch EC2 instances.
- Monitor the CPU utilization of the instance.
- Create a CloudWatch Alarm that triggers when CPU < 5%.
- Automate EC2 instance **termination** using alarm action.
- Configure **SNS Topic** for email notifications.
- Understand alarm lifecycle and behavior.

---

## 🛠️ Steps Performed

### 1. 🚀 Launch EC2 Instances
- Launched **2 EC2 instances** (Amazon Linux).
- Chose one instance to monitor for low CPU.

📸 _Screenshot 1: Select EC2 → Monitor and troubleshoot → Manage CloudWatch Alarm_  
<img width="1920" height="932" alt="Screenshot (705)" src="https://github.com/user-attachments/assets/4d6f8c89-ae87-4dc2-91b6-72db7582c4ff" />


---

### 2. 🔔 Create a New CloudWatch Alarm
- Created a new **CloudWatch Alarm**:
  - **Metric**: CPUUtilization
  - **Condition**: CPUUtilization < 5% for 1 datapoint within 5 minutes
  - **Action**: EC2 → **Terminate this instance**
  - Chose the correct EC2 instance during setup

📸 _Screenshot 2: Create Alarm with Condition and Termination Action_  
<img width="1920" height="941" alt="Screenshot (706)" src="https://github.com/user-attachments/assets/e303e395-ba99-43e0-bfb4-39abd7deb1db" />


---

### 3. 📧 Create SNS Topic for Notification
- Created an **SNS Topic**
- Subscribed with **email endpoint**
- Verified email subscription manually


---

### 4. 💥 Alarm Triggered and Instance Terminated
- The instance CPU dropped below 5%
- Alarm triggered → Instance terminated within 2 seconds
- Received **email notification** via SNS

📸 _Screenshot 3: 2 Tabs - EC2 termination in real-time + Email Notification_  
<img width="1920" height="975" alt="Screenshot (707)" src="https://github.com/user-attachments/assets/4683095b-c02e-4c67-abab-11a77ac3eea7" />

---

### 5. 📊 View Alarm in CloudWatch Console
- Navigated to **CloudWatch → Alarms**
- Verified alarm status and settings

📸 _Screenshot 4: CloudWatch Alarm Dashboard_  
<img width="1920" height="911" alt="Screenshot (708)" src="https://github.com/user-attachments/assets/3b7d5b84-c9ab-4368-a8f2-fa4eb3808c6f" />

---

### 6. 🕓 Alarm History and Logs
- Clicked into the alarm to view detailed **history and behavior**
- Checked state transitions and action executions

📸 _Screenshot 5: Alarm History and Details View_  
<img width="1920" height="930" alt="Screenshot (709)" src="https://github.com/user-attachments/assets/13d3f5cc-8d7a-4311-9c3a-6da44ad64955" />

---

## ⚠️ Problems & Notes

- ❌ **You cannot attach the same CloudWatch Alarm to multiple EC2 instances**
- ⚠️ Alarm action like **Terminate** is **irreversible** once triggered
- 📧 Ensure **SNS email is confirmed** before alarm can notify
- 🔁 CPU utilization metrics take ~5 mins to reflect in CloudWatch
- 🧪 Test the alarm by creating a dummy CPU load or doing nothing for a while

---

## ✅ Outcome

- Successfully created a working **CloudWatch Alarm** that:
  - Tracked CPU Utilization
  - Automatically terminated the instance on low usage
  - Sent an alert via **SNS Email**
- Verified termination through:
  - **Instance state changes**
  - **Email Notification**
  - **CloudWatch Alarm logs**

---

## 📚 Key Learnings & Observations

- Learned how to link CloudWatch metrics with actionable outcomes (Terminate).
- Understood alarm states: **INSUFFICIENT_DATA → OK → ALARM**
- Saw real-time effects of alarm-triggered automation.
- SNS integration is seamless for alerting users.

---

## 🌐 Real-World Applications

- Automatically terminate **idle or underutilized servers** to reduce cost.
- **Serverless Coordination**: Use alarms to trigger AWS Step Functions or Lambda flows for automating complex workflows (e.g., restarting failed pipelines).
- **Blue-Green Deployment Alerts**: Monitor both environments using alarms and validate that traffic is only routed to healthy instances before full switch-over.

---

## 🏷️ Tags

`AWS` `EC2` `CloudWatch` `Monitoring` `Automation` `SNS` `Alarm` `Terminate` `Hands-On`

---

## 💡 Tips

- Always **test alarms** in a non-production environment.
- Use **Stop** instead of Terminate in production for safety.
- Tag your CloudWatch alarms with `Name`, `Purpose`, `Linked Resource`.
- Combine **Auto Scaling Group** with alarms for smarter recovery.
- Confirm **SNS subscription** promptly or alarms won’t notify.

---
