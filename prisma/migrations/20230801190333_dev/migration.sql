-- DropForeignKey
ALTER TABLE `cart_item` DROP FOREIGN KEY `cart_item_productId_fkey`;

-- AddForeignKey
ALTER TABLE `cart_item` ADD CONSTRAINT `cart_item_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
