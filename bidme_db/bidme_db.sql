-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2023 at 07:10 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bidme_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `image_src` varchar(10000) NOT NULL,
  `latest_bid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `start_date`, `end_date`, `image_src`, `latest_bid`) VALUES
(1, 'Da Vinci', 'A painting from the 1800s still in prime condition, recently renovated. Bid UP!', '2023-03-01', '2023-03-01', 'https://i.ibb.co/d5jFMhW/davinci.jpg', '21312312312312'),
(3, 'Mangal', 'Relive the Indian culture with this rare piece from the 1700;s.', '2023-03-01', '2023-04-19', 'https://i.ibb.co/Y2JxVS5/mangal.jpg', '59999999'),
(4, 'Music Box', 'Hear the history with music from this beautiful ancient music box', '2023-03-01', '2023-04-13', 'https://i.ibb.co/KD26vQf/music.png', '2131122'),
(5, 'Statue', 'A truly craft-man\'s masterpiece', '2023-03-01', '2023-04-01', 'https://i.ibb.co/G7S8k1D/sculpture.jpg', '2312321'),
(6, 'Hemsworth Watch', 'Feel the intricacies of this delicate watch', '2023-03-01', '2023-04-18', 'https://i.ibb.co/gZy6bgv/watch.jpg', '2131122'),
(7, 'Ivory', 'Bid on this beautifully decorated ivory to make it a centerpiece in your house', '2023-03-01', '2023-03-31', 'https://i.ibb.co/Sskc47v/ivory.jpg', '2131122');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `password`, `balance`) VALUES
(1, 'mohammad', 'faizan', 'mohammadfaizan@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(2, 'mohammad', 'faizan', 'mohammadfaizan410@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(3, 'mohammad', 'faizan', 'muhammad@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(4, 'mohammad', 'faizan', 'mohammad@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(5, '123', '123', '123@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(6, 'Muhammad', 'faizan', 'moha@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(7, 'moh', 'fai', 'fai@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(8, 'moh', 'fai', 'moh@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(9, 'moh', 'fai', 'f@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(10, 'sadas', 'skaldkl', 'askjd@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(11, 'moh', 'fai', 'm@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(12, 'moh', 'fizzy', 'fizzy@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(13, 'faizan', 'muhammad', 'muha@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(14, 'mohammad', 'faizan', 'mohammad410@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(15, 'mohammad', 'faizan', 'mohammad41000@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(16, 'muham', 'faizan', 'muham@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0),
(17, 'fizzy', 'Muh', 'fizy@gmail.com', 'a2bcb6d6b2cbbb8c1d782d347fef42dbe7f6eca3', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
