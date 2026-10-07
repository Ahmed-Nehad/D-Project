\# خطة المشروع الشاملة والمعمارية التقنية



> المنصة اللوجستية والصيانة الميدانية وتأجير المعدات وسوق قطع الغيار المباشر



\---



\## جدول المحتويات



1\. \[مسارات العمليات التشغيلية](#1-مسارات-العمليات-التشغيلية)

2\. \[تصميم قاعدة البيانات](#2-تصميم-قاعدة-البيانات)

3\. \[مصفوفة حالات الطلب](#3-مصفوفة-حالات-الطلب)

4\. \[لوحة تحكم الإدارة](#4-لوحة-تحكم-الإدارة)

5\. \[مخطط SQL الكامل](#5-مخطط-sql-الكامل)

6\. \[المعمارية التقنية للنظام](#6-المعمارية-التقنية-للنظام)



\---



\## 1. مسارات العمليات التشغيلية



\### 1.1 مسار النقل والتوصيل اللوجستي



1\. \*\*تحديد البيانات ونوع المركبة\*\*

&#x20;  تحديد النقطتين عبر GPS، اختيار المركبة (سكوتر، وانيت، دينا، مبردة، ونش)، وإرفاق صورة الشحنة.



2\. \*\*التسعير والحجز المالي\*\*

&#x20;  حساب الآلية (فتحة العداد + المسافة + الانتظار) وحجز المبلغ مؤقتاً عبر تفويض Pre-Authorization.



3\. \*\*المطابقة والتوجيه الجغرافي\*\*

&#x20;  توجيه الطلب لأقرب كابتن متفرغ في نطاق 5 كم مع مهلة قبول 30 ثانية.



4\. \*\*التوثيق والتتبع الحي\*\*

&#x20;  التقاط صورة الشحنة عند التحميل، وإرسال رابط التتبع المباشر للعميل.



5\. \*\*التسليم بكود OTP والتقفيل\*\*

&#x20;  إدخال رمز OTP التأكيدي، إيداع المستحقات بمحفظة الكابتن تلقائياً، وفتح التقييم.



\### 1.2 مسار الصيانة وقطع الغيار (التفاعلي)



1\. \*\*تشخيص الفني وإضافة السلة\*\*

&#x20;  يعاين الفني المشكلة ميدانياً ويضيف قطع الغيار المطلوبة مباشرة إلى سلة الطلب داخل التطبيق.



2\. \*\*موافقة العميل والدفع\*\*

&#x20;  يتلقى العميل إشعار السلة شاملة التكاليف ويقر الشراء والدفع إلكترونياً.



3\. \*\*القرار التشغيلي لجلب القطعة\*\*

&#x20;  يختار الفني بين \*\*(توصيل آلي من كابتن لوجستي)\*\* أو \*\*(الانتقال بنفسه لاستلامها من المورد)\*\*.

&#x20;  \*محدث تشغيلياً\*



4\. \*\*مسار الشراء المباشر للعميل\*\*

&#x20;  عند شراء العميل مباشرة من المتجر يختار بين (الاستلام الشخصي بكود OTP) أو (التوصيل للموقع).



5\. \*\*التركيب والفاتورة الموحدة\*\*

&#x20;  إتمام العمل وتوليد فاتورة موحدة: (رسوم المعاينة واليد + سلة القطع + رسوم التوصيل).



\### 1.3 مسار تدوير القطع والتداول (Trade-in)



1\. \*\*تحديد خيار تسليم القديم\*\*

&#x20;  اختيار "تداول مع تسليم القطعة القديمة" عند طلب قطع جديدة، وتحديد نوع التالف.



2\. \*\*التقييم والخصم المباشر\*\*

&#x20;  تقديم تقييم آلي لقيمة السكراب وخصم القيمة فوراً من الفاتورة النهائية للعميل.



3\. \*\*النقل وتوجيه التدوير\*\*

&#x20;  استلام القطعة التالفة بكود تتبع ونقلها لمركز جمع المورد أو تجار التدوير المعتمدين.



\### 1.4 تأجير المعدات وحماية الضمان (Escrow)



1\. \*\*اختيار المعدة ومدة التأجير\*\*

&#x20;  اختيار المعدات المتخصصة وتحديد مدة التأجير (بالساعة/باليوم) وطريقة الاستلام.



2\. \*\*حجز الضمان (Escrow Hold)\*\*

&#x20;  خصم رسوم التأجير وحجز مبلغ التأمين مؤقتاً (Hold) في بطاقة المستأجر.



3\. \*\*فحص الاستلام والتسليم\*\*

&#x20;  توثيق حالة المعدة بالفيديو والصور عند التسليم (Check-in) وعند الإعادة (Check-out).



4\. \*\*فك الحجز أو الاقتطاع\*\*

&#x20;  إرجاع مبلغ التأمين تلقائياً عند السلامة، أو اقتطاع التعويض للمؤجر في حال وجود تلف.



\### 1.5 الضمان والنزاعات والتحكيم



1\. \*\*احتجاز نسبة الضمان\*\*

&#x20;  احتجاز نسبة مؤقتة من مستحقات المزود لفترة الضمان (7-14 يوماً).



2\. \*\*رفع الشكوى وتعليق الصرف\*\*

&#x20;  عند بلاغ العميل خلال الضمان، يتم إيقاف تحويل المبلغ فوراً لحين معالجة البلاغ.



3\. \*\*التحكيم والمعاينة المحايدة\*\*

&#x20;  إرسال فني فحص محايد واتخاذ قرار آلي بالتعويض أو إعادة الإصلاح أو التقفيل لصالح المزود.



\### 1.6 التسويات المالية والسحب البنكي



1\. \*\*تجميع الرصيد بالمحفظة\*\*

&#x20;  إيداع الإيرادات كـ "رصيد معلق" حتى اكتمال الفترة التشغيلية والضمان لكل طلب.



2\. \*\*جدولة السحب البنكي\*\*

&#x20;  خيارات تسوية دورية (أسبوعية/شهرية مجانية) أو سحب فوري مباشر للحساب البنكي (IBAN).



\---



\## 2. تصميم قاعدة البيانات



\### 2.1 جدول المستخدمين والأدوار (Users \& Profiles)



```text

users {

&#x20; id: uuid \[PK],

&#x20; phone: string,

&#x20; role: enum('client', 'driver', 'tech', 'supplier'),

&#x20; kyc\_status: enum('pending', 'approved', 'rejected'),

&#x20; wallet\_balance: decimal,

&#x20; created\_at: timestamp

}

```



\### 2.2 جدول الطلبات الرئيسي (Orders Table)



```text

orders {

&#x20; id: uuid \[PK],

&#x20; client\_id: uuid \[FK],

&#x20; provider\_id: uuid \[FK],

&#x20; order\_type: enum('delivery', 'maintenance', 'rental', 'direct\_part'),

&#x20; status: string,

&#x20; total\_amount: decimal,

&#x20; otp\_code: string(4)

}

```



\### 2.3 سلة قطع الغيار (Parts Cart \& Delivery)



```text

order\_spare\_parts\_cart {

&#x20; id: uuid \[PK],

&#x20; order\_id: uuid \[FK],

&#x20; part\_id: uuid \[FK],

&#x20; fulfillment\_type: enum('courier\_dispatch', 'tech\_pickup'),

&#x20; approval\_status: enum('pending', 'approved', 'paid')

}

```



\---



\## 3. مصفوفة حالات الطلب



| الحالة (Status) | تطبيق العميل | تطبيق الفني / المزود | تطبيق كابتن التوصيل |

|---|---|---|---|

| \*\*DRAFT / PENDING\*\* | في انتظار المطابقة والقبول | تنبيه طلب جديد متوافق | غير متاح |

| \*\*DIAGNOSING\*\* | الفني يوصل ويجري المعاينة | شاشة إضافة القطع للسلة | غير متاح |

| \*\*PARTS\_APPROVAL\*\* | شاشة مراجعة السلة والدفع | في انتظار دفع العميل | غير متاح |

| \*\*DISPATCHING\_PART\*\* | متابعة وصول القطعة للموقع | اختيار (توصيل / استلام شخصي) | قبول طلب توصيل القطعة للموقع |

| \*\*IN\_PROGRESS\*\* | التركيب والعمل جارٍ | تركيب القطع والتوثيق | تم تسليم القطعة للفني |

| \*\*COMPLETED\*\* | تأكيد OTP وإصدار الفاتورة | تحويل الأجر للمحفظة | تحويل أجرة التوصيل للمحفظة |



\---



\## 4. لوحة تحكم الإدارة



\### 4.1 إدارة التحقق والتأهيل (KYC Module)



مراجعة وتدقيق مستندات الكباتن والفنيين والموردين (الهوية، الرخص، السجل التجاري) والاعتماد الآلي/اليومي.



\### 4.2 وحدة إدارة النزاعات والتحكيم (Arbitration Panel)



لوحة للتحكم في بلاغات الضمان وتأمين المعدات، مراجعة الصور والأدلة، وتعيين فنيين محايدين أو تعويض الأطراف.



\### 4.3 المحرك المالي والتسويات (Financial Settlement Engine)



إدارة عمولات المنصة، مبالغ الضمان المحجوزة (Escrow)، موافقة تحويلات IBAN البنكية، وفواتير B2B الموحدة.



\---



\## 5. مخطط SQL الكامل



```sql

\-- ==========================================

\-- 1. USERS \& KYC MODULE (المستخدمين والتوثيق)

\-- ==========================================



CREATE TYPE user\_role AS ENUM ('CLIENT', 'DRIVER', 'TECHNICIAN', 'SUPPLIER', 'ADMIN');

CREATE TYPE kyc\_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'NEEDS\_REVISION');



CREATE TABLE users (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   full\_name VARCHAR(100) NOT NULL,

&#x20;   phone\_number VARCHAR(20) UNIQUE NOT NULL,

&#x20;   email VARCHAR(100) UNIQUE,

&#x20;   role user\_role NOT NULL,

&#x20;   is\_active BOOLEAN DEFAULT TRUE,

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



CREATE TABLE kyc\_profiles (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   user\_id UUID REFERENCES users(id) ON DELETE CASCADE,

&#x20;   national\_id VARCHAR(50) UNIQUE,

&#x20;   commercial\_register VARCHAR(50),   -- للمورد والشركات

&#x20;   license\_number VARCHAR(50),        -- للكابتن

&#x20;   skills TEXT\[],                     -- للفني (سباكة، كهرباء...)

&#x20;   status kyc\_status DEFAULT 'PENDING',

&#x20;   document\_urls JSONB,               -- صور الهوية، الرخص، الشهادات

&#x20;   rejection\_reason TEXT,

&#x20;   verified\_at TIMESTAMP

);



\-- ==========================================

\-- 2. VEHICLES \& LOCATIONS (المركبات والمواقع)

\-- ==========================================



CREATE TYPE vehicle\_type AS ENUM ('SCOOTER', 'SEDAN', 'PICKUP', 'TRUCK', 'REFRIGERATED', 'TOW\_TRUCK');



CREATE TABLE vehicles (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   driver\_id UUID REFERENCES users(id) ON DELETE CASCADE,

&#x20;   type vehicle\_type NOT NULL,

&#x20;   plate\_number VARCHAR(20) NOT NULL,

&#x20;   model\_year VARCHAR(10),

&#x20;   is\_available BOOLEAN DEFAULT FALSE,

&#x20;   current\_lat DECIMAL(10, 8),

&#x20;   current\_lng DECIMAL(11, 8),

&#x20;   updated\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



\-- ==========================================

\-- 3. ORDERS \& WORKFLOW (الطلبات والعمليات)

\-- ==========================================



CREATE TYPE order\_type AS ENUM ('DELIVERY', 'MAINTENANCE', 'DIRECT\_PART\_PURCHASE', 'RENTAL');



CREATE TYPE order\_status AS ENUM (

&#x20;   'PENDING', 'MATCHING', 'ACCEPTED', 'DIAGNOSING',

&#x20;   'PARTS\_PENDING\_APPROVAL', 'DISPATCHING\_PART',

&#x20;   'IN\_PROGRESS', 'COMPLETED', 'CANCELLED', 'DISPUTED'

);



CREATE TABLE orders (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   client\_id UUID REFERENCES users(id),

&#x20;   provider\_id UUID REFERENCES users(id),   -- فني أو كابتن أو مورد

&#x20;   type order\_type NOT NULL,

&#x20;   status order\_status DEFAULT 'PENDING',

&#x20;   pickup\_lat DECIMAL(10, 8),

&#x20;   pickup\_lng DECIMAL(11, 8),

&#x20;   dropoff\_lat DECIMAL(10, 8),

&#x20;   dropoff\_lng DECIMAL(11, 8),

&#x20;   otp\_code VARCHAR(6),

&#x20;   is\_emergency BOOLEAN DEFAULT FALSE,

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



\-- ==========================================

\-- 4. SPARE PARTS \& CART (قطع الغيار والسلة)

\-- ==========================================



CREATE TABLE spare\_parts (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   supplier\_id UUID REFERENCES users(id),

&#x20;   name VARCHAR(150) NOT NULL,

&#x20;   part\_number VARCHAR(100),

&#x20;   price DECIMAL(10, 2) NOT NULL,

&#x20;   stock\_quantity INT DEFAULT 0,

&#x20;   is\_available BOOLEAN DEFAULT TRUE,

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



CREATE TYPE part\_fulfillment AS ENUM ('COURIER\_DISPATCH', 'TECH\_PICKUP', 'SELF\_PICKUP');



CREATE TABLE order\_parts\_cart (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   order\_id UUID REFERENCES orders(id) ON DELETE CASCADE,

&#x20;   part\_id UUID REFERENCES spare\_parts(id),

&#x20;   quantity INT DEFAULT 1,

&#x20;   unit\_price DECIMAL(10, 2) NOT NULL,

&#x20;   fulfillment\_choice part\_fulfillment,

&#x20;   courier\_id UUID REFERENCES users(id),   -- الكابتن المسند له التوصيل

&#x20;   is\_approved\_by\_client BOOLEAN DEFAULT FALSE,

&#x20;   paid\_at TIMESTAMP

);



\-- ==========================================

\-- 5. SCRAP \& TRADE-IN (السكراب والقطع التالفة)

\-- ==========================================



CREATE TABLE scrap\_trades (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   order\_id UUID REFERENCES orders(id),

&#x20;   old\_part\_name VARCHAR(150) NOT NULL,

&#x20;   estimated\_scrap\_value DECIMAL(10, 2) NOT NULL,

&#x20;   collector\_id UUID REFERENCES users(id),   -- الكابتن أو المورد المستلم

&#x20;   status VARCHAR(50) DEFAULT 'PENDING\_COLLECTION'

);



\-- ==========================================

\-- 6. EQUIPMENT RENTAL \& ESCROW (التأجير والضمان)

\-- ==========================================



CREATE TABLE equipment (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   owner\_id UUID REFERENCES users(id),

&#x20;   title VARCHAR(150) NOT NULL,

&#x20;   daily\_rate DECIMAL(10, 2) NOT NULL,

&#x20;   security\_deposit\_amount DECIMAL(10, 2) NOT NULL,

&#x20;   is\_available BOOLEAN DEFAULT TRUE

);



CREATE TYPE escrow\_status AS ENUM ('HELD', 'RELEASED\_TO\_CLIENT', 'FORFEITED\_TO\_OWNER', 'PARTIAL\_REFUND');



CREATE TABLE equipment\_rentals (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   equipment\_id UUID REFERENCES equipment(id),

&#x20;   renter\_id UUID REFERENCES users(id),

&#x20;   start\_date TIMESTAMP NOT NULL,

&#x20;   end\_date TIMESTAMP NOT NULL,

&#x20;   rental\_fee DECIMAL(10, 2) NOT NULL,

&#x20;   deposit\_held DECIMAL(10, 2) NOT NULL,

&#x20;   escrow\_state escrow\_status DEFAULT 'HELD',

&#x20;   checkin\_photos JSONB,

&#x20;   checkout\_photos JSONB

);



\-- ==========================================

\-- 7. WARRANTY \& DISPUTES (الضمان والنزاعات)

\-- ==========================================



CREATE TABLE disputes (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   order\_id UUID REFERENCES orders(id),

&#x20;   raised\_by UUID REFERENCES users(id),

&#x20;   neutral\_inspector\_id UUID REFERENCES users(id),   -- فني المعاينة المحايد

&#x20;   reason TEXT NOT NULL,

&#x20;   evidence\_urls JSONB,

&#x20;   resolution\_notes TEXT,

&#x20;   refund\_amount DECIMAL(10, 2) DEFAULT 0.00,

&#x20;   status VARCHAR(50) DEFAULT 'UNDER\_REVIEW',

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



\-- ==========================================

\-- 8. WALLETS \& PAYOUTS (المحافظ والتسويات)

\-- ==========================================



CREATE TABLE wallets (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   user\_id UUID REFERENCES users(id) UNIQUE,

&#x20;   available\_balance DECIMAL(12, 2) DEFAULT 0.00,

&#x20;   pending\_balance DECIMAL(12, 2) DEFAULT 0.00,

&#x20;   iban VARCHAR(34)

);



CREATE TYPE transaction\_type AS ENUM ('PAYMENT', 'PAYOUT', 'COMMISSION', 'REFUND', 'DEPOSIT\_HOLD');



CREATE TABLE wallet\_transactions (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   wallet\_id UUID REFERENCES wallets(id),

&#x20;   amount DECIMAL(10, 2) NOT NULL,

&#x20;   type transaction\_type NOT NULL,

&#x20;   reference\_id VARCHAR(100),

&#x20;   description TEXT,

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



\-- ==========================================

\-- 9. B2B \& ENTERPRISE (العقود والشركات)

\-- ==========================================



CREATE TABLE b2b\_accounts (

&#x20;   id UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),

&#x20;   company\_name VARCHAR(150) NOT NULL,

&#x20;   credit\_limit DECIMAL(12, 2) NOT NULL,

&#x20;   current\_balance DECIMAL(12, 2) DEFAULT 0.00,

&#x20;   billing\_cycle VARCHAR(20) DEFAULT 'MONTHLY'

);

```



\---



\## 6. المعمارية التقنية للنظام



مخطط التفاعل بين التطبيقات، بوابة الخدمات، المحركات البرمجية، وقواعد البيانات.



\### 6.1 واجهات التطبيقات (Client Applications Tier)



\- \*\*تطبيق العميل\*\* — طلب الصيانة، السلة، وتأجير المعدات

&#x20; - \*التقنية:\* Flutter / React Native

\- \*\*تطبيق الكابتن\*\* — استلام التوصيل والتتبع الحي GPS

&#x20; - \*التقنية:\* Flutter / React Native

\- \*\*تطبيق الفني\*\* — التشخيص، فحص المعاينة، وتوثيق الضمان

&#x20; - \*التقنية:\* Flutter / React Native

\- \*\*تطبيق المورد\*\* — إدارة المخزون، الأسعار، والمبيعات المباشرة

&#x20; - \*التقنية:\* Flutter / Web Panel



⬇ HTTPS / WebSockets / WSS ⬇



\### 6.2 بوابة الخدمات والأمان (API Gateway \& Security Tier)



\- \*\*API Gateway / NGINX Load Balancer\*\*

&#x20; إدارة المرور (Rate Limiting)، التحقق من الهوية (JWT Authentication)، توجيه الطلبات (Request Routing)، وتوزيع الأحمال.



⬇ Internal gRPC / REST Calls ⬇



\### 6.3 المحركات والميكروسيرفيس (Core Microservices Tier)



\- \*\*Auth \& KYC Engine\*\* — إدارة التوثيق، الهويات الوطنية، السجلات التجارية، والشهادات المهنية

&#x20; - \*التقنية:\* Node.js / Go

\- \*\*Geospatial Matching Engine\*\* — مطابقة الفنيين والكباتن بناءً على الموقع الجغرافي ونوع الخدمة

&#x20; - \*التقنية:\* Redis Spatial / Go

\- \*\*Order \& Cart Workflow\*\* — متابعة حالات الطلبات، السلة المشتركة، والتوصيل الثلاثي

&#x20; - \*التقنية:\* NestJS State Machine

\- \*\*Escrow \& Rental Manager\*\* — حجز وديعة التأمين، الإفراج المشروط، وفحص استلام وتكليف المعدات

&#x20; - \*التقنية:\* NestJS / Python

\- \*\*Finance \& Wallet Engine\*\* — إدارة المحافظ، بوابات الدفع، المحاسبة الآلية، والتسويات المالية

&#x20; - \*التقنية:\* Node.js / Microservice

\- \*\*Dispute \& Warranty Service\*\* — إدارة النزاعات، تحكيم الخبير المحايد، ومتابعة مطالبات الضمان

&#x20; - \*التقنية:\* NestJS



⬇ Async Event Stream ⬇



\### 6.4 ناقل الأحداث اللحظية (Async Messaging Bus)



\- \*\*Apache Kafka / RabbitMQ\*\*

&#x20; معالجة إشعارات الطلبات، تحديثات الموقع اللحظية، تسوية الرصيد، والتنبيهات الحية (Pub/Sub Pattern).



⬇ Data Persistence ⬇



\### 6.5 طبقة قواعد البيانات والتخزين (Persistence Layer)



\- \*\*PostgreSQL (Main DB)\*\* — قاعدة البيانات الرئيسية: الجداول العلاقاتية، المعاملات المالية، والطلبات

&#x20; - \*النوع:\* Relational DB

\- \*\*Redis Cache\*\* — تخزين الجلسات، التتبع الحي لمواقع الكباتن (GPS)، والـ Caching السريع

&#x20; - \*النوع:\* In-Memory DB

\- \*\*Amazon S3 / MinIO\*\* — تخزين صور الفحص، مستندات KYC، الفواتير، وفيديوهات المعاينة

&#x20; - \*النوع:\* Object Storage



\---



\*خطة المشروع الشاملة والمعمارية التقنية | Production-Ready Microservices Architecture\*

