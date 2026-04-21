package app.haven.hotel.models.entity;

import app.haven.hotel.models.enums.HotelStatus;
import app.haven.hotel.models.valueobject.BookingInfo;
import app.haven.hotel.models.valueobject.Contact;
import app.haven.hotel.models.valueobject.Location;
import app.haven.hotel.models.valueobject.Media;
import app.haven.hotel.models.valueobject.Ratings;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "hotels")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hotel {

    @Id
    @Column(name = "hotel_id", length = 50)
    private String hotelId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String brand;

    @Column(length = 2000)
    private String description;

    private int starRating;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private HotelStatus status = HotelStatus.ACTIVE;

    @ManyToMany
    @JoinTable(
        name = "hotel_category_mapping",
        joinColumns = @JoinColumn(name = "hotel_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories;

    @ElementCollection
    @CollectionTable(
        name = "hotel_tags",
        joinColumns = @JoinColumn(name = "hotel_id")
    )
    @Column(name = "tag")
    private Set<String> tags;

    @Embedded
    private Location location;

    @Embedded
    private Contact contact;

    @Embedded
    private Media media;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "hotel_id")
    private List<Amenity> amenities;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "hotel_id")
    private List<RoomType> roomTypes;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "hotel_id")
    private List<Award> awards;

    @Embedded
    private Ratings ratings;

    @Embedded
    private BookingInfo bookingInfo;
}
