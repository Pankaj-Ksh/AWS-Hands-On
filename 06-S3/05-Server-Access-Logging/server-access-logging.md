# 🗂️ S3 Server Access Logging

The idea of this Hands-On is to **implement logging for an Amazon S3 bucket** to track all access requests.  
By storing these logs in a dedicated log bucket, we can:  
- Monitor **who accessed the data**,  
- Track **what actions were performed**,  
- Support **security audits, compliance, and troubleshooting**.  

This hands-on demonstrates how to configure, validate, and understand **S3 Server Access Logging** end-to-end.

---

## 🎯 Objective
The objective of this hands-on was to **enable server access logging** for an Amazon S3 bucket.  
This involved:  
- Creating a dedicated **log bucket**.  
- Configuring the **source bucket** to send access logs to the log bucket.  
- Verifying that the logs are successfully generated and stored.

---

## 🏗 Architecture Overview
- **Source Bucket**: `demobucket-1-pankaj`  
- **Log Bucket**: `demobucket-1-pankaj-logs`  
- Region: `ap-south-1`  

The source bucket records access logs (requests, actions, etc.) and stores them in the log bucket for monitoring and auditing.

---

## 🔄 Workflow Summary
1. Create two S3 buckets in the same region.  
2. Enable **Server Access Logging** on the source bucket.  
3. Specify the **log bucket** as the destination for logs.  
4. Perform actions (upload, download, delete) on the source bucket.  
5. Validate that logs appear in the log bucket after a delay.  

---

## 🛠 Steps Performed
- **Bucket Creation**:  
  Created two S3 buckets in `ap-south-1`:  
  - Source bucket → `demobucket-1-pankaj`  
  - Log bucket → `demobucket-1-pankaj-logs`
  <img width="1920" height="977" alt="Screenshot (1088)" src="https://github.com/user-attachments/assets/999c4ba8-5cc1-4716-adc6-2164f7b35acf" />


- **Enable Logging**:  
  On the source bucket's **Properties**, enabled **Server Access Logging** and set `demobucket-1-pankaj-logs` as the destination.  
  (Note: AWS automatically added a **bucket policy** to allow log delivery into the destination bucket.)  
  <img width="1920" height="976" alt="Screenshot (1089)" src="https://github.com/user-attachments/assets/1cd2851d-d3f4-453a-9e7f-5635159c576b" />


- **Verification (Initial)**:  
  Confirmed the log bucket was empty at the start.
  <img width="1920" height="977" alt="Screenshot (1099)" src="https://github.com/user-attachments/assets/8e05b53a-d6a2-4e6a-8753-cd216c53d793" />


- **Generate Logs**:  
  Performed actions on the source bucket (uploads, deletes, etc.) to generate events.
  <img width="1920" height="975" alt="Screenshot (1119)" src="https://github.com/user-attachments/assets/45157ac4-85f6-4f1e-becf-b440f3d8f7e2" />


- **Log Delivery Validation**:  
  After a short delay, verified that log files appeared in the log bucket, confirming successful logging.  
  <img width="1920" height="977" alt="Screenshot (1120)" src="https://github.com/user-attachments/assets/e78c1752-5092-4a27-b712-02eb303972ea" />

---

## ⚠️ Issues Faced
- Logs did not appear immediately — there was a **delay** before delivery.  
- Needed to ensure the log bucket had the correct **permissions** (policy is automatically added, but must be verified).  
- Configuring the **same bucket** as source and destination would cause **infinite looping** (should be avoided).  
- Logs are stored in **raw text format**, requiring parsing for analysis.  

---

## ✅ Outcome
- Successfully enabled and validated **server access logging**.  
- All source bucket access activities (bucket actions and object-level requests) were recorded and stored in the log bucket.  

---

## 📚 Key Learnings & Observations
- **Server Access Logging** helps in tracking all bucket requests (for auditing, security, and billing).  
- Logs capture both **bucket-level operations** (like `LIST`, `GET Bucket`) and **object-level operations** (like `PUT Object`, `DELETE Object`).  
- Logs are **delivered with a delay** and **not guaranteed to be real-time**.  
- AWS automatically applies the required **bucket policy** on the log bucket during setup.
  <img width="1920" height="977" alt="Screenshot (1100)" src="https://github.com/user-attachments/assets/a8c42b0b-2477-41f7-be92-7ea23ae7bb6a" />

- Must avoid configuring the **same bucket** as source and destination (to prevent infinite logging loops).  

---

## 🌍 Real-World Use Case
- Used for **security auditing** (who accessed the bucket and when).  
- Helps in **troubleshooting access issues**.  
- Can track **request trends and usage patterns** for billing optimization.  
- Forms the base for **compliance requirements** (e.g., monitoring sensitive data access).  

---

## 🏷️ Tags
`AWS` `S3` `Server Access Logging` `Cloud Security` `Monitoring`  

---

## 💡 Tips
- Always create a **separate bucket** for logs to prevent loops.  
- Be patient — logs can take a few minutes to appear.  
- Use tools like **Athena** or **CloudWatch Logs** to analyze large volumes of logs efficiently.  
