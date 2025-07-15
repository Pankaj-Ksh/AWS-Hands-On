# 🚀 Amazon EC2 (Elastic Compute Cloud) – Pricing Models

---

EC2 offers **5 different pricing models** to suit different workloads and budgets:

---

### 1️⃣ On-Demand Instances

- 💵 **Fixed hourly pricing**
- 🧾 Pay for what you use — **per hour**
- 🚫 No long-term commitment
- 🚫 No upfront payment
- ❓ Good for unpredictable workloads

---

### 2️⃣ Reserved Instances (RI)

- 📅 **Long-term commitment** (1 or 3 years)
- 💰 Up to **72–75% discount** on hourly rate
- 🔒 Suitable for predictable, steady-state usage

**Types of RIs:**
1. ✅ **Standard RI** – Up to **75% discount**
2. 🔁 **Convertible RI** – Change instance family/type anytime
3. 📆 **Scheduled RI** – Reserve for specific times (e.g., every Monday 9 AM–12 PM)

---

### 3️⃣ Spot Instances

- ⚖️ **Bidding/Auction-based model**
- 📉 Up to **90% discount**
- 🌐 Ideal for fault-tolerant, flexible workloads
- 🚨 Can be interrupted by AWS with 2-minute notice

---

### 4️⃣ Dedicated Hosts

- 🖥️ **Physical server** dedicated for your use
- 💼 Use case: Bring your own license (BYOL), regulatory compliance
- 🧩 Multiple VMs can run on a single dedicated host

---

### 5️⃣ Savings Plans

- 🧮 Commit to consistent usage (measured in $/hour) for 1 or 3 years
- 🎯 Similar to RI but more flexible
- 🔄 Apply to any instance family, region, OS, tenancy

---

## 📝 Summary

| Model             | Discount | Commitment | Best For                              |
|------------------|----------|------------|----------------------------------------|
| On-Demand        | ❌ None  | ❌ None    | Short-term, unpredictable workloads     |
| Reserved Instance| ✅ 75%   | ✅ 1–3 yrs | Predictable, steady usage               |
| Spot             | ✅ 90%   | ❌ None    | Flexible, interruptible workloads       |
| Dedicated Host   | ❌ None  | ✅ Optional| Compliance, BYOL, physical isolation    |
| Savings Plan     | ✅ 66–72%| ✅ 1–3 yrs | Flexible pricing with RI-like savings   |

---
