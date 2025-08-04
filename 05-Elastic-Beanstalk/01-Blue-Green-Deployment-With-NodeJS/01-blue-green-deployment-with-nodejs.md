# 🚀 AWS Elastic Beanstalk Blue/Green Deployment with Node.js: Safe Feature Releases

This hands-on project demonstrates how to use **AWS Elastic Beanstalk Blue/Green deployment** to roll out new features **safely and without downtime**. Starting from a basic Node.js app (inspired by AWS docs), the Blue version was deployed first with standard functionality, followed by the Green version with **additional GitHub profile links** to simulate a feature update.

Both versions are live-tested, compared, and shared via GitHub to highlight how Blue/Green deployment makes **production-grade testing and rollouts** easier.

---

## 🎯 Objective

- ✅ Learn how to deploy and manage a Node.js app using AWS Elastic Beanstalk.
- ✅ Understand and configure Blue/Green deployment strategy in real-world setup.
- ✅ Implement IAM roles manually for tighter control.
- ✅ Use Elastic Beanstalk events and email notifications for observability.
- ✅ Demonstrate how Green version can introduce **new features** (3 more GitHub links).
- ✅ Use environment swap to expose the new version to production traffic **without breaking anything**.
- ✅ Clean up unused resources and apply best practices for resource management.

---

## 🧪 Blue vs Green: Feature Comparison & GitHub Code Repos

I started by downloading a **sample Node.js application** from the [official AWS documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-getstarted.html), and then **customized it** into two separate versions:

### 🔵 Blue Deployment (Initial Version)
- ✅ Basic Node.js app with core functionality.
- ✅ Includes 4 GitHub repository links hardcoded into the homepage.
- 🗂️ Shared on GitHub 
  <img width="90%" alt="Screenshot (885)" src="https://github.com/user-attachments/assets/c4924fe8-38fa-4542-880f-aab913dc8f54" />

### 🟢 Green Deployment (Feature Update)
- ✅ Everything from Blue version.
- ➕ Added **3 more GitHub links**, demonstrating feature extension.
- ✅ Green version was tested live **without disrupting** the Blue environment.
- 🗂️ Shared on GitHub
  <img width="90%" alt="Screenshot (884)" src="https://github.com/user-attachments/assets/9fbe506e-6ec3-4216-aae4-462418ab8d1e" />

---

## 🏗️ Architecture Overview

- 📦 Node.js app source code deployed to Elastic Beanstalk.
- 🔵 Blue Environment: Hosted initial version.
- 🟢 Green Environment: Hosted updated version with extra links.
- 🔁 Blue/Green swap performed using EB Console.
- 📩 Notifications enabled via Amazon SNS.
- 🧼 Resource cleanup after deployment.

---

## 🔁 Workflow Summary

1. Created custom IAM roles manually.
2. Created a Blue environment and deployed the basic Node.js app.
3. Added an email subscriber to the default SNS topic.
4. Created a Green environment with the updated app.
5. Verified both apps independently.
6. Swapped environments using EB console.
7. Validated zero-downtime deployment.
8. Cleaned up unused environments and monitored logs.

---

## 🔧 Steps Performed

### ✅ Step 1: Prepare Blue Deployment Code
- 🧾 Created the initial version of the app (`app.js` and `index.html`)
- 📦 Compressed the project into a ZIP format

### ✅ Step 2: Prepare Green Deployment Code
- 🧾 Updated app logic (like new `/about` route or UI change)
- 📦 Created a separate ZIP for Green deployment

  <img width="90%" alt="Screenshot (883)" src="https://github.com/user-attachments/assets/1533d26d-f3df-4215-a5c6-19d9a527f614" />

### ✅ Step 3: Create Elastic Beanstalk Application
- 🔍 **Step 3.1:** Named application and checked domain availability
  
  <img width="90%" alt="Screenshot (886)" src="https://github.com/user-attachments/assets/ff6ef1f2-c6a5-4f3d-8660-fdc6e587a0f6" />

- 📤 **Step 3.2:** Uploaded Blue ZIP, set version label, and selected “Single Instance”
  
   <img width="90%" alt="Screenshot (887)" src="https://github.com/user-attachments/assets/7b2cc385-08a4-4b4e-8795-d613e88b180c" />

- 🔐 **Step 3.3:** Configured Service Access manually (Elastic Beanstalk no longer auto-creates roles)

### ✅ Step 4: Create IAM Roles (Manual Prerequisite)

#### 🔧 Service Role (Elastic Beanstalk - Environment)
- Created a role with **use case: Elastic Beanstalk Environment**
- Attached:
  - `AWSElasticBeanstalkEnhancedHealth` ✅
  - `AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy` ✅
    
  <img width="90%" alt="Screenshot (888)" src="https://github.com/user-attachments/assets/d6ad5911-7760-4a92-8975-6475052a21b6" />
    
  <img width="90%" alt="Screenshot (889)" src="https://github.com/user-attachments/assets/ac9fec94-65a4-474d-9e87-f853aa833bb7" />

