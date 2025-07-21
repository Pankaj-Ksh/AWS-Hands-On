# 🗑️ EC2: Recycle Bin for AMI & Snapshot

This hands-on demonstrates how to use **AWS Recycle Bin** for **Amazon Machine Images (AMI)** and **Snapshots**. Recycle Bin enables you to recover accidentally deleted AMIs or snapshots within a defined retention period — **but only if they are properly tagged and included in a retention rule**.

---

## 🎯 Objective

- Enable **Recycle Bin** for AMIs and Snapshots
- Configure **retention rules** based on specific tags
- Safely **recover deleted AMIs and Snapshots** from Recycle Bin
- Understand **retention and recovery behavior** for tagged resources

---

## 🛠️ Steps Performed

### ✅ Step 1: Tag the AMI

- Opened the EC2 Dashboard → **AMIs**
- Selected the **Linux-based custom AMI**
- Navigated to **Tags → Manage Tags**
- Added tag: `RecycleBin = yes`  
  📸 *Screenshot: AMI tag configuration*
<img width="1920" height="1080" alt="Screenshot (589)" src="https://github.com/user-attachments/assets/06222fd2-a53e-437f-9677-fdfc9e7fce64" />

---

### ✅ Step 2: Tag the Snapshot

- Opened the EC2 Dashboard → **Snapshots**
- Selected the relevant snapshot
- Navigated to **Tags → Manage Tags**
- Added tag: `RecycleBin = yes`  
  📸 *Screenshot: Snapshot tag configuration*
<img width="1920" height="1080" alt="Screenshot (590)" src="https://github.com/user-attachments/assets/3ff9fb8b-8d73-4463-b215-f028e4c65605" />

---

### ✅ Step 3: Create Recycle Bin Rule for AMI

- Navigated to **Recycle Bin → Create Retention Rule**
- Selected **Resource Type**: AMI
- Chose option: **Retain only if tag RecycleBin = yes**
- Seted **Retention Period**: 1 day  
  📸 *Screenshot: Recycle Bin rule for AMI*
<img width="1920" height="1080" alt="Screenshot (593)" src="https://github.com/user-attachments/assets/24b11b3e-8027-4c8d-a883-70981b20fc82" />

---

### ✅ Step 4: Create Recycle Bin Rule for Snapshot

- Navigated to **Recycle Bin → Create Retention Rule**
- Selected **Resource Type**: Snapshot
- Chose option: **Retain only if tag RecycleBin = yes**
- Seted **Retention Period**: 1 day  
  📸 *Screenshot: Recycle Bin rule for Snapshot*
<img width="1920" height="1080" alt="Screenshot (595)" src="https://github.com/user-attachments/assets/195c19b9-9ed4-43de-97fb-b1c242eb7e37" />

---

### ✅ Step 5: Deregister AMI & Delete Snapshot

- Deregistered the tagged AMI
- Deleted the tagged Snapshot
- Opened **Recycle Bin Dashboard** and verified both:
  - 📸 *Screenshot: AMI present in Recycle Bin*
    <img width="1920" height="1080" alt="Screenshot (597)" src="https://github.com/user-attachments/assets/95b85a75-c259-4f04-9055-7e8610c221b3" />

  - 📸 *Screenshot: Snapshot present in Recycle Bin*
    <img width="1920" height="1080" alt="Screenshot (598)" src="https://github.com/user-attachments/assets/04a68c56-235f-4163-b188-3ee7f346a73b" />


✅ *Recovery option available for both from Recycle Bin*

---

### ✅ Step 6: Manage Recycle Bin Rules

- Opened the dashboard for the **TestRule (Snapshot)**
- Options visible:
  - **Edit Rule**
  - **Delete Rule**
  - Detailed information about resource type, tags, and retention  
  📸 *Screenshot: Retention rule management*
<img width="1920" height="1080" alt="Screenshot (599)" src="https://github.com/user-attachments/assets/211602ca-d5fc-4943-9c7f-3f592dc9fabd" />

---

### ✅ Step 7: Cleanup

- Deleted both retention rules (AMI & Snapshot)
- Deregistered and permanently deleted the remaining AMI and snapshot

---

## 📘 Key Learnings & Observations

- Recycle Bin **only applies to resources tagged before deletion**
- **Retention rules** must be created before the resource is deleted
- Recovery is only possible **within the retention period**
- Tags like `RecycleBin = yes` act as filters to include/exclude resources

---

## 🌍 Real-World Use Case

- **Disaster Recovery**: Recover AMIs/snapshots deleted by mistake
- **Compliance & Auditing**: Provide a safety net during automation or cleanup
- **Cost Management**: Prevents accidental loss of crucial backups

---

## 🏷️ Tags

`EC2` `Recycle Bin` `AMI` `Snapshot` `Retention Rules` `AWS Hands-on` `Disaster Recovery`

---

## 💡 Tips

- Tag your AMIs and snapshots **before** deletion with a consistent key-value pair (e.g., `RecycleBin=yes`)
- Recycle Bin **does not work retroactively** — untagged deletions are permanent
- Set a **reasonable retention period** (1–30 days) based on recovery needs
- Use descriptive **rule names and tags** to easily manage multiple policies

---
