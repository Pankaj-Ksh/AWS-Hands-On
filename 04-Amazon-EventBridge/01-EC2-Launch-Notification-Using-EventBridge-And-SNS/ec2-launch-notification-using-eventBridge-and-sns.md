# 🚨 EC2 Launch Notification using EventBridge and SNS

This hands-on project demonstrates how to automatically detect and notify via email when an EC2 instance is launched using **Amazon EventBridge** and **SNS (Simple Notification Service)**.

---

## 🎯 Objective

- Understand how to use **Amazon EventBridge rules**.
- Create real-time alerts when any **EC2 instance is launched**.
- Integrate EventBridge with **SNS** to receive email notifications.
- Explore how this setup reflects in **CloudFormation templates**.

---

## 🛠️ Steps Performed

### 1️⃣ Create an EventBridge Rule

📸 _Screenshot 1: Name and Description for Rule (Step 1)_  
_Provide a meaningful name and optional description to identify the rule._  
<img width="1920" height="929" alt="Screenshot (712)" src="https://github.com/user-attachments/assets/57bcb50d-f3dc-476f-9d5b-b0f684e0b0bc" />

---

### 2️⃣ Configure the Event Source

📸 _Screenshot 2A: Event Source Settings_  
- Select **Event Source** as `AWS Events`
- Choose **Event Pattern**  
<img width="1920" height="935" alt="Screenshot (713)" src="https://github.com/user-attachments/assets/d6743c7b-fa56-49d8-af0a-772b575ff3f6" />

📸 _Screenshot 2B: EC2 Launch Configuration_  
- **AWS Service**: EC2  
- **Event Type**: EC2 Instance State-change Notification  
- **Event Specification Type**: Choose **Specific state(s)**  
- Select `pending`, `running` as the states  
<img width="1920" height="933" alt="Screenshot (714)" src="https://github.com/user-attachments/assets/c9325289-d9cc-47ce-9a9f-aae5b6e5bc95" />

---

### 3️⃣ Set the Target to SNS Topic

📸 _Screenshot 3: Target SNS Topic_  
- Choose **SNS topic** as the target  
- Select or create an SNS topic  
- Subscribe your **email address** to receive notifications  
<img width="1920" height="939" alt="Screenshot (715)" src="https://github.com/user-attachments/assets/ea19e06e-9af5-4f92-8386-1384b55a91db" />

---

### 4️⃣ Add Tags

📸 _Screenshot 4: Tags_  
- Add metadata, e.g., `Key: Launched`, `Value: Yes` for better tracking  
<img width="1920" height="927" alt="Screenshot (716)" src="https://github.com/user-attachments/assets/06d61dbf-7b98-43e6-ba67-e3f320a7caf9" />

---

### 5️⃣ Review and Create the Rule

📸 _Screenshot 5: Final Review Page_  
- Review all selections  
- Click **Create Rule**  
<img width="1920" height="913" alt="Screenshot (717)" src="https://github.com/user-attachments/assets/be3cdf38-94fe-4cdb-a0e5-0d5022bb8b5c" />

---

### 6️⃣ Test the Rule: Launch a New EC2 Instance

📸 _Screenshot 6: Launch EC2 Instance_  
- Launch an instance to trigger the event  
<img width="1920" height="933" alt="Screenshot (718)" src="https://github.com/user-attachments/assets/8a186576-328f-403d-8314-8f597ff5b974" />

---

### 7️⃣ Verify Notification

📸 _Screenshot 7: Running Instance and Email_  
- Confirm the instance state is `running`  
- Check your email for the notification  
<img width="1920" height="849" alt="Screenshot (719)" src="https://github.com/user-attachments/assets/41328f52-7e2e-4e75-9062-b7b23c8331c5" />

---

### 8️⃣ CloudFormation Integration

📸 _Screenshot 8: CloudFormation Template Option_  
- View the **auto-generated CloudFormation template** (JSON/YAML) for the created rule  
<img width="1920" height="929" alt="Screenshot (720)" src="https://github.com/user-attachments/assets/fef1bc87-7682-47ed-8ab6-2554ced96039" />

---

## ✅ Outcome

- Successfully created an EventBridge rule to detect EC2 instance launches.
- Integrated with SNS to receive email alerts.
- Validated both the EC2 launch event and the alert email.
- Observed the infrastructure-as-code (IaC) template through CloudFormation.

---

## 📘 Key Learnings & Observations

- EventBridge enables **real-time AWS event monitoring**.
- SNS seamlessly delivers alerts via email, SMS, Lambda, etc.
- CloudFormation templates provide a great way to **automate infrastructure setup**.
- Event pattern filtering is **powerful yet easy** for EC2-specific events.

---

## 🌐 Real-World Applications

- 🔒 **Security Monitoring**: Alert whenever an EC2 is launched without approval.
- 🔔 **Environment Awareness**: Notify Ops teams of any infrastructure change.
- 🧠 **IaC Practice**: Learn how every AWS action can be represented as code using CloudFormation.

---

## 📌 Note on CloudFormation

**AWS CloudFormation** is a service that helps you **automate** and **manage** your AWS infrastructure using **code** instead of manual configuration.

> You write your infrastructure setup (like EC2, S3, VPC, IAM, etc.) in a `.yaml` or `.json` **template file**, and CloudFormation **creates** and **manages** those resources **automatically**.

A CloudFormation **template** is a declarative file that defines:
- Resources and their configurations
- Dependencies
- Outputs and parameters

---

## 🛠️ Key Features of CloudFormation

- **Infrastructure as Code (IaC):** Define your infrastructure in code just like writing a software program.
- **Repeatable Deployments:** Use the same template to set up multiple environments (e.g., dev, test, prod) consistently.
- **Automatic Rollbacks:** If a deployment fails, CloudFormation can automatically undo the changes.
- **Drift Detection:** Detect if actual AWS resources differ from what’s defined in your template.

---

## 🏷️ Tags

`AWS` `EventBridge` `EC2` `SNS` `Monitoring` `Notification` `Email` `Automation` `CloudFormation`

---

## 💡 Tips

- Confirm the email subscription after SNS topic creation.
- Rules only apply to the **selected event types**, so be precise in the event pattern.
- Use CloudFormation templates to replicate setup in different environments.
- Add meaningful tags for efficient rule management.

---
