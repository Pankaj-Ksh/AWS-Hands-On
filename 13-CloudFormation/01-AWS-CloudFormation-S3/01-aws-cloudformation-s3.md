# ☁️ AWS S3 CloudFormation Project

This project is an **Infrastructure as Code (IaC)** demonstration using **AWS CloudFormation** to provision an **S3 bucket**.  
It involves defining a YAML template, creating an IAM role with necessary permissions, and executing a CloudFormation stack named `s3-bucket-stack`.  
The process successfully creates and verifies a globally unique S3 bucket named `pankaj-demo-stack-bucket`, showcasing **automated cloud resource deployment** using code.

---

## 🎯 Objective
- Automate S3 bucket creation using AWS CloudFormation  
- Learn parameterization for bucket name, access level, and versioning  
- Understand IAM role creation for CloudFormation permissions  
- Observe stack lifecycle and resource provisioning in AWS console  

---

## 🏗 Architecture Overview
The architecture consists of:
- **CloudFormation Stack**: Central control for IaC deployment  
- **IAM Role (CloudFormation-role)**: Provides permissions to provision resources  
- **S3 Bucket**: The main resource being created (Private/Public, Versioned)  
- **CloudFormation Staging Bucket**: Temporary internal bucket for templates  

All resources are deployed in the **Asia Pacific (Mumbai) ap-south-1 region**.

---

## 🔄 Workflow Summary
1. Define a **CloudFormation YAML template** for S3 bucket creation  
2. Launch the stack using **CloudFormation Console**  
3. Create/attach an **IAM role** for CloudFormation permissions  
4. Observe stack creation progress (`CREATE_IN_PROGRESS`)  
5. Verify **S3 bucket existence and properties**  
6. Review stack **Outputs, Parameters, and Resources**  

---

## 🛠 Steps Performed
1. **S3 Bucket CloudFormation Template** – Parameterized template for bucket creation  
   <img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/7f6fe05b-2c59-4dbd-a215-ef01b3fb351b" />

2. **CloudFormation Stacks Dashboard (Empty)** – Shows no active stacks initially  
   <img width="1920" height="977" alt="2" src="https://github.com/user-attachments/assets/82447ffa-9935-48d2-8c06-51e626ea75b7" />

3. **Create Stack: Template Upload** – Uploading `01-s3-bucket.yml`  
   <img width="1920" height="979" alt="3" src="https://github.com/user-attachments/assets/5e5047a6-0bca-43bc-8dab-ba486656fae4" />

4. **Create Stack: Specify Details** – Enter stack name & parameter values  
   <img width="1920" height="979" alt="4" src="https://github.com/user-attachments/assets/19757e83-e62d-4063-8ffb-32a3aa908a3c" />

5. **Configure Stack Options: IAM Role Selection (Initial)** – IAM role dropdown empty  
   <img width="1920" height="979" alt="5" src="https://github.com/user-attachments/assets/6c33d6f7-af9c-44cb-a35a-bf24f3b98c43" />

6. **Create IAM Role: Select Trusted Entity** – AWS service chosen, CloudFormation selected  
   <img width="1920" height="978" alt="6" src="https://github.com/user-attachments/assets/f6232382-1818-4cd4-94be-e21d94e9c0da" />

7. **Create IAM Role: Add Permissions** – AdministratorAccess policy assigned  
   <img width="1920" height="978" alt="7" src="https://github.com/user-attachments/assets/b3f1b00e-aa88-4287-9a3f-20bc70c561a5" />

8. **Create IAM Role: Name, Review, and Create** – Role named `CloudFormation-role`  
   <img width="1920" height="979" alt="8" src="https://github.com/user-attachments/assets/8710784d-40c2-4103-8013-560b7fe87e1c" />

9. **Configure Stack Options: IAM Role Selection (Final)** – Role selected in stack wizard  
   <img width="1920" height="979" alt="9" src="https://github.com/user-attachments/assets/f94186c8-5908-4601-8a40-03c1f9c55d7f" />

10. **CloudFormation Stack Creation in Progress** – Stack status `CREATE_IN_PROGRESS`  
    <img width="1920" height="978" alt="10" src="https://github.com/user-attachments/assets/5737f45a-60f4-4989-9030-d980988289ab" />

11. **S3 Console: CloudFormation Template Bucket** – Shows temporary staging bucket `cf-templates-...`  
    <img width="1920" height="978" alt="11" src="https://github.com/user-attachments/assets/a8ff9786-f915-4ce0-8d12-9d3350883ef0" />

