-- MySQL dump 10.13  Distrib 9.4.0, for macos26.0 (arm64)
--
-- Host: localhost    Database: wedding_gallery
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('b567111d-8b10-4da6-abb8-d86def93c5be','5706c201baac835214c1d8bc1f1bf313e24057304c29a3f97f45859cd2edf89f','2025-11-25 11:22:18.390','20251125112208_init',NULL,NULL,'2025-11-25 11:22:18.332',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Function`
--

DROP TABLE IF EXISTS `Function`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Function` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Function_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Function`
--

LOCK TABLES `Function` WRITE;
/*!40000 ALTER TABLE `Function` DISABLE KEYS */;
INSERT INTO `Function` VALUES (1,'Haldi','The turmeric ceremony - a pre-wedding ritual','2025-11-26 13:57:20.000','2025-11-26 13:57:20.000'),(2,'Mayra','The mehndi ceremony - henna application ceremony','2025-11-26 13:57:20.000','2025-11-26 13:57:20.000'),(3,'DJ Night','Musical night celebration with DJ and dancing','2025-11-26 13:57:20.000','2025-11-26 13:57:20.000'),(4,'Reception','Post-wedding celebration and dinner','2025-11-26 13:57:20.000','2025-11-26 13:57:20.000');
/*!40000 ALTER TABLE `Function` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Media`
--

DROP TABLE IF EXISTS `Media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `functionId` int NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailUrl` text COLLATE utf8mb4_unicode_ci,
  `originalUrl` text COLLATE utf8mb4_unicode_ci,
  `fileName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileSize` int DEFAULT NULL,
  `uploadedBy` int DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Media_functionId_idx` (`functionId`),
  KEY `Media_type_idx` (`type`),
  CONSTRAINT `Media_functionId_fkey` FOREIGN KEY (`functionId`) REFERENCES `Function` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Media`
--

LOCK TABLES `Media` WRITE;
/*!40000 ALTER TABLE `Media` DISABLE KEYS */;
INSERT INTO `Media` VALUES (3,2,'video','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228408977-1764155739974-Utsav_ARR_4.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T072655Z&X-Amz-Expires=604800&X-Amz-Signature=a224f6d86f2276c3738a473ebbea6e46a46823214dc7b386f880f74ff29eeab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,'https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228408977-1764155739974-Utsav_ARR_4.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T072655Z&X-Amz-Expires=604800&X-Amz-Signature=a224f6d86f2276c3738a473ebbea6e46a46823214dc7b386f880f74ff29eeab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject','Utsav ARR 4.mp4',24768423,2,'2025-11-26 11:15:40.001','2025-11-27 07:26:55.547'),(4,2,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228415551-1764158834737-WhatsApp_Image_2025-11-21_at_5.55.32_PM__1_.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T072657Z&X-Amz-Expires=604800&X-Amz-Signature=cc0d82de87be7ef4179957b4842313148ee101a4138f68254a1730f6daf9b914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.32 PM (1).jpeg',361551,3,'2025-11-26 12:07:14.745','2025-11-27 07:26:57.429'),(5,2,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228417432-1764158834769-WhatsApp_Image_2025-11-21_at_5.55.31_PM.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T072658Z&X-Amz-Expires=604800&X-Amz-Signature=859c6ac5308d3cc41c00bde3e64e9cd7aba70322ee2ef3d5eeb45582c92e9197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.31 PM.jpeg',340448,3,'2025-11-26 12:07:14.772','2025-11-27 07:26:58.447'),(8,1,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228837871-WhatsApp_Image_2025-11-21_at_5.55.29_PM__1_.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073359Z&X-Amz-Expires=604800&X-Amz-Signature=81562a2e3720f4395b8e5d28ad398f2aa24f6fb6073025e430d56a9cded330d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.29 PM (1).jpeg',113172,3,'2025-11-27 07:33:59.623','2025-11-27 07:33:59.623'),(9,1,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228839646-WhatsApp_Image_2025-11-21_at_5.55.29_PM.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073400Z&X-Amz-Expires=604800&X-Amz-Signature=677a8ba848da81ad0ba98f7947d878a509257d1973492aeb9d646f8fbd89fdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.29 PM.jpeg',131392,3,'2025-11-27 07:34:00.900','2025-11-27 07:34:00.900'),(10,2,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228858184-WhatsApp_Image_2025-11-21_at_5.55.29_PM__2_.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073419Z&X-Amz-Expires=604800&X-Amz-Signature=66207ea3a4c957fdd7934479831aa675603c8ebcd3d9ef34179a94ca61f79de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.29 PM (2).jpeg',114319,3,'2025-11-27 07:34:19.189','2025-11-27 07:34:19.189'),(11,2,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764228859216-WhatsApp_Image_2025-11-21_at_5.55.30_PM.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073420Z&X-Amz-Expires=604800&X-Amz-Signature=975dde1e823e570157202d87923869fe91299a88e9f49b3a3b89d405a868aac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.30 PM.jpeg',102934,3,'2025-11-27 07:34:20.119','2025-11-27 07:34:20.119'),(12,1,'video','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764229015764-5198954-uhd_2160_4096_25fps.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073702Z&X-Amz-Expires=604800&X-Amz-Signature=cef9838e1c09bfd9a3087b520a3dfaf817c437fcbbf28fb70cd9381af3655b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,'https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764229015764-5198954-uhd_2160_4096_25fps.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251127%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251127T073702Z&X-Amz-Expires=604800&X-Amz-Signature=cef9838e1c09bfd9a3087b520a3dfaf817c437fcbbf28fb70cd9381af3655b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject','5198954-uhd_2160_4096_25fps.mp4',24671723,3,'2025-11-27 07:37:02.922','2025-11-27 07:37:02.922');
/*!40000 ALTER TABLE `Media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_phone_key` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (2,'9413078947',NULL,'2025-11-26 13:55:20.000','2025-11-26 13:55:20.000'),(3,'9380020933',NULL,'2025-11-26 12:02:53.970','2025-11-26 12:02:53.970');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-27 13:48:32
