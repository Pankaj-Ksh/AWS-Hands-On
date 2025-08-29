# 🚀 PostgreSQL Database Migration using AWS RDS & pgAdmin 4

This project demonstrates a **complete end-to-end migration** of a PostgreSQL database between two AWS RDS instances using **pgAdmin 4**.  
It covers database backup, restoration, and security configurations for seamless connectivity.

---

## 🎯 Objective
- 🔄 Learn how to **migrate a PostgreSQL database** between AWS RDS instances.  
- 🛡 Configure **security group rules** for secure connectivity.  
- 💾 Perform **database backup and restore** using pgAdmin 4.  
- 🧰 Gain hands-on experience with **RDS management and database operations**.  

---

## 🏗 Architecture Overview
- Uses **AWS RDS** for source and target PostgreSQL databases.  
- **pgAdmin 4** acts as the client tool for managing backup and restore.  
- Security groups configured to allow PostgreSQL traffic from client IP.  

---

## 🔄 Workflow Summary
1. 🔍 Connect to **source RDS instance** via pgAdmin 4.  
2. 💾 Take a **backup** of the source database.  
3. 🔐 Ensure **security groups** allow inbound PostgreSQL traffic.  
4. 🔗 Connect to **target RDS instance** via pgAdmin 4.  
5. ⚡ **Restore** the backup SQL file to the target database.  
6. ✅ Verify that all tables and data are successfully migrated.  

---

## 🛠 Steps Performed

**Screenshots & Descriptions:**  

1. **Amazon RDS Database View**  
   Displays the two PostgreSQL databases, their status, and other key details in AWS RDS dashboard.  
   <img width="1920" height="980" alt="1" src="https://github.com/user-attachments/assets/5224186c-3557-4331-98f4-1881c0de12d4" />

2. **RDS Source Database Details**  
   Endpoint, port, and security info of **socure-database-engine** in AWS RDS console.  
   <img width="1920" height="979" alt="2" src="https://github.com/user-attachments/assets/abe63fd4-fbd7-4b7d-b50d-5c9cea741f76" />

3. **RDS Target Database Details**  
   Endpoint and security details of **target-database-engine** for establishing connection.  
   <img width="1920" height="980" alt="3" src="https://github.com/user-attachments/assets/330f216e-7f0e-4a3b-997a-49f2b8deec36" />

4. **Security Group Inbound Rules**  
   Configured rules in AWS EC2 to allow SSH and PostgreSQL connections from client IP.  
   <img width="1920" height="980" alt="4" src="https://github.com/user-attachments/assets/72f1031c-1e14-46b4-996f-9c4374004c3d" />

5. **pgAdmin Server Connection**  
   Register server dialog to connect PostgreSQL databases using host, port, username, and password.  
   <img width="1920" height="1080" alt="5" src="https://github.com/user-attachments/assets/6fee2819-cb3e-401d-8571-799a9b8107ee" />

6. **pgAdmin Source Database Explorer**  
   Expanded **Source-Instance** server to view databases and **CREATE Script** option.  
   <img width="1920" height="1080" alt="6" src="https://github.com/user-attachments/assets/d74d21df-8695-49b5-b089-c589226b2ef7" />

7. **pgAdmin Source Database Query**  
   SQL script to create `demoDB` and `employees` table with sample data executed successfully.  
   <img width="1920" height="1080" alt="7" src="https://github.com/user-attachments/assets/585b32d3-7327-4d76-9012-45057934e5f8" />

8. **pgAdmin Target Database Explorer**  
   Connected **Target-Instance** server and ready to execute new queries.  
   <img width="1920" height="1080" alt="8" src="https://github.com/user-attachments/assets/5bb5accb-f68a-44cb-bf4d-95a5025c1a42" />

9. **pgAdmin Backup Option**  
   Right-click on `demoDB` → **Backup...** to initiate database backup process.  
   <img width="1920" height="1080" alt="9" src="https://github.com/user-attachments/assets/99adce7d-8dc0-4670-b2ed-2fac33ef461b" />

10. **pgAdmin Database Backup Dialog**  
    Configure filename and backup format before saving database backup.  
    <img width="1920" height="1080" alt="10" src="https://github.com/user-attachments/assets/dd5ab8cf-556d-4fd1-9944-889bfe8b694a" />

11. **pgAdmin Database Backup Configuration**  
    Options set for backup file output, format, and storage location.  
    <img width="1920" height="1080" alt="11" src="https://github.com/user-attachments/assets/30049d01-5dfa-4f7c-a3b5-92ca60e525cf" />

12. **pgAdmin Backup Process**  
    Status notifications indicate successful backup of `demoDB` on source instance.  
    <img width="1920" height="1080" alt="12" src="https://github.com/user-attachments/assets/6a781071-7ad8-4d10-a348-52f835078615" />

13. **pgAdmin Restore Process**  
    Status notifications show restoration progress and completion on target instance.  
    <img width="1920" height="1080" alt="13" src="https://github.com/user-attachments/assets/794b547c-9969-4460-8eba-f98d01b492e0" />

14. **pgAdmin Restore Configuration**  
    Dialog box to select file and configure restore options for `demoDB`.  
    <img width="1920" height="1080" alt="14" src="https://github.com/user-attachments/assets/3c9c3950-0b85-41d2-9394-e3c96b52e936" />

15. **pgAdmin File Selection for Restore**  
    Selected `demoDB.sql` from local directory for restoration.  
    <img width="1920" height="1080" alt="15" src="https://github.com/user-attachments/assets/7c33eb31-4994-4bb7-a51b-f15c07bc3bae" />

16. **pgAdmin Restored Table Data**  
    Verification of successful migration: `employees` table with all records restored.  
    <img width="1920" height="1080" alt="16" src="https://github.com/user-attachments/assets/8909e21e-91c4-49c1-b0c6-255752ca4239" />

---

## ⚠️ Issues Faced
- 🔐 Security group misconfiguration initially blocked database connectivity.  

---

## ✅ Outcome
- 🎉 Successfully migrated `demoDB` from **source** to **target** RDS instance.  
- 🧩 Tables and data fully restored on target instance.  
- 🔐 Security configured correctly for secure access.  

---

## 📚 Key Learnings & Observations
- 🔄 pgAdmin 4 is a powerful tool for **backup and restore** operations.  
- 🛡 Security group configuration is crucial for **RDS connectivity**.  
- 💾 Always verify backup format and location before restoring.  
- 🔍 Testing database connection post-migration is essential for validation.  

---

## 🌍 Real-World Use Case
- 🏢 Migrating production databases during **cloud migration projects**.  
- 💼 Setting up **dev/test environments** from production snapshots.  
- 📦 Disaster recovery scenarios where **restoring backups** quickly is critical.  

---

## 🏷️ Tags
`#AWS` `#RDS` `#PostgreSQL` `#pgAdmin` `#DatabaseMigration` `#BackupRestore` `#CloudComputing`  

---

## 💡 Tips
- 🧩 Always maintain **updated security group rules** for client connectivity.  
- 💾 Take **frequent backups** before performing major database operations.  
- 🔄 Test the **restoration process** on a non-production instance first.  
- ⚡ Automate repetitive tasks using **AWS CLI or scripts** for large-scale migrations.  

---
