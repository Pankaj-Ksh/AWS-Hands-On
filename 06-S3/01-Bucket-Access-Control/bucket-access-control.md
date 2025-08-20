# 🚀 S3 Bucket Access Control Hands-On

*A hands-on project to demonstrate the difference between **Private** and **Public** Amazon S3 buckets using ACLs and block public access settings.*

---

## 🎯 Objective
- Understand how **S3 Block Public Access** works.
- Learn how to **make objects publicly accessible** using ACLs.
- Verify object accessibility through **public access**.

---

## 🏗 Architecture Overview
This project uses **Amazon S3** to demonstrate access controls at the bucket and object level.

- **Private Bucket (`demobucket-1-pankaj`)** → Objects are blocked from public access.
- **Public Bucket (`demobucket-2-pankaj`)** → ACL enabled, objects made public manually.
- Verification done via **S3 object URLs** in the browser.

---

## 🔄 Workflow Summary
1. Create a private S3 bucket and upload objects.
2. Confirm access is denied via object URL.
3. Create another bucket with **ACLs enabled**.
4. Upload an object, make it public using ACLs, and verify public access.

---

## 🛠 Steps Performed

### 1️⃣ Create Private Bucket and Upload Object

- Created bucket: `demobucket-1-pankaj` with Block Public Access = ON (default)
![Screenshot showing the list of S3 buckets](https://github.com/user-attachments/assets/4c11afa1-d505-4da3-ad08-fee9c525b2ab)

- Uploaded object: `ZC1pbWFnZSSQcQc.jpg`
![Screenshot showing the file upload dialog](https://github.com/user-attachments/assets/9601338c-0c92-4393-9f2c-3f4c1f91df6f)

- Make public using ACL was disabled by default
![Screenshot showing ACL options greyed out for the object](https://github.com/user-attachments/assets/48be5b97-17fc-44ba-8c7d-e1bf4ffb6830)

- Accessing object via URL → ❌ Access Denied
![Screenshot showing an XML Access Denied error in the browser](https://github.com/user-attachments/assets/f1f723d1-2ef7-4ef8-a2ab-a47dc28c6901)

---

### 2️⃣ Create Public Bucket and Upload Object

- Created bucket: `demobucket-2-pankaj` (ACLs enabled)
![Screenshot showing the bucket creation page with ACLs enabled](https://github.com/user-attachments/assets/644827ba-503a-4544-a904-807ce8c2e174)

- Uploaded object: `Defender.jpg`

- Selected → **Actions → Make Public**
![Screenshot showing the Actions menu for the object](https://github.com/user-attachments/assets/c50f36d6-bd59-4aec-9b82-4bbb675893cc)

- Accessing object via URL → ✅ Publicly Accessible
![Screenshot showing the object URL and the Defender image in a browser](https://github.com/user-attachments/assets/9b84098c-03e3-4059-92b3-db3282587ae2)

---

## ⚠️ Issues Faced
- **Access Denied (403)** → Occurred because of the default "Block all public access." Solved by creating a new bucket with ACLs enabled.
- **ACL Option Not Visible** → Found that ACLs are disabled by default; had to explicitly enable them while creating the public bucket.
- **Cache Delay in Access** → Sometimes newly uploaded files took a few seconds to become accessible.

---

## ✅ Outcome
- Successfully validated **private vs public bucket behavior**.
- Confirmed **Block Public Access** overrides ACL permissions.
- Learned how to use **ACLs to make objects public** when needed.

---

## 📚 Key Learnings & Observations
- By default, all new S3 buckets are **private**.
- **Block Public Access** is a security safeguard that overrides ACLs and policies.
- **ACLs are considered legacy**; AWS recommends using **IAM policies and bucket policies** for scalable and maintainable access control.
- Public access should be enabled cautiously, only when strictly required.

---

## 🌍 Real-World Use Case
This setup is useful for:
- Hosting **public images, static files, or websites** using S3.
- Keeping sensitive files in **private buckets** while exposing only selected resources.
- Demonstrating **security best practices** in AWS training or workshops.

---

## 🏷️ Tags
`AWS` `S3` `ACL` `Security` `Hands-on` `Cloud`

---

## 💡 Tips
- Always enable **Block Public Access** unless there’s a strong reason not to.
- Use **Bucket Policies** instead of ACLs for scalable and maintainable access control.
- For temporary public access, prefer **pre-signed URLs** over making objects public.
