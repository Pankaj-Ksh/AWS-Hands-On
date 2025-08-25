# 🛠️ AWS CLI Installation and Configuration on Linux EC2

This guide provides a comprehensive, step-by-step walkthrough for installing and configuring the AWS Command Line Interface (CLI) on a Linux-based Amazon EC2 instance. This process is essential for managing your AWS resources programmatically from your server.

---

### 📌 Prerequisites

* 🖥️ An active AWS account
* 👤 An IAM user with appropriate permissions (e.g., `AdministratorAccess`)
* 🖥️ An EC2 instance with a Linux operating system (e.g., Red Hat, Amazon Linux)
* 🔑 An associated key pair to connect to the instance via SSH
* 🔒 A security group rule allowing inbound SSH traffic from your IP address

---

### Step 1: Install AWS CLI Prerequisites

First, connect to your EC2 instance via SSH and prepare the environment for the AWS CLI installation.

1. 👤 **Switch to the root user**:
    ```bash
    sudo -s
    ```

2. 🔍 **Check for existing AWS CLI installation**: This command will tell you if the CLI is already installed. If you see a "command not found" error, you can proceed with the installation.
    ```bash
    aws --version
    ```

3. 💾 **Get the latest installer**: Refer to the official [AWS CLI user guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) to get the most up-to-date download link.
    ```bash
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    ```

4. 📁 **Verify the downloaded file**:
    ```bash
    ls
    ```
    *You should see `awscliv2.zip` in the directory.*

5. 🛠️ **Install the unzip utility**: The unzip utility may not be installed by default. Use your system's package manager to install it.
    ```bash
    yum install -y unzip
    ```

6. 📂 **Unzip the installer file**:
    ```bash
    unzip awscliv2.zip
    ```
    *This will create a new directory named `aws`.*

7. ✅ **Verify the extracted files**:
    ```bash
    ls
    ```
    *You should now see both `awscliv2.zip` and the new `aws` directory.*

---

### Step 2: Install and Configure the AWS CLI

Now that you have the installer files, you can proceed with the installation and link it to your AWS account.

1. 🏗️ **Run the installation script**:
    ```bash
    ./aws/install
    ```
    *This will install the AWS CLI executable to `/usr/local/bin/aws`.*

2. 🔍 **Check the installed version**:
    ```bash
    /usr/local/bin/aws --version
    ```

3. ⚙️ **Configure your AWS credentials**: This is the most critical step. You will need the **Access Key ID** and **Secret Access Key** for your IAM user.
    ```bash
    /usr/local/bin/aws configure
    ```
    *The prompt will ask for four pieces of information:*
    - 🔑 `AWS Access Key ID`: Paste the ID you copied from the IAM console
    - 🔐 `AWS Secret Access Key`: Paste the secret key you copied
    - 🌍 `Default region name`: Enter your preferred AWS region (e.g., `us-east-1`, `ap-south-1`)
    - 📊 `Default output format`: Enter `table` for a clean, readable output

---

### Step 3: Verify Your Configuration

Confirm that your credentials are saved correctly and the CLI is ready for use.

1. ✅ **Test with an AWS command**:
    ```bash
    aws ec2 describe-instances --output table
    ```
    *If successful, this command will return a table showing your EC2 instances.*

2. 📁 **Navigate to the configuration directory**:
    ```bash
    cd ~/.aws
    ```

3. 🔍 **List the configuration files**:
    ```bash
    ls
    ```
    *You should see two files: `config` and `credentials`.*

4. 📄 **View the content of the files**: You can use `cat` to view the content of these files, which contain the access keys and default settings.
    ```bash
    cat config
    cat credentials
    ```
