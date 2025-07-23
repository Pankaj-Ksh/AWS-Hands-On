# 🧊 EC2: Archive Snapshots & Create Image from Snapshot

This hands-on demonstrates two important features in Amazon EC2:
1. **Archiving EBS Snapshots** to reduce storage costs for infrequently accessed data.
2. **Creating an AMI from an existing snapshot**, useful for recovery or deployment when the original AMI is unavailable.

---

## 🎯 Objective

- Archive an EBS snapshot using the **low-cost archival tier**
- Understand dependency error when a snapshot is linked to an AMI
- Deregister AMI to enable archiving
- Create a new **AMI (Image)** from a snapshot that contains a bootable OS
- Observe how snapshot storage tier changes upon archival

---

## 🛠️ Steps Performed

### 📦 Part 1: Archiving a Snapshot

#### ✅ Step 1: Initiate Archive Action
- Navigated to EC2 Dashboard → **Snapshots**
- Selected the snapshot → **Actions → Archive Snapshot**
- Noted that the snapshot is currently in **Standard storage tier**
  
📸 *Screenshot: Snapshot in Standard tier and Archive option selected*
<img width="1920" height="936" alt="Screenshot (584)" src="https://github.com/user-attachments/assets/07640851-a909-4313-a3f6-ee7c96f6365f" />


#### ⚠️ Step 2: Encountered Error - Snapshot in Use
- Got a pop-up error: ❗ “Snapshot is currently in use by an AMI”
  
📸 *Screenshot: Error message shown when attempting to archive*
<img width="1920" height="936" alt="Screenshot (585)" src="https://github.com/user-attachments/assets/5753e5e6-4f4c-4137-8335-67a8e2cc13c1" />


#### ✅ Step 3: Deregister AMI & Archive Snapshot
- Deregistered the AMI using EC2 → **AMIs → Actions → Deregister**
- Returned to Snapshots → **Changed storage tier** to Archive successfully
  
📸 *Screenshot: Snapshot now archived successfully*
<img width="1920" height="935" alt="Screenshot (588)" src="https://github.com/user-attachments/assets/4b61665c-fe1c-468c-99e4-4089eb008cad" />


---

### 🖼️ Part 2: Create Image from Snapshot

#### ✅ Step 4: Create Image (AMI) from Snapshot
- Navigated to EC2 → Snapshots
- Selected a snapshot (that had an OS) → **Actions → Create Image**
  
📸 *Screenshot: Create Image from Snapshot dialog*
<img width="1920" height="930" alt="Screenshot (600)" src="https://github.com/user-attachments/assets/69c5c6ac-2832-4ea9-9028-48f7761bc7f6" />

💡 *Note: Only snapshots with operating systems (bootable volumes) can be used to create AMIs.*

---

## ✅ Outcome

- Successfully archived the snapshot **after deregistering the AMI**
- Verified that archived snapshots are stored in **Archive Tier**
- We can create a new AMI only from snapshots that contain an operating system (OS).

---

## 📘 Key Learnings & Observations

- Archival can help **cut storage costs** for older snapshots
- You **must deregister AMI** before archiving its associated snapshot
- Snapshots with an OS can be **reconverted into an AMI**

---

## 🌍 Real-World Use Case

- Archive older snapshots that are retained for compliance or backup, but rarely restored
- Use snapshot-based AMI creation in disaster recovery or custom image deployments

---

## 🏷️ Tags

`EC2` `Snapshots` `AMI` `Storage Tier` `Archive` `AWS Hands-on` `Disaster Recovery` `Cost Optimization`

---

## 💡 Tips

- ✅ **Deregister AMIs** before archiving their linked snapshots to avoid errors
- ✅ **Archive only non-active snapshots** (not in use by any AMI)
- ✅ **Use tags** to track snapshot lifecycle (e.g., "ReadyForArchive", "Backup")
- ✅ AMIs can be created **only from snapshots with a valid OS volume**

---
