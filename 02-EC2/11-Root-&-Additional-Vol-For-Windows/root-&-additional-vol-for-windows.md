# 📁 Extend Root Volume & Add Additional Volume in Windows EC2 Instance

This hands-on demonstrates how to **extend the root volume** and **add an additional volume** to a **Windows EC2 instance** using AWS Console and Windows Disk Management tools.

---

## 🎯 Objective

- Learn how to extend the **root volume (C:)** of a Windows EC2 instance.
- Understand how to **add and attach an additional EBS volume**.
- Format and assign drive letters to new volumes using **Disk Management**.
- Verify volume visibility in **File Explorer**.

---

## 🛠️ Steps Performed

### ✅ Step 1: Launch and Connect to Windows Instance

- Started a Windows EC2 instance and connected via **Remote Desktop (RDP)**.
- 📸 *Screenshot: Running instance and remote desktop session.*
<img width="1920" height="931" alt="Screenshot (602)" src="https://github.com/user-attachments/assets/41da3eb2-6147-4ce0-987c-ea758e9d713a" />

---

### ✅ Step 2: Modify Root Volume from AWS Console

- In the **EC2 → Volumes** section, selected the root volume.
- Chose **Modify Volume** and increased size from **30GB to 40GB**.
- 📸 *Screenshot: Modified root volume from AWS Console.*
<img width="1920" height="876" alt="Screenshot (603)" src="https://github.com/user-attachments/assets/e5434d6b-0c4d-483a-9258-721af32efa1a" />

---

### ✅ Step 3: Extend the Volume in Windows

- In the Windows RDP session:
  - Opened **Disk Management**.
  - Selected **C: drive**, right-clicked → **Extend Volume...**
  - Clicked **Next → Next → Finish**.
- 📸 *Screenshot: Disk Management interface while extending the volume.*
<img width="1920" height="928" alt="Screenshot (604)" src="https://github.com/user-attachments/assets/afd1c206-fdb5-4053-8f35-2afa9cf0bf08" />

---

### ✅ Step 4: Create Additional Volume from AWS Console

- From the AWS **EC2 → Volumes**, created a new **50GB volume**.
- Chose the same **Availability Zone** as the Windows instance.
- 📸 *Screenshot: Creating additional 50GB volume from console.*
<img width="1920" height="938" alt="Screenshot (605)" src="https://github.com/user-attachments/assets/810a97f5-43e2-4040-9c7e-bdc226502cca" />

---

### ✅ Step 5: Attach Volume to the Instance

- Clicked **Actions → Attach Volume**.
- Selected the instance and device name (e.g., `xvdf`).
- 📸 *Screenshot: Attaching volume to instance.*
<img width="1920" height="790" alt="Screenshot (607)" src="https://github.com/user-attachments/assets/f1a9aad5-0c18-44c7-9f60-a0792d05881c" />

---

### ✅ Step 6: Initialize and Format New Volume

- Back in the Windows RDP session:
  - Opened **Disk Management**.
  - New volume appeared as unallocated.
  - Right-clicked → **New Simple Volume** → Assigned drive letter `D:` → Format completed.
- 📸 *Screenshot: Creating new volume using Simple Volume Wizard.*
<img width="1920" height="931" alt="Screenshot (608)" src="https://github.com/user-attachments/assets/26fd8ef2-971c-4ee4-8d6c-c93ac785f17b" />

---

### ✅ Step 7: Verify in File Explorer

- Opened **File Explorer**.
- Verified presence of both:
  - **C: Drive** (root)
  - **D: Drive** (additional volume)
- 📸 *Screenshot: File Explorer showing both volumes.*
<img width="1920" height="931" alt="Screenshot (609)" src="https://github.com/user-attachments/assets/af56a0cd-762a-4235-824c-4b5afd801e4f" />

---

## ✅ Outcome

- Root volume was successfully expanded from **30GB to 40GB**.
- Additional volume of **50GB** was created, formatted, and mounted as **D:**.
- Both volumes are now available for use inside the Windows EC2 instance.

---

## 🧠 Key Learnings and Observations

- **Root volumes can be expanded without downtime** using AWS + Disk Management.
- Adding extra EBS volumes gives flexibility to store application data separately.
- **Disk Management** in Windows is user-friendly for volume formatting and mounting.

---

## 🌍 Real-World Use Cases

- Extending root volume during application upgrades.
- Adding separate volumes for logs, databases, or backup storage.
- Dynamic scaling of storage without changing instance type.

---

## 🏷️ Tags

`#AWS` `#EC2` `#Windows` `#EBS` `#VolumeManagement` `#DiskManagement` `#RootVolume` `#AdditionalVolume`

---

## 💡 Tips

- Always ensure the **volume is in the same Availability Zone** as the instance before attaching.
- After modifying a volume from the AWS Console, changes won’t reflect until you **extend it inside Windows** using Disk Management.
- AWS **does not** have access **inside your EC2 instance**, so any in-instance configuration (like extending partitions) must be done manually.
- Tag your volumes (e.g., `Name`, `Purpose`) for better visibility and management, especially in large-scale environments.