#### 🖥 EC2 Instance Profile
- Created a role with **use case: Elastic Beanstalk - Compute**
- Attached:
  - `AWSElasticBeanstalkWebTier` ✅
  - `AWSElasticBeanstalkWorkerTier` ✅
  - `AWSElasticBeanstalkMulticontainerDocker` ✅
    
  <img width="90%" alt="Screenshot (890)" src="https://github.com/user-attachments/assets/7fc5d74a-7b1b-4220-b020-ba0c2c5e655b" />
  
  <img width="90%" alt="Screenshot (891)" src="https://github.com/user-attachments/assets/02d4a762-fda4-45c0-aa7d-7b61bfac11c9" />

🧩 Both roles were attached during environment setup.

  <img width="90%" alt="Screenshot (892)" src="https://github.com/user-attachments/assets/335853ad-77cf-4d22-98be-b79d8d088ad5" />

### ✅ Step 5: Configure Network and Instances
- Used **default VPC**, **default Security Group**
  
  <img width="90%" alt="Screenshot (893)" src="https://github.com/user-attachments/assets/6a3286ca-a48a-4024-bb6c-a404e5a5b3c0" />
  
  <img width="90%" alt="Screenshot (896)" src="https://github.com/user-attachments/assets/198da927-9461-46fb-90cd-916f44ee407f" />

- Selected **t2.micro** and **On-demand (single instance)**
  
  <img width="90%" alt="Screenshot (895)" src="https://github.com/user-attachments/assets/6b016c12-4cc5-4e0a-8d1f-1eb87beb0858" />

### ✅ Step 6: Configure Monitoring & Logging
- Entered notification email: `pankukshirsagar@gmail.com`
- No additional logging configuration was changed
  
  <img width="90%" alt="Screenshot (897)" src="https://github.com/user-attachments/assets/c63512c5-d32d-4310-968c-d6ea441737eb" />

### ✅ Step 7: Application Created
- Elastic Beanstalk launched the environment with domain:  
  **new-application-nodejs-env.ap-south-1.elasticbeanstalk.com**
  
  <img width="90%" alt="Screenshot (898)" src="https://github.com/user-attachments/assets/a7fdb2b4-a77c-4b5e-9fd9-d6123b87cfc1" />

---

## 📊 Step-by-Step Deployment & Swap

### ✅ Step 8: Checked Dashboard & Event Logs
- Verified instance creation, health, and **Elastic IP** assignment via **Events tab**

### ❌ Step 9: Faced Common Deployment Errors
- **Errors:**
  - `"no package.json found"`  
  - `"no Procfile found"`  
  - `"Provide one of: package.json, server.js, app.js"`
- **Fix:** Ensured correct **folder structure inside ZIP**
  
  <img width="90%" alt="Screenshot (918)" src="https://github.com/user-attachments/assets/109be1c5-113f-4f32-b68b-9f43fc8bdb23" />


### ✅ Step 10: Reupload & Deploy as `Version1-Blue-2`
- Successfully deployed using fixed ZIP
- `/about` route confirmed successful Node.js serving
  <img width="90%" alt="Screenshot (900)" src="https://github.com/user-attachments/assets/0f501ba5-6728-4c6c-9d29-bcf8167c03c9" />

  <img width="90%" alt="Screenshot (901)" src="https://github.com/user-attachments/assets/d622878c-a118-4028-bb3c-26270e411fa9" />
  
  <img width="90%" alt="Screenshot (902)" src="https://github.com/user-attachments/assets/3a79f323-606b-435d-9e05-4efd7efd6c16" />

### ⚠️ Step 11: Mistakenly Created Green Env in a New App
- New Application: `New-Green-Application`
- New Environment: `New-Green-Application-env`
  
  <img width="90%" alt="Screenshot (905)" src="https://github.com/user-attachments/assets/3fc11a29-ac3c-429b-868e-d3462ad9a602" />

### ✅ Step 12: Uploaded Green Code as `Version-1-Green-1`
- Again used single instance (free tier eligible)

### ✅ Step 13: Verified Green App Deployment
- Application launched successfully
  
  <img width="90%" alt="Screenshot (907)" src="https://github.com/user-attachments/assets/2db19fd9-ae2e-494f-97d2-e5ba3a16fd2d" />

### 🔄 Step 14: Swapped Environment from Action Panel
- ✅ From old (Blue) to new (Green)
- ✅ Verified URL was the same but new code was served
  
  <img width="90%" alt="Screenshot (910)" src="https://github.com/user-attachments/assets/bbddad90-ac42-4c68-9ace-0600e24cb7a7" />

### ⚠️ Step 15: Realized This Is Not AWS Recommended Practice
- ✅ Swapping should happen **within the same application**

