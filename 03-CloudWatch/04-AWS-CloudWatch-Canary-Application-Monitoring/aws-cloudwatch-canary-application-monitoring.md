# 🚀 AWS CloudWatch Canary Project: Monitor, Capture, and Store Website Health Logs

This mini project demonstrates how to use **AWS CloudWatch Synthetics Canary** to monitor a custom-hosted website (deployed on Vercel), capture screenshots of uptime tests, and store the results in **Amazon S3** — addressing security, access policies, and real-world availability tracking.

---

## 🎯 Objective

- ✅ Detect downtime or unexpected issues before users do.
- ✅ Visually verify that the UI renders correctly on every scheduled run.
- ✅ Maintain historical health records by storing artifacts in Amazon S3.
- ✅ Store timestamped screenshots for historical analysis or audits.
- ✅ Automate monitoring with zero manual interaction.

---

## 🏗 Architecture Overview
  <img width="4557" height="4274" alt="image" src="https://github.com/user-attachments/assets/6f1ce7dc-2ad2-4b41-a489-02b99633b882" />


---

## 🚀 Steps Performed

This section outlines the complete process of configuring a **CloudWatch Canary** to monitor a custom website hosted on Vercel, capture screenshots, and handle S3 object visibility challenges.

---

### 🌐 Part 0: My Website

