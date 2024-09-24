import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { cva } from 'class-variance-authority';
import { TailwindMergeService } from '@/app/services/tailwind-merge.service';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline' | 'ghost' | 'danger';

const buttonVariants = cva(
  'w-fit disabled:cursor-not-allowed rounded-lg font-semibold focus:outline-none flex items-center gap-2 justify-center shadow-sm whitespace-nowrap disabled:cursor-not-allowed disabled:bg-primary/40 h-full',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-white hover:bg-primary/90',
        danger: 'bg-red-700 text-white hover:bg-red-800',
        outline:
          'border-2 text-secondary border-secondary bg-transparent hover:bg-secondary/10',
        ghost:
          'transition-colors duration-300 text-secondary bg-transparent hover:underline underline-offset-4 shadow-none',
      },
      size: {
        sm: 'px-3 py-1.5 text-[0.8rem]',
        md: 'px-6 py-1.5 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  constructor(private classMerge: TailwindMergeService) {}

  @Input() class!: string;
  @Input() size: Size = 'md';
  @Input() disabled: boolean = false;
  @Input() variant: Variant = 'solid';

  get buttonClass(): string {
    return this.classMerge.mergeClasses(
      buttonVariants({
        size: this.size,
        class: this.class,
        variant: this.variant,
      })
    );
  }
}
