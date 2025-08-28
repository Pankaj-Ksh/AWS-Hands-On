# 🚀 AWS DataSync: S3 to EFS Data Migration Process

This project demonstrates how to migrate data seamlessly from an **Amazon S3 bucket** to an **Amazon EFS filesystem** using **AWS DataSync**.  
It covers the complete workflow from creating storage resources to validating data on the destination.  
A hands-on approach to automate, schedule, and monitor data transfers efficiently.  

---

## 🎯 Objective
- ⚡ Automate data transfer from S3 to EFS using AWS DataSync.  
- 🛡️ Configure secure access and permissions for source and destination.  
- 🖥️ Verify the successful transfer of files using EC2-mounted EFS.  
- 📊 Monitor, schedule, and log transfer tasks for auditing and performance analysis.  

---

## 🏗 Architecture Overview
<img width="2310" height="703" alt="diagram-export-8-28-2025-7_44_21-PM" src="https://github.com/user-attachments/assets/0eabc136-8764-40c8-88b2-c3db6d630b40" />

---

## 🔄 Workflow Summary
1. Create S3 bucket & upload files.  
2. Set up Amazon EFS filesystem & configure network/mount targets.  
3. Configure DataSync task: source = S3, destination = EFS.  
4. Run DataSync task and monitor execution.  
5. Launch EC2 instance, mount EFS, and validate transferred files.  
6. Schedule recurring transfers & monitor logs for auditing.  

---

## 🛠 Steps Performed

1. **Creating an S3 Bucket** 🪣   
   ```Defines the **bucket name**, selects a **region**, and configures **basic settings** such as versioning and encryption.```
   <img width="1920" height="977" alt="Screenshot (1280)" src="https://github.com/user-attachments/assets/d5061b81-c3e6-4f78-a7ce-b7015bb7becb" />


2. **Uploading to an S3 Bucket** 📤  
   ```Captures the S3 file upload interface. The user selects files `"Audi.jpg"` and `"Defender.jpg"` to upload to the newly created bucket `demo-bkt-datasync`.```
   <img width="1920" height="975" alt="Screenshot (1281)" src="https://github.com/user-attachments/assets/54ae1f88-845e-4e5c-a832-7a3b7b130008" />


3. **Creating an EFS File System** 💾
   <img width="1920" height="978" alt="Screenshot (1283)" src="https://github.com/user-attachments/assets/281e793e-bffd-43b2-bda6-eb30c39d480c" /> 

   ```Shows the "Network access" configuration for an Amazon EFS filesystem and user sets up **VPC**, **subnets**, and **mount targets** across availability zones.```
   <img width="1920" height="977" alt="Screenshot (1284)" src="https://github.com/user-attachments/assets/bcae12f5-f9d6-4f74-ab0c-691f5100a878" />


4. **EFS File System Policy** 🔐  
   ```Displays policy configuration for the EFS filesystem. Options include **read/write access**, **root access prevention**, and **encryption enforcement**.```
   <img width="1920" height="975" alt="Screenshot (1285)" src="https://github.com/user-attachments/assets/6e617c7a-15bc-432d-9daf-d14ab23e9bfa" />


5. **AWS DataSync Dashboard** 📊  
   ```Displays the main AWS DataSync service page. Highlights how the service **simplifies, automates, and accelerates data transfers**, with options to create a new transfer task.```
   <img width="1920" height="977" alt="Screenshot (1286)" src="https://github.com/user-attachments/assets/14c00990-ae68-4557-b052-6ba7cb010dc6" />


6. **DataSync Source Location** 🏁  
   ```Shows configuration of the **S3 bucket as the source** and specifies **S3 URI** and validates connectivity with an IAM role.```
   <img width="1920" height="977" alt="Screenshot (1287)" src="https://github.com/user-attachments/assets/5ccc77ab-243b-4f74-a3fa-520ca3333d14" />


7. **DataSync Destination Location** 🎯  
   ```Configures the **Amazon EFS filesystem as the destination** and Includes **mount path**, subnet, and security group selection.```
   <img width="1920" height="977" alt="Screenshot (1289)" src="https://github.com/user-attachments/assets/18b2200d-5315-4676-a068-bebd96ffbfb1" />


8. **DataSync Task Settings** ⚙️  
   ```Displays task configuration, including **Basic task mode**, file inclusion/exclusion patterns, and optional settings for data transfer.```
   <img width="1920" height="976" alt="Screenshot (1290)" src="https://github.com/user-attachments/assets/bb0d3d83-656a-42e2-8480-3431cec500b1" />


