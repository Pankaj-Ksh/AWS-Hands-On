# 💻 AWS EC2 – Elastic Compute Cloud

## 🌟 What is AWS EC2?
Amazon Elastic Compute Cloud (EC2) is a core AWS service that provides resizable virtual servers in the cloud.  
It enables you to run applications, host websites, or perform large-scale computations without owning physical hardware.  
With EC2, you choose **instance types**, **operating systems**, **storage options**, and **network configurations** — all with pay-as-you-go pricing.

---

## ⚙️ Key Features at a Glance
- ✅ **Scalable Compute** – Launch instances of varying CPU, memory, and storage sizes.
- 📦 **Multiple AMI Options** – Use AWS-provided, marketplace, or custom AMIs.
- 🔐 **Secure Access** – Control connectivity via key pairs, security groups, and NACLs.
- 🌍 **Global Availability** – Deploy instances in multiple AWS regions & AZs.
- 📊 **Monitoring & Metrics** – Use Amazon CloudWatch to track performance.
- 💾 **Persistent Storage** – Attach and manage EBS volumes or ephemeral storage.

---

## 📂 Project Index – Hands-On Labs
Each hands-on project below contains **full setup, execution, and validation steps**.

 ### 1️⃣ [🚀 AWS EC2 Instance SetUp : Windows and Linux Hands-On Lab – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/01-Launch-Instance-Setup/launch-instance-setup.md)
- 🖥 Launched Windows & Linux EC2 instances in AWS.  
- 🔐 Configured secure access with key pairs & Security Groups.  
- 🛠 Resolved RDP & SSH connection issues by updating inbound rules.  
- 📡 Connected successfully via Remote Desktop & PuTTY.  
- 🚀 Strengthened AWS networking & troubleshooting skills.  

---

### 2️⃣ [🌐 AWS EC2 Elastic IP Hands-On – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/02-Elastic-IP-Address/elastic-ip-address.md)
- 🖥 Deployed Linux EC2 instance and tested IP behavior during stop/start and reboot.  
- 🌐 Identified that default public IPs are dynamic, while private IPs remain constant.  
- 🔗 Allocated and associated an Elastic IP to provide a permanent public address.  
- ♻ Verified EIP persistence across instance restarts for uninterrupted access.  
- 🚀 Applied learning to real-world hosting & DNS scenarios.  

---

### 3️⃣ [⚙️ AWS EC2: Additional Configuration Settings Hands-On – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/03-Advanced-Settings/advanced-settings.md)
- ⚙️ Explored advanced EC2 launch settings including auto-recovery, shutdown behavior, hibernation, termination/stop protection, monitoring, and placement groups.  
- 🖥 Tested hibernation feature and identified root volume encryption as a prerequisite.  
- 🔒 Reviewed protection options to prevent accidental termination or stopping of critical instances.  
- 📈 Reviewed CloudWatch detailed monitoring option for its benefits in performance tracking.  
- 🚀 Applied learnings to design more resilient and production-ready EC2 environments.  

---

### 4️⃣ [🚀 AWS EC2 Launch Template Hands-On – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/04-Launch-Template/launch-template.md)
- 🖥 Created a Launch Template from an existing Linux EC2 instance with predefined AMI, instance type, key pair, and security settings.  
- 🚀 Launched new EC2 instances quickly and consistently using the saved template.  
- ⚙ Tested optional configuration overrides during instance creation for flexibility.  
- 📌 Highlighted importance for automation, consistency, and Infrastructure as Code (IaC).  
- 🌍 Applied use cases in auto-scaling, environment replication, and disaster recovery.  

---

### 5️⃣ [📦 EC2 AMI Creation and Launch from Image (Linux) – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/05-AMI-Creation-%26-Launch-Instance-From-AMI/ami-creation-%26-launch-Instance-from-ami.md)
- 📦 Created a custom AMI from an existing Linux EC2 instance to capture OS, data, and configurations.  
- 🚀 Launched a new EC2 instance from the AMI and verified file/data persistence.  
- 🛠 Tested full lifecycle — instance creation, AMI verification, and cleanup.  
- ⚠ Resolved snapshot deletion dependency error by deregistering the AMI first.  
- 🌍 Applied use cases for backups, environment cloning, and disaster recovery.  

---

### 6️⃣ [📦 EC2: Copying & Sharing AMIs and Snapshots – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/06-Copying-%26-Sharing-AMI-%26-Snapshot/copying--sharing-ami-%26-snapshot.md)
- 📦 Created an AMI from an existing EC2 instance.  
- 📂 AWS automatically created snapshots for the AMI.  
- 🌏 Copied AMI to another AWS region and confirmed both AMI & snapshots appeared there.  
- 🔒 Noted that same-region AMI copies are auto-encrypted.  
- 👥 Shared AMI with another AWS account via permissions.  
- 📤 Shared snapshots separately so the other account could use the AMI.

---

### 7️⃣ [🗑️ EC2: Recycle Bin for AMI & Snapshot – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/07-Recycle-Bin-For-AMI-%26-Snapshot/recycle-bin-for-ami-%26-snapshot.md)
- 📝 Tagged **AMI** and **Snapshot** with `RecycleBin = yes`.  
- 🗑️ Created **Recycle Bin retention rules** (for AMI & Snapshot) with **1-day retention** based on tags.  
- ❌ Deregistered **AMI** & deleted **Snapshot** → Both appeared in **Recycle Bin** with recovery option.  
- ⚙️ Verified **rule management options** (edit/delete rule, retention details).  
- 🧹 Cleaned up by **deleting rules** & permanently removing **AMI/Snapshot**.  

---

### 8️⃣ [🧊 EC2: Archive Snapshots & Create Image from Snapshot – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/08-Archive-Snapshots-%26-Create-Image-From-Snapshot/archive-snapshots-%26-create-image-from-snapshot.md)
- 📦 Archived an **EBS snapshot** to the low-cost **Archive tier**.  
- ⚠️ Encountered error: snapshot **in use by AMI** → required **deregistering AMI** first.  
- ✅ Successfully archived snapshot after deregistering AMI.  
- 🖼️ Created a **new AMI** from a snapshot containing an **OS volume**.  
- 📦 Verified snapshot storage tier changed to **Archive**.  
- 🧹 Confirmed only **bootable snapshots** can be used to create AMIs.  

---

### ​​​ [🧩 EC2: Extend Root Volume & Attach/Detach Additional EBS Volume (Linux) – Full Walkthrough](https://github.com/Pankaj-Ksh/AWS-Hands-On/blob/main/02-EC2/09-Root-%26-Additional-Vol-For-Linux/root-%26-additional-vol-for-linux.md)
- 🛠️ Extended the **root volume** of a running EC2 instance to increase storage.  
- ➕ Attached a **new EBS volume** to the instance (same Availability Zone).  
- 📂 Formatted and mounted the additional volume in **Linux environment**.  
- 🔄 Unmounted and detached the volume safely when no longer needed.  
- 🧪 Verified updated **disk size** and successful **volume attachment/detachment**.  
