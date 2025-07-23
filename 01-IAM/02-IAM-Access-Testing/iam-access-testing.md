# 🔐 AWS IAM Permissions Testing Project

This project demonstrates the creation and permission differences between two IAM users — `test1` and `test2` — using **AWS Identity and Access Management (IAM)**.  
The goal is to observe how different policies (`IAMFullAccess` vs `IAMReadOnlyAccess`) affect the user's ability to perform IAM-related actions.

---

## 🎯 Objective

- Create two IAM users (`test1` and `test2`) via AWS Console  
- Attach `IAMFullAccess` policy to `test1`  
- Attach `IAMReadOnlyAccess` policy to `test2`  
- Log in as both users separately to verify and compare their permissions

---

## 🔧 Steps Performed

### 1️⃣ Create IAM Users

1. Sign in to the [AWS Console](https://aws.amazon.com/console/)
2. Navigate to **IAM > Users**
3. Click **Add users**
4. Create two users: `test1` and `test2`
   - Enable **AWS Management Console access**
   - Set custom passwords and uncheck the option to require a password reset
   - Skip attaching policies for now

---

### 2️⃣ Attach Policies

#### ✅ For `test1` – IAMFullAccess

1. Go to **IAM > Users > test1**
2. Click **Add permissions**
3. Attach the **IAMFullAccess** managed policy

📸 _Screenshot: test1 - IAMFullAccess Policy Attached_  
![test1-policy](https://github.com/user-attachments/assets/97eca3e2-b3c2-4165-8c4f-3b9160713710)

---

#### 🔒 For `test2` – IAMReadOnlyAccess

1. Go to **IAM > Users > test2**
2. Click **Add permissions**
3. Attach the **IAMReadOnlyAccess** managed policy

📸 _Screenshot: test2 - IAMReadOnlyAccess Policy Attached_  
![test2-policy](https://github.com/user-attachments/assets/d19025d7-df60-4e6b-870d-a05570065576)

---

### 3️⃣ Login and Test Permissions

#### 🔓 Log in as `test1`

1. Use the AWS sign-in URL for your account
2. Log in as `test1`
3. Try performing actions like creating users or modifying policies

📸 _Screenshot: test1 successfully creates new IAM user_  
![test1-create-user](https://github.com/user-attachments/assets/26dd0990-fde3-4236-a4a1-877808bd7016)

---

#### 🔐 Log in as `test2`

1. Log out and log in again, this time as `test2`
2. Attempt the same actions (e.g., creating/modifying users)

📸 _Screenshot: test2 receives “Access Denied” while creating user_  
![test2-access-denied](https://github.com/user-attachments/assets/2ca62865-c18a-42c5-8674-9764b90dc02b)

---

## ✅ Outcome

- `test1` was able to:
  - View, create, and modify IAM users
  - Attach and detach policies
- `test2` was able to:
  - View IAM users and roles
  - ❌ Could **not** create, modify, or delete IAM resources due to permission restrictions

---

## 💡 Key Learnings / Observations

- `IAMFullAccess` grants full control over IAM resources.
- `IAMReadOnlyAccess` allows visibility but restricts changes.
- Helps reinforce the principle of **least privilege**.
- Demonstrates how attaching different policies controls a user's ability to interact with AWS services.

---

## 🏷️ Tags

`AWS` `IAM` `Permissions` `Access Control` `Security` `IAM Policies` `Hands-on AWS` `AWS Console` `Beginner AWS Project`

---