9. **DataSync Task Schedule and Logging** 🕒  
  ``` Shows options to **schedule recurring transfers** and configure **logging** for auditing transfer status and errors.```
   <img width="1920" height="978" alt="Screenshot (1291)" src="https://github.com/user-attachments/assets/c6d6d4dc-eda1-48f0-8f7f-42c322ac5dcb" />


10. **DataSync Task Overview** ✅  
    ```Overview of the configured task. Confirms **source/destination**, task settings, and readiness for execution.```
    <img width="1920" height="975" alt="Screenshot (1292)" src="https://github.com/user-attachments/assets/8174173f-0998-4e3b-9a10-ff013e70228d" />


11. **DataSync Destination Location Details** 📌   
    ```Displays EFS filesystem details including **filesystem ID**, subnet, and **security group** confirming correct configuration.```
    <img width="1920" height="975" alt="Screenshot (1294)" src="https://github.com/user-attachments/assets/e20bfbfd-ac64-4d4d-9ffa-ff9bd47764de" />


12. **DataSync S3 Source Location Details** 🗂️  
    ```Shows S3 bucket ARN, IAM role, and associated DataSync tasks for verification.```
    <img width="1920" height="975" alt="Screenshot (1295)" src="https://github.com/user-attachments/assets/9a7ac54b-8501-4007-86c3-503f57379000" />


13. **Editing DataSync Location** ✏️   
    ```Allows modification of **mount path**, **subnet**, security groups, and in-transit encryption for the EFS destination.```
    <img width="1920" height="975" alt="Screenshot (1296)" src="https://github.com/user-attachments/assets/082823b5-0593-4320-b919-6b2f1c6b103a" />


14. **Launching an EC2 Instance** 💻  
    ```Demonstrates creating a new EC2 instance, including selecting **AMI**, instance type, key pair, and network settings.```
    <img width="1920" height="975" alt="Screenshot (1298)" src="https://github.com/user-attachments/assets/3face26d-cdfd-45c3-ae0e-93cb9173591e" />


15. **Security Group Inbound Rules** 🔓  
    ```Shows inbound rules for the EC2 instance. Configured for **SSH**, **NFS**, and other traffic required for DataSync verification.```
    <img width="1920" height="977" alt="Screenshot (1299)" src="https://github.com/user-attachments/assets/979092f9-dd58-43a0-a8de-a0405b725d21" />


16. **DataSync Agents Page** 🧩  
    ```Displays the DataSync Agents page. Shows that **no agent is deployed**, as it’s not required for S3 → EFS transfers.```
    <img width="1920" height="975" alt="Screenshot (1297)" src="https://github.com/user-attachments/assets/6fc4b2e9-8d20-4103-a559-e92f9f7e8930" />


17. **DataSync Task Actions Menu** ⚡  
    ```Shows the **Actions dropdown** for DataSync tasks, allowing the user to **start, stop, edit, or delete** tasks.```
    <img width="1920" height="977" alt="Screenshot (1301)" src="https://github.com/user-attachments/assets/dc88fded-7c1c-4627-949c-2ee864007fa5" />


18. **DataSync Task Status** ⏳  
    ```Displays real-time status of the task, currently showing **Launching**, giving insight into transfer progress.```
    <img width="1920" height="975" alt="Screenshot (1302)" src="https://github.com/user-attachments/assets/9b3c0be4-b389-4591-b9d4-77d69e627692" />


19. **S3 File Transfer Verification** 🖥️  
    ```Shows an EC2 terminal with mounted EFS verifying transferred files `"Audi.jpg"` and `"Defender.jpg"`.```
    <img width="1920" height="977" alt="Screenshot (1304)" src="https://github.com/user-attachments/assets/fe1214a7-02cd-444b-b935-8cc9170464d0" />


20. **Uploading More Files to S3** ➕  
    ```User uploads additional files `"g-wagon.jpg"` and `"depender.jpg"` to the S3 bucket, preparing for incremental transfer testing.```
    <img width="1920" height="977" alt="Screenshot (1305)" src="https://github.com/user-attachments/assets/cd56994b-985f-4494-b139-4294eeffa195" />


21. **Updated S3 Bucket Objects** 📦  
    ```Shows the contents of the S3 bucket after additional uploads. Confirms all new and existing files are present.```
    <img width="1920" height="976" alt="Screenshot (1306)" src="https://github.com/user-attachments/assets/bd16a01a-ce18-4fa8-b5bb-d8813248c4eb" />


