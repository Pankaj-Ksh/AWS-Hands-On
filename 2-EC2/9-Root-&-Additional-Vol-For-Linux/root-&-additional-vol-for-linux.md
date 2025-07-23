# 🧩 EC2: Extend Root Volume & Attach/Detach Additional EBS Volume (Linux)

This hands-on demonstrates how to:
- Extend the **root volume** of a running EC2 instance.
- Attach and mount an **additional EBS volume** to the instance.
- Unmount and detach the additional volume cleanly when no longer needed.

---

## 🎯 Objective

- 🛠️ Extend the existing **root volume** to increase storage.
- ➕ Attach a new **additional EBS volume** to the instance.
- 📂 Mount and format the additional volume in a Linux environment.
- 🔄 Unmount and **detach** the additional volume safely.
- 🧪 Verify the updated disk size and volume attachment.

---

## 🪜 Steps Performed

### 1 Extend Root Volume

1. Navigate to **EC2 → Volumes** in the AWS Console.
2. Identify and select the **root volume** (usually `/dev/xvda`) of the running instance.
3. Choose **Modify Volume** and increase the size as required.
4. After modification, connect to the EC2 instance via SSH.
5. Verify the new size of the root volume using disk listing tools.
6. Resize the file system to use the newly added space.
7. Confirm updated storage capacity is reflected inside the instance.

📸 **Screenshots: Root Volume Extension**  
<img width="1920" height="932" alt="Screenshot (614)" src="https://github.com/user-attachments/assets/f1718934-25fe-4ab9-9508-31c62456ee21" />

<img width="1920" height="723" alt="Screenshot (615)" src="https://github.com/user-attachments/assets/b7b6f0c7-9ddc-4eca-ad9b-c2777b261ccd" />

<img width="1920" height="971" alt="Screenshot (616)" src="https://github.com/user-attachments/assets/5ebe6a14-c5da-46a4-9dce-3814ebfd1575" />

---

### 2 Add Additional Volume

1. Go to **EC2 → Volumes → Create Volume**.
2. Set size, type, and make sure to select the **same availability zone** as your instance.
3. After creation, attach the new volume to your instance (e.g., `/dev/xvdf`).
4. Connect to the EC2 instance.
5. Verify the new volume is attached using disk tools.
6. Format the new volume with a supported file system.
7. Create a mount point and mount the volume.

### 3 Unmount and Detach Additional Volume

1. Connect to the instance and unmount the volume safely.
2. Go to AWS Console → Volumes, and detach the volume from the instance.
3. Optionally delete the volume to save cost if it's no longer needed.

---

📸 **Screenshot: Additional Volume**  
<img width="1920" height="882" alt="Screenshot (617)" src="https://github.com/user-attachments/assets/e7668923-bbc0-44fd-af8c-f5d9513965c6" />

<img width="1920" height="932" alt="Screenshot (618)" src="https://github.com/user-attachments/assets/f289ca4d-04c8-42fd-814e-e451f0be6404" />

<img width="1920" height="946" alt="Screenshot (619)" src="https://github.com/user-attachments/assets/da09eeb2-3b7d-44ba-870c-b408feddfcb2" />

---

## ✅ Outcome

- Root volume size was successfully extended and confirmed inside the instance.
- Additional volume was attached, formatted, mounted, used, and later detached safely.
- No data loss or system disruption occurred during the process.

---

## 📚 Key Learnings and Observations

- Root volumes can be extended without rebooting the instance.
- Additional EBS volumes offer flexibility for temporary or permanent storage.
- Safe detachment of volumes prevents data corruption or OS issues.
- Disk verification and formatting steps are crucial after attachment.

---

## 🌐 Real-World Use Cases

- Scale up root volume to support growing storage needs of an application.
- Attach additional storage for logging, temporary workloads, or backups.
- Use detachable volumes for data migration across environments.

---

## 🏷️ Tags

`#EC2` `#AWSHandsOn` `#LinuxVolumes` `#RootVolumeExtension` `#AttachVolume` `#UnmountDetachEBS` `#AWSBeginner`

---

## 💡 Tips

- Always ensure volumes are in the same availability zone as the instance.
- Format the additional volume before using it.
- Unmount before detaching to ensure data integrity.
- Monitor billing to avoid unused attached volumes incurring cost.

---
