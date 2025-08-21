# 🔔 Amazon S3 Event Notifications with SNS Integration

*A hands-on project to configure and test **Amazon S3 Event Notifications** by sending alerts to an **SNS Topic** whenever objects are uploaded or deleted in an S3 bucket.*  

---

## 🎯 Objective  
The objective of this project is to configure and test **Amazon S3 Event Notifications** to create an event-driven system. It demonstrates how to:  
✨ Automatically send alerts to an **SNS topic**.  
📩 Notify a subscribed **email address** whenever objects are **uploaded or deleted** in an S3 bucket.  
⚡ Understand the practical application of connecting different AWS services to **automate monitoring** and provide **real-time alerts** for data changes.  

---

## 🏗️ Architecture Overview  
🔹 **Amazon S3** → Source of events (Object Created / Deleted).  
🔹 **S3 Event Notifications** → Triggers on specified events.  
🔹 **Amazon SNS** → Destination service to broadcast notifications.  
🔹 **Email Subscription** → Endpoint to receive alerts.  

📊 **Flow:**  
`S3 Bucket` ➝ `Event Notification` ➝ `SNS Topic` ➝ `Email Subscriber`  

---

## 🔄 Workflow Summary  
1️⃣ Create an **S3 bucket** and prepare it for event notifications.  
2️⃣ Configure **S3 Event Notifications** for **Put** and **Delete** events.  
3️⃣ Set the destination as an **SNS Topic**.  
4️⃣ Confirm email subscription from the **SNS topic**.  
5️⃣ Test by **uploading** and **deleting** objects in the S3 bucket.  
6️⃣ Verify **email alerts** for both operations.  

---

## 🛠️ Steps Performed  

### 🟢 Step 1: Initial State & Configuration  
- S3 bucket’s **Event notifications** and **Amazon EventBridge** sections are empty.  

![Initial State](https://github.com/user-attachments/assets/ba8697fa-70f9-4087-b098-6f39fbf83b00)  

---

### 🟡 Step 2: Create the Event Notification  
- Event created as `demo-event-for-object-post-delete`.  
- Event types selected: **Put** and **Permanently deleted**.  

![Create Event Notification](https://github.com/user-attachments/assets/2bd3889b-ca69-4e82-abf0-45099b2565df)  

- Destination chosen as **SNS Topic (`MyTopic1`)**.  

![SNS Topic Destination](https://github.com/user-attachments/assets/f8a88921-79a7-4557-8499-752bef08ea3d)  

---

### 🔵 Step 3: Confirm SNS Subscription  
- Email received for **SNS subscription confirmation** (mandatory step).  

![SNS Subscription Confirmation](https://github.com/user-attachments/assets/329c0fc2-e137-4c15-8cf0-5361c04b88ae)  

---

### 🟣 Step 4: Test and Verify Notifications (Upload)  
- Uploaded objects: `Audi.jpg` and `Defender.jpg`.  
- Gmail inbox shows **AWS notification emails** for `s3:TestEvent` and `s3:ObjectCreated:Put`.  

![Upload Test Notifications](https://github.com/user-attachments/assets/11f1053f-590e-4dbd-ba1e-52610a65c7ff)  

---

### 🔴 Step 5: Test and Verify Notifications (Delete)  
- Objects deleted from the bucket.  
- Gmail inbox shows **notifications for ObjectRemoved:DeleteMarkerCreated** events.  

![Delete Test Notifications](https://github.com/user-attachments/assets/d02f0916-f3db-48f9-ab17-b0428810ea14)  

- Final confirmation of **Audi.jpg** and **Defender.jpg** deletions with corresponding notifications.  

![Delete Confirmation](https://github.com/user-attachments/assets/50274762-3f02-41a4-b0aa-015c308fdf74)  

---

## ⚠️ Issues Faced  
🐌 Delay in receiving email notifications (sometimes takes **20-25 mins**).  
✉️ Required **manual subscription confirmation** before SNS could send notifications.  
🌀 Deletion events generated **DeleteMarkerCreated** notifications instead of direct delete logs (because **versioning** was enabled).  

---

## ✅ Outcome  
🎉 Successfully configured **Amazon S3 Event Notifications** with **SNS integration**.  
📩 Verified **real-time alerts** on object upload and deletion.  
⚡ Established an **event-driven monitoring system** for S3 bucket activities.  

---

## 📘 Key Learnings & Observations  
🔑 **SNS subscription confirmation** is mandatory before notifications work.  
🔑 **Versioned buckets** generate `DeleteMarkerCreated` events instead of `ObjectRemoved:Delete`.  
🔑 Real-time **email alerts validate S3 activity monitoring**.  
🔑 Integration between **S3 → SNS → Email** is simple but powerful for automation.  

---

## 🌍 Real-World Use Case  
📡 **Data monitoring** → Immediate alerts when files are uploaded or deleted.  
🛡️ **Security & compliance** → Track unauthorized object deletions.  
📊 **Audit & operations** → Notify admins about critical bucket changes.  
🤖 **Trigger workflows** → Instead of email, SNS can forward events to **Lambda**, **SQS**, or external apps.  

---

## 🏷️ Tags  
`AWS` `S3` `SNS` `Cloud Monitoring` `Event-Driven Architecture` `Hands-On`  

---

## 💡 Tips  
💡 Always create a **separate SNS topic** for S3 notifications.  
💡 Enable **versioning** to track object history.  
💡 Use **SNS + Lambda** for automation in production instead of just email.  
💡 Test with multiple event types (**PUT, POST, DELETE**) for full coverage.  

---
