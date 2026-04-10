package app.haven.hotel.models.hotel;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingInfo {

    @Builder.Default
    private boolean instantBooking = false;

    @Builder.Default
    private boolean freeCancellation = false;

    @Builder.Default
    private boolean loyaltyPointsEligible = false;

}
