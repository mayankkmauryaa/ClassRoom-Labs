public class CartItem {
    private String itemName;
    private double price;
    private int quantity;

    public CartItem(String itemName, double price, int quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

    public void addItem(int qty) {
        this.quantity += qty;
    }

    public void removeItem(int qty) {
        if (qty <= quantity) {
            this.quantity -= qty;
        } else {
            System.out.println("Cannot remove more than available quantity!");
        }
    }

    public double getTotalCost() {
        return price * quantity;
    }

    public void displayDetails() {
        System.out.println("Item: " + itemName);
        System.out.println("Price: " + price);
        System.out.println("Quantity: " + quantity);
        System.out.println("Total Cost: " + getTotalCost());
    }
}

class Main {
    public static void main(String[] args) {
        CartItem cart = new CartItem("Headphones", 2000, 2);
        cart.displayDetails();
        cart.addItem(1);
        cart.removeItem(2);
        cart.displayDetails();
    }
}
