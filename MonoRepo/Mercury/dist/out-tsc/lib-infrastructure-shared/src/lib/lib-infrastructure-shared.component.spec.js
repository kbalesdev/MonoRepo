import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { LibInfrastructureSharedComponent } from './lib-infrastructure-shared.component';
describe('LibInfrastructureSharedComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [LibInfrastructureSharedComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LibInfrastructureSharedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=lib-infrastructure-shared.component.spec.js.map