-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2020 at 06:30 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muellercenter`
--

-- --------------------------------------------------------

--
-- Table structure for table `mueller_pop`
--

CREATE TABLE `mueller_pop` (
  `population` int(2) NOT NULL,
  `space` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mueller_pop`
--

INSERT INTO `mueller_pop` (`population`, `space`) VALUES
(15, 5);

-- --------------------------------------------------------

--
-- Table structure for table `mueller_users`
--

CREATE TABLE `mueller_users` (
  `userid` varchar(7) NOT NULL,
  `in_out` varchar(3) NOT NULL,
  `reservation` date NOT NULL,
  `res_time` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mueller_users`
--

INSERT INTO `mueller_users` (`userid`, `in_out`, `reservation`, `res_time`) VALUES
('davisd', 'out', '0000-00-00', '00'),
('eriksa', 'out', '0000-00-00', '00'),
('jonesj', 'out', '0000-00-00', '00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mueller_users`
--
ALTER TABLE `mueller_users`
  ADD PRIMARY KEY (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
