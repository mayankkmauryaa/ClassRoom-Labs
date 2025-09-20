import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

// Room class



public class HotelManagementSystem {
    public static void main(String[] args) {
        HotelBookingSystem system = new HotelBookingSystem();
        // Sample Rooms
        Room r1 = new Room(1, "Deluxe", 2000);
        Room r2 = new Room(2, "Suite", 5000);
        Room r3 = new Room(3, "Standard", 1500);
        system.rooms.addAll(Arrays.asList(r1, r2, r3));

        // Sample Guests
        Guest g1 = new Guest(1, "Alice");
        Guest g2 = new Guest(2, "Bob");
        Guest g3 = new Guest(3, "Charlie");
        system.guests.addAll(Arrays.asList(g1, g2, g3));

        // Sample Bookings
        system.bookings.add(new Booking(101, r1, g1,
                LocalDate.now().minusDays(40), LocalDate.now().minusDays(35))); // 5 days
        system.bookings.add(new Booking(102, r2, g2,
                LocalDate.now().minusDays(200), LocalDate.now().minusDays(195))); // 5 days
        system.bookings.add(new Booking(103, r1, g2,
                LocalDate.now().minusDays(10), LocalDate.now().minusDays(7))); // 3 days
        system.bookings.add(new Booking(104, r3, g3,
                LocalDate.now().minusDays(5), LocalDate.now().minusDays(1))); // 4 days
        system.bookings.add(new Booking(105, r2, g1,
                LocalDate.now().minusDays(15), LocalDate.now().minusDays(10))); // 5 days

        // Run Reports
        system.roomBookingCounts();
        system.roomsNeverBookedLast12Months();
        system.averageStayPerGuest();
        system.totalRevenueByRoomType();
        system.top3GuestsByStays();
    }
}

class Room {
    int roomId;
    String type;
    double price;

    public Room(int roomId, String type, double price) {
        this.roomId = roomId;
        this.type = type;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Room{" + "id=" + roomId + ", type='" + type + '\'' + ", price=" + price + '}';
    }
}

// Guest class
class Guest {
    int guestId;
    String name;

    public Guest(int guestId, String name) {
        this.guestId = guestId;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Guest{" + "id=" + guestId + ", name='" + name + '\'' + '}';
    }
}

// Booking class
class Booking {
    int bookingId;
    Room room;
    Guest guest;
    LocalDate checkIn;
    LocalDate checkOut;

    public Booking(int bookingId, Room room, Guest guest, LocalDate checkIn, LocalDate checkOut) {
        this.bookingId = bookingId;
        this.room = room;
        this.guest = guest;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }

    public long getStayDuration() {
        return ChronoUnit.DAYS.between(checkIn, checkOut);
    }

    @Override
    public String toString() {
        return "Booking{" + "id=" + bookingId +
                ", room=" + room.roomId +
                ", guest=" + guest.name +
                ", checkIn=" + checkIn +
                ", checkOut=" + checkOut +
                '}';
    }
}

// Hotel Booking System (DAO)
class HotelBookingSystem {
    List<Room> rooms = new ArrayList<>();
    List<Guest> guests = new ArrayList<>();
    List<Booking> bookings = new ArrayList<>();

    // 1) Show number of times each room was booked
    public void roomBookingCounts() {
        System.out.println("\n Number of times each room was booked:");
        Map<Integer, Long> countMap = bookings.stream()
                .collect(Collectors.groupingBy(b -> b.room.roomId, Collectors.counting()));

        for (Room r : rooms) {
            long count = countMap.getOrDefault(r.roomId, 0L);
            System.out.println("Room " + r.roomId + " (" + r.type + ") -> " + count + " bookings");
        }
    }

    // 2) List rooms never booked in the last 12 months
    public void roomsNeverBookedLast12Months() {
        System.out.println("\n Rooms never booked in the last 12 months:");
        LocalDate cutoff = LocalDate.now().minusMonths(12);

        Set<Integer> bookedRoomIds = bookings.stream()
                .filter(b -> b.checkIn.isAfter(cutoff))
                .map(b -> b.room.roomId)
                .collect(Collectors.toSet());

        rooms.stream()
                .filter(r -> !bookedRoomIds.contains(r.roomId))
                .forEach(r -> System.out.println(r));
    }

    // 3) Find average stay duration per guest
    public void averageStayPerGuest() {
        System.out.println("\n Average stay duration per guest:");
        Map<Integer, Double> avgStayMap = bookings.stream()
                .collect(Collectors.groupingBy(b -> b.guest.guestId,
                        Collectors.averagingLong(Booking::getStayDuration)));

        for (Guest g : guests) {
            double avg = avgStayMap.getOrDefault(g.guestId, 0.0);
            System.out.println("Guest " + g.name + " -> Avg Stay: " + avg + " days");
        }
    }

    // 4) Get total revenue generated by each room type
    public void totalRevenueByRoomType() {
        System.out.println("\n Total revenue by room type:");
        Map<String, Double> revenueMap = bookings.stream()
                .collect(Collectors.groupingBy(b -> b.room.type,
                        Collectors.summingDouble(b -> b.room.price * b.getStayDuration())));

        revenueMap.forEach((type, revenue) ->
                System.out.println("Type: " + type + " -> Revenue: ₹" + revenue));
    }

    // 5) Show top 3 guests by number of stays
    public void top3GuestsByStays() {
        System.out.println("\n Top 3 guests by number of stays:");
        Map<Guest, Long> guestStayMap = bookings.stream()
                .collect(Collectors.groupingBy(b -> b.guest, Collectors.counting()));

        guestStayMap.entrySet().stream()
                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))
                .limit(3)
                .forEach(entry ->
                        System.out.println("Guest: " + entry.getKey().name +
                                " -> Stays: " + entry.getValue()));
    }
}