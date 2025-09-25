# ☁️🌐🏘️ VPC with Public & Private Subnets + Internet & NAT Gateway Setup  

A step-by-step process of creating a Virtual Private Cloud (VPC) with a Public Subnet, a Private Subnet, and necessary networking components to allow:  
1. Public internet access for Public Subnet resources 🌐  
2. Controlled outbound internet access for Private Subnet resources 🔒  
3. Secure internal communication between EC2 instances 🖥️
4. Importance of NAT Gateway for Private Subnet Internet Access 

---

## 🎯 Objective
- Create a secure and scalable VPC environment 🏗️  
- Deploy Public and Private EC2 instances with correct routing 🌍  
- Configure Internet Gateway (IGW) and NAT Gateway (NAT-G) for connectivity 🔄  
- Implement Security Groups to allow SSH & internal communication 🔑  

---

## 🔄 Workflow Summary
1. Create VPC with CIDR 192.168.0.0/16 🗺️  
2. Configure Public & Private Subnets 🏘️  
3. Create Internet Gateway (IGW) & attach to VPC 🌐  
4. Configure NAT Gateway in Public Subnet ⚡  
5. Create Public & Private Route Tables 🛣️  
6. Associate Subnets with respective Route Tables 🔗
7. Edit Route table's for both Public and Private 
8. Launch Public EC2 with auto-assigned public IP 🖥️  
9. Launch Private EC2 without public IP 🔒  
10. Configure Security Groups for SSH and internal traffic 🛡️  
11. Test connectivity & troubleshoot issues 🧩  

---

## ⚠️ Issues Faced
1. Public/Private Route Table not associated with respective subnets  
2. AWS CLI installation failed on RHEL 10  
3. SSH from Public → Private failed due to invalid SG rules (port 0)  

---

## 🛠 Steps Performed (Screenshots)

1. **VPC Creation**  
   - Name: `Personal-VPC`  
   - CIDR: `192.168.0.0/16` 🗺️  
   <img width="1920" height="978" alt="Screenshot (1775)" src="https://github.com/user-attachments/assets/434d88a0-f6fd-4baf-b2b5-9501f7b5f491" />

2. **Internet Gateway Creation**  
   - Name: `My-IG`  
   - Enables internet access 🌐  
   <img width="1920" height="979" alt="Screenshot (1776)" src="https://github.com/user-attachments/assets/a54f128c-05f2-45a7-bb9b-da68414a6a73" />

3. **Internet Gateway Actions**  
   - Shows IGW in `Detached` state with `Attach to VPC` option ✅  
   <img width="1920" height="978" alt="Screenshot (1777)" src="https://github.com/user-attachments/assets/90ed2e43-2203-4053-b6ee-fe704db4f378" />

4. **Internet Gateway Attachment**  
   - Attach `My-IG` to `Personal-VPC` 🌐  
   <img width="1920" height="979" alt="Screenshot (1778)" src="https://github.com/user-attachments/assets/ddd0ef29-f553-43ac-90c2-d714e10806c1" />

5. **Public Subnet Configuration**  
   - AZ: `ap-south-1a`  
   - CIDR: `192.168.1.0/24` 🏘️  
   <img width="1920" height="979" alt="Screenshot (1779)" src="https://github.com/user-attachments/assets/0e57985d-32f5-4fbf-b8e0-0da169f1a81f" />

6. **Private Subnet Configuration**  
   - AZ: `ap-south-1b`  
   - CIDR: `192.168.2.0/24` 🏘️  
   <img width="1920" height="977" alt="Screenshot (1781)" src="https://github.com/user-attachments/assets/57a13995-4cdf-4c14-b6cb-5755372f7b9e" />

7. **Public NAT Gateway Setup**  
   - Name: `My-NAT-G`  
   - Associated with Public Subnet + Elastic IP ⚡  
   <img width="1920" height="980" alt="Screenshot (1782)" src="https://github.com/user-attachments/assets/ea3d75ab-4584-481d-9d80-0e6619c86ca3" />

8. **Public Route Table Creation**  
   - Name: `Public-RT`  
   - Used for Public Subnet routing 🛣️  
   <img width="1920" height="977" alt="Screenshot (1783)" src="https://github.com/user-attachments/assets/431628b3-aff5-4bda-986f-0f57905a60aa" />

