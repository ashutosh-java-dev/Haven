package app.haven.hotel.models.valueobject;

import app.haven.hotel.models.entity.NearByLandmark;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.JoinColumn;
import java.util.List;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Location {

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    @Builder.Default
    private String country = "India";

    private String postalCode;

    @Embedded
    private Coordinates coordinates;

    @ElementCollection
    @CollectionTable(
        name = "nearby_landmarks",
        joinColumns = @JoinColumn(name = "hotel_id")
    )
    private List<NearByLandmark> nearbyLandmarks;

    @ElementCollection
    @CollectionTable(
        name = "location_tags",
        joinColumns = @JoinColumn(name = "hotel_id")
    )
    @Column(name = "tag")
    private Set<String> tags;
}
