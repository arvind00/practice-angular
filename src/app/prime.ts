import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

export const PRIME_MODULES = [
    ToastModule,
    RippleModule,
    ConfirmDialogModule
]

export const PRIME_PROVIDERS = [
    MessageService,
    ConfirmationService
]