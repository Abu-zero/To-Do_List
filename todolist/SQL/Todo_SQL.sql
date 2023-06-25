-- --------------------------------------------------------
-- Sunucu:                       localhost
-- Sunucu sürümü:                8.0.30 - MySQL Community Server - GPL
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- todolist için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `todolist` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `todolist`;

-- tablo yapısı dökülüyor todolist.login
CREATE TABLE IF NOT EXISTS `login` (
  `uid` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `password` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- todolist.login: ~2 rows (yaklaşık) tablosu için veriler indiriliyor
INSERT INTO `login` (`uid`, `username`, `password`) VALUES
	(2, 'omer', '123'),
	(62, 'omer34', '1234');

-- tablo yapısı dökülüyor todolist.todoslist
CREATE TABLE IF NOT EXISTS `todoslist` (
  `uid` int NOT NULL,
  `todoid` int NOT NULL AUTO_INCREMENT,
  `todo` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `selected` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`todoid`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- todolist.todoslist: ~7 rows (yaklaşık) tablosu için veriler indiriliyor
INSERT INTO `todoslist` (`uid`, `todoid`, `todo`, `selected`) VALUES
	(2, 38, 'Kitap oku', 0),
	(2, 42, 'Tatile çık', 1),
	(2, 60, 'Okula git', 1),
	(2, 63, 'Araba sür', 0),
	(62, 64, 'Ateş yak', 0),
	(62, 65, 'Kamp yap', 0),
	(2, 66, 'Kütüphaneye git', 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
