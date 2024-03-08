---
toc: true
comments: true
layout: post
title: Safe Computing
courses: { compsci: {week: 7} }
type: hacks
---

### Essential Knowledge:

<font color="yellow">

**IOC-2.A.5** Technology enables the collection, use, and exploitation of information about, by, and for individuals, groups, and institutions.

**IOC-2.A.6** Search engines can use search history to suggest websites or for targeted marketing.

**IOC-2.A.7** Disparate personal data, such as geolocation, cookies, and browsing history, can be aggregated to create knowledge about an individual.

**IOC-2.B** Explain how computing resources can be protected and can be misused.

**IOC-2.C** Explain how unauthorized access to computing resources is gained.

</font>

# Safe Computing

<font color="yellow">

**IOC-2.A.5** Technology enables the collection, use, and exploitation of information about, by, and for individuals, groups, and institutions.

**IOC-2.A.6** Search engines can use search history to suggest websites or for targeted marketing.

**IOC-2.A.7** Disparate personal data, such as geolocation, cookies, and browsing history, can be aggregated to create knowledge about an individual.

</font>

## Personal Identifiable Information (PII)

Personal Identifiable Information (PII): Information about someone that can be used to identify them.

- Name
- Race
- Age
- Phone number
- DOB
- Email
- Address
- Credit Card
- Medical Information 
- Biometric Data

Credit card, medical, and biometric information cannot be shared without your consent.

Others can use it to steal your identity, money, or other personal information.

Search engines collect information without you knowing. They collect information about a user’s devices, networks, and websites visited and often use it to suggest things for you. The information we put out there is often there permanently.

### Good and bad things about PII

Good:

- It can be used to enhance user experience by suggesting things that you like
- The user can access websites and other info by looking at their history

Bad:

- Others can exploit it to access a user’s personal information
- Ex: If you book a trip to another country, this is what happens
  - The search engine knows all the details of your trip, such as dates, places, hotels, etc.
  - The second you search something up, it knows your IP address and email (from your user info)
  - Your internet service provider provides your name and address
  - The federal government has access to where you are traveling
  - Dozens of sites are tracking your information via your use of cookies
  - And even when you don’t have a device, cameras might be tracking you

**Risk to Privacy**

- Information you put online is very difficult to delete
- Information that you put online, knowingly or unknowingly can be used to know very personal information that you might not intend to share.

### <font color = "Green">Popcorn Hack 1:</font> 

List at least three apps or websites that might use PII:

- 1: Amazon
- 2: Hospitals
- 3: College Board

## Authentication

<font color="yellow">

**IOC-2.B** Explain how computing resources can be protected and can be misused.

</font>

Authentication measures protect devices and information from unauthorized access.

Authentication measures:

- Strong passwords

  - 10 or more characters
  - Must contain a symbol
  - Must contain a number
  - Must contain lowercase and uppercase letters

Multi-Factor Authentication 

- Types of Authentication:

  - What You Know (IE: Your Password)
  - What You Have (IE: Personal Information)
  - What You Are (IE: Fingerprint)

- Why Use? 

  - Multi-Factor Authentication ensures that there's two steps before gaining access to personal or important information instead of strictly using a password. Examples of this are connecting phone numbers to accounts or connecting emails to accounts.

- Viruses and Malware:

  - Viruses: Malicious programs that can copy themselves and gain access to systems that they are not supposed to be allowed in
  - Malware: Often intended to damage a computing system or take partial control over its operation
    - It can infiltrate a system by posing as legitimate programs or by attaching itself to legitimate programs, like an email attachment
  - Virus scans can help to prevent malicious code from getting into and affecting your system

Encryption and Decryption:

- Once legitimate access to a system is gained, it is important to ensure data sent to and from the system remains uncompromised

