# 🔐 AWS IAM – Identity and Access Management

## 🌟 What is AWS IAM?

AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. It allows you to manage **users**, **groups**, **roles**, and **permissions** centrally. IAM enables fine-grained access control by defining **who can access what**, under what **conditions**, and with what **level of permission**.

---

## ⚙️ Key Features at a Glance

- ✅ **Granular Access Control** – Define access at user, group, or role level.
- 🔐 **Secure AWS Accounts** – Enforce MFA and least privilege practices.
- 🛡️ **Role-Based Access** – Enable cross-account or service-level access via IAM roles.
- 📄 **Custom Policies** – Write JSON-based or visual editor policies for tailored permissions.
- 🔁 **Role Switching** – Securely allow users to assume roles across accounts.
- 🔍 **Access Analyzer & Policy Simulator** – Test and validate policies before applying them.

---

## 📂 Project Index – Hands-On Labs

Each hands-on project below contains a full setup and validation guide.

---

### 1️⃣ [🔐 IAM MFA Setup – Root and IAM User – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/01-IAM/01-MFA-SetUp/mfa.md)

- ✅ Enabled Multi-Factor Authentication (MFA) for both the **Root user** and a new **IAM admin user**, improving account security.
- 👤 Created dedicated IAM user `PankajIAM` with `AdministratorAccess`, replacing root for daily use.
- 🏷️ Configured a custom IAM account alias and personalized AWS sign-in URL for usability.
- 📱 Set up **Virtual MFA devices** using Google Authenticator for both user types.
- 🚪 Disabled regular use of root account; enforced use of IAM user.
- 🔐 Followed AWS security best practices by enforcing MFA and least privilege access.

---

### 2️⃣ [🔐 AWS IAM Permissions Testing Project – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/01-IAM/02-IAM-Access-Testing/iam-access-testing.md)

- 👤 Created IAM users `test1` and `test2` to test permission scopes.
- 🛡️ Assigned `IAMFullAccess` to `test1` and `IAMReadOnlyAccess` to `test2`.
- 🔍 Validated access by logging in as both users and performing IAM actions.
- ✅ `test1` had full control to create/modify IAM resources.
- ❌ `test2` received “Access Denied” errors on changes—read-only confirmed.
- 📚 Demonstrated IAM policies in action and reinforced least privilege principle.

---

### 3️⃣ [🔐 AWS IAM Custom Permissions – TestUser Policy – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/01-IAM/03-IAM-Custom-Policy/iam-custom-policy.md)

- 🛠️ Created a custom policy `Limited_IAM_Actions_Policy` via the Visual Editor for fine-grained IAM control.
- 👤 Provisioned IAM user `TestUser` and attached the custom policy.
- ✅ `TestUser` could manage IAM users, groups, and roles.
- ❌ Denied access to attach policies or interact with non-IAM services like S3.
- 🔐 Demonstrated precise access control using custom policies.
- 🧪 Validated policy effectiveness through real-use simulation.

---

### 4️⃣ [🚀 AWS IAM Project: Switch Role with S3 Full Access – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/01-IAM/04-Switch-Role/switch-role.md)

- 🔁 Enabled cross-account access via IAM role `ShravniRole` for a trusted AWS account.
- 🛡️ Set up a **trust policy** to allow only Shravni's AWS account to assume the role.
- 🪣 Granted `AmazonS3FullAccess` to the role while denying EC2 access.
- 🧪 Verified role-switching: Shravni accessed S3, but not EC2 – confirming scoped permissions.
- 📊 Monitored access activity using the IAM **Last Activity** tracker.
- ✅ Real-world demonstration of secure **cross-account IAM role access** using best practices.
  
