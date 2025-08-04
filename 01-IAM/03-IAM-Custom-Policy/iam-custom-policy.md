# 🔐 AWS IAM Custom Permissions – TestUser Policy

This project demonstrates how to create a custom IAM policy in AWS that allows a user (`TestUser`) to **only manage IAM resources** — users, groups, and roles — with specific permissions. The project walks through creating the policy using the **visual editor**, attaching it to the user, and verifying the restricted actions.

---

## 🎯 Objective

- Create a custom IAM policy with selected permissions:
  - `Create`, `Update`, `Delete`, `Get`, and `List` for **Users**
  - Same for **Groups** and **Roles**
- Attach this policy to a new IAM user (`TestUser`)
- Verify what actions `TestUser` is allowed and not allowed to perform

---

## 🧰 Steps Performed

### 1️⃣ Create Custom IAM Policy

- Go to IAM → Policies → **Create Policy**
- Choose **Visual Editor**
- Select `IAM` as the service
- Allow only necessary permissions for **Users**, **Groups**, and **Roles**
- Leave **Resources** as `All`
- Save and name it `Limited_IAM_Actions_Policy`

📸 **Screenshot 1: Create Policy for Custom**  
_Visual Editor showing selected actions for IAM services_
<img src="https://github.com/user-attachments/assets/e7bf45e5-3dfe-4609-8d65-e5570117e475" alt="Screenshot (499)" width="90%" />

---

### 2️⃣ Create IAM User – `TestUser`

- Go to IAM → Users → **Add user**
- Username: `TestUser`
- Enable AWS Console access with password
- Skip permission assignment for now

📸 **Screenshot 2: TestUser Created**  
_TestUser details page after creation_
<img src="https://github.com/user-attachments/assets/e9824dbc-254e-4692-a389-e726a38a7b52" alt="Screenshot (494)" width="90%" />

---

### 3️⃣ Attach Custom Policy to TestUser

- Navigate to `TestUser` → **Permissions** tab → Add permissions
- Choose “Attach policies directly”
- Attach `Limited_IAM_Actions_Policy`

📸 **Screenshot 3: Attach Policies**  
_Custom policy attached to TestUser_
<img src="https://github.com/user-attachments/assets/8f4a0463-fd76-4b51-9f88-e3191cefd44e" alt="Screenshot (495)" width="90%" />

---

### 4️⃣ Login as TestUser & Explore Console

- Open a private window and login using `TestUser` credentials
- Access IAM dashboard

📸 **Screenshot 4: TestUser Dashboard**  
_Access to IAM but limited options_
<img src="https://github.com/user-attachments/assets/a91da9c7-3f73-4339-87f6-790314b95df2" alt="Screenshot (496)" width="90%" />

---

### 5️⃣ Test Action Restrictions

- Try creating a new IAM user and **attach a policy**
- Expected: Attach policy step **fails**

📸 **Screenshot 5: TestUser Can’t Attach Policy**  
_Access denied while attaching policy during user creation_
<img src="https://github.com/user-attachments/assets/a4f89a10-79a7-4009-abe9-df612991f9e2" alt="Screenshot (497)" width="90%" />

---

### 6️⃣ Create IAM Resources as TestUser

- Create a user: `test1` → Successful
- Create a role with minimal configuration → Successful

📸 **Screenshot 6: New User Created – test1**  
_User created by TestUser_
<img src="https://github.com/user-attachments/assets/55a41c5b-bddf-4fd6-80b0-ca28d422325b" alt="Screenshot (498)" width="90%" />

📸 **Screenshot 7: Created Role**  
_Role created with allowed permissions_
<img src="https://github.com/user-attachments/assets/60878f74-9055-43e0-9e21-d91a894c8745" alt="Screenshot (499)" width="90%" />

---

### 7️⃣ Try Accessing Non-IAM Services

- Navigate to S3 from TestUser’s session
- Access should be denied since the policy doesn’t allow it

📸 **Screenshot 8: S3 Dashboard – Access Denied**  
_Error message when accessing S3 dashboard_

<img src="https://github.com/user-attachments/assets/7bb16aae-3cce-40c1-b61a-2b58380ffb3c" alt="Screenshot (499)" width="90%" />

---

## ✅ Outcome

After testing with `TestUser`, the following results were confirmed:

- ✅ **Allowed**:
  - Create, update, delete IAM users
  - Create, update, delete groups and roles
  - View and list IAM entities

- ❌ **Denied**:
  - Attach policies to users/roles
  - Access to S3, EC2, Billing, or other services

---

## 🧠 Key Learnings & Observations

- The **Visual Editor** helps build fine-tuned IAM policies easily
- `TestUser` was able to manage users, groups, and roles, as expected
- The user **could not attach policies**, since that specific permission wasn’t included
- AWS IAM lets you **test and validate** custom permission boundaries effectively

---

## 🏷️ Tags

`AWS` `IAM` `Access Control` `Custom Policy` `Security` `TestUser` `Permissions Testing` `Mini Project`

---