9. **Private Route Table Creation**  
   - Name: `Private-RT`  
   - Used for Private Subnet routing 🛣️  
   <img width="1920" height="978" alt="Screenshot (1786)" src="https://github.com/user-attachments/assets/a97c2e30-aa46-47f1-90c5-b38c591f9951" />

10. **Public Route Table Routes**  
    - Default route: `0.0.0.0/0 → IGW` 🌐  
    <img width="1920" height="979" alt="Screenshot (1788)" src="https://github.com/user-attachments/assets/11348dad-c3e9-48c3-97e2-4664fe9ca5ef" />

11. **Private Route Table Configuration**  
    - Default route: `0.0.0.0/0 → NAT Gateway` 🔄  
    <img width="1920" height="979" alt="Screenshot (1789)" src="https://github.com/user-attachments/assets/cd426457-adb6-4ec3-b278-49fc6f213440" />

12. **Security Group Creation**  
    - Name: `MY-SG`  
    - Default outbound: All traffic allowed 🛡️  
    <img width="1920" height="979" alt="Screenshot (1790)" src="https://github.com/user-attachments/assets/75feb91f-bb1f-4e75-a2cb-8d79de4f98f7" />

13. **Security Group Inbound Rules**  (Wrong Setup, initial) 
    - SSH from my IP + reference `MY-SG` for internal traffic 🔑  
    <img width="1920" height="978" alt="Screenshot (1791)" src="https://github.com/user-attachments/assets/a631599d-877d-4bfd-812c-916a4870a7c6" />

14. **Public EC2 Instance Launch**  
    - Name: `Red-Hat-Main-server`  
    - Public IP: Auto-assign Enabled 🖥️  
    <img width="1920" height="980" alt="Screenshot (1792)" src="https://github.com/user-attachments/assets/b550f98e-b231-45d3-99c2-0cfb276118da" />

15. **Private EC2 Instance Launch**  
    - Name: `Red-Hat-DB-server`  
    - Public IP: Auto-assign Disabled 🔒  
    <img width="1920" height="980" alt="Screenshot (1793)" src="https://github.com/user-attachments/assets/9e09a099-ded4-4c92-a050-849e1c461768" />

16. **Public EC2 Instance Details**  
    - Public IP visible: `43.204.37.21` ✅  
    <img width="1920" height="980" alt="Screenshot (1794)" src="https://github.com/user-attachments/assets/dbea47a8-f314-4fce-b9e1-7ca055f61b2c" />

17. **SSH Connection Settings**  
    - MobaXterm settings: Remote host `43.204.37.21`, Port 22 🔑  
    <img width="1920" height="1080" alt="Screenshot (1795)" src="https://github.com/user-attachments/assets/658dab87-cc4a-4ca8-bf09-c43db48d5fc2" />

18. **SSH Connection Time-Out**  
    - Network error: `Connection timed out` ❌  
    <img width="1920" height="1080" alt="Screenshot (1797)" src="https://github.com/user-attachments/assets/456e82b7-1b93-4bd1-9bc1-8740f473fbaa" />

19. **VPC Resource Map Overview**  
    - Shows Public & Private Subnets, Route Tables, IGW, NAT Gateway 🌐  
    <img width="1920" height="980" alt="Screenshot (1799)" src="https://github.com/user-attachments/assets/9f8dc1c4-accf-4df5-aa40-93e7abbb82fd" />

20. **Route Table Subnet Association Check**  
    - Public-RT: no subnet associated yet ⚠️  
    <img width="1920" height="978" alt="Screenshot (1801)" src="https://github.com/user-attachments/assets/abe93646-1b24-41c3-98da-266b0143cead" />

21. **Public Route Table Subnet Association**  
    - Public-Subnet associated with Public-RT ✅  
    <img width="1920" height="980" alt="Screenshot (1802)" src="https://github.com/user-attachments/assets/631a7b8a-3089-4764-831b-a340edc1ba68" />

22. **Private Route Table Subnet Association**  
    - Private-Subnet associated with Private-RT ✅  
    <img width="1920" height="979" alt="Screenshot (1803)" src="https://github.com/user-attachments/assets/cfc9bc6f-1aad-4646-a4e7-13fa4e84ac19" />

