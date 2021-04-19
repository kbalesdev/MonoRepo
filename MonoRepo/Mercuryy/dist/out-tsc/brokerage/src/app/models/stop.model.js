import { StopType } from "./stop-type.model";
import { Location } from "./location.model";
export class Stop {
    constructor() {
        this.id = 0;
        this.stopSequence = 0;
        this.stopType = new StopType();
        this.earliestAppointment = new Date();
        this.latestAppointment = new Date();
        this.arrivalTime = new Date();
        this.departureTime = new Date();
        this.location = new Location();
    }
}
//# sourceMappingURL=stop.model.js.map