### ✅ Step 16: Fixed Structure – Created Green Env in Same App
- Deleted `New-Green-Application`
- Created new Green env inside the original application i.e is **New-Application**
  
  <img width="90%" alt="Screenshot (911)" src="https://github.com/user-attachments/assets/f2c059bf-6298-4156-a18b-eaf5a62cda7a" />

### 🔁 Step 17: Swapped Again from Blue to Green
- ✅ Verified swap worked perfectly on same domain
- ✅ Events confirmed new environment activation
  
  <img width="90%" alt="Screenshot (910)" src="https://github.com/user-attachments/assets/bbddad90-ac42-4c68-9ace-0600e24cb7a7" />

### 18. 📧 Notification Emails Received

I received multiple notification emails during the deployment process, but I captured screenshots of the two shown below:

- 🔔 `Removed instance i-007e82566bf2b0f46 from your environment`
- 🔔 `Deleting SNS topic for environment New-Application-NodeJS-env`

These confirm resource cleanup and environment swap was successful.

  <img width="90%" alt="Screenshot (917)" src="https://github.com/user-attachments/assets/3aa1a0f0-8002-45c8-b227-0d80e2189824" />

---

## 🚨 Resource Cleanup After Deployment

### 🔄 Automatically Deleted (by EB when you delete the application):
| Resource       | Deleted Automatically? | Notes                                                 |
|----------------|-------------------------|--------------------------------------------------------|
| ✅ EC2 Instances | Yes                    | Instances inside the environment are terminated        |
| ✅ SNS Topics    | Yes                    | Created by EB for environment health and notifications |
| ✅ Elastic IP    | Yes                    | Gets detached and released unless allocated manually   |

### 🧹 Manually Deleted (You must delete these):
| Resource                | Manual Deletion Required | Notes                                                         |
|-------------------------|--------------------------|---------------------------------------------------------------|
| 🔴 IAM Roles             | ✅ Yes                   | EB won’t delete IAM roles even if unused                      |
| 🔴 S3 Buckets            | ✅ Yes                   | Remain with logs, versions, or app bundles after termination  |

### ⚠️ Important Warnings:
- ❗**IAM Roles**: Always double-check dependencies before deleting — may be shared.
- ❗**S3 Buckets**: You must empty and disable versioning before deleting.

✅ Always perform post-cleanup after deleting an EB application to avoid unexpected charges or broken permission chains.

---

## 📘 Outcome

- Application successfully deployed via Elastic Beanstalk.
- Validated Blue/Green switch without changing domain.
- Green version successfully added new features.
- IAM roles and policies configured securely.
- Resource cleanup done with AWS best practices.

---

## 🔑 Key Learnings & Observations

- 🔄 **Never create Green in a new application** — always inside the same one.
- 📦 Always validate **folder structure** inside ZIP.
- 🔐 Elastic Beanstalk **doesn't auto-create roles** — do it manually with correct policies.
- 🧼 Post deletion, IAM roles and S3 **must be cleaned manually**.
- 📧 Enable email notifications for key lifecycle alerts.
- 🧠 Check **Events tab** for debugging deployment problems.

---

## 🌍 Real-world Use Case

This practice is used in production environments where safety, stability, and delivery speed matter:

- 🚀 **Zero-Downtime Deployments**: New version lives alongside old version
- 🔄 **CI/CD Integration**: Works seamlessly in automation pipelines
- 🧪 **Pre-Production Testing**: Verify in real infra before going live
- 👨‍💻 **Safe Feature Releases**: Test risky changes safely
- 📉 **Rollback Friendly**: One-click swap back to Blue
- ☁️ **Elastic Beanstalk Simplifies Infra**: Focus only on code
  
---

## 💡 Tips & Warnings

- ✅ Use **single instance** for testing in **free tier**
- 🛡️ Always configure **IAM roles** manually and attach correct AWS-managed policies.
- 📧 Add **email for monitoring and notifications**.
- 🔍 Use the **Events tab** in the EB dashboard for live troubleshooting
- 📄 Check **package.json, app.js** in the **root for Node.js** apps
- 🔁 **Don’t swap environments across different applications** — must belong to the same app
- 🧾 **Check logs in `/var/log/nodejs/nodejs.log`** if app fails to load — this saved debugging time
- ✅ **Always test Green thoroughly before swap** to avoid breaking production
- 📤 **Use environment variables** to manage feature flags (optional future enhancement)
- 🧼 **Don’t forget manual cleanup** for IAM, S3, and optionally EIP if manually allocated

---

## 🏷️ Tags

`AWS` `Elastic Beanstalk` `Node.js` `Blue/Green Deployment` `DevOps` `EC2` `IAM` `S3` `CI/CD` `Hands-on Project`

---

## 📚 Reference Docs

- [AWS EB Getting Started Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html)
- [AWS EB for Node.js](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-getstarted.html)
