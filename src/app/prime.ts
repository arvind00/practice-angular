import { MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

export const PRIME_MODULES = [
    ToastModule,
    RippleModule
]

export const PRIME_PROVIDERS = [
    MessageService
]