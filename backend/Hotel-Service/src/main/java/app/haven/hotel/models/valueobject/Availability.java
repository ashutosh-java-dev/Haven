package app.haven.hotel.models.valueobject;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Availability {

    @Min(1)
    @NotNull
    @Builder.Default
    private Integer totalRooms = 1;

    @Min(0)
    @NotNull
    @Builder.Default
    private Integer availableRooms = 0;

    @AssertTrue(message = "Available rooms cannot exceed total rooms")
    public boolean isAvailabilityValid() {
        if (totalRooms == null || availableRooms == null) {
            return true;
        }
        return availableRooms <= totalRooms;
    }
}
