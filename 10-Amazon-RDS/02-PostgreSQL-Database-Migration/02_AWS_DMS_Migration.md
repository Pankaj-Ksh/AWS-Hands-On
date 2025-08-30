# ⚡📦 PostgreSQL Database Migration using AWS DMS (Database Migration Service)

This project demonstrates the **end-to-end migration of a PostgreSQL database** between two AWS RDS instances using **AWS Database Migration Service (DMS)**.  
The process includes configuring replication instances, creating endpoints, setting up migration tasks, and verifying migrated data in the target database.  
It simulates a real-world scenario of cloud database migration with minimal downtime and automated data handling.  

---

## 🎯 Objective
- 🔄 Perform **seamless migration** of PostgreSQL databases between AWS RDS instances.  
- 🛠 Gain hands-on experience with **AWS DMS components** (Replication Instance, Endpoints, Migration Tasks).  
- 💾 Ensure **data consistency and integrity** during migration.  
- 🏢 Understand real-world **cloud migration workflows** followed in enterprises.  

---

## 🏗 Architecture Overview
   <img width="2258" height="2035" alt="image" src="https://github.com/user-attachments/assets/5c96ecd9-9971-4608-9c51-45202af38967" />


---

## 🔄 Workflow Summary
1. 🔍 Configure **Source and Target RDS instances**.  
2. 🗄 Create a **Replication Instance** in AWS DMS.  
3. 🔗 Set up **Source and Target Endpoints** in DMS.  
4. ⚙️ Create a **Migration Task** with full load option.  
5. ▶️ Start migration task and monitor progress.  
6. ✅ Verify migrated tables and data in the target database via pgAdmin.  

---

## 🛠 Steps Performed

**Screenshots & Descriptions**  

1. **Source Database Engine** – Source RDS PostgreSQL details (endpoint, port, status).  
   <img width="1920" height="979" alt="1" src="https://github.com/user-attachments/assets/cd41aab7-3fe2-4194-98cf-9fb7906c59bd" />

2. **Target Database Engine** – Target RDS PostgreSQL details, ready to receive data.  
   <img width="1920" height="980" alt="2" src="https://github.com/user-attachments/assets/a3dc6aa8-86c7-4822-a4e4-7329c94d38dd" />

3. **Creating a Target Database** – New database `demoDBForDMS` created in pgAdmin 4.  
   <img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/df41e1fe-2b7b-49c8-a387-74289b23d474" />

4. **Source Database Table & Data** – Employees table with data in source instance.  
   <img width="1920" height="1080" alt="4 1" src="https://github.com/user-attachments/assets/68c8a204-1003-44b7-82df-d3cb7e871bfd" />

5. **Target Database Activity** – Verified transaction activity in Target dashboard.  
   <img width="1920" height="1080" alt="4 2" src="https://github.com/user-attachments/assets/0768b976-b358-4ccb-aa7f-7e3e9b2a386a" />

6. **Setting up a Replication Instance** – Configured `replication-instance` (dms.t3.micro).  
   <img width="1920" height="980" alt="4" src="https://github.com/user-attachments/assets/78e72231-33f4-44e7-bb3c-7a15ea33861d" />

7. **Replication Instance Storage & Connectivity** – Allocated 50 GB storage and set up VPC network.  
   <img width="1920" height="980" alt="5" src="https://github.com/user-attachments/assets/1b620cd4-075d-4ea0-bca2-5cccfb1b110f" />

8. **Replication Instance Creation in Progress** – Instance being provisioned.  
   <img width="1920" height="980" alt="6" src="https://github.com/user-attachments/assets/484e509c-5b12-4c04-af25-e9f7aa8d3f3b" />

9. **Replication Instance Overview** – Status: *Available*, ready for migration.  
   <img width="1920" height="1080" alt="7" src="https://github.com/user-attachments/assets/e383b283-01bd-4cb8-9174-cc32fa138a4e" />

10. **Creating AWS DMS Endpoint** – Configured Source endpoint for `socure-database-engine`.  
    <img width="1920" height="979" alt="8" src="https://github.com/user-attachments/assets/6854a4e9-2cd9-42e7-8cec-79271c949f8d" />

11. **Source Endpoint Details** – Configured server name, port, user, password for Source.  
    <img width="1920" height="980" alt="9" src="https://github.com/user-attachments/assets/759aae53-828a-4a84-9155-0e4c62fbc994" />

