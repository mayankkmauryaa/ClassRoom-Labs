public class Item {
    private int itemCode;
    private String itemName;
    private double price;

    public Item(int itemCode, String itemName, double price) {
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.price = price;
    }

    public double calculateTotalCost(int quantity) {
        return price * quantity;
    }

    public void displayDetails() {
        System.out.println("Item Code: " + itemCode);
        System.out.println("Item Name: " + itemName);
        System.out.println("Price: " + price);
    }
}

class Main {
    public static void main(String[] args) {
        Item item = new Item(101, "Laptop", 45000.0);
        item.displayDetails();
        System.out.println("Total cost for 2: " + item.calculateTotalCost(2));
    }
}
