# 💸 AWS Billing Alarm in INR (₹) using CloudWatch and SNS

This hands-on project demonstrates how to set up a billing alarm in **Amazon CloudWatch** using the **INR currency**, receive alerts via **SNS (email notification)**, and troubleshoot region-based limitations for billing alarms.

---

## 🎯 Objective

- Learn how to monitor AWS billing charges using **CloudWatch**.
- Set up an alarm when charges exceed a set threshold (₹120 INR).
- Integrate **Amazon SNS** to receive email notifications.
- Understand region-specific limitations for billing alarms.

---

## 🏗 Architecture
   <img width="6507" height="2214" alt="image" src="https://github.com/user-attachments/assets/018d8a1b-6cd4-4d6c-bf0a-9f7ab85da371" />

---

## 🔧 Steps Performed

### 📍 Step 1: Identify Region Limitation

1. Open the **CloudWatch Dashboard** in the **Mumbai (ap-south-1)** region.
2. ⚠️ **Observation**: There is **no option to create Billing alarms** in the Mumbai region.

📸 *Screenshot Placeholder: CloudWatch dashboard (Mumbai region - Billing option missing)*
<img width="1920" height="927" alt="Screenshot (721)" src="https://github.com/user-attachments/assets/5575ed46-a32d-408a-8268-2f641f96edc7" />

---

### 🌍 Step 2: Switch to N. Virginia (us-east-1)

3. Changed the region to **N. Virginia (us-east-1)** — billing alarms **can only be created in this region**.

📸 *Screenshot Placeholder: CloudWatch dashboard (N. Virginia region - Billing option available)*
<img width="1920" height="932" alt="Screenshot (722)" src="https://github.com/user-attachments/assets/f7a7c081-f07b-4816-bd1b-00311d301ec5" />

---

### 📊 Step 3: Create Billing Alarm

#### 🔹 Step 3.1: Specify Metric

4. Select:
   - **Namespace**: `AWS/Billing`
   - **Currency**: `INR`

📸 *Screenshot Placeholder: Billing metric selection (INR)*
<img width="1920" height="933" alt="Screenshot (723)" src="https://github.com/user-attachments/assets/358660d7-17a2-461a-9886-2f070f5d43c9" />

---

#### 🔹 Step 3.2: Set Condition

5. Set condition:
   - **Threshold**: `EstimatedCharges ≥ 120 INR`

📸 *Screenshot Placeholder: Alarm threshold condition (≥ ₹120)*
<img width="1920" height="883" alt="Screenshot (724)" src="https://github.com/user-attachments/assets/1d8a45a2-03f8-42b3-8ffa-386f8a6eccd9" />

---

#### 🔹 Step 3.3: Configure Notification

6. Set up **Alarm State Trigger**.
7. Created a **new SNS topic** named: `Billing_Alarms_Topic`.
   - **Email endpoint** added and confirmed.

📸 *Screenshot Placeholder: SNS topic creation and email subscription*
<img width="1920" height="933" alt="Screenshot (725)" src="https://github.com/user-attachments/assets/ba808fea-4013-48c9-8797-e4fe33ed270e" />

---

#### 🔹 Step 3.4: Name and Review

8. Alarm Name: `Billing-Alarm`
9. (Optional) Description added

📸 *Screenshot Placeholder: Alarm name & description*
<img width="1920" height="813" alt="Screenshot (726)" src="https://github.com/user-attachments/assets/2ec28748-5810-4a2f-9a95-93f3fd6d3936" />

10. Clicked **Preview and Create**

---

### 📈 Step 4: Verify Alarm and SNS

11. Verified the alarm on **CloudWatch Alarms dashboard**.

📸 *Screenshot Placeholder: Billing-Alarm on CloudWatch dashboard*
<img width="1920" height="930" alt="Screenshot (727)" src="https://github.com/user-attachments/assets/1e9efac1-7964-49d2-9c8e-ab64f95f3165" />

12. Opened **Amazon SNS Dashboard** and confirmed:
   - Topic: `Billing_Alarms_Topic`
   - Email Status: ✅ Confirmed
   - Protocol: Email

📸 *Screenshot Placeholder: SNS Topic email confirmed*
<img width="1920" height="840" alt="Screenshot (728)" src="https://github.com/user-attachments/assets/2207bb5c-2559-4641-b2e1-b6b5b24acbdb" />

---

### 🌐 Step 5: Compare Regional Dashboards

13. Compared **Billing dashboards of Mumbai vs. N. Virginia** in a **side-by-side view**.

