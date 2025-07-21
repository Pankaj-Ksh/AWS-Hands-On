# 📦 EC2: Copying & Sharing AMIs and Snapshots

This hands-on demonstrates how to **copy an Amazon Machine Image (AMI)** within the same region, across different regions, and how to **share AMIs and snapshots with another AWS account**. This is particularly useful for disaster recovery, regional availability, and cross-account collaboration.

---

## 🎯 Objective

- Copy AMIs **within the same AWS region** (encryption enabled by default)
- Copy AMIs **to a different AWS region**, along with their snapshots
- Share **AMI and associated snapshots** with another AWS account
- Understand permission settings for AMIs and snapshots

---

## 🛠️ Steps Performed

### 🔁 Part 1: Copying AMI

#### ✅ Step 1: Open AMI Copy Dialog

- Open EC2 Dashboard → **AMIs** section  
- Selected the **Custom-AMI** → **Actions → Copy AMI**  
📸 *Screenshot: AMI dashboard with Copy AMI option selected*
<img width="1920" height="936" alt="Screenshot (576)" src="https://github.com/user-attachments/assets/e4bbe183-1265-4bc8-9172-2c6ec54535f3" />


#### ✅ Step 2: Configure Copy Options

- In the Copy AMI screen:
  - Selected **Destination region** as Singapore
  - We can Enable "**Encrypt EBS snapshots**" option 
  📸 *Screenshot: Copy AMI dashboard with region and encryption options*
<img width="1920" height="941" alt="Screenshot (577)" src="https://github.com/user-attachments/assets/33f4cc47-66bd-4407-9e8c-87a1d8b7eb26" />


#### ✅ Step 3: Validate Copy in Destination Region

- Switched to **Singapore region** in AWS Console  
- Navigated to EC2 → **AMIs** → Verified the copied AMI  
  📸 *Screenshot: AMI listed in Singapore region*
<img width="1920" height="931" alt="Screenshot (578)" src="https://github.com/user-attachments/assets/2ad625fe-375d-491e-8a42-358a1d29d509" />

- Navigated to **Snapshots** section → Verified associated snapshot  
  📸 *Screenshot: Snapshot listed in Singapore region*
<img width="1920" height="933" alt="Screenshot (579)" src="https://github.com/user-attachments/assets/663abfb0-36ac-4b58-a1d0-0a1fd5b9e717" />

💡 **Notes:**

- Copying AMI to the **same region** results in an **encrypted AMI**
- To **encrypt an unencrypted AMI**, copy it within the same region
- When copying to another region, associated **snapshots are copied** automatically

---

### 👥 Part 2: Sharing AMI & Snapshot to Another AWS Account

#### ✅ Step 1: Share the AMI

- Selected the AMI → **Actions → Edit AMI permissions**  
📸 *Screenshot: Edit AMI permission panel and added another AWS account ID (e.g., friend's 12-digit ID)*
<img width="1920" height="940" alt="Screenshot (581)" src="https://github.com/user-attachments/assets/1768ba8f-9925-462d-91d8-29ce5cbbfe9a" />


#### ✅ Step 2: Verify on Recipient’s Account (Friend)

- On friend's AWS account → EC2 → AMIs → **Shared with me** section  
📸 *Screenshot: Shared AMI visible on recipient account*
<img width="1920" height="820" alt="1" src="https://github.com/user-attachments/assets/f07896d3-b729-465c-aeaf-0089254403aa" />


#### ✅ Step 3: Share the Snapshot

- Selected the snapshot → **Actions → Modify Permissions**  
  📸 *Screenshot: Modify snapshot permission panel*  
- Set to **Private** and added friend's AWS Account ID
- <img width="1920" height="937" alt="Screenshot (582)" src="https://github.com/user-attachments/assets/cb497e82-89f3-4ae3-a0bf-4fdf03b7c327" />


#### ✅ Step 4: Verify Snapshot on Recipient’s Account

- On friend's AWS account → EC2 → Snapshots → **Shared with me** section  
  📸 *Screenshot: Shared snapshot visible on recipient account*
![2](https://github.com/user-attachments/assets/2c2eeb01-2286-4be6-9f3a-8ba5fe598269)

---

## 📘 Key Learnings & Observations

- Copying AMIs enables **regional backups and disaster recovery**
- **Encryption is auto-enabled** when copying to the same region
- AMI and snapshot **must be shared separately** to make them usable
- Shared resources are found under **"Shared with me"** in the EC2 console

---

## 🌍 Real-World Use Case

- Useful for **multi-region deployments** to improve availability
- Facilitates **cross-account sharing** of images and data
- Commonly used in **enterprises with multiple AWS accounts** or organizational units

---

## 🏷️ Tags

`EC2` `AMI` `Snapshots` `Encryption` `Multi-Region` `Cross-Account` `AWS Hands-on` `Disaster Recovery`

---

## 💡 Tips

- Always **deregister an AMI before deleting its associated snapshot** to avoid dependency errors  
- To **encrypt an unencrypted image**, copy it **within the same region** (this auto-encrypts it)  
- Clearly **tag AMIs and snapshots** with name, environment, and creation date to manage them effectively  
- ✅  AMIs can only be created from an EC2 instance in a running or stopped state — but once created, they can be copied anytime. 
