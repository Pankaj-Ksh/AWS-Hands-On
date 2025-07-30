# 🚀 EC2 Auto Start/Stop System with Notifications — Real-Time Cloud Automation (AWS)

This hands-on project demonstrates how to automatically **start and stop EC2 instances** based on a schedule using **AWS Lambda**, **Amazon EventBridge Scheduler**, and **SNS for email notifications**, enabling real-time cloud automation. Additionally, **CloudWatch Logs** are integrated to track and analyze the execution status and behavior of Lambda functions for deeper operational visibility.

---

## 🎯 Objective

- Automate EC2 instance lifecycle (Start/Stop) using AWS services.
- Set up scheduled rules using **Amazon EventBridge Scheduler**.
- Trigger **Lambda functions** to manage EC2 instances.
- Attach **SNS notifications** to monitor success/failure of automation.
- Integrate **CloudWatch Logs** to track, debug, and audit Lambda execution in real time.
- Debug and resolve real-world IAM, trust policy, and notification issues.

---

## 🔄 Workflow Summary

1. Launch EC2 instances with appropriate tags.
2. Create IAM role with required permissions and trust policies.
3. Set up Lambda functions to start and stop EC2 instances.
4. Schedule Lambda executions using **EventBridge Scheduler**.
5. Add SNS destinations for success and failure alerts.
6. Verify outcomes and resolve permission, timeout, and notification issues.
7. Validate logs in **CloudWatch**.

---

## 🏗️ Architecture Diagram
<img width="633" height="514" alt="EC2-STOP-START drawio" src="https://github.com/user-attachments/assets/fe01303f-5e56-49b5-9c6f-19f2f07fa45f" />

---

## 🧾 Steps Performed

---

### 1️⃣ EC2 Instance Setup

#### 1.1 Created EC2 Instances

- Launched two EC2 instances:
  - `Dev-Instance-1`
  - `Dev-Instance-2`
- Added tag: `Dev = Yes`

📸 *Screenshot Placeholder*
<img width="1920" height="932" alt="Screenshot (742)" src="https://github.com/user-attachments/assets/2b2c190e-d962-4586-b56d-def4bb207730" />

---

### 2️⃣ IAM Role Setup

#### 2.1 Created IAM Role

- Trusted entity: AWS Service (Lambda)
- Role name: `LambdaRole-To-Start-Stop-EC2`
- No permissions added initially

📸 *Screenshot Placeholder*
<img width="1920" height="931" alt="Screenshot (734)" src="https://github.com/user-attachments/assets/3c576969-fd74-47a3-a940-9f309a5d5882" />

#### 2.2 Created Inline Policy

- Policy included EC2 and CloudWatch Logs permissions

📸 *Screenshot Placeholder*
<img width="1920" height="940" alt="Screenshot (739)" src="https://github.com/user-attachments/assets/9b8d3ceb-ada0-4440-8e63-b683baeace44" />

#### 2.3 Attached Policy to Role

- Attached inline policy to `LambdaRole-To-Start-Stop-EC2`

📸 *Screenshot Placeholder*
<img width="1920" height="935" alt="Screenshot (741)" src="https://github.com/user-attachments/assets/8f4aeb7e-358b-44e4-9bb3-d5ae872827a5" />

---

### 3️⃣ Lambda Function Setup

#### 3.1 Created `StartDevInstances` Function

- Runtime: Python 3.13
- Execution role: `LambdaRole-To-Start-Stop-EC2`

📸 *Screenshot Placeholder*
<img width="1920" height="931" alt="Screenshot (743)" src="https://github.com/user-attachments/assets/39cd608e-ff86-423e-9b98-e888deb0554f" />

#### 3.2 Attached Policy to Lambda Role

- Role used: `LambdaRole-To-Start-Stop-EC2`

📸 *Screenshot Placeholder*
<img width="1920" height="898" alt="Screenshot (744)" src="https://github.com/user-attachments/assets/9f3b7180-b4a9-41c8-88ba-536704bc89b9" />

#### 3.3 Created `StopDevInstances` Function

- Runtime: Python 3.13
- Mistake: Did not assign existing role

#### 3.4 Observed SNS Missing in Initial Code

- No SNS logic included, caused issue later

📸 *Screenshot Placeholder*
<img width="1920" height="933" alt="Screenshot (746)" src="https://github.com/user-attachments/assets/c3caeb94-615c-47b9-bdc8-0830e67ff460" />