12. **Finalizing Source Endpoint** – Additional security/KMS settings before creation.  
    <img width="1920" height="980" alt="10" src="https://github.com/user-attachments/assets/bd3e40da-5640-4237-b01e-2133daa32c8e" />

13. **Creating Target Endpoint** – Configured Target endpoint for `target-database-engine`.  
    <img width="1920" height="980" alt="11" src="https://github.com/user-attachments/assets/1862346a-67e3-4a27-8d0d-83f2af86bee2" />

14. **Target Endpoint Details** – Connectivity details for target database.  
    <img width="1920" height="980" alt="12" src="https://github.com/user-attachments/assets/a12b2b7e-5050-4ad3-ac3b-42efe9f69c43" />

15. **Created Endpoints** – Both Source & Target endpoints listed in DMS console.  
    <img width="1920" height="980" alt="13" src="https://github.com/user-attachments/assets/036672ca-d358-4315-89f3-770a4e512aab" />

16. **Creating a Migration Task** – Task `DMS-Agent-Task` linking source & target endpoints.  
    <img width="1920" height="978" alt="14" src="https://github.com/user-attachments/assets/d1decf82-8160-4c92-ad80-11020600103c" />

17. **Task Mode and Settings** – Migration mode: *Full load only*.  
    <img width="1920" height="978" alt="15" src="https://github.com/user-attachments/assets/ed5015e9-90dd-43b1-a261-0d010ab18469" />

18. **Selection Rules** – Wildcard `%` used to migrate all schemas and tables.  
    <img width="1920" height="980" alt="16" src="https://github.com/user-attachments/assets/c3b615ad-0ffe-4943-9e77-31cda4e04036" />

19. **Task Startup Configuration** – Chosen *Manually later* option.  
    <img width="1920" height="980" alt="17" src="https://github.com/user-attachments/assets/cb333adb-3f33-435b-b53d-0bfe043a177f" />

20. **Starting the Migration Task** – Task started from *Start required* state.  
    <img width="1920" height="979" alt="18" src="https://github.com/user-attachments/assets/232150ad-f296-4606-81c2-b9f4b911779d" />

21. **Migration Task Completed** – Status: *Load completed* with 100% progress.  
    <img width="1920" height="980" alt="19" src="https://github.com/user-attachments/assets/6a62e1d5-5b4b-4344-a63c-f1938d32f758" />

22. **Verified Data in Target Database** – Query on `demoDBForDMS.employees` confirmed successful data migration.  
    <img width="1920" height="1080" alt="20" src="https://github.com/user-attachments/assets/97a9f9a5-d8e7-44b0-9251-2ebac1e45495" />

---

## ⚠️ Issues Faced
- 🔐 **Security group misconfiguration** initially blocked replication instance from connecting to RDS.  
- ⚡ **Task startup delay** due to manual startup settings.  
- 🗂 **Endpoint validation errors** when wrong credentials or ports were entered.  

---

## ✅ Outcome
- 🎉 Successfully migrated **employees table** and all records from Source to Target RDS.  
- 🧩 Validated data consistency between source and target using pgAdmin.  
- 🔐 Ensured secure connectivity through proper VPC and security group configuration.  

---

## 📚 Key Learnings & Observations
- 🏗 Understood how **DMS Replication Instances** act as a bridge between source and target.  
- 🔄 Learned the difference between **full load, CDC (Change Data Capture), and ongoing replication**.  
- 📊 Realized the importance of **endpoint validation** and **security group rules**.  
- 💡 DMS is more scalable and reliable compared to manual pgAdmin migrations.  

---

## 🌍 Real-World Use Case
- 🏢 Enterprises use AWS DMS to **migrate large production databases** to AWS with minimal downtime.  
- 🔄 Ideal for **multi-region replication** and **disaster recovery** setups.  
- 🛠 Useful in **modernization projects**, e.g., migrating from on-premises PostgreSQL to AWS RDS/Aurora.  

---

## 🏷️ Tags
`#AWS` `#RDS` `#PostgreSQL` `#DMS` `#CloudMigration` `#DatabaseReplication` `#BackupRestore`  

---

## 💡 Tips
- 🔐 Always **validate endpoints** before starting migration tasks.  
- ⚡ Choose the right **task type.**.  
- 📊 Monitor **CloudWatch logs** for troubleshooting failed tasks.  
- 🛡 Ensure replication instance is in the **same VPC/subnet group** as the RDS databases.  

---
