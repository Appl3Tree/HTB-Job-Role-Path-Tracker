/* src/data/jobRolePaths.ts */
export type JobRolePathModule = {
    key: string; // canonical key shared across paths
    name: string;
    order: number;
};

export type JobRolePath = {
    id: string;
    name: string;
    cert?: string;
    modules: JobRolePathModule[];
};

function slugify(value: string): string {
    return value
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[()]/g, " ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function makeModule(name: string, order: number): JobRolePathModule {
    return {
        key: slugify(name),
        name,
        order,
    };
}

export const JOB_ROLE_PATH_ORDER: string[] = [
    "Web Penetration Tester",
    "Senior Web Penetration Tester",
    "AI Red Teamer",
    "Penetration Tester",
    "Active Directory Penetration Tester",
    "Wi-Fi Penetration Tester",
    "SOC Analyst",
    "Junior Cybersecurity Analyst"
];

const RAW_JOB_ROLE_PATHS: JobRolePath[] = [
    {
        id: "ai-red-teamer",
        name: "AI Red Teamer",
        cert: undefined,
        modules: [
            makeModule("Fundamentals of AI", 1),
            makeModule("Applications of AI in InfoSec", 2),
            makeModule("Introduction to Red Teaming AI", 3),
            makeModule("Prompt Injection Attacks", 4),
            makeModule("LLM Output Attacks", 5),
            makeModule("AI Data Attacks", 6),
            makeModule("Attacking AI - Application and System", 7),
            makeModule("AI Evasion - Foundations", 8),
            makeModule("AI Evasion - First-Order Attacks", 9),
            makeModule("AI Evasion - Sparsity Attacks", 10),
            makeModule("AI Privacy", 11),
            makeModule("AI Defense", 12),
        ]
    },
    {
        id: "active-directory-penetration-tester",
        name: "Active Directory Penetration Tester",
        cert: "HTB Certified Active Directory Pentesting Expert (HTB CAPE)",
        modules: [
            makeModule("Active Directory Enumeration & Attacks", 1),
            makeModule("Active Directory LDAP", 2),
            makeModule("Active Directory PowerView", 3),
            makeModule("Active Directory BloodHound", 4),
            makeModule("Windows Lateral Movement", 5),
            makeModule("Using CrackMapExec", 6),
            makeModule("Kerberos Attacks", 7),
            makeModule("DACL Attacks I", 8),
            makeModule("DACL Attacks II", 9),
            makeModule("NTLM Relay Attacks", 10),
            makeModule("ADCS Attacks", 11),
            makeModule("Active Directory Trust Attacks", 12),
            makeModule("Intro to C2 Operations with Sliver", 13),
            makeModule("Introduction to Windows Evasion Techniques", 14),
            makeModule("MSSQL, Exchange, and SCCM Attacks", 15),
        ]
    },
    {
        id: "junior-cybersecurity-analyst",
        name: "Junior Cybersecurity Analyst",
        cert: "HTB Certified Junior Cybersecurity Associate (HTB CJCA)",
        modules: [
            makeModule("Introduction to Information Security", 1),
            makeModule("Network Foundation", 2),
            makeModule("Introduction to Networking", 3),
            makeModule("Linux Fundamentals", 4),
            makeModule("Introduction to Bash Scripting", 5),
            makeModule("Windows Fundamentals", 6),
            makeModule("Introduction to Windows Command Line", 7),
            makeModule("Web Requests", 8),
            makeModule("Introduction to Web Applications", 9),
            makeModule("Introduction to Penetration Testing", 10),
            makeModule("Pentest in a Nutshell", 11),
            makeModule("Network Enumeration with Nmap", 12),
            makeModule("Footprinting", 13),
            makeModule("Hacking WordPress", 14),
            makeModule("Using the Metasploit Framework", 15),
            makeModule("Intro to Network Traffic Analysis", 16),
            makeModule("Incident Handling Process", 17),
            makeModule("Windows Event Logs & Finding Evil", 18),
            makeModule("Security Monitoring & SIEM Fundamentals", 19),
            makeModule("Introduction to Threat Hunting & Hunting With Elastic", 20),
        ]
    },
    {
        id: "penetration-tester",
        name: "Penetration Tester",
        cert: "HTB Certified Penetration Testing Specialist (HTB CPTS)",
        modules: [
            makeModule("Penetration Testing Process", 1),
            makeModule("Getting Started", 2),
            makeModule("Network Enumeration with Nmap", 3),
            makeModule("Footprinting", 4),
            makeModule("Information Gathering - Web Edition", 5),
            makeModule("Vulnerability Assessment", 6),
            makeModule("File Transfers", 7),
            makeModule("Shells & Payloads", 8),
            makeModule("Using the Metasploit Framework", 9),
            makeModule("Password Attacks", 10),
            makeModule("Attacking Common Services", 11),
            makeModule("Pivoting, Tunneling, and Port Forwarding", 12),
            makeModule("Active Directory Enumeration & Attacks", 13),
            makeModule("Using Web Proxies", 14),
            makeModule("Attacking Web Applications with Ffuf", 15),
            makeModule("Login Brute Forcing", 16),
            makeModule("SQL Injection Fundamentals", 17),
            makeModule("SQLMap Essentials", 18),
            makeModule("Cross-Site Scripting (XSS)", 19),
            makeModule("File Inclusion", 20),
            makeModule("File Upload Attacks", 21),
            makeModule("Command Injections", 22),
            makeModule("Web Attacks", 23),
            makeModule("Attacking Common Applications", 24),
            makeModule("Linux Privilege Escalation", 25),
            makeModule("Windows Privilege Escalation", 26),
            makeModule("Documentation & Reporting", 27),
            makeModule("Attacking Enterprise Networks", 28),
        ]
    },
    {
        id: "soc-analyst",
        name: "SOC Analyst",
        cert: "HTB Certified Defensive Security Analyst (HTB CDSA)",
        modules: [
            makeModule("Incident Handling Process", 1),
            makeModule("Security Monitoring & SIEM Fundamentals", 2),
            makeModule("Windows Event Logs & Finding Evil", 3),
            makeModule("Introduction to Threat Hunting & Hunting With Elastic", 4),
            makeModule("Understanding Log Sources & Investigating with Splunk", 5),
            makeModule("Windows Attacks & Defense", 6),
            makeModule("Intro to Network Traffic Analysis", 7),
            makeModule("Intermediate Network Traffic Analysis", 8),
            makeModule("Working with IDS/IPS", 9),
            makeModule("Introduction to Malware Analysis", 10),
            makeModule("JavaScript Deobfuscation", 11),
            makeModule("YARA & Sigma for SOC Analysts", 12),
            makeModule("Introduction to Digital Forensics", 13),
            makeModule("Detecting Windows Attacks with Splunk", 14),
            makeModule("Security Incident Reporting", 15),
        ]
    },
    {
        id: "senior-web-penetration-tester",
        name: "Senior Web Penetration Tester",
        cert: "HTB Certified Web Exploitation Expert (HTB CWEE)",
        modules: [
            makeModule("Injection Attacks", 1),
            makeModule("Introduction to NoSQL Injection", 2),
            makeModule("Attacking Authentication Mechanisms", 3),
            makeModule("Advanced XSS and CSRF Exploitation", 4),
            makeModule("HTTPs/TLS Attacks", 5),
            makeModule("Abusing HTTP Misconfigurations", 6),
            makeModule("HTTP Attacks", 7),
            makeModule("Blind SQL Injection", 8),
            makeModule("Intro to Whitebox Pentesting", 9),
            makeModule("Modern Web Exploitation Techniques", 10),
            makeModule("Introduction to Deserialization Attacks", 11),
            makeModule("Whitebox Attacks", 12),
            makeModule("Advanced SQL Injections", 13),
            makeModule("Advanced Deserialization Attacks", 14),
            makeModule("Parameter Logic Bugs", 15),
        ]
    },
    {
        id: "web-penetration-tester",
        name: "Web Penetration Tester",
        cert: "HTB Certified Web Exploitation Specialist (HTB CWES)",
        modules: [
            makeModule("Web Requests", 1),
            makeModule("Introduction to Web Applications", 2),
            makeModule("Using Web Proxies", 3),
            makeModule("Information Gathering - Web Edition", 4),
            makeModule("Web Fuzzing", 5),
            makeModule("JavaScript Deobfuscation", 6),
            makeModule("Cross-Site Scripting (XSS)", 7),
            makeModule("SQL Injection Fundamentals", 8),
            makeModule("SQLMap Essentials", 9),
            makeModule("Command Injections", 10),
            makeModule("File Upload Attacks", 11),
            makeModule("Server-side Attacks", 12),
            makeModule("Login Brute Forcing", 13),
            makeModule("Broken Authentication", 14),
            makeModule("Web Attacks", 15),
            makeModule("File Inclusion", 16),
            makeModule("Attacking GraphQL", 17),
            makeModule("API Attacks", 18),
            makeModule("Attacking Common Applications", 19),
            makeModule("Bug Bounty Hunting Process", 20),
        ]
    },
    {
        id: "wi-fi-penetration-tester",
        name: "Wi-Fi Penetration Tester",
        cert: undefined,
        modules: [
            makeModule("Wi-Fi Penetration Testing Basics", 1),
            makeModule("Attacking Wi-Fi Protected Setup (WPS)", 2),
            makeModule("Wired Equivalent Privacy (WEP) Attacks", 3),
            makeModule("Attacking WPA/WPA2 Wi-Fi Networks", 4),
            makeModule("Wi-Fi Evil Twin Attacks", 5),
            makeModule("Attacking WPA3 Wi-Fi Networks", 6),
            makeModule("Bypassing Wi-Fi Captive Portals", 7),
            makeModule("Wi-Fi Password Cracking Techniques", 8),
            makeModule("Wi-Fi Penetration Testing Tools and Techniques", 9),
            makeModule("Attacking Corporate Wi-Fi Networks", 10),
        ]
    },
];

export const JOB_ROLE_PATHS: JobRolePath[] = RAW_JOB_ROLE_PATHS.slice().sort((a, b) => {
    const ai = JOB_ROLE_PATH_ORDER.indexOf(a.name);
    const bi = JOB_ROLE_PATH_ORDER.indexOf(b.name);

    if (ai === -1 && bi === -1) return a.name.localeCompare(b.name);
    if (ai === -1) return 1;
    if (bi === -1) return -1;

    return ai - bi;
});