📸 *Screenshot Placeholder: Billing dashboards of both regions side by side*
<img width="1920" height="906" alt="Screenshot (731)" src="https://github.com/user-attachments/assets/34630a6c-b0b7-45aa-b08a-ed2e5812e36e" />

---

### 🧾 Step 6: View Actual Billing

14. Checked **root account July bill** — showing **$0.89** which is approx **₹73.87 INR** at current rate.

📸 *Screenshot Placeholder: Billing page showing for July 2025*
<img width="1920" height="980" alt="Screenshot (1438)" src="https://github.com/user-attachments/assets/e1f1d862-a3da-4c6a-9c79-e7c9fad0ea67" />

📸 *Screenshot Placeholder: Billing page showing for August 2025*
<img width="1920" height="981" alt="Screenshot (1437)" src="https://github.com/user-attachments/assets/a8100014-3f4a-45ec-bba2-8c837523a397" />

---

## ✅ Outcome

- Billing Alarm created successfully in **N. Virginia region**.
- Email notification configured and confirmed via SNS.
- ₹120 alarm threshold properly set and visible in CloudWatch.
- Verified account usage charges in **both INR and USD**.
- ✅ **Alarm has not been deleted — it is retained for personal cost monitoring.**
- 🔁 **This alarm will automatically reset every month** and trigger again if monthly bill crosses ₹120.
- ❗**This monthly reset is the default AWS behavior** and **cannot be changed or customized**.

---

## 📚 Key Learnings & Observations

- Billing alarms can **only be created in `us-east-1` (N. Virginia)** region.
- The **preferred currency (INR)** must be set in **Billing Preferences** to see cost in rupees.
- Even if you set INR, actual AWS billing is calculated in USD.
- SNS is essential for **email-based alarm notifications**.
- Currency changes may take a while to reflect across all billing sections.
- 🔁 **Billing metric resets automatically on the 1st of each month.**
- ⚠️ **This reset behavior is built-in and cannot be overridden.**

---

## 🌍 Real-World Use Case

This billing alarm setup is useful for:

- 🧑‍💻 **DevOps engineers** managing multiple AWS accounts and needing monthly usage alerts.
- 🏢 **Organizations with fixed monthly cloud budgets**, where exceeding limits can impact financial planning.
- 🏫 **Cloud computing learners or students** tracking their Free Tier usage to avoid unexpected charges.
- 🏪 **Small businesses or e-commerce startups** running on AWS who want to control operational costs with alerts.
- 🔁 **Ongoing monitoring setup**: The billing alarm is **retained and remains active** for continuous monthly monitoring.  
- AWS **automatically resets billing metrics to ₹0 on the 1st of every month** by default — this keeps the alarm functional for each billing cycle.

---

## 💬 FAQ

### ❓ Will the billing alarm trigger every month?
> ✅ Yes. The `EstimatedCharges` metric resets to ₹0 on the **1st of each month**. If the total charges cross ₹120 in any month, the alarm will trigger again.

### ❓ Do I need to recreate the alarm every month?
> ❌ No. Once created, the alarm remains active month after month.

### ❓ Can I receive alerts multiple times in the same month?
> ⚠️ Not by default. To do that:
> - Enable **repeating actions**, or
> - Create multiple alarms at different thresholds (₹100, ₹200, etc.).

### ❓ Can I change the reset behavior of the billing metric?
> ❌ No. AWS does **not allow** changing the reset interval. It is **monthly by design** and reflects **monthly cumulative usage** only.

---

## 📂 Advanced Alternatives

If you want more control over billing visibility or time windows:

### 🧮 Use **AWS Budgets**
- Define custom billing thresholds
- Track by **service**, **linked account**, or **tags**
- Supports email or SNS notifications

### 📈 Use **AWS Cost Explorer**
- Visual trends of usage and cost
- Custom date ranges and filters

---

## 🏷️ Tags

`AWS` `CloudWatch` `Billing Alarm` `SNS` `INR` `Cost Monitoring` `Root Account` `us-east-1` `Real-world Hands-on`

---
## 💡 Tips

- Always switch to **us-east-1** for any billing alarm configuration.
- Confirm your **SNS subscription email** to receive alerts.
- Regularly review your **Billing Preferences** and budgets.
- Use **Cost Explorer** to get visual trends of usage and forecast.
> - AWS Billing Alarms reset every month. At the start of each month, the `EstimatedCharges` metric may show **"Insufficient data"** until new charges begin accumulating for the current month.
> - To view detailed billing for the **previous month**, sign in with the **root user** and go to the **Billing Dashboard** from the AWS Console.
---
