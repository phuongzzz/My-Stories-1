import { ToastOptions } from 'ng2-toastr';

export class CustomToastr extends ToastOptions {
  positionClass = 'toast-bottom-left';
  animate = 'fadeLeft';
}