23. **Public Instance Shell Access**  
    - Successful SSH login to Public EC2 🖥️  
    <img width="1920" height="1080" alt="Screenshot (1806)" src="https://github.com/user-attachments/assets/f6cc60ba-326f-4b03-a8b7-25f7be297e66" />

24. **Private EC2 Instance Details**  
    - Private IP: `192.168.2.145` 🔒  
    <img width="1920" height="978" alt="Screenshot (1810)" src="https://github.com/user-attachments/assets/375c5cdd-4ede-40c3-a6bd-d835516814ad" />

25. **Private Instance Connect Failure**  
    - EC2 Instance Connect fails: no public IPv4 ❌
    <img width="1920" height="979" alt="Screenshot (1813)" src="https://github.com/user-attachments/assets/8a0c998c-550c-4438-8fe6-4733c99270b5" />

26. **Private Instance Connection Instructions**  
    - Connect via Private IP: `192.168.2.145` 🔑  
    <img width="1920" height="977" alt="Screenshot (1812)" src="https://github.com/user-attachments/assets/a2579433-e6d6-48f6-8505-15e4c1d55ebe" />
    
27. **Private Key Content Display**  
    - File: `MyKey.pem` for SSH authentication 💾  
    <img width="1920" height="1080" alt="Screenshot (1811)" src="https://github.com/user-attachments/assets/1e342102-3674-4da5-bc4e-8023ef6dc0f4" />

28. **AWS CLI Installation and Connection Attempt**  
    - Installed AWS CLI v2  
    - SSH attempt with proper permissions `chmod 400 MyKey.pem` ✅  
    <img width="1920" height="1080" alt="Screenshot (1815)" src="https://github.com/user-attachments/assets/22ced4f0-a100-4239-9349-ba75c2f55083" />

29. **Updated Security Group Inbound Rules ( Updated SG )** 
    - All traffic allowed from `MY-SG` + SSH from public IP 🔒  
    <img width="1920" height="979" alt="Screenshot (1816)" src="https://github.com/user-attachments/assets/a1c0a996-c19b-47b4-a366-030ec17eeca5" />

30. **Internal SSH from Public → Private Instance**  
    - SSH via Private IP `192.168.2.145` ✅  
    <img width="1920" height="1080" alt="Screenshot (1817)" src="https://github.com/user-attachments/assets/55c1f88a-9e13-405f-a15f-b14dcec24d95" />

31. **Public EC2 Ping Test (Success)**  
    - Ping google.com success 🌐  
    <img width="1920" height="1080" alt="Screenshot (1820)" src="https://github.com/user-attachments/assets/d8661105-84bc-4753-bf83-ecb66a5c7f71" />

32. **Edit Private Route Table Route Edit**  
    - Removed NAT Gateway 🔄  
    <img width="1920" height="979" alt="Screenshot (1822)" src="https://github.com/user-attachments/assets/e2182e86-6dd5-4949-9120-f828f88f6a12" />

33. **Private EC2 Ping Test (Failure)**  
    - Ping google.com failed initially ❌  
    <img width="1920" height="1080" alt="Screenshot (1823)" src="https://github.com/user-attachments/assets/be2be96b-c4b9-49e9-bdd1-d3a32cc13155" />

---

## ✅ Outcome
- Functional VPC with public & private subnets  
- Public EC2 accessible via SSH  
- Private EC2 accessible via Public EC2  
- Routing and NAT setup correctly 🌐  

---

## 📚 Key Learnings & Observations
- Always associate subnets with Route Tables ⚠️  
- Security Groups must allow internal traffic 🛡️  
- NAT Gateway allows outbound internet, not inbound 🌍  
- AWS CLI installation may require bundle installer for RHEL 10 💡  

---

## 🌍 Real-World Use Case
- Multi-tier apps: Public Web Server + Private DB Server 🏢  
- Bastion host for private instance management 🔑  
- Controlled outbound internet for security compliance 🔒  

---

## 🏷️ Tags
`#AWS #VPC #EC2 #NATGateway #IGW #Networking #CloudInfra #SecurityGroup #RHEL #BastionHost`  

---

## 💡 Tips
- Verify Subnet → Route Table association first 🛣️  
- Use SG referencing itself for internal communication 🔒  
- Step-by-step testing: Public SSH → Private SSH → Internet ping 🌐  
- Use AWS CLI bundle installer for RHEL 10 💻  