22. **DataSync Task Execution History** 📝  
    ```Displays task execution history. Shows **successful past runs** and one currently in progress, creating a clear audit trail.```
    <img width="1920" height="976" alt="Screenshot (1307)" src="https://github.com/user-attachments/assets/2e79589d-dd76-4fe7-aa32-bb334b7cd06f" />


23. **Confirmed File Transfer on EFS** 🖼️  
   ```EC2 terminal screenshot confirming all four transferred files are present on the mounted EFS filesystem.```
    <img width="1920" height="973" alt="Screenshot (1308)" src="https://github.com/user-attachments/assets/f0a6a25e-958d-4d5b-b48e-b15bd93a3146" />


24. **DataSync Execution Summary** 📊   
    ```Shows detailed performance metrics including **status (Success)**, number of files transferred, and transfer duration for monitoring.```
    <img width="1920" height="977" alt="Screenshot (1309)" src="https://github.com/user-attachments/assets/e401b1e7-4745-4af8-824e-6cb77ba91ef7" />


---

## ⚠️ Issues Faced
- 🔐 EFS access denied due to **incorrect security group rules**.  
- ⏳ **Cost Note:** Transferring large files may incur additional AWS charges.
- ❗ Confusion about **whether a DataSync agent was required**.
- ❓ I initially thought an agent was needed for S3 → EFS transfer, but after referring to the AWS documentation ([ Do I Need a DataSync Agent? ](https://docs.aws.amazon.com/datasync/latest/userguide/do-i-need-datasync-agent.html)), I realized that **an agent is only needed for on-premises or non-S3 storage transfers**.  

---

## 🧩 When Do You Need a DataSync Agent?

### ✅ Situations When You Need a DataSync Agent
Most cases that require an agent involve storage **managed by you or another cloud provider**:  
- 🔄 Transferring between **AWS storage services and on-premises storage**.  
- 🌐 Transferring between **Amazon EFS or Amazon FSx** and storage in **other clouds**.  
- 🏁 Transferring to or from **edge storage**.  
- 🔗 Transferring between some AWS storage services **across AWS accounts** (when neither storage service is Amazon S3).  
- 🏛️ Transferring between a **commercial AWS Region and AWS GovCloud (US)** where the source and destination are **Amazon EFS or Amazon FSx**.  

> For more details, see [Supported transfers across AWS accounts](https://docs.aws.amazon.com/datasync/latest/userguide/do-i-need-datasync-agent.html#supported-transfers-across-accounts).

### ❌ Situations When You Don't Need a DataSync Agent
No agent is required when transferring between **AWS storage services** or with **Amazon S3 involved**:  
- 🔄 Transferring between **AWS storage services in the same AWS account**.  
- 🔗 Transferring between **Amazon S3 and a different AWS storage service across accounts**.  
- 🌐 Transferring between **Amazon S3 and object storage in other clouds**.  
- 🏛️ Transferring between a **commercial AWS Region and AWS GovCloud (US)** where **either the source or destination is Amazon S3**.  

> 💡 In this project, since transferring **S3 → EFS**, a DataSync agent **is not needed**, which simplified the setup and execution.

---

## ✅ Outcome
- ✅ Successfully migrated files from S3 → EFS using DataSync.  
- ✅ EC2-mounted EFS verified all transferred files.  
- ✅ Task scheduled for recurring automated transfers.  
- ✅ Transfer logs captured for auditing and monitoring.  

---

## 📚 Key Learnings & Observations
- 📌 AWS DataSync eliminates manual scripting for transfers.  
- 🔐 Security groups are critical for smooth access.  
- ⚡ Task scheduling and logging provide operational efficiency.  
- 🖥️ EC2 validation ensures data integrity on EFS.  
- 🧩 Knowing when a DataSync agent is needed prevents unnecessary setup confusion.  

---

## 🌍 Real-World Use Case
- 🏢 Enterprises moving files from **S3 cold storage** to **EFS for compute workloads**.  
- 📦 Media & entertainment for transferring large video files.  
- 🗄️ Backup automation between cloud storage services.  

---

## 🏷️ Tags
`AWS` `DataSync` `S3` `EFS` `EC2` `CloudAutomation` `DevOps`  

---

## 💡 Tips 
- Configure **security groups & NFS ports** before mounting EFS.  
- Use **task logs** to troubleshoot failures quickly.  
- Test transfers on **small datasets** before production migration.  
