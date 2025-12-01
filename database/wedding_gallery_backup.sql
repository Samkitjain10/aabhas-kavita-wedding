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
INSERT INTO `_prisma_migrations` VALUES ('b567111d-8b10-4da6-abb8-d86def93c5be','5706c201baac835214c1d8bc1f1bf313e24057304c29a3f97f45859cd2edf89f','2025-11-25 11:22:18.390','20251125112208_init',NULL,NULL,'2025-11-25 11:22:18.332',1),('cad738d3-99e5-4cfd-a926-a1424473c5e1','f2cfb1e5ee3b60a44481b97d0afab6ddc6b22e703f0b8626a33afd36c5fab0f3','2025-12-01 06:50:47.408','20251201122041_add_priority_to_function',NULL,NULL,'2025-12-01 06:50:47.311',1),('ff0743f7-5392-48ed-a952-864af551a65a','c1f02739de22cb99f3cba11d242e85b5400de17163cf2254cd6066db7404a6d1','2025-12-01 06:58:55.443','20251201122848_remove_description_from_function',NULL,NULL,'2025-12-01 06:58:55.387',1);
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
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `priority` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Function_name_key` (`name`),
  KEY `Function_priority_idx` (`priority`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Function`
--

LOCK TABLES `Function` WRITE;
/*!40000 ALTER TABLE `Function` DISABLE KEYS */;
INSERT INTO `Function` VALUES (1,'Haldi','2025-11-26 13:57:20.000','2025-12-01 06:51:30.097',3),(2,'Mayra','2025-11-26 13:57:20.000','2025-12-01 06:51:30.117',6),(4,'Reception','2025-11-26 13:57:20.000','2025-12-01 06:51:30.123',8),(7,'Hath Daan','2025-12-01 06:50:55.659','2025-12-01 06:51:30.034',1),(8,'Vinayak Sthapna','2025-12-01 06:50:55.666','2025-12-01 06:51:30.093',2),(9,'Engagenemt','2025-12-01 06:50:55.686','2025-12-01 06:51:30.100',4),(10,'Sangeet','2025-12-01 06:50:55.688','2025-12-01 06:51:30.110',5),(11,'Phere','2025-12-01 06:50:55.692','2025-12-01 06:51:30.120',7),(12,'Others','2025-12-01 06:50:55.694','2025-12-01 06:51:30.126',9);
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Media`
--

LOCK TABLES `Media` WRITE;
/*!40000 ALTER TABLE `Media` DISABLE KEYS */;
INSERT INTO `Media` VALUES (27,2,'photo','https://aabhas-kavita-wedding-gallery.2f064f09b61cc36c90e5cca87ff75c9f.r2.cloudflarestorage.com/uploads/1764585403444-WhatsApp_Image_2025-11-21_at_5.55.30_PM.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=f8902badeba47be17af14fb7aa2002b8%2F20251201%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251201T103645Z&X-Amz-Expires=604800&X-Amz-Signature=ce2f4a4523a9aa467a1d02fab22b08bafb3f1b1fe4968fc4989d7749c1e290e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',NULL,NULL,'WhatsApp Image 2025-11-21 at 5.55.30 PM.jpeg',102934,2,'2025-12-01 10:36:45.031','2025-12-01 10:36:45.031');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (2,'9413078947',NULL,'2025-11-26 13:55:20.000','2025-11-26 13:55:20.000'),(3,'9380020933',NULL,'2025-11-26 12:02:53.970','2025-11-26 12:02:53.970'),(4,'8919330539',NULL,'2025-11-28 07:32:42.979','2025-11-28 07:32:42.979'),(5,'9989594519',NULL,'2025-11-28 07:32:42.995','2025-11-28 07:32:42.995'),(6,'8919321868',NULL,'2025-11-28 07:32:42.998','2025-11-28 07:32:42.998'),(7,'9550333191',NULL,'2025-11-28 07:32:43.000','2025-11-28 07:32:43.000');
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

-- Dump completed on 2025-12-01 16:12:11