- Encryption: The process of encoding data to prevent unauthorized access
- Decryption: The process of decoding data
  - Two Types
    - Symmetric Encryption: one key used to both encrypt and decrypt data (IE: Caesar Cipher)
    - Asymmetric encryption
      - Public Key Encryption: uses two keys
        - A public key for encrypting
        - A private key for decrypting
      - A sender does not need the receiver’s private key to encrypt a message
      - The receiver’s private key IS required to decrypt the message

Digital certificates:

A certificate authorities issue digital certificates that validate the ownership of encryption keys used in secure communication and are based on a trust model. It makes sure that the decryption key that people receive are issued by users or owners that own a true trusted key.

### <font color = "Green">Popcorn Hack 2:</font>

Create an encrypted code using symmetric encryption, and provide the code, and the actual message:
Key: 5
Code: F HTRUZYJW UWTLWAR
Message: A COMPUTER PROGRAM

## Risk Factors

<font color="yellow">

**IOC-2.C** Explain how computing resources can be protected and can be misused.

</font>

- Phishing: Tricking a user into giving personal information such as usernames, passwords, account numbers, or social security numbers.
  - Phishing emails: These emails look like companies you know and trust. These fake emails will trick you into clicking a link or an attachment
    - These links will either put a virus on your computer, send you to a website that looks like the real thing,  or a keylogger.
- Keylogger: records keys typed on the keyboard to gain access to a username, password, or any other personal information.
  - How do keyloggers get onto your computer?
    - One way is by plugging in a physical device to your computer.
    - Phishing emails through links
    - Clicking on a bad website
- Rogue access point: wireless network giving unauthorized access to secure networks
  - People intercept data traveled as it travels through networks.
    - Ex: A router installed in a secure network within an organization. A person could easily access the network and install any software, intercept communication, or steal network information.
  - Normal people trying to access their computers more easily leads to a lack of security. This makes it easy for other people to access the network.

### <font color = "Green">Popcorn Hack 3:</font>

Go to a website that checks your password and make a strong password.

Original password: hello (fake) New password: H3II0_#^ _ ^ (fake)

### Homework

**Please answer these questions and send them to Daniel Lee on Slack. Graded on accuracy. Write at least 2-3 sentences.**

What is Personal Identifiable Information (PII), and list three examples of it?
Personal identifiable information is 

PII is used to identify people using their personal information. Three examples of this are: name, address, and phone number.

What is a possible risk or cons to using PII?

If given on seemingly safe sites, PII can be used by hackers or makers of phishing scams to pose as the person the PII belongs to. PII can also be used to take money from users or expose personal information, such as medical information.

What are traits of a strong password?

A strong password is over 10 characters long and has upper and lowercase letters. It also includes numbers and special characters, like symbols.

What does having a strong password prevent?

Having a strong password prevents hackers from accessing others' PII. The password is now longer and with multiple characters, making it difficult to guess it as there are now multiple combinations of what it could be. 

What are the two types of decryption and what is the difference between the two?

The two types of decryption are symmetric and asymmetric encryption. Symmetric encrypction involves a coded message that anyone can access using the same key to encrypt and decrypt the message. However, in asymmetric encryption, two keys are used: one for the sender and one for the reciever. The sender's key is public and allows anyone to see the encrypted code while the reciever's key is private and allows only the reciever to decrypt the code and see the actual message. 

What is phishing?

Phishing is a way to get access to personal information by scamming the user with fake emails from trusted sites. These emails look like real emails from the actual sites but include fake links. Once these links are clicked, a virus might be installed on the user's computer, or a keylogger will be added. These links look like they are from the real site, but come from a mailbox and could possibly be misspelled. 

What is a way a keylogger can get into your computer?

A keylogger can get into your computer through phishing emails or by plugging in a physical device to your computer. The keylogger tracks the user's movements when they press keys in order to learn their passwords and hack into their private accounts. 

What is a rogue access point and how is it used?

A rogue access point are unauthorized access points into secure networks. It is used by connecting to a wireless network or hotspot. They are of two types: active and passive. Passive access involves knowing personal info but not manipulating it while active access involves actually changing personal info in order to get access to users' Internet searches.

Due after winter break