---

### 4️⃣ EventBridge Scheduler Setup

#### 4.1 Created `StartDevInstancesRule`

- Rule name: StartDevInstancesRule
- Created via EventBridge Scheduler

📸 *Screenshot Placeholder*
<img width="1920" height="931" alt="Screenshot (748)" src="https://github.com/user-attachments/assets/d52a69a5-9620-404a-8ab4-e7b26b0ddd2e" />

#### 4.2 Set Schedule Pattern

- Recurring schedule: Cron-based
- Time zone: Asia/Calcutta
- Cron: `0 9 * * ? *`

📸 *Screenshot Placeholder*
<img width="1920" height="940" alt="Screenshot (750)" src="https://github.com/user-attachments/assets/8e5a66e7-7c0b-447a-8e2d-d35e854326fe" />

#### 4.3 Chose Target: Lambda

- Selected function: `StartDevInstances`

📸 *Screenshot Placeholder*
<img width="1920" height="936" alt="Screenshot (751)" src="https://github.com/user-attachments/assets/6f32a741-3d44-49be-a44e-caf31fd214a8" />

#### 4.4 Set Permissions

- Selected existing role: `LambdaRole-To-Start-Stop-EC2`

📸 *Screenshot Placeholder*
<img width="1920" height="935" alt="Screenshot (752)" src="https://github.com/user-attachments/assets/ff8066b1-2905-4a3e-b4bc-05425633e72a" />

#### 4.5 Reviewed and Created Schedule

📸 *Screenshot Placeholder*

#### 4.6 ❗ Error: Missing Trust Relationship

- Error: Scheduler must be allowed to assume IAM role

📌 *Trust relationship missing for `scheduler.amazonaws.com`*


#### 4.7 🛠️ Fixed Trust Relationship

- Added `scheduler.amazonaws.com` to trust policy

📸 *Screenshot Placeholder*
<img width="1920" height="864" alt="Screenshot (755)" src="https://github.com/user-attachments/assets/e629af40-53b0-4fd6-ac94-06e53d37a24d" />

#### 4.8 Verified `StartDevInstancesRule` Details

📸 *Screenshot Placeholder*
<img width="1920" height="932" alt="Screenshot (756)" src="https://github.com/user-attachments/assets/d3117415-f057-4e69-9d84-cce4aec0d6e9" />

#### 4.9 Repeated for `StopDevInstancesRule`

- Cron: `0 18 * * ? *` (6 PM IST)

---

### 5️⃣ SNS Notification Setup

#### 5.1 Created SNS Publish Policy

- Topic ARN: `arn:aws:sns:ap-south-1:430118828196:MyTopic1`

📸 *Screenshot Placeholder*
<img width="1920" height="920" alt="Screenshot (758)" src="https://github.com/user-attachments/assets/fb7559c1-9010-49b1-947b-fce4ec691767" />

#### 5.2 Attached Policy to Lambda Role

- Role: `LambdaRole-To-Start-Stop-EC2`

📸 *Screenshot Placeholder*
<img width="1920" height="883" alt="Screenshot (759)" src="https://github.com/user-attachments/assets/542184c6-f2d1-4f03-9a73-452029b9f237" />

#### 5.3 SNS Destinations for `StartDevInstances`

##### 5.3.1 On Success ➡ SNS: MyTopic1  
##### 5.3.2 On Failure ➡ SNS: MyTopic1

📸 *Screenshot Placeholder*
<img width="1920" height="898" alt="Screenshot (760)" src="https://github.com/user-attachments/assets/f3fcf59c-b18c-4dd6-a450-ab7b5e14d639" />

#### 5.4 SNS Destinations for `StopDevInstances`

##### 5.4.1 On Success ➡ SNS: MyTopic1  
##### 5.4.2 On Failure ➡ SNS: MyTopic1

📸 *Screenshot Placeholder*
<img width="1920" height="926" alt="Screenshot (761)" src="https://github.com/user-attachments/assets/f185a734-c8f5-4f9f-888c-dad5231f851c" />

---

### 6️⃣ Testing & Troubleshooting

#### 6.1 Stopped Instances Manually Before Testing

📝 *No screenshot available — included as theory note*

#### 6.2 Tested `StartDevInstances` Function

#### 6.3 ❗ Error: Task Timed Out After 3 Seconds

#### 6.4 🛠️ Increased Lambda Timeout to 30 Seconds

