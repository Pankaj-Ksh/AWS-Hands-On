# 🔐 IAM MFA Setup – Root and IAM User

This Hands-On focuses on setting up **Multi-Factor Authentication (MFA)** for both the **AWS Root account** and an **IAM user**. It is a foundational security practice in AWS that helps protect your account from unauthorized access.

---

## 📌 Objective

- Secure the root user with MFA  
- Create a new IAM user with admin permissions  
- Enable MFA for the IAM user  
- Customize the IAM sign-in link  
- Sign in only with the IAM user going forward

---

## 🛠️ Steps Performed

### 1. 🔐 Setup MFA for Root Account

- Logged in to AWS using root credentials  
- Navigated to **IAM → Account Settings**  
- Clicked **"Activate MFA"** under Root user  
- Selected **Virtual MFA device**  
- Scanned QR code using Google Authenticator  
- Entered two consecutive codes → ✅ MFA successfully enabled

---

### 2. 🏷️ Create Account Alias and IAM Sign-in Link

- Set a custom **Account Alias** (e.g., `myaws-lab`)  
- Generated IAM Sign-in link.  
- Bookmarked the link for IAM user access

---

### 3. 👤 Create IAM User with Admin Access

- Navigated to **IAM → Users → Add User**  
- Username: `PankajIAM`  
- Enabled AWS Management Console access  
- Custme password  
- Attached policy: `AdministratorAccess`  
- Created user and noted down credentials

---

### 4. 🔐 Setup MFA for IAM User

- Signed in using IAM user credentials  
- Navigated to **My Security Credentials**  
- Added **Virtual MFA device**  
- Scanned QR code via Authenticator app  
- Entered two codes → ✅ MFA successfully enabled

---

### 5. 🚪 Sign Out from Root and Use IAM User Only

- Logged out from root account  
- From now on, login using IAM sign-in URL 

---

## 📷 Screenshots

### ✅ MFA Setup on Root Account
![MFA Setup on Root Account](https://github.com/user-attachments/assets/4dbdd3ad-ef6d-4d37-9d11-ff314a8c826f)

### ✅ IAM User Dashboard with MFA
![IAM User Dashboard](https://github.com/user-attachments/assets/1f2f14e3-2066-461c-b6e7-1e6d37f3e299)

---

## ✅ Outcome

- Root account and IAM user are secured with MFA  
- IAM sign-in experience is customized and bookmarked  
- IAM user has full administrative access  
- Root account is no longer used for daily tasks

---

## 🧠 Key Learnings

- Always protect root and IAM users with MFA  
- Never use the root account for day-to-day activities  
- IAM users should be used with least privilege  
- IAM alias improves user experience and branding  
- MFA significantly increases account security

---

## 🏷️ Tags

`AWS` `IAM` `MFA` `Root Account` `IAM User` `Security` `Best Practices`
