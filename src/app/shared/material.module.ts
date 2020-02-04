import { NgModule } from '@angular/core';
import {
    MatBadgeModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatIconModule, MatListModule, MatTabsModule
} from '@angular/material';
@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ]
})


export class MaterialModule { }