📸 *Screenshot Placeholder*
<img width="1920" height="889" alt="Screenshot (765)" src="https://github.com/user-attachments/assets/8945df01-4012-44ff-8a1d-27989495198b" />

#### 6.5 ✅ Verified EC2 Instances Were Running

📸 *Screenshot Placeholder*
<img width="1920" height="933" alt="Screenshot (766)" src="https://github.com/user-attachments/assets/d38a7aba-d9a8-492f-8821-1b8b924f7e7d" />

#### 6.6 ⚠️ Email Notification Not Received

#### 6.7 Cause: SNS Destination Sends Raw Logs

- SNS Destinations do not support custom messages

#### 6.8 Fix: Used sns.publish() With Message, Subject, TopicArn

📸 *Screenshot Placeholder of updated Lambda code*
<img width="1920" height="933" alt="Screenshot (767)" src="https://github.com/user-attachments/assets/153960b2-0259-49f8-a021-0146e047543b" />

#### 6.9 Applied Same Fix to `StopDevInstances`

#### 6.10 Error: UnauthorizedOperation in DescribeInstances

#### 6.11 Cause: Wrong IAM Role Attached to `StopDevInstances`

- Role auto-created by AWS: `StopDevInstances-role-xxxx`

📸 *Screenshot Placeholder*
<img width="1920" height="932" alt="Screenshot (768)" src="https://github.com/user-attachments/assets/067f9782-b4d8-402b-98b9-279f21bf6052" />

#### 6.12 Fix: Re-attached `LambdaRole-To-Start-Stop-EC2`

#### 6.13 ✅ Verified EC2 Stop and Email Notification

📸 *Screenshot Placeholder*
<img width="1920" height="902" alt="Screenshot (769)" src="https://github.com/user-attachments/assets/e3244253-4b40-4a40-80f8-22a255e701b9" />

#### 6.14 ✅ Verified EC2 Start and Email Notification

📸 *Screenshot Placeholder*
<img width="1920" height="904" alt="Screenshot (771)" src="https://github.com/user-attachments/assets/0066c8b3-81be-45b5-8c86-f75f9d9f23da" />

#### 6.15 📸 Captured Lambda Function Details (Code, Test, Monitor, etc.)

📸 *Side-by-side screenshots*
<img width="1920" height="899" alt="Screenshot (772)" src="https://github.com/user-attachments/assets/44a38870-9cb0-4536-9fbe-d3e6a9e25438" />

---

### 7️⃣ CloudWatch Logs

#### 7.1 Validated Log Groups in CloudWatch

- `/aws/lambda/StartDevInstances`
- `/aws/lambda/StopDevInstances`

📸 *Screenshot Placeholder*
<img width="1920" height="900" alt="Screenshot (774)" src="https://github.com/user-attachments/assets/08ecffbe-c899-4693-b876-9eed83a233c8" />

#### 7.2 Opened Log Streams and Verified Timestamps & Messages

📸 *Screenshot Placeholder*
<img width="1920" height="897" alt="Screenshot (773)" src="https://github.com/user-attachments/assets/247e67b1-3f5a-47e6-95f6-26ec59e952ab" />

---

## ❗ Issues Faced

- IAM role not attached during Lambda creation
- EventBridge Scheduler trust relationship missing
- SNS destination did not send readable email
- Lambda timeout too short
- AWS auto-created IAM role during Lambda setup

---

## 🧠 Key Learnings and Observations

- EventBridge Scheduler **requires trust relationships**
- Use `sns.publish()` for actual email messages
- CloudWatch logs are essential for debugging
- Be cautious during Lambda setup to avoid AWS auto-roles
- Permission errors are common but traceable with logs

---

## 🌍 Real-World Use Case

- Auto start/stop of **Dev/QA environments** to reduce cost
- SNS email alerts help DevOps monitor task outcomes
- Extend pattern to RDS, ECS, EBS, etc.
- Tag-based filtering gives targeted automation

---

## 🏷️ Tags

`AWS` `Lambda` `EventBridge` `SNS` `EC2 Automation` `IAM` `CloudWatch` `DevOps` `Scheduler` `Notifications`

---

## 💡 Tips

- Always verify IAM role during Lambda creation
- Set timeout less than 20 seconds for EC2 actions
- Permissions and trust are both mandatory
- `sns.publish()` is essential for readable emails
- Use CloudWatch logs as the first line of debug

---
