import type { Product } from '../types';

export const products: Product[] = [
  // Laptops
  {
    id: "1",
    sku: "LAP-DEL-001",
    name: "Dell Latitude 5520 Business Laptop",
    slug: "dell-latitude-5520",
    category: "laptops",
    shortDescription: "Professional business laptop with Intel Core i7 processor and enterprise-grade security features.",
    longDescription: "The Dell Latitude 5520 is designed for business professionals who need reliable performance and security. Features include Intel Core i7-1165G7 processor, 16GB RAM, 512GB SSD, and comprehensive security features including TPM 2.0 and fingerprint reader.",
    specifications: {
      "Processor": "Intel Core i7-1165G7 (11th Gen)",
      "Memory": "16GB DDR4 RAM",
      "Storage": "512GB NVMe SSD",
      "Display": "15.6\" FHD (1920x1080) Anti-Glare",
      "Graphics": "Intel Iris Xe Graphics",
      "Operating System": "Windows 11 Pro",
      "Battery": "4-cell 63Wh",
      "Weight": "1.79 kg",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.1, USB-C, HDMI",
      "Security": "TPM 2.0, Fingerprint Reader, Smart Card Reader"
    },
    images: ["/images/products/dell-latitude-5520-1.jpg", "/images/products/dell-latitude-5520-2.jpg"],
    manufacturer: "Dell Technologies",
    warranty: "3 years ProSupport",
    stockStatus: "in-stock",
    priceRange: "$1,200 - $1,500",
    seoMeta: {
      title: "Dell Latitude 5520 Business Laptop - TechSolutions Uganda",
      description: "Professional Dell Latitude 5520 laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for business use in Uganda.",
      keywords: ["dell laptop", "business laptop", "latitude 5520", "uganda", "professional laptop"]
    }
  },
  {
    id: "2",
    sku: "LAP-HP-001",
    name: "HP EliteBook 840 G8",
    slug: "hp-elitebook-840-g8",
    category: "laptops",
    shortDescription: "Premium business laptop with advanced security and collaboration features for modern professionals.",
    longDescription: "The HP EliteBook 840 G8 combines performance, security, and collaboration features in a sleek design. Perfect for executives and professionals who need reliable computing power with enterprise-grade security.",
    specifications: {
      "Processor": "Intel Core i5-1135G7 (11th Gen)",
      "Memory": "8GB DDR4 RAM (Expandable to 32GB)",
      "Storage": "256GB NVMe SSD",
      "Display": "14\" FHD (1920x1080) IPS",
      "Graphics": "Intel Iris Xe Graphics",
      "Operating System": "Windows 11 Pro",
      "Battery": "3-cell 50.4Wh",
      "Weight": "1.32 kg",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.2, Thunderbolt 4",
      "Security": "HP Sure Start, HP Sure Sense, Fingerprint Reader"
    },
    images: ["/images/products/hp-elitebook-840-1.jpg", "/images/products/hp-elitebook-840-2.jpg"],
    manufacturer: "HP Inc.",
    warranty: "3 years HP Care Pack",
    stockStatus: "in-stock",
    priceRange: "$1,000 - $1,300",
    seoMeta: {
      title: "HP EliteBook 840 G8 Business Laptop - TechSolutions Uganda",
      description: "Premium HP EliteBook 840 G8 laptop with Intel Core i5, advanced security features. Available in Uganda.",
      keywords: ["hp laptop", "elitebook", "business laptop", "uganda", "premium laptop"]
    }
  },
  {
    id: "3",
    sku: "LAP-LEN-001",
    name: "Lenovo ThinkPad X1 Carbon Gen 9",
    slug: "lenovo-thinkpad-x1-carbon-gen9",
    category: "laptops",
    shortDescription: "Ultra-lightweight business laptop with legendary ThinkPad durability and performance.",
    longDescription: "The ThinkPad X1 Carbon Gen 9 is the ultimate business laptop, combining ultra-portability with enterprise-grade performance and security. Features carbon fiber construction and military-grade durability testing.",
    specifications: {
      "Processor": "Intel Core i7-1165G7 (11th Gen)",
      "Memory": "16GB LPDDR4x RAM",
      "Storage": "1TB NVMe SSD",
      "Display": "14\" WQUXGA (3840x2400) IPS",
      "Graphics": "Intel Iris Xe Graphics",
      "Operating System": "Windows 11 Pro",
      "Battery": "4-cell 57Wh",
      "Weight": "1.13 kg",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.2, Thunderbolt 4",
      "Security": "dTPM 2.0, Fingerprint Reader, IR Camera"
    },
    images: ["/images/products/thinkpad-x1-carbon-1.jpg", "/images/products/thinkpad-x1-carbon-2.jpg"],
    manufacturer: "Lenovo",
    warranty: "3 years Premier Support",
    stockStatus: "low-stock",
    priceRange: "$1,800 - $2,200",
    seoMeta: {
      title: "Lenovo ThinkPad X1 Carbon Gen 9 - Premium Business Laptop Uganda",
      description: "Ultra-lightweight ThinkPad X1 Carbon Gen 9 with Intel Core i7, 4K display. Premium business laptop in Uganda.",
      keywords: ["thinkpad", "x1 carbon", "lenovo", "premium laptop", "uganda", "business laptop"]
    }
  },

  // Desktops
  {
    id: "4",
    sku: "DES-DEL-001",
    name: "Dell OptiPlex 7090 Desktop",
    slug: "dell-optiplex-7090",
    category: "desktops",
    shortDescription: "Compact business desktop with powerful performance and comprehensive security features.",
    longDescription: "The Dell OptiPlex 7090 delivers reliable performance in a compact form factor. Ideal for office environments where space is premium but performance cannot be compromised.",
    specifications: {
      "Processor": "Intel Core i5-11500 (11th Gen)",
      "Memory": "8GB DDR4 RAM (Expandable to 64GB)",
      "Storage": "256GB NVMe SSD + 1TB HDD",
      "Graphics": "Intel UHD Graphics 750",
      "Operating System": "Windows 11 Pro",
      "Form Factor": "Small Form Factor (SFF)",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet",
      "Ports": "USB 3.2, USB-C, HDMI, DisplayPort",
      "Expansion": "PCIe x16, PCIe x1 slots available",
      "Security": "TPM 2.0, Chassis Intrusion Detection"
    },
    images: ["/images/products/dell-optiplex-7090-1.jpg", "/images/products/dell-optiplex-7090-2.jpg"],
    manufacturer: "Dell Technologies",
    warranty: "3 years ProSupport",
    stockStatus: "in-stock",
    priceRange: "$800 - $1,100",
    seoMeta: {
      title: "Dell OptiPlex 7090 Desktop Computer - TechSolutions Uganda",
      description: "Compact Dell OptiPlex 7090 desktop with Intel Core i5, perfect for business use. Available in Uganda.",
      keywords: ["dell desktop", "optiplex", "business computer", "uganda", "office desktop"]
    }
  },
  {
    id: "5",
    sku: "DES-HP-001",
    name: "HP EliteDesk 800 G8 Mini",
    slug: "hp-elitedesk-800-g8-mini",
    category: "desktops",
    shortDescription: "Ultra-compact desktop PC with enterprise performance in a space-saving design.",
    longDescription: "The HP EliteDesk 800 G8 Mini delivers full desktop performance in an ultra-compact form factor. Perfect for modern offices with limited space but demanding performance requirements.",
    specifications: {
      "Processor": "Intel Core i7-11700 (11th Gen)",
      "Memory": "16GB DDR4 RAM",
      "Storage": "512GB NVMe SSD",
      "Graphics": "Intel UHD Graphics 750",
      "Operating System": "Windows 11 Pro",
      "Form Factor": "Mini Desktop (1L)",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.2, Gigabit Ethernet",
      "Ports": "USB 3.2, USB-C, HDMI, DisplayPort",
      "Dimensions": "177 x 175 x 34.2 mm",
      "Security": "HP Sure Start, TPM 2.0, HP Sure Admin"
    },
    images: ["/images/products/hp-elitedesk-800-1.jpg", "/images/products/hp-elitedesk-800-2.jpg"],
    manufacturer: "HP Inc.",
    warranty: "3 years HP Care Pack",
    stockStatus: "in-stock",
    priceRange: "$1,200 - $1,500",
    seoMeta: {
      title: "HP EliteDesk 800 G8 Mini Desktop - Compact Business PC Uganda",
      description: "Ultra-compact HP EliteDesk 800 G8 Mini with Intel Core i7. Space-saving business desktop in Uganda.",
      keywords: ["hp desktop", "elitedesk", "mini pc", "compact desktop", "uganda", "business computer"]
    }
  },

  // Servers
  {
    id: "6",
    sku: "SRV-DEL-001",
    name: "Dell PowerEdge R750 Server",
    slug: "dell-poweredge-r750",
    category: "servers",
    shortDescription: "2U rack server with exceptional performance and scalability for demanding workloads.",
    longDescription: "The Dell PowerEdge R750 is a versatile 2U rack server designed for a wide range of workloads. Features the latest Intel Xeon processors and supports up to 8TB of memory for demanding enterprise applications.",
    specifications: {
      "Processor": "Intel Xeon Silver 4314 (16-core, 2.4GHz)",
      "Memory": "32GB DDR4 ECC RAM (Expandable to 8TB)",
      "Storage": "2x 480GB SSD + 4x 2TB HDD",
      "RAID": "PERC H755 RAID Controller",
      "Network": "4x 1GbE + 2x 10GbE SFP+",
      "Power Supply": "2x 800W Redundant PSU",
      "Form Factor": "2U Rack Mount",
      "Management": "iDRAC9 with Lifecycle Controller",
      "Expansion": "8x PCIe 4.0 slots",
      "Operating System": "Windows Server 2022 or Linux"
    },
    images: ["/images/products/dell-r750-1.jpg", "/images/products/dell-r750-2.jpg"],
    manufacturer: "Dell Technologies",
    warranty: "5 years ProSupport Plus",
    stockStatus: "in-stock",
    priceRange: "$8,000 - $12,000",
    seoMeta: {
      title: "Dell PowerEdge R750 Server - Enterprise Server Solutions Uganda",
      description: "High-performance Dell PowerEdge R750 2U rack server with Intel Xeon processors. Enterprise server in Uganda.",
      keywords: ["dell server", "poweredge", "rack server", "enterprise server", "uganda", "data center"]
    }
  },
  {
    id: "7",
    sku: "SRV-HP-001",
    name: "HPE ProLiant DL380 Gen10 Plus",
    slug: "hpe-proliant-dl380-gen10-plus",
    category: "servers",
    shortDescription: "Industry-leading 2U server platform with advanced security and management features.",
    longDescription: "The HPE ProLiant DL380 Gen10 Plus is the world's most secure industry-standard server, providing advanced security features and intelligent management for hybrid cloud environments.",
    specifications: {
      "Processor": "Intel Xeon Gold 5318Y (24-core, 2.1GHz)",
      "Memory": "64GB DDR4 ECC RAM (Expandable to 6TB)",
      "Storage": "4x 960GB SSD + 8x 4TB HDD",
      "RAID": "HPE Smart Array P816i-a SR Gen10",
      "Network": "4x 1GbE + 2x 25GbE SFP28",
      "Power Supply": "2x 1600W Redundant PSU",
      "Form Factor": "2U Rack Mount",
      "Management": "HPE iLO 5 Advanced",
      "Expansion": "12x PCIe 4.0 slots",
      "Operating System": "Windows Server 2022 or Linux"
    },
    images: ["/images/products/hpe-dl380-1.jpg", "/images/products/hpe-dl380-2.jpg"],
    manufacturer: "Hewlett Packard Enterprise",
    warranty: "5 years HPE Foundation Care",
    stockStatus: "low-stock",
    priceRange: "$12,000 - $18,000",
    seoMeta: {
      title: "HPE ProLiant DL380 Gen10 Plus Server - Enterprise Solutions Uganda",
      description: "Secure HPE ProLiant DL380 Gen10 Plus server with Intel Xeon Gold processors. Enterprise server in Uganda.",
      keywords: ["hpe server", "proliant", "dl380", "enterprise server", "uganda", "secure server"]
    }
  },

  // Networking
  {
    id: "8",
    sku: "NET-CIS-001",
    name: "Cisco Catalyst 9300 Switch",
    slug: "cisco-catalyst-9300",
    category: "networking",
    shortDescription: "High-performance stackable enterprise switch with advanced security and automation features.",
    longDescription: "The Cisco Catalyst 9300 Series switches are Cisco's lead stackable enterprise switching platform, built for security, IoT, and cloud. They are the next generation of the industry's most successful switching platform.",
    specifications: {
      "Ports": "48x 1GbE + 4x 10GbE SFP+",
      "Switching Capacity": "336 Gbps",
      "Forwarding Rate": "250 Mpps",
      "Stacking": "Up to 8 switches (480 Gbps)",
      "Power": "715W total power budget",
      "Management": "Cisco DNA Center Ready",
      "Security": "MACsec, TrustSec, 802.1X",
      "Protocols": "OSPF, BGP, EIGRP, VRRP",
      "QoS": "8 queues per port",
      "Dimensions": "44.5 x 44.5 x 4.4 cm"
    },
    images: ["/images/products/cisco-catalyst-9300-1.jpg", "/images/products/cisco-catalyst-9300-2.jpg"],
    manufacturer: "Cisco Systems",
    warranty: "Limited Lifetime Hardware Warranty",
    stockStatus: "in-stock",
    priceRange: "$4,000 - $6,000",
    seoMeta: {
      title: "Cisco Catalyst 9300 Switch - Enterprise Networking Uganda",
      description: "High-performance Cisco Catalyst 9300 stackable switch with 48 ports. Enterprise networking in Uganda.",
      keywords: ["cisco switch", "catalyst 9300", "enterprise switch", "networking", "uganda", "stackable switch"]
    }
  },
  {
    id: "9",
    sku: "NET-UBI-001",
    name: "Ubiquiti UniFi Dream Machine Pro",
    slug: "ubiquiti-unifi-dream-machine-pro",
    category: "networking",
    shortDescription: "All-in-one enterprise gateway with routing, switching, and security in a single device.",
    longDescription: "The UniFi Dream Machine Pro is an all-in-one solution that combines enterprise routing, switching, and security gateway functionality with a built-in controller for UniFi devices.",
    specifications: {
      "WAN Ports": "2x 10G SFP+",
      "LAN Ports": "8x 1GbE RJ45",
      "Switching Capacity": "35 Gbps",
      "Routing Performance": "10 Gbps",
      "VPN Throughput": "4.5 Gbps",
      "Storage": "3.5\" HDD Bay (up to 14TB)",
      "Management": "UniFi Network Controller",
      "Security": "IDS/IPS, DPI, Threat Management",
      "Dimensions": "48.1 x 43.0 x 8.8 cm",
      "Power": "46W typical consumption"
    },
    images: ["/images/products/ubiquiti-udm-pro-1.jpg", "/images/products/ubiquiti-udm-pro-2.jpg"],
    manufacturer: "Ubiquiti Inc.",
    warranty: "2 years Limited Warranty",
    stockStatus: "in-stock",
    priceRange: "$800 - $1,200",
    seoMeta: {
      title: "Ubiquiti UniFi Dream Machine Pro - Enterprise Gateway Uganda",
      description: "All-in-one Ubiquiti UniFi Dream Machine Pro with routing, switching, and security. Available in Uganda.",
      keywords: ["ubiquiti", "unifi", "dream machine", "enterprise gateway", "uganda", "network security"]
    }
  },

  // Printers
  {
    id: "10",
    sku: "PRT-HP-001",
    name: "HP LaserJet Enterprise M507dn",
    slug: "hp-laserjet-m507dn",
    category: "printers",
    shortDescription: "Fast, secure monochrome laser printer designed for high-volume business printing.",
    longDescription: "The HP LaserJet Enterprise M507dn delivers fast, high-quality printing with advanced security features. Perfect for busy offices that need reliable, high-volume printing capabilities.",
    specifications: {
      "Print Speed": "Up to 45 ppm",
      "First Page Out": "As fast as 5.6 seconds",
      "Resolution": "Up to 1200 x 1200 dpi",
      "Paper Capacity": "650 sheets (expandable to 2,300)",
      "Duplex": "Automatic two-sided printing",
      "Connectivity": "Gigabit Ethernet, USB 2.0",
      "Memory": "512 MB (expandable to 1.5 GB)",
      "Processor": "1.2 GHz",
      "Security": "HP Sure Start, Secure Boot",
      "Dimensions": "41.6 x 40.0 x 28.1 cm"
    },
    images: ["/images/products/hp-laserjet-m507-1.jpg", "/images/products/hp-laserjet-m507-2.jpg"],
    manufacturer: "HP Inc.",
    warranty: "1 year Next Business Day Onsite",
    stockStatus: "in-stock",
    priceRange: "$400 - $600",
    seoMeta: {
      title: "HP LaserJet Enterprise M507dn Printer - Business Printing Uganda",
      description: "Fast HP LaserJet Enterprise M507dn monochrome printer for high-volume business printing in Uganda.",
      keywords: ["hp printer", "laserjet", "business printer", "monochrome printer", "uganda", "office printer"]
    }
  },
  {
    id: "11",
    sku: "PRT-CAN-001",
    name: "Canon imageRUNNER ADVANCE C5535i",
    slug: "canon-imagerunner-c5535i",
    category: "printers",
    shortDescription: "High-performance color multifunction printer with advanced document management capabilities.",
    longDescription: "The Canon imageRUNNER ADVANCE C5535i is a versatile color multifunction device that combines printing, copying, scanning, and optional faxing in one powerful solution for busy offices.",
    specifications: {
      "Print Speed": "35 ppm (Color & B/W)",
      "Resolution": "1200 x 1200 dpi",
      "Paper Capacity": "1,200 sheets (expandable to 6,350)",
      "Duplex": "Standard automatic duplex",
      "Scan Speed": "80 ipm (300 dpi, B/W)",
      "Connectivity": "Gigabit Ethernet, Wi-Fi, USB",
      "Memory": "4 GB RAM + 320 GB HDD",
      "Display": "10.1\" color touchscreen",
      "Security": "User authentication, Secure Print",
      "Functions": "Print, Copy, Scan, Optional Fax"
    },
    images: ["/images/products/canon-imagerunner-c5535i-1.jpg", "/images/products/canon-imagerunner-c5535i-2.jpg"],
    manufacturer: "Canon Inc.",
    warranty: "1 year On-site Service",
    stockStatus: "in-stock",
    priceRange: "$8,000 - $12,000",
    seoMeta: {
      title: "Canon imageRUNNER ADVANCE C5535i - Color Multifunction Printer Uganda",
      description: "High-performance Canon imageRUNNER ADVANCE C5535i color multifunction printer for business use in Uganda.",
      keywords: ["canon printer", "imagerunner", "multifunction printer", "color printer", "uganda", "office equipment"]
    }
  },

  // UPS Systems
  {
    id: "12",
    sku: "UPS-APC-001",
    name: "APC Smart-UPS SRT 3000VA",
    slug: "apc-smart-ups-srt-3000va",
    category: "ups",
    shortDescription: "Double-conversion online UPS with high efficiency and advanced battery management.",
    longDescription: "The APC Smart-UPS SRT provides reliable power protection with double-conversion online topology. Features advanced battery management and network management capabilities for critical applications.",
    specifications: {
      "Capacity": "3000VA / 2700W",
      "Topology": "Double-conversion online",
      "Input Voltage": "230V ±25%",
      "Output Voltage": "230V ±2%",
      "Frequency": "50/60 Hz ±3 Hz",
      "Runtime": "10 minutes at full load",
      "Battery": "Maintenance-free sealed lead acid",
      "Connectivity": "USB, Serial, Network Card Slot",
      "Display": "LCD with LED status indicators",
      "Dimensions": "43.2 x 43.8 x 8.6 cm"
    },
    images: ["/images/products/apc-smart-ups-srt-1.jpg", "/images/products/apc-smart-ups-srt-2.jpg"],
    manufacturer: "Schneider Electric",
    warranty: "3 years Repair or Replace",
    stockStatus: "in-stock",
    priceRange: "$1,500 - $2,000",
    seoMeta: {
      title: "APC Smart-UPS SRT 3000VA - Uninterruptible Power Supply Uganda",
      description: "Reliable APC Smart-UPS SRT 3000VA double-conversion online UPS for critical power protection in Uganda.",
      keywords: ["apc ups", "smart-ups", "uninterruptible power supply", "power protection", "uganda", "backup power"]
    }
  },
  {
    id: "13",
    sku: "UPS-EAT-001",
    name: "Eaton 9PX 5000VA Tower UPS",
    slug: "eaton-9px-5000va",
    category: "ups",
    shortDescription: "High-efficiency double-conversion UPS with advanced power management and monitoring.",
    longDescription: "The Eaton 9PX delivers the highest available power density in a tower or rack/tower convertible form factor. Features Energy Star qualification and advanced power management software.",
    specifications: {
      "Capacity": "5000VA / 4500W",
      "Topology": "Double-conversion online",
      "Efficiency": "Up to 94% in online mode",
      "Input Voltage": "200-240V",
      "Output Voltage": "200/208/220/230/240V",
      "Runtime": "8 minutes at full load",
      "Battery": "Hot-swappable battery modules",
      "Connectivity": "USB, Serial, Network Management",
      "Display": "Graphical LCD display",
      "Form Factor": "Tower/Rack convertible"
    },
    images: ["/images/products/eaton-9px-1.jpg", "/images/products/eaton-9px-2.jpg"],
    manufacturer: "Eaton Corporation",
    warranty: "3 years Advance Replacement",
    stockStatus: "low-stock",
    priceRange: "$2,500 - $3,500",
    seoMeta: {
      title: "Eaton 9PX 5000VA UPS - High-Efficiency Power Protection Uganda",
      description: "High-efficiency Eaton 9PX 5000VA double-conversion UPS with advanced power management in Uganda.",
      keywords: ["eaton ups", "9px", "high efficiency ups", "power protection", "uganda", "enterprise ups"]
    }
  },

  // Accessories
  {
    id: "14",
    sku: "ACC-LOG-001",
    name: "Logitech MX Master 3S Wireless Mouse",
    slug: "logitech-mx-master-3s",
    category: "accessories",
    shortDescription: "Advanced wireless mouse with precision tracking and customizable controls for professionals.",
    longDescription: "The Logitech MX Master 3S is designed for power users who demand precision and comfort. Features advanced tracking, customizable buttons, and multi-device connectivity for enhanced productivity.",
    specifications: {
      "Sensor": "Darkfield high precision (8000 DPI)",
      "Connectivity": "Bluetooth, USB-A receiver",
      "Battery": "Up to 70 days on full charge",
      "Buttons": "7 customizable buttons",
      "Scroll Wheel": "MagSpeed electromagnetic scrolling",
      "Multi-device": "Connect up to 3 devices",
      "Compatibility": "Windows, macOS, Linux, iPadOS",
      "Dimensions": "12.4 x 8.4 x 5.1 cm",
      "Weight": "141g",
      "Charging": "USB-C fast charging"
    },
    images: ["/images/products/logitech-mx-master-3s-1.jpg", "/images/products/logitech-mx-master-3s-2.jpg"],
    manufacturer: "Logitech",
    warranty: "2 years Limited Hardware Warranty",
    stockStatus: "in-stock",
    priceRange: "$80 - $120",
    seoMeta: {
      title: "Logitech MX Master 3S Wireless Mouse - Professional Mouse Uganda",
      description: "Advanced Logitech MX Master 3S wireless mouse with precision tracking and customizable controls in Uganda.",
      keywords: ["logitech mouse", "mx master", "wireless mouse", "professional mouse", "uganda", "computer accessories"]
    }
  },
  {
    id: "15",
    sku: "ACC-DEL-001",
    name: "Dell UltraSharp U2723QE 4K Monitor",
    slug: "dell-ultrasharp-u2723qe",
    category: "accessories",
    shortDescription: "27-inch 4K USB-C hub monitor with exceptional color accuracy for professional work.",
    longDescription: "The Dell UltraSharp U2723QE delivers stunning 4K resolution with exceptional color accuracy. Features USB-C connectivity with 90W power delivery, making it perfect for modern laptops and professional workflows.",
    specifications: {
      "Screen Size": "27 inches",
      "Resolution": "3840 x 2160 (4K UHD)",
      "Panel Type": "IPS Black technology",
      "Color Gamut": "100% sRGB, 98% DCI-P3",
      "Brightness": "400 cd/m²",
      "Contrast Ratio": "2000:1",
      "Response Time": "5ms (gray to gray)",
      "Refresh Rate": "60Hz",
      "Connectivity": "USB-C (90W PD), HDMI, DisplayPort",
      "Adjustability": "Height, tilt, swivel, pivot"
    },
    images: ["/images/products/dell-ultrasharp-u2723qe-1.jpg", "/images/products/dell-ultrasharp-u2723qe-2.jpg"],
    manufacturer: "Dell Technologies",
    warranty: "3 years Advanced Exchange Service",
    stockStatus: "in-stock",
    priceRange: "$600 - $800",
    seoMeta: {
      title: "Dell UltraSharp U2723QE 4K Monitor - Professional Display Uganda",
      description: "Dell UltraSharp U2723QE 27-inch 4K monitor with USB-C hub and exceptional color accuracy in Uganda.",
      keywords: ["dell monitor", "ultrasharp", "4k monitor", "professional display", "uganda", "usb-c monitor"]
    }
  }
];