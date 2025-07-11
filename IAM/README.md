# 🔐 AWS IAM – Identity and Access Management

IAM (Identity and Access Management) is a **free and global AWS service** that helps you securely manage access to AWS services and resources. It enables you to create users, groups, and roles, and control their permissions using policies.

---

## ✅ Why IAM?

- IAM is used for **security and access control** in AWS.
- With IAM, you can centrally manage permissions across all AWS services.
- IAM enables **secure login** via IAM users instead of the root account.
- You should **never share your root account credentials**.
- IAM supports **MFA (Multi-Factor Authentication)** to enhance account security.

---

## 📘 IAM Concepts & Notes

### 👤 IAM Users

- IAM users are individual identities to log in and use AWS services.
- A new IAM user **has no permissions** by default.
- IAM users can:
  - Be assigned **programmatic access (access keys)**
  - Be assigned **console access (username/password)**
- IAM users can have up to **10 managed or inline policies** attached.
- It is recommended to **use IAM users** for daily work instead of root.

---

### 🧑‍🤝‍🧑 IAM Groups

- An IAM group is a **collection of IAM users**.
- **Nested groups** (groups within groups) are **not supported**.
- Policies attached to a group are **inherited by all its users**.
- A user can belong to **multiple groups**.
- **Access keys are only available to users, not groups.**
- Groups help apply permissions to multiple users at once.

---

### 🎭 IAM Roles

- Roles provide **temporary credentials without access keys**.
- Commonly used by **EC2, Lambda, or cross-account access**.
- **1 EC2 instance = 1 role**, but a role can be shared across instances.
- Safer than storing credentials in EC2 (never store keys locally).
- Based on permissions attached, the EC2 instance can access specific AWS services securely.

---

### 🔐 Multi-Factor Authentication (MFA)

- MFA adds an **extra layer of security**.
- Should be enabled for both:
  - Root account
  - IAM users (especially those with admin access)
- Requires a **virtual MFA device** like Google Authenticator.
- Login flow becomes:  
  `Email/Password → MFA Code → Console Access`

---

### 🏷️ Tags in IAM and AWS

- Tags are **key-value pairs** (e.g., `Name = WebServer`)
- Not limited to IAM — available across all AWS resources
- Tags are useful for:
  - **Automation**
  - **Billing**
  - **Resource organization**
- Each resource can have up to **50 tags**
- Tags are **optional but recommended**

---

## ⚙️ IAM Tools and Features

### 📄 Credentials Report
- Provides a downloadable report (.csv) of all IAM users and their credential status.

### 🔐 Password Policy
- Define complexity requirements (length, symbols, rotation, etc.). Recommended to change password after every 3 months.

### 🛡️ Access Analyzer
- Analyzes resource-level permissions to identify unintended access.

### 👁️ Access Advisor
- Provides you with information about when AWS services were last accessed by your IAM users, roles, groups, or policies. Its primary function is to help you identify unused permissions..

### 🔁 Switch Role
- Allows a user to temporarily assume a different IAM role.
- Instead of sharing user credentials or having multiple login credentials for different AWS accounts, "Switch Role" allows an IAM entity (like an IAM user, another IAM role, or a federated user) to temporarily assume the permissions of a different IAM role. This role can be within the same AWS account or, more commonly, in a different AWS account (cross-account access).

### 🌐 Identity Federation & IAM Identity Center
- mechanism of allowing users to authenticate with an external identity provider (IdP) and then gain temporary access to AWS resources. Instead of creating and managing individual IAM users in each AWS account, you leverage an existing corporate directory or identity system.

---

## 🧠 Best Practices

- Avoid using the **root account** for daily activities.
- Enable **MFA** for all users, especially privileged ones.
- Use **IAM groups** to manage user permissions at scale.
- Regularly audit using **Access Analyzer** and **Access Advisor**.
- Tag resources for better organization and automation.
- Use **roles instead of storing credentials** on compute instances.

---

## 🏷️ Tags

`AWS` `IAM` `Security` `MFA` `Roles` `Groups` `Tags` `Best Practices`