12. **CloudFormation Stack Resources** – Confirms bucket creation with logical & physical IDs  
    <img width="1920" height="979" alt="15" src="https://github.com/user-attachments/assets/fe13069e-0f0f-4fcf-887c-c8a5e7b58a34" />

13. **CloudFormation Stack Info Overview (Final)** – IAM role & stack status overview  
    <img width="1920" height="979" alt="16" src="https://github.com/user-attachments/assets/cc9b4645-2c56-416c-b6fb-4adb39098461" />

14. **CloudFormation Stack Parameters** – Parameters entered during creation  
    <img width="1920" height="979" alt="13" src="https://github.com/user-attachments/assets/f2cf3ac2-417c-4e48-8819-f3df263625a0" />

15. **S3 Bucket Console: The Created Bucket** – `pankaj-demo-stack-bucket` details  
    <img width="1920" height="978" alt="11" src="https://github.com/user-attachments/assets/fe616983-962e-4595-ad69-8176170b7291" />

16. **CloudFormation Stack Outputs** – ARN and Name of the bucket  
    <img width="1920" height="979" alt="12" src="https://github.com/user-attachments/assets/34751526-4e62-4431-83bc-f02b7f69dcb1" />

17. **CloudFormation Stack Template** – YAML template content used  
    <img width="1920" height="978" alt="14" src="https://github.com/user-attachments/assets/693869bb-82ec-4bfb-a411-1e11cd8a05fd" />

18. **S3 Template File Properties (Action Dropdown)** – Shows object actions in staging bucket  
    <img width="1920" height="979" alt="17" src="https://github.com/user-attachments/assets/81fe706b-fac1-42ca-9a06-681168c54960" />

19. **S3 Template File Properties (Details)** – Metadata of template file in S3  
    <img width="1920" height="979" alt="20" src="https://github.com/user-attachments/assets/1c614a01-4b2b-4311-8a6b-38250e8bf21d" />

20. **Create Stack: Use S3 Template URL** – Selecting template from S3 URL  
    <img width="1920" height="979" alt="21" src="https://github.com/user-attachments/assets/e0daf8f7-686e-4170-9be7-4df86ce012d1" />

21. **Specify Stack Details: Missing Parameter Value** – Highlights validation for required parameters  
    <img width="1920" height="979" alt="22" src="https://github.com/user-attachments/assets/916a41c7-bff4-40e9-83a1-3f6f35e76cb2" />


---

## ⚠️ Issues Faced
- IAM role creation initially not configured → stack creation fails if missing  
- CloudFormation staging bucket (`cf-templates-...`) auto-created → can be confusing  
- “Make Public” ACL option disabled by AWS → must use bucket policies instead  
- Required parameters must be entered correctly → otherwise stack creation cannot proceed  

---

## ✅ Outcome
- Successfully created a **parameterized S3 bucket** via CloudFormation  
- Verified stack **CREATE_COMPLETE** status and resource provisioning  
- Learned **dynamic parameter usage** and **conditional creation** (Public vs Private buckets)  
- Observed CloudFormation internal workings including **staging buckets** and **Outputs**  

---

## 📚 Key Learnings & Observations
- CloudFormation **simplifies IaC deployments** and removes manual resource creation  
- **Parameters and Conditions** allow flexible stack configuration  
- **IAM roles** are essential for CloudFormation to provision resources securely  
- Always review **Outputs and Resources tabs** to verify successful deployment  
- CloudFormation manages internal staging buckets automatically → don’t manually delete  

---

## 🌍 Real-World Use Case
- Automating S3 bucket creation in multi-account environments  
- Ensures **standardized configuration** for versioning, access, and naming conventions  
- Reduces **human error** and provides **repeatable deployments** in production  
- Serves as a foundation for **full IaC pipelines** using CloudFormation or CI/CD  

---

## 🏷️ Tags
`#AWS`  `#CloudFormation`  `#IaC`  `#S3`  `#DevOps`  `#Automation`  `#InfrastructureAsCode`  `#AWSCloud`  `#CloudDeployment`  `#Parameterization`  

---

## 💡 Tips
- Always use **parameterization** for resource names and access levels  
- Use **Bucket Policies** instead of ACLs for public access in modern AWS accounts  
- Monitor stack **Events tab** to troubleshoot issues during deployment  
- Test in a **dev/test AWS account** before applying to production  
- Keep **templates in GitHub** for version control and collaborative updates  
- Leverage **Outputs** for referencing resources in other stacks or applications  
- Remember: CloudFormation **reuses staging buckets**; do not delete manually unless safe  

---