✅ The monitored website in this project is deployed on **Vercel**:  
🔗 [`https://coding-platform-project.vercel.app`](https://coding-platform-project.vercel.app)  

![Website Screenshot](https://github.com/user-attachments/assets/a1422274-98b0-4bd0-972a-29a72eee089a)

---

### 🧭 Part 1: Setting up the CloudWatch Synthetics Canary

1️⃣ **Navigate to CloudWatch Synthetics**  
- Open AWS Console → Go to **CloudWatch** → Select **Synthetics Canaries**.

2️⃣ **Create Canary**
- Click **"Create canary"**.

3️⃣ **Select a Blueprint and Enter Details**
- Choose **"Heartbeat Monitoring"** blueprint.
- Canary name: `coding-platform-project-canary`.
- URL: `https://coding-platform-project.vercel.app/`
  
![Canary Config](https://github.com/user-attachments/assets/73c434dc-8691-4475-9e69-cadede04aa93)

4️⃣ **Configure Data Retention & Storage**
- Retain results for 31 days.
- S3 bucket is auto-created:  
  `s3://cw-syn-results-<account-id>-<region>/canary/...`

![S3 Config](https://github.com/user-attachments/assets/3ab03954-8b8a-48e4-b77e-2a9fb9ba1cee)

5️⃣ **Schedule & Timeout**
- Choose **Run Once** for testing.
- Timeout: **1 minute**.
  
![Schedule Config](https://github.com/user-attachments/assets/eafff0fd-7b8a-4715-9b4f-e969ae8587d4)

6️⃣ **Launch Canary**
- Click **Create canary** to start the run.

7️⃣ **Monitor Run Status**
- Go to Canary Dashboard → Status should be **Passed**.
   
![Run Status](https://github.com/user-attachments/assets/76de3cd1-1389-40a5-8b16-62e51c6aebb5)  

![Detailed Status](https://github.com/user-attachments/assets/2a0ac073-7153-4162-bbe4-a5d8cca42e97)

8️⃣ **View Screenshots**
- Click the Canary → Go to **Screenshots** tab.
  
![Screenshot Tab](https://github.com/user-attachments/assets/105feea3-f73d-40d1-9e40-fc3bdd32768d)  

![Captured Screenshot](https://github.com/user-attachments/assets/436be85d-4249-4d58-be24-1bf1c48e492f)

---

### 🔒 Part 2: Screenshot Access & Visibility Problem

📁 S3 Bucket Structure and Canary Artifacts

<img width="1920" height="929" alt="Screenshot (859)" src="https://github.com/user-attachments/assets/89375870-18f0-408a-a5aa-d1eff2221aa2" />

1️⃣ **Try Accessing Screenshot via S3 URL**
- Locate `.png` file in the S3 bucket → Open it in browser.  
🚫 **Access Denied** Error

![Access Denied](https://github.com/user-attachments/assets/dce3c95c-e459-4be9-8350-7bdba4ee70c0)

2️⃣ **Check Bucket Permissions**
- Go to **Permissions → Block public access** → Confirm it's all blocked.
   
![Bucket Access Blocked](https://github.com/user-attachments/assets/c4652c96-6aca-47b3-befd-b5181cdf803e)

3️⃣ **Review Bucket Policy**
- Even if public-read is allowed, encryption may block direct access.
  
![Bucket Policy](https://github.com/user-attachments/assets/7a98ee1c-5e5f-4df6-b640-40e59fcfe08f)

---

### 🧹 Final Deletion Steps

1. Delete the Canary
   
   ![Delete Canary](https://github.com/user-attachments/assets/4f1b5c72-faec-45c5-adf8-bf0ed78dcdb4)

3. Delete the related S3 Bucket manually.

---

### ✅ Part 3: Workaround — Make Screenshot Public

📥 **Step 1: Download from S3**
- Locate the `.png` file → Click **Download**.

📤 **Step 2: Re-upload to Public Folder**
- Create `public-screenshots/` in same or new bucket.
- Set permissions/public-read policy on the folder/bucket.

---

## ✅ Outcome

- ✅ **CloudWatch Canary Setup** — Created to monitor website uptime and responsiveness.
- 🔒 **S3 Access Realization** — Learned that Canary files are not publicly accessible due to encryption and ownership.
- 🧩 **Workaround Applied** — Used download-and-reupload method to make screenshots public.
- 📜 **S3 Policy Mastery** — Understood how **BOE (Bucket Owner Enforced)** disables ACL and relies only on bucket policies.

---

## 🧠 Key Learnings

- 🔐 **Canary artifacts are auto-encrypted and private** by default.
- 🚫 S3 **"Make public" option is disabled** due to BOE.
- 🏷️ Canary S3 buckets are named like `cw-syn-results-<account-id>-<region>`.
- 🧪 Canary logs help debug frontend/uptime issues visually.
- 📜 S3 bucket policies must be crafted for public access — ACLs are ignored.

---

## 🌍 Real-World Use Case

This project reflects real-world needs for **production website monitoring** using synthetic scripts and alert mechanisms.

### 💡 Example Use Cases

- 🧑‍💻 **Startup Monitoring** — Ping prod URLs every few minutes.
- 🖼️ **Audit Screenshots** — Canary keeps visual history for SLA checks.
- 🚨 **Automated Alerts** — Combine with SNS for incident response.
- 🌐 **UI Monitoring** — Ensure consistent user experience post-deploy.

---

## ✅ Effective For

- Verifying **3rd party integrations** (e.g., login, payment).
- Monitoring after CI/CD deployments.
- Capturing rare frontend issues missed by basic pings.

---

## 🏷️ Tags

`#AWS` `#CloudWatch` `#Canary` `#Synthetics` `#WebsiteMonitoring` `#S3`  
`#Vercel` `#PerformanceTesting` `#ScreenshotLogging` `#UptimeChecker`  
`#DevOps` `#CloudAutomation`

---

## 💡 Tips

- Always use the **"Heartbeat"** blueprint only for basic uptime checks — use custom scripts for deeper monitoring.
- Run Canary on a **recurring schedule** (e.g., every 5 or 15 minutes) instead of "Run once" to simulate real-world uptime checks.
- Canary screenshots stored in S3 are **encrypted and private by default** due to Bucket Owner Enforced (BOE) settings.
- **Access Denied** errors occur even with public-read bucket policy — re-upload objects to a `public-screenshots/` folder with public permissions.
- Create **CloudWatch Alarms + SNS notifications** to get real-time alerts when Canary fails.
- Use **CloudWatch Logs tab in Canary console** to debug script execution issues.
- Canary-generated S3 buckets follow the format: `cw-syn-results-<account-id>-<region>` — these are auto-created and non-customizable.
- Avoid modifying the default bucket directly — instead, copy necessary files to a separate bucket or folder for custom sharing.
- Use the **"Screenshots" tab** in the Canary dashboard for quick visual debugging of rendering or frontend issues.
