-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: todolist
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `golist`
--

DROP TABLE IF EXISTS `golist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `golist` (
  `name` varchar(300) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `golist`
--

LOCK TABLES `golist` WRITE;
/*!40000 ALTER TABLE `golist` DISABLE KEYS */;
INSERT INTO `golist` VALUES ('How can I bring your idea to life?',54),('Hit the + button to add a new comment',55),('Hit this to delete an comment',56);
/*!40000 ALTER TABLE `golist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newlist`
--

DROP TABLE IF EXISTS `newlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(300) DEFAULT 'home',
  `name` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newlist`
--

LOCK TABLES `newlist` WRITE;
/*!40000 ALTER TABLE `newlist` DISABLE KEYS */;
INSERT INTO `newlist` VALUES (74,'home','Welcome to your todolost'),(75,'home','Hit the + button to add a new item'),(76,'home','Hit this to delete an item'),(77,'favicon.ico',NULL),(78,'home','Welcome to your todolost'),(79,'home','Hit the + button to add a new item'),(80,'home','Hit this to delete an item'),(81,'favicon.ico',NULL),(82,'home','Welcome to your todolost'),(83,'home','Hit the + button to add a new item'),(84,'home','Hit this to delete an item'),(85,'favicon.ico',NULL),(86,'home','Welcome to your todolost'),(87,'home','Hit the + button to add a new item'),(88,'home','Hit this to delete an item'),(89,'favicon.ico',NULL),(90,'home','Welcome to your todolost'),(91,'home','Hit the + button to add a new item'),(92,'home','Hit this to delete an item'),(93,'favicon.ico',NULL),(94,'home','Welcome to your todolost'),(95,'home','Hit the + button to add a new item'),(96,'home','Hit this to delete an item'),(97,'favicon.ico',NULL),(98,'home','Welcome to your todolost'),(99,'home','Hit the + button to add a new item'),(100,'home','Hit this to delete an item'),(101,'favicon.ico',NULL),(102,'home','How can I bring your idea to life?'),(103,'home','Hit the + button to add a new comment'),(104,'home','Hit this to delete an comment'),(105,'main.js',NULL),(106,'home','How can I bring your idea to life?'),(107,'home','Hit the + button to add a new comment'),(108,'home','Hit this to delete an comment'),(109,'main.js',NULL),(110,'home','How can I bring your idea to life?'),(111,'home','Hit the + button to add a new comment'),(112,'home','Hit this to delete an comment'),(113,'main.js',NULL),(114,'home','How can I bring your idea to life?'),(115,'home','Hit the + button to add a new comment'),(116,'home','Hit this to delete an comment'),(117,'main.js',NULL),(118,'home','How can I bring your idea to life?'),(119,'home','Hit the + button to add a new comment'),(120,'home','Hit this to delete an comment'),(121,'main.js',NULL);
/*!40000 ALTER TABLE `newlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11  1:23:36
