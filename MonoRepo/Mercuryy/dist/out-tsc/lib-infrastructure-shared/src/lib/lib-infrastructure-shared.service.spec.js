import { TestBed } from '@angular/core/testing';
import { LibInfrastructureSharedService } from './lib-infrastructure-shared.service';
describe('LibInfrastructureSharedService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LibInfrastructureSharedService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=lib-infrastructure-shared.service.spec.js.map